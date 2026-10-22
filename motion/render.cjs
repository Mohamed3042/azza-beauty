#!/usr/bin/env node
// Frame-accurate renderer for the motion pieces in this folder.
//
// Each piece is a plain HTML page that sets `window.DURATION` (seconds) and
// animates with CSS animations / Web Animations. The renderer pauses every
// animation and seeks it to each frame's time, so output never depends on
// how fast the machine is. Pages may also define `window.seek(t)` for
// JS-driven effects (called after the CSS seek on every frame).
//
// Usage:
//   node render.cjs <page.html> --out reel.mp4 [--fps 30] [--w 1080 --h 1920]
//   node render.cjs <page.html> --stills 0.5,3,6.2 --stills-dir frames/   (PNG stills + contact sheet)
//   Any extra query string can be passed with --query "format=square"

const path = require("path");
const fs = require("fs");
const { spawn, execFileSync } = require("child_process");

function loadPlaywright() {
  try { return require("playwright"); } catch {}
  for (const p of ["/opt/node22/lib/node_modules/playwright", "/usr/local/lib/node_modules/playwright", "/usr/lib/node_modules/playwright"]) {
    try { return require(p); } catch {}
  }
  throw new Error("playwright not found: run `npm install` in motion/ first");
}

function parseArgs(argv) {
  const a = { fps: 30, w: 1080, h: 1920, query: "" };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k.startsWith("--")) a[k.slice(2)] = argv[++i];
    else rest.push(k);
  }
  a.page = rest[0];
  a.fps = Number(a.fps); a.w = Number(a.w); a.h = Number(a.h);
  return a;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.page || (!args.out && !args.stills)) {
    console.error("usage: node render.cjs <page.html> (--out file.mp4 | --stills t1,t2 --stills-dir dir) [--fps 30] [--w 1080 --h 1920] [--query k=v]");
    process.exit(2);
  }
  const { chromium } = loadPlaywright();
  const url = "file://" + path.resolve(args.page) + (args.query ? "?" + args.query : "");
  const browser = await chromium.launch({ args: ["--force-color-profile=srgb", "--disable-lcd-text", "--font-render-hinting=none"] });
  const page = await browser.newPage({ viewport: { width: args.w, height: args.h }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  page.on("requestfailed", r => errors.push("request failed: " + r.url()));

  await page.goto(url, { waitUntil: "load" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(img => img.complete ? (img.decode ? img.decode().catch(() => {}) : 0) : new Promise(r => { img.onload = img.onerror = r; })));
    if (window.READY && typeof window.READY.then === "function") await window.READY;
  });
  const duration = await page.evaluate(() => Number(window.DURATION));
  if (!(duration > 0)) throw new Error("page must set window.DURATION (seconds)");

  // Pause and seek every animation (re-queried each frame so late-created ones are caught too).
  const seek = t => page.evaluate(t => {
    for (const an of document.getAnimations()) { an.pause(); an.currentTime = t * 1000; }
    if (typeof window.seek === "function") window.seek(t);
  }, t);

  if (args.stills) {
    const dir = args["stills-dir"] || "stills";
    fs.mkdirSync(dir, { recursive: true });
    const times = String(args.stills).split(",").map(Number);
    const files = [];
    for (let i = 0; i < times.length; i++) {
      await seek(times[i]);
      const f = path.join(dir, `still-${String(i).padStart(2, "0")}-${times[i].toFixed(2)}s.png`);
      await page.screenshot({ path: f, type: "png" });
      files.push(f);
    }
    // contact sheet: thumbnails in a grid, labelled by time
    const cols = Math.min(6, files.length), tw = 360, th = Math.round(tw * args.h / args.w);
    const inputs = files.flatMap(f => ["-i", f]);
    const scaled = files.map((_, i) => `[${i}:v]scale=${tw}:${th},drawbox=x=0:y=0:w=110:h=36:color=black@0.6:t=fill,drawtext=text='${times[i].toFixed(2)}s':x=8:y=6:fontsize=24:fontcolor=white[v${i}]`).join(";");
    const rows = Math.ceil(files.length / cols);
    const layout = files.map((_, i) => `${(i % cols) * tw}_${Math.floor(i / cols) * th}`).join("|");
    const filter = `${scaled};${files.map((_, i) => `[v${i}]`).join("")}xstack=inputs=${files.length}:layout=${layout}:fill=black[out]`;
    if (files.length > 1) {
      execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...inputs, "-filter_complex", filter, "-map", "[out]", "-frames:v", "1", path.join(dir, "contact-sheet.jpg")]);
    }
    console.log(`stills: ${files.length} → ${dir} (duration ${duration}s, ${cols}x${rows} sheet)`);
  }

  if (args.out) {
    const total = Math.round(duration * args.fps);
    const ff = spawn("ffmpeg", ["-y", "-loglevel", "error",
      "-f", "image2pipe", "-framerate", String(args.fps), "-i", "-",
      "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p",
      "-profile:v", "high", "-level", "4.2", "-r", String(args.fps), "-movflags", "+faststart",
      "-color_primaries", "bt709", "-color_trc", "bt709", "-colorspace", "bt709",
      args.out], { stdio: ["pipe", "inherit", "inherit"] });
    const done = new Promise((res, rej) => ff.on("close", c => c === 0 ? res() : rej(new Error("ffmpeg exited " + c))));
    const t0 = Date.now();
    for (let f = 0; f < total; f++) {
      await seek(f / args.fps);
      const buf = await page.screenshot({ type: "jpeg", quality: 96 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
      if (f % args.fps === 0) process.stdout.write(`\rframe ${f}/${total}  ${((Date.now() - t0) / 1000).toFixed(0)}s`);
    }
    ff.stdin.end();
    await done;
    console.log(`\nvideo: ${args.out} (${total} frames @ ${args.fps}fps, ${duration}s)`);
  }

  await browser.close();
  if (errors.length) { console.error("PAGE ERRORS:\n" + [...new Set(errors)].join("\n")); process.exitCode = 1; }
}

main().catch(e => { console.error(e); process.exit(1); });
