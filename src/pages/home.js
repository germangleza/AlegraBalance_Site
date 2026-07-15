const C = require("../lib/components.js");
const { site } = C;

const symptomCards = [
  {
    icon: "lungs",
    h: "Alergias respiratorias",
    items: ["Estornudos frecuentes", "Congestión nasal", "Tos persistente", "Silbidos o dificultad para respirar"],
    cta: "Conocer alergias respiratorias",
    href: "/padecimientos/#respiratorias",
  },
  {
    icon: "skin",
    h: "Alergias en la piel",
    items: ["Ronchas", "Comezón", "Irritación", "Dermatitis recurrente"],
    cta: "Conocer alergias de la piel",
    href: "/padecimientos/#piel",
  },
  {
    icon: "food",
    h: "Reacciones a alimentos o medicamentos",
    items: ["Inflamación", "Malestar después de comer", "Reacciones cutáneas", "Síntomas tras un medicamento"],
    cta: "Conocer estas alergias",
    href: "/padecimientos/#alimentarias",
  },
  {
    icon: "child",
    h: "Alergias en niños",
    items: ["Síntomas respiratorios recurrentes", "Dermatitis", "Alergias alimentarias", "Molestias que afectan el sueño o la escuela"],
    cta: "Conocer la atención pediátrica",
    href: "/padecimientos/#pediatrica",
  },
];

const tests = [
  { icon: "test", h: "Pruebas cutáneas", p: "Ayudan a evaluar la sensibilidad frente a diferentes alérgenos y se interpretan junto con los síntomas y antecedentes del paciente." },
  { icon: "patch", h: "Pruebas de parche", p: "Se utilizan para investigar posibles causas de dermatitis de contacto y reacciones tardías en la piel." },
  { icon: "spiro", h: "Espirometría", p: "Permite valorar la función pulmonar en pacientes con asma, tos persistente o dificultad respiratoria." },
  { icon: "syringe", h: "Inmunoterapia", p: "Tratamiento que puede ayudar a disminuir progresivamente la sensibilidad a determinados alérgenos cuando existe indicación médica." },
];

const faqs = [
  { q: "¿Cuándo debería consultar a un alergólogo?", a: "Cuando los síntomas son frecuentes, persisten durante varias semanas, afectan el sueño o las actividades diarias, aparecen después de comer o tomar un medicamento, o no mejoran con el manejo habitual." },
  { q: "¿Atienden niños y adultos?", a: "Sí. Alergia Balance Center brinda atención especializada para pacientes pediátricos y adultos." },
  { q: "¿Qué sucede durante la primera consulta?", a: "Se revisan los síntomas, antecedentes personales y familiares, tratamientos previos y posibles desencadenantes. Con base en la valoración, la doctora determina si es necesario realizar estudios adicionales." },
  { q: "¿Las pruebas de alergia se realizan el mismo día?", a: "Depende del tipo de prueba, la preparación requerida, la disponibilidad y la valoración médica. El equipo confirmará las indicaciones correspondientes al agendar." },
  { q: "¿Debo suspender medicamentos antes de una prueba?", a: "Algunos medicamentos pueden interferir con determinados estudios. No suspendas ningún tratamiento por tu cuenta. Solicita instrucciones al equipo antes de tu cita." },
  { q: "¿Necesito llevar estudios anteriores?", a: "Es recomendable llevar resultados de laboratorio, estudios, recetas y una lista de los medicamentos que utilizas actualmente." },
  { q: "¿Cómo puedo agendar?", a: "Puedes solicitar una cita por WhatsApp, teléfono o mediante el formulario del sitio." },
];

/* Panel de pruebas cutáneas: la firma visual del hero. Ocho alérgenos
   comunes, tres con reacción positiva, cada uno enlaza a su padecimiento. */
const prickPoints = [
  { label: "Ácaros", href: "/padecimientos/rinitis-alergica/", positive: true },
  { label: "Fresno", href: "/padecimientos/rinitis-alergica/" },
  { label: "Encino", href: "/padecimientos/rinitis-alergica/" },
  { label: "Gato", href: "/padecimientos/asma/", positive: true },
  { label: "Perro", href: "/padecimientos/asma/" },
  { label: "Pastos", href: "/padecimientos/rinitis-alergica/", positive: true },
  { label: "Cucaracha", href: "/padecimientos/asma/" },
  { label: "Polvo", href: "/padecimientos/rinitis-alergica/" },
];
const prickPositiveCount = prickPoints.filter((p) => p.positive).length;

function card(c, i) {
  return `<article class="card reveal" style="--i:${i}">
    <div class="card__icon">${C.icon(c.icon)}</div>
    <h3>${c.h}</h3>
    <ul>${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    <a href="${c.href}" class="btn btn--ghost">${c.cta}</a>
  </article>`;
}

function prickPanel() {
  const points = prickPoints
    .map(
      (p, i) => `<a class="prick-point${p.positive ? " is-positive" : ""}" href="${p.href}" style="--i:${i}">
        <span class="prick-point__dot"><span class="prick-point__habon"></span></span>
        <span class="prick-point__label">${p.label}</span>
      </a>`
    )
    .join("");
  return `<div class="prick-panel">
    <div class="prick-panel__head">
      <span>Panel 01 · Lectura a 15 min</span>
    </div>
    <div class="prick-panel__grid">${points}</div>
    <hr class="prick-panel__divider">
    <p class="prick-panel__count">Positivo: <strong>${prickPositiveCount} de ${prickPoints.length}</strong></p>
  </div>`;
}

const body = `
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div class="hero__text">
        <span class="eyebrow hero__eyebrow intro-hide">Alergia · Asma · Inmunología</span>
        <h1>
          <span class="line"><span style="--i:0">Encontrar la causa</span></span>
          <span class="line"><span style="--i:1">es la mitad del tratamiento</span></span>
        </h1>
        <p>Atención especializada para niños y adultos con enfermedades alérgicas respiratorias y dermatológicas. Combinamos evaluación clínica, pruebas diagnósticas y tratamiento personalizado.</p>
      </div>
      <div class="hero__panel">
        ${prickPanel()}
      </div>
      <div class="hero__cta btn-row intro-hide">
        ${C.scheduleBtn({ lg: true, loc: "hero" })}
        ${C.whatsappBtn({ lg: true, secondary: true, loc: "hero" })}
      </div>
      <div class="hero__media intro-hide">
        ${C.media("Dra. María de Jesús Vázquez García en el consultorio de Alergia Balance Center", null, "/assets/images/doctora/dra-maria-vazquez.jpg")}
      </div>
      <ul class="trust-badges intro-hide">
        <li>Más de 20 años de experiencia</li>
        <li>Atención para niños y adultos</li>
        <li>Certificación CONICA</li>
        <li>Diagnóstico y tratamiento personalizado</li>
      </ul>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">¿Cómo podemos ayudarte?</span>
      <h2>¿Presentas alguno de estos síntomas?</h2>
      <p>Una valoración especializada ayuda a identificar lo que desencadena la alergia y definir el manejo adecuado para cada paciente.</p>
    </div>
    <div class="grid grid-4" style="margin-top:2.5rem">
      ${symptomCards.map(card).join("")}
    </div>
    <div class="callout reveal" style="margin-top:2rem">
      <p>No necesitas saber qué tipo de alergia tienes para solicitar una valoración.</p>
      ${C.scheduleBtn({ loc: "sintomas" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="feature">
      <div class="feature__media reveal">${C.media("Consulta de valoración en Alergia Balance Center", "ph")}</div>
      <div class="reveal">
        <span class="eyebrow">Atención integral</span>
        <h2>De la evaluación al seguimiento</h2>
        <p>Nuestro proceso integra historia clínica, exploración, pruebas diagnósticas y un plan de tratamiento adaptado a sus necesidades.</p>
        <div class="steps cols-3" style="margin:1.5rem 0">
          <div class="step"><span class="step__num"></span><h3>Evaluación especializada</h3><p>Revisamos síntomas, antecedentes, posibles desencadenantes y el impacto en la vida diaria.</p></div>
          <div class="step"><span class="step__num"></span><h3>Pruebas y diagnóstico</h3><p>Cuando son necesarias, realizamos estudios para orientar el diagnóstico con precisión.</p>${C.ghostLink("/pruebas-y-diagnostico/", "Conocer nuestras pruebas")}</div>
          <div class="step"><span class="step__num"></span><h3>Tratamiento personalizado</h3><p>Diseñamos un plan para controlar síntomas, reducir riesgos y facilitar tu día a día.</p>${C.ghostLink("/tratamientos/", "Conocer nuestros tratamientos")}</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-tinta">
  <div class="container">
    <div class="section-head" style="margin-bottom:2.5rem">
      <span class="eyebrow">Experiencia, confianza y acompañamiento</span>
      <h2>Atención médica especializada en un entorno cercano y profesional</h2>
      <p>En Alergia Balance Center nuestro objetivo es ayudar a cada paciente y a su familia a comprender el padecimiento y tomar decisiones informadas sobre su salud.</p>
    </div>
    <div class="split">
      <article class="card reveal">
        <div class="card__media">${C.media("Alergia Balance Center — consultorio", "ph")}</div>
        <h3>Alergia Balance Center</h3>
        <p>Un espacio profesional y confiable para la evaluación, diagnóstico y tratamiento de enfermedades alérgicas.</p>
        <ul class="check-list">
          <li>Atención para niños y adultos</li>
          <li>Evaluación integral</li>
          <li>Pruebas diagnósticas cuando están indicadas</li>
          <li>Tratamientos personalizados</li>
          <li>Acompañamiento para pacientes y familias</li>
        </ul>
      </article>
      <article class="card reveal">
        <div class="card__media">${C.media("Dra. María de Jesús Vázquez García", null, "/assets/images/doctora/dra-maria-vazquez.jpg")}</div>
        <h3>Dra. María de Jesús Vázquez García</h3>
        <p>Alergóloga e inmunóloga pediatra, académica y asesora médico-científica con más de 20 años de experiencia.</p>
        <ul class="check-list">
          <li>Especialidad en Pediatría</li>
          <li>Subespecialidad en Alergia e Inmunología Clínica</li>
          <li>Certificación por CONICA</li>
          <li>Académica en la UNAM</li>
          <li>Experiencia en terapias de alta especialidad</li>
        </ul>
      </article>
    </div>
    <div style="margin-top:2rem;text-align:center">
      <p style="color:#b7c1e0;max-width:60ch;margin:0 auto 1.4rem">Medicina especializada con un trato humano, cercano y orientado a mejorar tu calidad de vida.</p>
      <a href="/clinica-y-doctora/" class="btn btn--secondary btn--lg">Conocer la clínica y a la doctora</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head center">
      <h2>Atención especializada en cada etapa de la vida</h2>
    </div>
    <div class="duo" style="margin-top:2.5rem">
      <div class="panel reveal">
        <div class="card__icon">${C.icon("child")}</div>
        <h3>Alergología pediátrica</h3>
        <p>Atención cercana para bebés, niños y adolescentes con enfermedades alérgicas respiratorias, alimentarias y cutáneas.</p>
        <p>El acompañamiento incluye orientación para madres, padres y cuidadores, con recomendaciones adaptadas a la vida en casa, la escuela y las actividades cotidianas.</p>
      </div>
      <div class="panel reveal">
        <div class="card__icon">${C.icon("stethoscope")}</div>
        <h3>Alergología para adultos</h3>
        <p>Evaluación y tratamiento de alergias que afectan la respiración, la piel, la alimentación, el descanso y las actividades diarias.</p>
        <p>Cada plan se define de acuerdo con la historia clínica, los síntomas y las necesidades de la persona.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Diagnóstico y manejo personalizado</span>
      <h2>Pruebas y tratamientos de acuerdo con cada caso</h2>
    </div>
    <div class="grid grid-4" style="margin-top:2.5rem">
      ${tests
        .map(
          (t, i) => `<article class="card reveal" style="--i:${i}">
        <div class="card__icon">${C.icon(t.icon)}</div>
        <h3>${t.h}</h3><p>${t.p}</p>
      </article>`
        )
        .join("")}
    </div>
    <div class="center" style="margin-top:2rem">
      ${C.ghostLink("/pruebas-y-diagnostico/", "Ver pruebas y tratamientos")}
    </div>
  </div>
</section>

<section class="section bg-tinta">
  <div class="container">
    <div class="section-head center"><h2>Tu atención en cuatro pasos</h2></div>
    <div class="steps-track reveal" style="margin-top:2.5rem">
      <div class="steps-track__rail"><div class="steps-track__fill"></div></div>
    </div>
    <div class="steps cols-4">
      <div class="step reveal" style="--i:0"><span class="step__num"></span><h3>Agenda tu consulta</h3></div>
      <div class="step reveal" style="--i:1"><span class="step__num"></span><h3>Valoración especializada</h3></div>
      <div class="step reveal" style="--i:2"><span class="step__num"></span><h3>Estudios de diagnóstico</h3></div>
      <div class="step reveal" style="--i:3"><span class="step__num"></span><h3>Tratamiento y seguimiento</h3></div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Visítanos</span>
      <h2>Dónde te atendemos</h2>
      <p>La doctora atiende en su consultorio de la Ciudad de México y viaja periódicamente a Guadalajara para atender pacientes con cita previa.</p>
    </div>
    <div class="grid grid-2" style="margin:2.5rem 0">
      ${site.contact.locations.map((l) => C.locationCard(l, { loc: "home-ubicacion" })).join("")}
    </div>
    <div class="btn-row reveal">
      ${C.scheduleBtn({ loc: "home-ubicacion" })}
      ${C.callBtn({ loc: "home-ubicacion" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head center"><h2>Preguntas frecuentes antes de tu consulta</h2></div>
    <div style="margin-top:2rem">${C.faq(faqs)}</div>
  </div>
</section>

${C.ctaBand(
  "Da el primer paso para comprender y controlar tus alergias",
  "Recibe una valoración especializada y conoce qué opciones de diagnóstico y tratamiento pueden ser adecuadas para ti o para tu hijo.",
  { loc: "home-final" }
)}

<section class="section bg-papel">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Información para cuidar tu salud</span>
      <h2>Aprende más sobre alergias e inmunología</h2>
      <p>Contenido educativo para comprender mejor los síntomas, los posibles desencadenantes y la importancia de recibir una valoración especializada.</p>
    </div>
    <div class="grid grid-2" style="margin-top:2.5rem">
      <article class="blog-card reveal">
        <div class="blog-card__media">${C.media("Alergias y calidad de vida", "ph")}</div>
        <div class="blog-card__body">
          <span class="tag">Alergias y bienestar</span>
          <h3>Alergias y calidad de vida</h3>
          <p>Las alergias pueden afectar el sueño, la concentración, el rendimiento y las actividades cotidianas. Conoce por qué un diagnóstico adecuado puede marcar una diferencia.</p>
          ${C.ghostLink("/alergias-y-calidad-de-vida/", "Leer artículo")}
        </div>
      </article>
      <article class="blog-card reveal">
        <div class="blog-card__media">${C.media("Rinitis: causas, síntomas y tratamientos", "ph")}</div>
        <div class="blog-card__body">
          <span class="tag">Alergias respiratorias</span>
          <h3>Rinitis: causas, síntomas y tratamientos efectivos</h3>
          <p>Conoce qué es la rinitis, cuáles son sus síntomas más frecuentes y en qué momento conviene consultar a un especialista.</p>
          ${C.ghostLink("/rinitis/", "Leer artículo")}
        </div>
      </article>
    </div>
    <div class="center" style="margin-top:2rem">${C.ghostLink("/blog/", "Ver blog")}</div>
  </div>
</section>
`;

module.exports = {
  slug: "/",
  active: "/",
  title: "Clínica de Alergia e Inmunología en CDMX | Alergia Balance",
  description:
    "Atención especializada para niños y adultos con rinitis, asma, dermatitis, urticaria y otras alergias. Agenda una consulta en Roma Norte, CDMX.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
  body,
};
