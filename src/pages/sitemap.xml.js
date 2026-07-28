// Sitemap dinámico — reproduce la lógica de generación anterior (build.js).
import { conditions, tests, treatments } from "../data/detalles.js";
import { articulos } from "../data/articulos.js";

const baseUrl = "https://alergiabalance.com";

// Orden equivalente al de carga anterior (articles, blog, clinica, contacto,
// detalles, dramariadejesus, guadalajara, home, misc, padecimientos, pruebas,
// tratamientos). Se excluyen las páginas noindex (gracias, 404).
const slugs = [
  ...articulos.map((a) => a.slug),
  "/blog/",
  "/clinica-y-doctora/",
  "/contacto/",
  ...conditions.map((c) => c.slug),
  ...tests.map((t) => t.slug),
  ...treatments.map((t) => t.slug),
  "/dramariadejesus/",
  "/guadalajara/",
  "/",
  "/aviso-de-privacidad/",
  "/padecimientos/",
  "/pruebas-y-diagnostico/",
  "/tratamientos/",
];

function sitemapMeta(slug) {
  const depth = slug.replace(/^\/|\/$/g, "").split("/").filter(Boolean).length;
  if (slug === "/") return { priority: "1.0", changefreq: "weekly" };
  if (slug === "/blog/") return { priority: "0.7", changefreq: "weekly" };
  if (depth === 1) return { priority: "0.9", changefreq: "monthly" };
  if (slug === "/aviso-de-privacidad/") return { priority: "0.2", changefreq: "yearly" };
  return { priority: "0.7", changefreq: "monthly" };
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = slugs
    .map((slug) => {
      const m = sitemapMeta(slug);
      return `  <url>\n    <loc>${baseUrl}${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${m.changefreq}</changefreq>\n    <priority>${m.priority}</priority>\n  </url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
