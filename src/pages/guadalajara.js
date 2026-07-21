const C = require("../lib/components.js");
const { site } = C;

const gdl =
  site.contact.locations.find((l) => l.id === "gdl") || site.contact.locations[1];

/* ------------------------------------------------------------------ *
 * PRÓXIMA VISITA — editar estas fechas antes de cada viaje a GDL.
 * `label` es el texto visible; `startIso`/`endIso` alimentan el Event
 * en JSON-LD (usar formato AAAA-MM-DD).
 * ------------------------------------------------------------------ */
const visita = {
  label: "6, 7 y 8 de agosto de 2026",
  startIso: "2026-08-06",
  endIso: "2026-08-08",
};

/* WhatsApp con mensaje específico para la visita a Guadalajara. */
const waGdl = `https://wa.me/${site.contact.phoneDigits}?text=${encodeURIComponent(
  "Hola, me gustaría agendar una cita en la próxima visita de la Dra. María de Jesús Vázquez a Guadalajara. ¿Me comparten la disponibilidad?"
)}`;
const agendarGdl = (lg) =>
  `<a href="${waGdl}" class="btn btn--primary${lg ? " btn--lg" : ""}" target="_blank" rel="noopener" data-track="click_schedule" data-track-loc="guadalajara">${C.icon(
    "calendar"
  )}<span>Agendar por WhatsApp</span></a>`;

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Guadalajara", href: "/guadalajara/" },
];

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid page-hero__grid--single">
      <div>
        <span class="eyebrow">Alergia e inmunología en Guadalajara</span>
        <h1>La Dra. María de Jesús Vázquez García ahora atiende en Guadalajara</h1>
        <p>Atención especializada en alergia e inmunología para niños y adultos, en fechas programadas y <strong>únicamente con cita previa</strong>.</p>
        <div class="btn-row">${agendarGdl(true)}</div>
        <p class="text-muted" style="margin-top:1rem;font-size:.9rem">Cupo limitado por visita · la disponibilidad se confirma por WhatsApp.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="visit-banner reveal">
      <div>
        <span class="visit-banner__label">Próxima visita</span>
        <p class="visit-banner__date">${visita.label}</p>
        <p class="visit-banner__note">Reserva tu lugar con anticipación; los espacios son limitados.</p>
      </div>
      <div class="visit-banner__action">${agendarGdl(false)}</div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="feature">
      <div class="reveal">
        <span class="eyebrow">Dónde te atiende</span>
        <h2>Consultorio en Guadalajara</h2>
        <p>La doctora atiende en la colonia Monraz durante sus visitas programadas. Cada cita se agenda previamente por WhatsApp para confirmar día y horario disponibles.</p>
        <ul class="info-list" style="margin:1.4rem 0">
          <li>${C.icon("pin")}<div><strong>${gdl.street}</strong><br>${gdl.neighborhood}<br>${gdl.postal}</div></li>
          <li>${C.icon("calendar")}<div><strong>Solo con cita previa.</strong> La doctora atiende en fechas programadas; confirma disponibilidad por WhatsApp.</div></li>
        </ul>
        <a href="${gdl.maps}" target="_blank" rel="noopener" class="btn btn--secondary" data-track="click_directions" data-track-loc="guadalajara">${C.icon("route")}<span>Cómo llegar</span></a>
      </div>
      <div class="feature__media reveal">${C.media("Retrato de la Dra. María de Jesús Vázquez García", null, "/assets/images/doctora/dra-maria-vazquez.jpg")}</div>
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="section-head center"><span class="eyebrow">Atención para niños y adultos</span><h2>¿Qué atiende la doctora?</h2></div>
    <ul class="check-list check-list--2col reveal" style="max-width:760px;margin:2rem auto 0">
      ${site.services.padecimientos
        .map((p) => `<li><a href="${p.url}" style="color:inherit">${p.name}</a></li>`)
        .join("")}
    </ul>
    <div class="btn-row reveal" style="justify-content:center;margin-top:2rem">${agendarGdl(false)}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-band reveal">
      <h2>¿Quieres agendar en la próxima visita a Guadalajara?</h2>
      <p>Escríbenos por WhatsApp para confirmar disponibilidad en las fechas programadas y reservar tu cita.</p>
      <div class="btn-row">${agendarGdl(true)}</div>
    </div>
  </div>
</section>
`;

module.exports = {
  slug: "/guadalajara/",
  active: "",
  title: "Alergóloga en Guadalajara con cita previa | Alergia Balance",
  description:
    "La Dra. María de Jesús Vázquez García atiende alergia e inmunología en Guadalajara (colonia Monraz), en fechas programadas y únicamente con cita previa. Agenda por WhatsApp.",
  breadcrumbs: bc,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Consulta de alergia e inmunología en Guadalajara — Dra. María de Jesús Vázquez García",
      description:
        "Visita programada de la Dra. María de Jesús Vázquez García a Guadalajara para atención de alergia e inmunología, únicamente con cita previa.",
      startDate: visita.startIso,
      endDate: visita.endIso,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Consultorio Monraz, Guadalajara",
        address: {
          "@type": "PostalAddress",
          streetAddress: gdl.street,
          addressLocality: "Guadalajara",
          addressRegion: "Jalisco",
          addressCountry: "MX",
        },
      },
      performer: { "@type": "Physician", name: site.doctor.name },
      organizer: {
        "@type": "MedicalClinic",
        name: site.brand.name,
        url: site.baseUrl + "/",
      },
    },
  ],
  body,
};
