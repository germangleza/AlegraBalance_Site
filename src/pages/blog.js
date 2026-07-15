const C = require("../lib/components.js");

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Blog", href: "/blog/" },
];

const posts = [
  {
    href: "/alergias-y-calidad-de-vida/",
    tag: "Alergias y bienestar",
    date: "11 de mayo de 2026",
    dateIso: "2026-05-11",
    h: "Alergias y calidad de vida",
    excerpt:
      "Las alergias pueden afectar el sueño, la concentración, el rendimiento y las actividades cotidianas. Conoce por qué una valoración adecuada puede ayudarte a recuperar bienestar.",
  },
  {
    href: "/rinitis/",
    tag: "Alergias respiratorias",
    date: "11 de mayo de 2026",
    dateIso: "2026-05-11",
    h: "Rinitis: causas, síntomas y tratamientos efectivos para mejorar tu calidad de vida",
    excerpt:
      "La rinitis puede confundirse con un resfriado, pero sus síntomas pueden mantenerse durante semanas o repetirse a lo largo del año. Conoce sus principales causas y opciones de manejo.",
  },
];

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Blog de alergia e inmunología</span>
        <h1>Información para comprender mejor las alergias</h1>
        <p>Artículos educativos para pacientes y familias sobre síntomas, prevención, diagnóstico y opciones de atención.</p>
      </div>
      <div class="page-hero__media">${C.media("Información sobre alergias e inmunología", "ph")}</div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="grid grid-2">
      ${posts
        .map(
          (p) => `<article class="blog-card reveal">
        <a href="${p.href}" aria-label="${p.h}" class="blog-card__media">${C.media(p.h, "ph")}</a>
        <div class="blog-card__body">
          <span class="tag">${p.tag}</span>
          <h3><a href="${p.href}" style="color:inherit">${p.h}</a></h3>
          <time datetime="${p.dateIso}">${p.date} · Dra. María de Jesús Vázquez García</time>
          <p style="margin-top:.6rem">${p.excerpt}</p>
          ${C.ghostLink(p.href, "Leer artículo")}
        </div>
      </article>`
        )
        .join("")}
    </div>
    <div style="max-width:820px;margin:2.5rem auto 0">${C.reviewer()}</div>
  </div>
</section>
`;

module.exports = {
  slug: "/blog/",
  active: "/blog/",
  title: "Blog sobre alergias e inmunología | Alergia Balance",
  description:
    "Información sobre rinitis, alergias, síntomas, diagnóstico, tratamientos y calidad de vida, revisada por una especialista.",
  breadcrumbs: bc,
  body,
};
