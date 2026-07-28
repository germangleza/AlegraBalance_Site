/**
 * Grafo JSON-LD del sitio (portado de layout.js).
 * jsonLdBase() se inyecta en todas las páginas; breadcrumbJsonLd() cuando hay migas.
 */
import { site } from "../../site.config.js";

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

export const ORG_ID = site.baseUrl + "/#clinica";
export const DOCTOR_ID = site.baseUrl + "/#doctora";

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

export function jsonLdBase() {
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

export function breadcrumbJsonLd(trail) {
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
