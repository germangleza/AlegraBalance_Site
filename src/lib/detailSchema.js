// JSON-LD de las páginas de detalle (portado de detail.js).
import { site } from "../../site.config.js";

function faqNode(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
function base(d, aboutType, aboutName) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: d.title,
    inLanguage: "es-MX",
    lastReviewed: "2026-05-11",
    reviewedBy: { "@type": "Person", name: site.doctor.name },
    about: { "@type": aboutType, name: aboutName },
    mainEntityOfPage: site.baseUrl + d.slug,
  };
}
export function conditionJsonLd(d) {
  const a = [base(d, "MedicalCondition", d.conditionName || d.title)];
  if (d.faq && d.faq.length) a.push(faqNode(d.faq));
  return a;
}
export function testJsonLd(d) {
  const a = [base(d, "MedicalTest", d.title)];
  if (d.faq && d.faq.length) a.push(faqNode(d.faq));
  return a;
}
export function treatmentJsonLd(d) {
  const a = [base(d, "MedicalTherapy", d.title)];
  if (d.faq && d.faq.length) a.push(faqNode(d.faq));
  return a;
}
