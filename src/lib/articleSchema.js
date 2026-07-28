import { site } from "../../site.config.js";

export function articleJsonLd(a) {
  const arr = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.h1,
      datePublished: a.publishedIso,
      dateModified: a.updatedIso,
      inLanguage: "es-MX",
      author: { "@type": "Person", name: site.doctor.name },
      reviewedBy: { "@type": "Person", name: site.doctor.name },
      publisher: { "@type": "MedicalClinic", name: site.brand.name },
      ...(a.img ? { image: site.baseUrl + a.img } : {}),
      mainEntityOfPage: site.baseUrl + a.slug,
    },
  ];
  if (a.faq) {
    arr.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return arr;
}
