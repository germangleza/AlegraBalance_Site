/** Genera la imagen Open Graph (1200×630) con Chromium a partir de una plantilla HTML. */
const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "assets", "og-default.png");
const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Manrope:wght@700;800&display=swap">
<style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;font-family:Manrope,sans-serif;
  background:linear-gradient(135deg,#071E55 0%,#0c2f6e 55%,#137E88 140%);
  color:#fff;padding:80px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
.blob{position:absolute;width:520px;height:520px;border-radius:50%;
  background:radial-gradient(circle,rgba(19,126,136,.55),transparent 70%);top:-160px;right:-120px}
.mark{display:flex;align-items:center;gap:18px;z-index:2}
.mark svg{width:64px;height:64px}
.brand{font-weight:800;font-size:30px}
.brand span{color:#7FD3D9}
h1{font-size:62px;font-weight:800;line-height:1.08;max-width:15ch;z-index:2;letter-spacing:-.02em}
.eyebrow{font-family:Inter;font-weight:600;letter-spacing:.18em;color:#7FD3D9;font-size:20px;margin-bottom:20px;text-transform:uppercase}
.foot{font-family:Inter;font-weight:500;font-size:24px;color:#c3cef0;z-index:2;display:flex;gap:16px;align-items:center}
.dot{color:#B4771F}
.gold-line{position:absolute;bottom:0;left:0;right:0;height:8px;background:linear-gradient(90deg,#137E88,#B4771F)}
</style></head><body>
<div class="blob"></div>
<div class="mark">
  <svg viewBox="0 0 52 52" fill="none" stroke-width="3.6" stroke-linecap="round">
    <path d="M15 31c4-9 10-13 12-13s3 2 3 6-3 8-3 8" stroke="#7FD3D9"/>
    <path d="M37 23c-4 9-10 13-12 13s-3-2-3-6 3-8 3-8" stroke="#ffffff"/>
    <circle cx="26" cy="27" r="3" fill="#B4771F"/>
  </svg>
  <div class="brand">Alergia<span>Balance</span> Center</div>
</div>
<div>
  <div class="eyebrow">Alergia · Asma · Inmunología</div>
  <h1>Clínica de alergia e inmunología en CDMX</h1>
</div>
<div class="foot">Roma Norte, CDMX <span class="dot">·</span> Niños y adultos <span class="dot">·</span> Más de 20 años de experiencia</div>
<div class="gold-line"></div>
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
