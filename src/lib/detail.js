/**
 * Plantillas de páginas de detalle (Fase 2).
 * Renderizan las entidades Padecimiento, Prueba y Tratamiento (spec §25)
 * reutilizando los componentes globales, sin rediseñar nada.
 */
const C = require("./components.js");
const { site } = C;

function list(items) {
  return `<ul class="check-list">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}

function relatedCards(items) {
  return `<div class="grid grid-3">${items
    .map(
      (r) => `<a class="mini-card reveal" href="${r.href}" style="display:block">
        <h3>${C.icon(r.icon || "arrow")}${r.label}</h3>
        ${r.text ? `<p>${r.text}</p>` : ""}
      </a>`
    )
    .join("")}</div>`;
}

/* ------------------------- Padecimiento ------------------------------ */
function renderCondition(d) {
  const bc = [
    { label: "Inicio", href: "/" },
    { label: "Padecimientos", href: "/padecimientos/" },
    { label: d.crumb || d.title, href: d.slug },
  ];

  const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">${d.eyebrow || "Padecimiento que atendemos"}</span>
        <h1>${d.title}</h1>
        <p>${d.summary}</p>
        <div class="btn-row">
          ${C.scheduleBtn({ loc: "detalle-" + d.id })}
          ${d.article ? C.ghostLink(d.article, "Leer artículo relacionado") : ""}
        </div>
      </div>
      <div class="page-hero__media">${C.media(d.image || d.title, null, d.img)}</div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="answer-block reveal" style="max-width:820px">${d.answer || d.summary}</div>
  </div>
</section>

<section class="section bg-papel" style="padding-top:0">
  <div class="container">
    <div class="feature" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Síntomas frecuentes</span>
        <h2>¿Cómo se manifiesta?</h2>
        <p class="text-muted">${d.symptomsIntro || "Los síntomas pueden variar entre personas. Estos son algunos de los más frecuentes:"}</p>
        ${list(d.symptoms)}
      </div>
      <div class="reveal">
        <span class="eyebrow">¿Cuándo consultar?</span>
        <h2>Señales para solicitar valoración</h2>
        ${list(d.whenToConsult)}
      </div>
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Evaluación</span><h2>Cómo se estudia</h2><p>${d.diagnosis}</p></div>
    ${d.diagnosisNote ? `<div style="max-width:820px;margin-top:1.4rem">${C.emergencyNotice(d.diagnosisNote)}</div>` : ""}
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Atención integral</span><h2>Pruebas y tratamientos relacionados</h2><p>Relacionamos cada padecimiento con los estudios y opciones de manejo que pueden ser útiles, siempre de acuerdo con la valoración médica.</p></div>
    <div style="margin-top:2rem">${relatedCards(d.related)}</div>
  </div>
</section>

${
  d.faq && d.faq.length
    ? `<section class="section bg-gasa">
  <div class="container">
    <div class="section-head center"><h2>Preguntas frecuentes</h2></div>
    <div style="margin-top:2rem">${C.faq(d.faq)}</div>
  </div>
</section>`
    : ""
}

<section class="section bg-papel">
  <div class="container">
    <div style="max-width:820px;margin-inline:auto">${C.reviewer()}</div>
  </div>
</section>

${C.ctaBand(
  d.ctaH || "Cada paciente requiere una evaluación individual",
  d.ctaText || "Agenda una consulta para revisar tus síntomas, antecedentes y opciones de atención.",
  { loc: "detalle-" + d.id + "-final" }
)}
`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: d.title,
      inLanguage: "es-MX",
      lastReviewed: "2026-05-11",
      reviewedBy: { "@type": "Person", name: site.doctor.name },
      about: {
        "@type": "MedicalCondition",
        name: d.conditionName || d.title,
      },
      mainEntityOfPage: site.baseUrl + d.slug,
    },
  ];
  if (d.faq && d.faq.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return {
    slug: d.slug,
    active: "/padecimientos/",
    title: d.seoTitle,
    description: d.seoDescription,
    breadcrumbs: bc,
    jsonLd,
    body,
  };
}

/* ---------------------------- Prueba -------------------------------- */
function renderTest(d) {
  const bc = [
    { label: "Inicio", href: "/" },
    { label: "Pruebas y diagnóstico", href: "/pruebas-y-diagnostico/" },
    { label: d.crumb || d.title, href: d.slug },
  ];

  function block(eyebrow, h2, html) {
    return `<div class="reveal"><span class="eyebrow">${eyebrow}</span><h2>${h2}</h2>${html}</div>`;
  }

  const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Evaluación especializada</span>
        <h1>${d.title}</h1>
        <p>${d.summary}</p>
        ${C.scheduleBtn({ loc: "detalle-" + d.id })}
      </div>
      <div class="page-hero__media">${C.media(d.image || d.title, null, d.img)}</div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="answer-block reveal" style="max-width:820px">${d.answer || d.summary}</div>
  </div>
</section>

<section class="section bg-papel" style="padding-top:0">
  <div class="container">
    <div class="feature" style="align-items:start">
      ${block("¿Qué es?", "En qué consiste", `<p class="text-muted">${d.whatIsIt}</p>`)}
      ${block("¿Para qué sirve?", "Qué puede aportar", `<p class="text-muted">${d.whatIsItFor}</p>`)}
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="feature" style="align-items:start">
      ${block("¿Cómo se realiza?", "El procedimiento", `<p class="text-muted">${d.howItIsDone}</p>`)}
      <div class="reveal">
        <span class="eyebrow">Preparación</span>
        <h2>Antes de la prueba</h2>
        ${list(d.preparation)}
        ${d.ageNotes ? `<p class="text-muted" style="margin-top:1rem">${d.ageNotes}</p>` : ""}
      </div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Atención integral</span><h2>Padecimientos relacionados</h2><p>Esta prueba se indica de acuerdo con la sospecha clínica. Puede formar parte del estudio de:</p></div>
    <div style="margin-top:2rem">${relatedCards(d.related)}</div>
  </div>
</section>

${
  d.faq && d.faq.length
    ? `<section class="section bg-gasa"><div class="container"><div class="section-head center"><h2>Preguntas frecuentes</h2></div><div style="margin-top:2rem">${C.faq(d.faq)}</div></div></section>`
    : ""
}

<section class="section bg-papel"><div class="container"><div style="max-width:820px;margin-inline:auto">${C.reviewer()}</div></div></section>

${C.ctaBand(
  "La prueba correcta depende de una valoración adecuada",
  "Agenda una consulta para determinar qué estudios pueden ser útiles en tu caso.",
  { loc: "detalle-" + d.id + "-final" }
)}
`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: d.title,
      inLanguage: "es-MX",
      lastReviewed: "2026-05-11",
      reviewedBy: { "@type": "Person", name: site.doctor.name },
      about: { "@type": "MedicalTest", name: d.title },
      mainEntityOfPage: site.baseUrl + d.slug,
    },
  ];
  if (d.faq && d.faq.length)
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });

  return {
    slug: d.slug,
    active: "/pruebas-y-diagnostico/",
    title: d.seoTitle,
    description: d.seoDescription,
    breadcrumbs: bc,
    jsonLd,
    body,
  };
}

/* -------------------------- Tratamiento ----------------------------- */
function renderTreatment(d) {
  const bc = [
    { label: "Inicio", href: "/" },
    { label: "Tratamientos", href: "/tratamientos/" },
    { label: d.crumb || d.title, href: d.slug },
  ];

  const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Manejo individualizado</span>
        <h1>${d.title}</h1>
        <p>${d.summary}</p>
        ${C.scheduleBtn({ loc: "detalle-" + d.id })}
      </div>
      <div class="page-hero__media">${C.media(d.image || d.title, null, d.img)}</div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="answer-block reveal" style="max-width:820px">${d.answer || d.summary}</div>
  </div>
</section>

<section class="section bg-papel" style="padding-top:0">
  <div class="container">
    <div class="feature" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">¿Cómo funciona?</span>
        <h2>El tratamiento paso a paso</h2>
        <p class="text-muted">${d.howItWorks}</p>
      </div>
      <div class="reveal">
        <span class="eyebrow">¿Quién puede ser candidato?</span>
        <h2>Indicaciones</h2>
        ${list(d.candidates)}
      </div>
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="feature" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Objetivos posibles</span>
        <h2>Qué se busca lograr</h2>
        ${list(d.goals)}
        ${d.variability ? `<p class="text-muted" style="margin-top:1rem">${d.variability}</p>` : ""}
      </div>
      <div class="reveal">
        <span class="eyebrow">Seguimiento</span>
        <h2>Acompañamiento continuo</h2>
        <p class="text-muted">${d.followUp}</p>
      </div>
    </div>
    ${d.importantNote ? `<div style="max-width:820px;margin-top:1.6rem">${C.emergencyNotice(d.importantNote)}</div>` : ""}
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Atención integral</span><h2>Padecimientos relacionados</h2><p>Este tratamiento se considera para pacientes seleccionados con:</p></div>
    <div style="margin-top:2rem">${relatedCards(d.related)}</div>
  </div>
</section>

${
  d.faq && d.faq.length
    ? `<section class="section bg-gasa"><div class="container"><div class="section-head center"><h2>Preguntas frecuentes</h2></div><div style="margin-top:2rem">${C.faq(d.faq)}</div></div></section>`
    : ""
}

<section class="section bg-papel"><div class="container"><div style="max-width:820px;margin-inline:auto">${C.reviewer()}</div></div></section>

${C.ctaBand(
  d.ctaH || "Diseñemos un plan de tratamiento para tu caso",
  d.ctaText || "Agenda una valoración para saber si este tratamiento es adecuado para ti o para tu hijo.",
  { loc: "detalle-" + d.id + "-final" }
)}
`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: d.title,
      inLanguage: "es-MX",
      lastReviewed: "2026-05-11",
      reviewedBy: { "@type": "Person", name: site.doctor.name },
      about: { "@type": "MedicalTherapy", name: d.title },
      mainEntityOfPage: site.baseUrl + d.slug,
    },
  ];
  if (d.faq && d.faq.length)
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });

  return {
    slug: d.slug,
    active: "/tratamientos/",
    title: d.seoTitle,
    description: d.seoDescription,
    breadcrumbs: bc,
    jsonLd,
    body,
  };
}

module.exports = { renderCondition, renderTest, renderTreatment };
