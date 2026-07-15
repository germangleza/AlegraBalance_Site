const C = require("../lib/components.js");
const { site } = C;

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Clínica y doctora", href: "/clinica-y-doctora/" },
];

const principles = [
  { icon: "shield", h: "Atención integral", p: "Consideramos los síntomas, antecedentes, entorno, tratamientos previos y necesidades de cada paciente." },
  { icon: "stethoscope", h: "Medicina personalizada", p: "Las pruebas y tratamientos se seleccionan de acuerdo con la valoración clínica, no mediante esquemas iguales para todos." },
  { icon: "heart", h: "Acompañamiento cercano", p: "Explicamos las opciones de atención y damos seguimiento a la evolución del paciente." },
  { icon: "star", h: "Calidad de vida", p: "El objetivo es ayudar a reducir el impacto de la enfermedad en las actividades cotidianas." },
];

const credentials = [
  "Egresada de la Facultad de Medicina de la Universidad Autónoma de Guadalajara.",
  "Especialidad en Pediatría.",
  "Subespecialidad en Alergia e Inmunología Clínica, avalada por la UNAM y el Centro Médico Nacional 20 de Noviembre del ISSSTE.",
  "Maestría en Dirección y Gestión de Instituciones de Salud, avalada por la Universidad Anáhuac México Sur.",
  "Certificada por el Consejo Nacional de Inmunología Clínica y Alergia (CONICA).",
  "Académica en la Universidad Nacional Autónoma de México.",
  "Miembro de la Academia Mexicana de Pediatría.",
  "Asesora médico-científica para compañías farmacéuticas transnacionales en terapias de alta especialidad.",
  "Miembro de asociaciones y colegios relacionados con Alergia e Inmunología.",
];

const areas = [
  "Alergias respiratorias", "Rinitis y rinosinusitis", "Asma", "Dermatitis y urticaria",
  "Alergias alimentarias", "Alergias a medicamentos", "Alergias oculares", "Pruebas diagnósticas",
  "Inmunoterapia", "Terapias biotecnológicas", "Segunda opinión médica", "Alergología pediátrica",
];

const modelSteps = [
  { h: "Escuchar", p: "Comprender qué síntomas presenta el paciente, desde cuándo y cómo afectan su vida diaria." },
  { h: "Evaluar", p: "Revisar antecedentes, exploración clínica y estudios previos." },
  { h: "Investigar", p: "Seleccionar pruebas cuando pueden aportar información útil." },
  { h: "Personalizar", p: "Definir un plan de tratamiento y seguimiento adaptado al caso." },
  { h: "Acompañar", p: "Resolver dudas, revisar avances y ajustar el manejo cuando sea necesario." },
];

const gallery = [
  "Retrato profesional de la doctora",
  "Doctora atendiendo en consultorio",
  "Recepción de la clínica",
  "Consultorio",
  "Área de pruebas",
  "Exterior del edificio",
];

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Experiencia médica y atención humana</span>
        <h1>Alergia Balance Center y Dra. María de Jesús Vázquez García</h1>
        <p>Una clínica especializada en alergia e inmunología para niños y adultos, liderada por una médica con más de 20 años de experiencia en atención clínica, docencia y asesoría médico-científica.</p>
        ${C.scheduleBtn({ loc: "clinica-hero" })}
      </div>
      <div class="page-hero__media">${C.media("Dra. María de Jesús Vázquez García en Alergia Balance Center", "ph")}</div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="answer-block reveal" style="max-width:820px;margin-bottom:2.5rem">Alergia Balance Center es una clínica de alergia e inmunología en Roma Norte, CDMX, que atiende a niños y adultos con rinitis, asma, dermatitis, urticaria, alergias alimentarias y otros padecimientos alérgicos.</div>
    <div class="section-head"><h2>Una clínica enfocada en el bienestar de cada paciente</h2><p>Alergia Balance Center es un espacio dedicado a la evaluación, diagnóstico, tratamiento y seguimiento de enfermedades alérgicas e inmunológicas. La atención combina experiencia clínica, herramientas diagnósticas, tratamientos personalizados y comunicación clara.</p></div>
    <div class="grid grid-4" style="margin-top:2.5rem">
      ${principles.map((p) => `<article class="card reveal"><div class="card__icon">${C.icon(p.icon)}</div><h3>${p.h}</h3><p>${p.p}</p></article>`).join("")}
    </div>
  </div>
</section>

<section class="section bg-tinta">
  <div class="container">
    <div class="section-head center" style="margin-inline:auto">
      <span class="eyebrow">Nuestra misión</span>
      <h2 style="max-width:22ch;margin-inline:auto">Brindar atención especializada con un enfoque integral y humano</h2>
      <p style="margin-inline:auto">Ofrecer atención especializada en alergia e inmunología orientada a mejorar la calidad de vida de cada paciente.</p>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="feature">
      <div class="feature__media reveal">${C.media("Retrato profesional de la doctora", "ph")}</div>
      <div class="reveal">
        <span class="eyebrow">Trayectoria médica</span>
        <h2>Dra. María de Jesús Vázquez García</h2>
        <p style="font-family:var(--font-heading);font-weight:600;color:var(--turquoise-600)">Alergóloga e inmunóloga pediatra, académica y asesora médico-científica</p>
        <p>La Dra. María de Jesús Vázquez García cuenta con más de 20 años de experiencia en el diagnóstico y tratamiento de enfermedades alérgicas.</p>
        <p>Su práctica integra formación pediátrica, especialización en Alergia e Inmunología Clínica, actividad académica y experiencia médico-científica en terapias de alta especialidad.</p>
        <p class="text-muted">Su enfoque se caracteriza por una atención cercana, explicaciones claras y planes adaptados a las necesidades de niños, adultos y familias.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="section-head"><h2>Formación y experiencia</h2></div>
    <ul class="check-list reveal" style="margin-top:1.6rem;max-width:820px">
      ${credentials.map((c) => `<li>${c}</li>`).join("")}
    </ul>
    <p class="text-muted" style="margin-top:1.5rem;max-width:820px;font-size:.9rem">Los nombres oficiales de instituciones, cédulas profesionales y la vigencia de certificaciones se confirman antes de su publicación, de acuerdo con la autorización de la doctora.</p>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head center"><h2>Áreas de atención</h2></div>
    <div class="grid grid-4" style="margin-top:2rem">
      ${areas.map((a) => `<div class="mini-card reveal" style="text-align:center"><h3 style="justify-content:center;font-size:1rem">${C.icon("check")}${a}</h3></div>`).join("")}
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="section-head center"><span class="eyebrow">Modelo de atención</span><h2>Un proceso centrado en la persona</h2></div>
    <div class="steps cols-5" style="margin-top:2.5rem">
      ${modelSteps.map((s) => `<div class="step reveal"><span class="step__num"></span><h3>${s.h}</h3><p>${s.p}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head center"><h2>Conoce Alergia Balance Center</h2></div>
    <div class="grid grid-3" style="margin-top:2.5rem">
      ${gallery.map((g) => `<div class="feature__media reveal" style="aspect-ratio:4/3;box-shadow:var(--shadow-sm)">${C.media(g, "ph")}</div>`).join("")}
    </div>
  </div>
</section>

${C.ctaBand(
  "Atención especializada con experiencia y cercanía",
  "Agenda una valoración para ti o para tu hijo y conoce las opciones de atención disponibles.",
  { loc: "clinica-final" }
)}
`;

module.exports = {
  slug: "/clinica-y-doctora/",
  active: "/clinica-y-doctora/",
  title: "Alergia Balance Center y Dra. María de Jesús Vázquez",
  description:
    "Conoce la clínica, el modelo de atención y la trayectoria de la Dra. María de Jesús Vázquez García, alergóloga e inmunóloga pediatra.",
  breadcrumbs: bc,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: site.doctor.name,
      worksFor: { "@type": "MedicalClinic", name: site.brand.name },
      medicalSpecialty: ["Allergology", "Pediatric Immunology"],
      telephone: "+" + site.contact.phoneDigits,
      url: site.baseUrl + "/clinica-y-doctora/",
    },
  ],
  body,
};
