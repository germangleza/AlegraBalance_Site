/** Genera la imagen Open Graph (1200×630) con Chromium a partir de una plantilla HTML. */
const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "assets", "og-default.png");
const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500&family=Karla:wght@500;700&family=IBM+Plex+Mono:wght@500&display=swap">
<style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;font-family:Karla,sans-serif;
  background:#071E55;
  color:#fff;padding:80px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
.mark{display:flex;align-items:center;gap:14px;z-index:2}
.mark svg{width:40px;height:40px}
.brand{font-weight:700;font-size:26px;letter-spacing:-.01em}
.brand span{color:#C57312}
h1{font-family:Newsreader;font-optical-sizing:auto;font-weight:500;font-size:60px;line-height:1.05;max-width:16ch;z-index:2;letter-spacing:-.01em}
.eyebrow{font-family:"IBM Plex Mono";font-weight:500;letter-spacing:.1em;color:#C57312;font-size:16px;margin-bottom:22px;text-transform:uppercase}
.foot{font-family:"IBM Plex Mono";font-weight:500;font-size:17px;color:#b7c1e0;z-index:2;display:flex;gap:14px;align-items:center;letter-spacing:.01em}
.dot{color:#C57312}
.line{position:absolute;bottom:0;left:0;right:0;height:6px;background:#C57312}
</style></head><body>
<div class="mark">
  <svg viewBox="0 0 26 26" fill="none" stroke-width="1.8" stroke-linecap="round">
    <path d="M6 18c2-6 6-10 8-10s2 1.5 2 4-2 6-2 6" stroke="#ffffff"/>
    <path d="M20 8c-2 6-6 10-8 10s-2-1.5-2-4 2-6 2-6" stroke="#ffffff" opacity="0.45"/>
    <circle cx="13" cy="13" r="1.6" fill="#C57312"/>
  </svg>
  <div class="brand">Alergia<span>Balance</span> Center</div>
</div>
<div>
  <div class="eyebrow">Alergia · Asma · Inmunología</div>
  <h1>Clínica de alergia e inmunología en CDMX</h1>
</div>
<div class="foot">Roma Norte, CDMX <span class="dot">·</span> Niños y adultos <span class="dot">·</span> Más de 20 años de experiencia</div>
<div class="line"></div>
</body></html>`;

(async () => {
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: OUT });
  await browser.close();
  console.log("OG generada: " + OUT);
})();
