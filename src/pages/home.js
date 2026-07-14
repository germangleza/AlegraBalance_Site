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

const conditions = [
  { icon: "nose", h: "Rinitis alérgica", p: "Congestión, estornudos, comezón y secreción nasal que pueden presentarse por temporadas o durante todo el año.", href: "/padecimientos/rinitis-alergica/" },
  { icon: "lungs", h: "Asma y alergias respiratorias", p: "Valoración de tos crónica, silbidos, falta de aire y otros síntomas respiratorios.", href: "/padecimientos/asma/" },
  { icon: "skin", h: "Dermatitis", p: "Atención de dermatitis atópica, dermatitis de contacto, irritación y comezón persistente.", href: "/padecimientos/dermatitis-atopica/" },
  { icon: "heart", h: "Urticaria y ronchas", p: "Evaluación de ronchas, inflamación y episodios recurrentes en la piel.", href: "/padecimientos/urticaria/" },
  { icon: "food", h: "Alergias alimentarias", p: "Valoración de posibles reacciones relacionadas con alimentos y enfermedades digestivas asociadas.", href: "/padecimientos/alergias-alimentarias/" },
  { icon: "pill", h: "Alergias a medicamentos", p: "Evaluación de reacciones previas para orientar el manejo y reducir riesgos futuros.", href: "/padecimientos/alergias-a-medicamentos/" },
  { icon: "eye", h: "Alergias oculares", p: "Atención de comezón, lagrimeo, enrojecimiento e irritación ocular relacionados con alergias.", href: "/padecimientos/#oculares" },
  { icon: "ear", h: "Rinosinusitis y tos crónica", p: "Estudio de síntomas persistentes de nariz, senos paranasales y vías respiratorias.", href: "/padecimientos/#respiratorias" },
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

function card(c) {
  return `<article class="card reveal">
    <div class="card__icon">${C.icon(c.icon)}</div>
    <h3>${c.h}</h3>
    <ul>${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    <a href="${c.href}" class="btn btn--ghost">${c.cta}</a>
  </article>`;
}
function miniCard(c) {
  const tag = c.href ? "a" : "article";
  const attrs = c.href ? ` href="${c.href}" style="display:block;color:inherit"` : "";
  return `<${tag} class="mini-card reveal"${attrs}>
    <h3>${C.icon(c.icon)}${c.h}</h3>
    <p>${c.p}</p>
  </${tag}>`;
}

const body = `
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div class="hero__content">
        <span class="eyebrow">Alergia · Asma · Inmunología</span>
        <h1>Clínica de Alergia e Inmunología en Roma Norte, CDMX</h1>
        <p>Atención especializada para niños y adultos con rinitis, asma, dermatitis, urticaria, alergias alimentarias y otros padecimientos alérgicos.</p>
        <p>En Alergia Balance Center combinamos evaluación clínica, pruebas diagnósticas, tratamientos personalizados y acompañamiento cercano para ayudarte a comprender y controlar tus síntomas.</p>
        <div class="hero__cta btn-row">
          ${C.scheduleBtn({ lg: true, loc: "hero" })}
          ${C.whatsappBtn({ lg: true, secondary: true, loc: "hero" })}
        </div>
        <ul class="trust-badges">
          <li>${C.icon("award")} Más de 20 años de experiencia</li>
          <li>${C.icon("child")} Atención para niños y adultos</li>
          <li>${C.icon("shield")} Certificación CONICA</li>
          <li>${C.icon("stethoscope")} Diagnóstico y tratamiento personalizado</li>
        </ul>
      </div>
      <div class="hero__media reveal">
        ${C.media("Fotografía profesional de la Dra. María de Jesús Vázquez García en el consultorio")}
      </div>
    </div>
  </div>
</section>

<section class="section bg-white">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">¿Cómo podemos ayudarte?</span>
      <h2>¿Presentas alguno de estos síntomas?</h2>
      <p>Los síntomas alérgicos pueden afectar la respiración, la piel, el descanso y las actividades diarias. Una valoración especializada ayuda a identificar posibles desencadenantes y definir el manejo adecuado para cada paciente.</p>
    </div>
    <div class="grid grid-4" style="margin-top:2.5rem">
      ${symptomCards.map(card).join("")}
    </div>
    <div class="callout reveal" style="margin-top:2rem">
      <p>No necesitas saber qué tipo de alergia tienes para solicitar una valoración.</p>
      ${C.scheduleBtn({ label: "Agendar valoración", loc: "sintomas" })}
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
        <p>Cada paciente requiere una valoración individual. Nuestro proceso integra historia clínica, exploración, pruebas cuando están indicadas y un plan de tratamiento adaptado a sus necesidades.</p>
        <div class="steps cols-3" style="margin:1.5rem 0">
          <div class="step"><span class="step__num"></span><h3>Evaluación especializada</h3><p>Revisamos síntomas, antecedentes, posibles desencadenantes y el impacto en la vida diaria.</p></div>
          <div class="step"><span class="step__num"></span><h3>Pruebas y diagnóstico</h3><p>Cuando son necesarias, realizamos estudios para orientar el diagnóstico con precisión.</p></div>
          <div class="step"><span class="step__num"></span><h3>Tratamiento personalizado</h3><p>Diseñamos un plan para controlar síntomas, reducir riesgos y mejorar la calidad de vida.</p></div>
        </div>
        ${C.ghostLink("/tratamientos/", "Conocer nuestros servicios")}
      </div>
    </div>
  </div>
</section>

<section class="section bg-turq">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Padecimientos que atendemos</span>
      <h2>Atención especializada para distintos tipos de alergia</h2>
      <p>Atendemos enfermedades alérgicas respiratorias, cutáneas, digestivas, oculares y relacionadas con medicamentos en pacientes pediátricos y adultos.</p>
    </div>
    <div class="grid grid-4" style="margin-top:2.5rem">
      ${conditions.map(miniCard).join("")}
    </div>
    <div class="center" style="margin-top:2rem">
      ${C.scheduleBtn({ label: "Ver todos los padecimientos", secondary: true, loc: "padecimientos" })}
    </div>
  </div>
</section>

<section class="section bg-navy">
  <div class="container">
    <div class="section-head" style="margin-bottom:2.5rem">
      <span class="eyebrow">Experiencia, confianza y acompañamiento</span>
      <h2>Atención médica especializada en un entorno cercano y profesional</h2>
      <p>En Alergia Balance Center combinamos la experiencia de la Dra. María de Jesús Vázquez García con un espacio pensado para brindar atención segura, clara y personalizada. El objetivo no es únicamente controlar síntomas, sino ayudar a cada paciente y a su familia a comprender el padecimiento y tomar decisiones informadas sobre su salud.</p>
    </div>
    <div class="split">
      <article class="card card--purple reveal">
        <div class="card__icon">${C.icon("home")}</div>
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
      <article class="card card--purple reveal">
        <div class="card__icon">${C.icon("stethoscope")}</div>
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
      <p style="color:#c3cef0;max-width:60ch;margin:0 auto 1.4rem">Medicina especializada con un trato humano, cercano y orientado a mejorar tu calidad de vida.</p>
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
      <div class="panel turq reveal">
        <div class="card__icon">${C.icon("child")}</div>
        <h3>Alergología pediátrica</h3>
        <p>Atención cercana para bebés, niños y adolescentes con enfermedades alérgicas respiratorias, alimentarias y cutáneas.</p>
        <p>El acompañamiento incluye orientación para madres, padres y cuidadores, con recomendaciones adaptadas a la vida en casa, la escuela y las actividades cotidianas.</p>
        ${C.ghostLink("/padecimientos/#pediatrica", "Conocer atención pediátrica")}
      </div>
      <div class="panel purple reveal">
        <div class="card__icon" style="background:#e8f3f4;color:#137e88">${C.icon("stethoscope")}</div>
        <h3>Alergología para adultos</h3>
        <p>Evaluación y tratamiento de alergias que afectan la respiración, la piel, la alimentación, el descanso y las actividades diarias.</p>
        <p>Cada plan se define de acuerdo con la historia clínica, los síntomas y las necesidades de la persona.</p>
        ${C.ghostLink("/padecimientos/", "Conocer atención para adultos")}
      </div>
    </div>
  </div>
</section>

<section class="section bg-white">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Diagnóstico y manejo personalizado</span>
      <h2>Pruebas y tratamientos de acuerdo con cada caso</h2>
    </div>
    <div class="grid grid-4" style="margin-top:2.5rem">
      ${tests
        .map(
          (t) => `<article class="card reveal">
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

<section class="section bg-warm">
  <div class="container">
    <div class="section-head center"><h2>Tu atención en cuatro pasos</h2></div>
    <div class="steps cols-4" style="margin-top:2.5rem">
      <div class="step reveal"><span class="step__num"></span><h3>Agenda tu consulta</h3><p>Elige la opción de contacto que prefieras y solicita una fecha disponible.</p></div>
      <div class="step reveal"><span class="step__num"></span><h3>Valoración especializada</h3><p>Revisamos síntomas, antecedentes, tratamientos previos y posibles desencadenantes.</p></div>
      <div class="step reveal"><span class="step__num"></span><h3>Estudios cuando sean necesarios</h3><p>La doctora determina qué pruebas pueden aportar información útil para tu caso.</p></div>
      <div class="step reveal"><span class="step__num"></span><h3>Tratamiento y seguimiento</h3><p>Recibes un plan personalizado y acompañamiento para evaluar tu evolución.</p></div>
    </div>
  </div>
</section>

<section class="section bg-white">
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

<section class="section">
  <div class="container">
    <div class="section-head center"><h2>Preguntas frecuentes antes de tu consulta</h2></div>
    <div style="margin-top:2rem">${C.faq(faqs, "home-faq")}</div>
  </div>
</section>

<section class="section bg-turq">
  <div class="container">
    <div class="feature reverse">
      <div class="feature__media reveal">${C.media("Fachada del edificio en Sinaloa 106, Roma Norte", "ph")}</div>
      <div class="reveal">
        <span class="eyebrow">Visítanos</span>
        <h2>Consulta en Roma Norte, CDMX</h2>
        <p>Estamos ubicados en una zona de fácil acceso para brindar atención especializada a niños y adultos.</p>
        <ul class="info-list" style="margin:1.2rem 0">
          <li>${C.icon("pin")}<div><strong>${site.contact.address.street}</strong><br>${site.contact.address.neighborhood}<br>${site.contact.address.postal}</div></li>
          <li>${C.icon("clock")}<div>Martes a viernes 12:00–19:00 · Sábado 11:00–14:00 · Domingo cerrado</div></li>
        </ul>
        <div class="btn-row">
          <a href="${site.contact.address.maps}" target="_blank" rel="noopener" class="btn btn--secondary" data-track="click_directions" data-track-loc="home-ubicacion">${C.icon("route")}<span>Cómo llegar</span></a>
          ${C.scheduleBtn({ loc: "home-ubicacion" })}
          ${C.callBtn({ loc: "home-ubicacion" })}
        </div>
      </div>
    </div>
  </div>
</section>

${C.ctaBand(
  "Da el primer paso para comprender y controlar tus alergias",
  "Recibe una valoración especializada y conoce qué opciones de diagnóstico y tratamiento pueden ser adecuadas para ti o para tu hijo.",
  { loc: "home-final" }
)}
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
