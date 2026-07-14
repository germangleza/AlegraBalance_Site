#!/usr/bin/env node
/**
 * Generador estático de Alergia Balance Center.
 * Compila las páginas (src/pages) con la envoltura global y copia los
 * activos de public/ a dist/. Sin dependencias externas.
 */
const fs = require("fs");
const path = require("path");
const { layout } = require("./src/lib/layout.js");
const { site } = require("./site.config.js");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");
const PAGES_DIR = path.join(ROOT, "src", "pages");
const PUBLIC = path.join(ROOT, "public");

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
function writePage(slug, html) {
  const rel = slug === "/" ? "index.html" : path.join(slug.replace(/^\/|\/$/g, ""), "index.html");
  const out = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return rel;
}

console.log("→ Limpiando dist/");
rmrf(DIST);
fs.mkdirSync(DIST, { recursive: true });

console.log("→ Copiando activos de public/");
copyDir(PUBLIC, DIST);

// Cargar todas las páginas
const pageFiles = fs
  .readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith(".js"))
  .sort();

const built = [];
for (const file of pageFiles) {
  const mod = require(path.join(PAGES_DIR, file));
  const pages = Array.isArray(mod) ? mod : [mod];
  for (const page of pages) {
    const html = layout(page);
    const rel = writePage(page.slug, html);
    built.push({ slug: page.slug, noindex: page.noindex, file: rel });
    console.log(`   ✓ ${page.slug}  →  ${rel}`);
  }
}

// sitemap.xml
const urls = built
  .filter((b) => !b.noindex && b.slug !== "/404/")
  .map(
    (b) =>
      `  <url><loc>${site.baseUrl}${b.slug}</loc><changefreq>monthly</changefreq><priority>${b.slug === "/" ? "1.0" : "0.8"}</priority></url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log("   ✓ sitemap.xml");

// robots.txt
fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`
);
console.log("   ✓ robots.txt");

// 404 en la raíz para hosts que lo esperan
if (fs.existsSync(path.join(DIST, "404", "index.html"))) {
  fs.copyFileSync(
    path.join(DIST, "404", "index.html"),
    path.join(DIST, "404.html")
  );
  console.log("   ✓ 404.html");
}

// Redirecciones (Netlify _redirects) — spec §19.2
fs.writeFileSync(
  path.join(DIST, "_redirects"),
  [
    "/nosotros/            /clinica-y-doctora/   301",
    "/servicios/           /padecimientos/       301",
    "/author/*             /blog/                301",
    "/category/uncategorized/  /blog/            301",
    "",
  ].join("\n")
);
console.log("   ✓ _redirects");

console.log(`\n✅ Sitio generado: ${built.length} páginas en dist/`);
