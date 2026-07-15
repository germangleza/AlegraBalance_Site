/**
 * Envoltura HTML global: <head> con SEO, Open Graph, JSON-LD, fuentes,
 * header, footer y barra inferior móvil.
 */
const { site } = require("../../site.config.js");
const C = require("./components.js");

function postalAddress(loc) {
  const pa = {
    "@type": "PostalAddress",
    streetAddress: loc.street,
    addressLocality: loc.locality,
    addressRegion: loc.region,
    addressCountry: "MX",
  };
  if (loc.postalCode) pa.postalCode = loc.postalCode;
  return pa;
}

function jsonLdBase() {
  const locs = site.contact.locations;
  const org = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.brand.name,
    url: site.baseUrl + "/",
    telephone: "+" + site.contact.phoneDigits,
    email: site.contact.email,
    image: site.baseUrl + "/assets/og-default.png",
    // La sede principal (CDMX) va como address; Guadalajara es atención por
    // visitas, se declara como areaServed para no simular una sede permanente.
    address: postalAddress(site.contact.address),
    areaServed: locs.map((l) => ({
      "@type": "City",
      name: l.locality,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "14:00",
      },
    ],
    medicalSpecialty: ["Allergology", "Immunology", "Pediatric"],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand.name,
    url: site.baseUrl + "/",
    inLanguage: "es-MX",
  };
  return [org, website];
}

function breadcrumbJsonLd(trail) {
  if (!trail || trail.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: site.baseUrl + (t.href || ""),
    })),
  };
}

function layout(page) {
  const {
    slug = "/",
    title,
    description,
    body,
    active = slug,
    breadcrumbs = null,
    jsonLd = [],
    noindex = false,
    ogType = "website",
  } = page;

  const canonical = site.baseUrl + slug;
  const ogImage = page.ogImage || site.baseUrl + "/assets/og-default.png";

  const schemas = [...jsonLdBase(), ...jsonLd];
  const bc = breadcrumbJsonLd(breadcrumbs);
  if (bc) schemas.push(bc);
  const jsonLdScript = schemas
    .map(
      (s) =>
        `<script type="application/ld+json">${JSON.stringify(s)}</script>`
    )
    .join("\n");

  const bcNav = breadcrumbs ? C.breadcrumbs(breadcrumbs) : "";

  return `<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow">'}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${site.brand.name}">
<meta property="og:locale" content="es_MX">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#071E55">
<script>document.documentElement.classList.add('js','intro-play');</script>
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Karla:wght@400;500;700&family=IBM+Plex+Mono:wght@500&display=swap">
<link rel="stylesheet" href="/css/styles.css">
${jsonLdScript}
</head>
<body>
<a href="#main" class="skip-link">Saltar al contenido</a>
<div class="scroll-sentinel" aria-hidden="true"></div>
${C.header(active)}
<main id="main">
${bcNav}
${body}
</main>
${C.footer()}
${C.mobileCta()}
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = { layout };
