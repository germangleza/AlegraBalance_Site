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

const ORG_ID = site.baseUrl + "/#clinica";
const DOCTOR_ID = site.baseUrl + "/#doctora";

function offerCatalog() {
  const s = site.services;
  const offer = (item) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": item.type || "MedicalProcedure",
      name: item.name,
      ...(item.url ? { url: site.baseUrl + item.url } : {}),
    },
  });
  return {
    "@type": "OfferCatalog",
    name: "Servicios de alergia e inmunología",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Pruebas y diagnóstico",
        itemListElement: s.pruebas.map(offer),
      },
      {
        "@type": "OfferCatalog",
        name: "Tratamientos",
        itemListElement: s.tratamientos.map(offer),
      },
    ],
  };
}

function jsonLdBase() {
  const locs = site.contact.locations;
  const cdmx = site.contact.address;

  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": DOCTOR_ID,
    name: site.doctor.name,
    jobTitle: site.doctor.shortDescriptor,
    description: `${site.doctor.shortDescriptor} con ${site.doctor.experience}.`,
    medicalSpecialty: ["Allergology", "Immunology"],
    url: site.baseUrl + "/clinica-y-doctora/",
    image: site.baseUrl + "/assets/images/doctora/dra-hero.jpg",
    worksFor: { "@id": ORG_ID },
    ...(site.doctor.sameAs && site.doctor.sameAs.length
      ? { sameAs: site.doctor.sameAs }
      : {}),
  };

  const org = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.brand.name,
    alternateName: site.brand.shortName,
    description: site.brand.description,
    slogan: site.brand.tagline,
    url: site.baseUrl + "/",
    logo: site.baseUrl + "/assets/logo.png",
    image: site.baseUrl + "/assets/og-default.png",
    telephone: "+" + site.contact.phoneDigits,
    email: site.contact.email,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia",
    address: postalAddress(cdmx),
    hasMap: cdmx.maps,
    areaServed: locs.map((l) => ({ "@type": "City", name: l.locality })),
    availableLanguage: ["es", "en"],
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
    founder: { "@id": DOCTOR_ID },
    employee: { "@id": DOCTOR_ID },
    hasOfferCatalog: offerCatalog(),
    knowsAbout: [
      "Alergia",
      "Asma",
      "Inmunología clínica",
      "Rinitis alérgica",
      "Dermatitis atópica",
      "Urticaria",
      "Alergias alimentarias",
      "Inmunoterapia",
    ],
    sameAs: site.seo.sameAs,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": site.baseUrl + "/#website",
    name: site.brand.name,
    url: site.baseUrl + "/",
    inLanguage: "es-MX",
    publisher: { "@id": ORG_ID },
  };
  return [org, physician, website];
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

  // Modo "bare": página autocontenida (p. ej. tarjeta digital), sin el
  // header, footer, barra móvil ni el JS global del sitio.
  const bare = page.bare === true;
  const chromeTop = bare
    ? ""
    : `<a href="#main" class="skip-link">Saltar al contenido</a>
<div class="scroll-sentinel" aria-hidden="true"></div>
${C.header(active)}`;
  const chromeBottom = bare ? "" : `${C.footer()}
${C.mobileCta()}`;
  const globalScript = bare ? "" : `<script src="/js/main.js" defer></script>`;

  return `<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'}
<link rel="canonical" href="${canonical}">
<meta name="author" content="${site.doctor.name}">
<meta name="publisher" content="${site.brand.name}">
<meta name="geo.region" content="MX-CMX">
<meta name="geo.placename" content="Roma Norte, Ciudad de México">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${site.brand.name}">
<meta property="og:locale" content="es_MX">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:alt" content="${site.brand.name} — ${site.brand.tagline}">
${page.ogImage ? "" : `<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
`}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#071E55">
<script>document.documentElement.classList.add('js','intro-play');</script>
<link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Karla:wght@400;500;700&family=IBM+Plex+Mono:wght@500&display=swap">
<link rel="stylesheet" href="/css/styles.css">
${jsonLdScript}
</head>
<body${bare ? ' class="bare"' : ""}>
${chromeTop}
<main id="main">
${bare ? "" : bcNav}
${body}
</main>
${chromeBottom}
${globalScript}
</body>
</html>`;
}

module.exports = { layout };
