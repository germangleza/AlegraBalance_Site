const C = require("../lib/components.js");

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Pruebas y diagnóstico", href: "/pruebas-y-diagnostico/" },
];

function testBlock(id, icon, h, rows, cta) {
  const dl = rows
    .map((r) => `<h3>${r.q}</h3><p>${r.a}</p>`)
    .join("");
  return `<section class="section bg-white" id="${id}">
    <div class="container">
      <div class="feature">
        <div class="reveal">
          <div class="card__icon">${C.icon(icon)}</div>
          <h2>${h}</h2>
          <div class="article" style="margin:1rem 0 0">${dl}</div>
          <div style="margin-top:1.4rem">${C.scheduleBtn({ label: cta, loc: id })}</div>
        </div>
        <div class="feature__media reveal">${C.media(h, "ph")}</div>
      </div>
    </div>
  </section>`;
}

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Evaluación especializada</span>
        <h1>Pruebas y diagnóstico de alergias</h1>
        <p>No todos los pacientes necesitan las mismas pruebas. La selección de estudios depende de los síntomas, antecedentes, edad, tratamientos actuales y hallazgos de la valoración médica.</p>
        <p class="text-muted">Las pruebas deben interpretarse junto con la historia clínica; un resultado positivo no siempre significa que una sustancia sea la causa de los síntomas.</p>
        ${C.scheduleBtn({ label: "Agendar valoración", loc: "pruebas-hero" })}
      </div>
      <div class="page-hero__media">${C.media("Área de pruebas de alergia", "ph")}</div>
    </div>
  </div>
</section>

<section class="section bg-turq">
  <div class="container">
    <div class="feature">
      <div class="reveal">
        <span class="eyebrow">Punto de partida</span>
        <h2>El diagnóstico comienza con una valoración completa</h2>
        <p>Durante la consulta se revisan distintos aspectos para determinar si una prueba puede aportar datos relevantes.</p>
      </div>
      <ul class="check-list reveal" style="background:#fff;padding:1.8rem;border-radius:var(--radius-lg)">
        <li>Síntomas y duración</li>
        <li>Momentos o lugares en que aparecen</li>
        <li>Alimentos, medicamentos o sustancias sospechosas</li>
        <li>Antecedentes personales y familiares</li>
        <li>Tratamientos utilizados y estudios previos</li>
        <li>Impacto en el sueño y las actividades diarias</li>
      </ul>
    </div>
  </div>
</section>

${testBlock(
  "prick",
  "test",
  "Pruebas cutáneas Prick",
  [
    { q: "¿Qué son?", a: "Son estudios realizados sobre la piel para evaluar la respuesta frente a distintos alérgenos." },
    { q: "¿Para qué pueden servir?", a: "Pueden ayudar a investigar sensibilidad a alérgenos ambientales, respiratorios o alimentarios, de acuerdo con la sospecha clínica." },
    { q: "¿Cómo se realizan?", a: "Se colocan pequeñas cantidades de los alérgenos seleccionados en la piel y se observa la respuesta bajo supervisión médica." },
    { q: "¿Requieren preparación?", a: "Algunos medicamentos pueden modificar los resultados. El equipo debe proporcionar instrucciones antes de la prueba. No suspendas medicamentos sin indicación médica." },
  ],
  "Consultar disponibilidad"
)}

${testBlock(
  "parche",
  "patch",
  "Pruebas de parche",
  [
    { q: "¿Qué son?", a: "Son estudios que ayudan a evaluar reacciones tardías de la piel frente a sustancias que pueden causar dermatitis de contacto." },
    { q: "¿Cuándo pueden indicarse?", a: "Cuando existe irritación, comezón o lesiones recurrentes relacionadas con metales, cosméticos, fragancias, productos de cuidado personal, materiales u otras sustancias." },
    { q: "¿Cómo se realizan?", a: "Los materiales se colocan sobre la espalda durante un periodo indicado y se realizan lecturas posteriores para evaluar la respuesta." },
  ],
  "Agendar evaluación de dermatitis"
)}

${testBlock(
  "espirometria",
  "spiro",
  "Espirometría",
  [
    { q: "¿Qué evalúa?", a: "Mide diferentes aspectos de la función pulmonar y puede aportar información en pacientes con tos, silbidos, falta de aire o sospecha de asma." },
    { q: "¿Cómo se realiza?", a: "El paciente respira a través de un equipo siguiendo instrucciones específicas. La prueba requiere colaboración y puede repetirse para asegurar resultados confiables." },
  ],
  "Consultar disponibilidad"
)}

${testBlock(
  "broncodilatacion",
  "lungs",
  "Prueba de broncodilatación",
  [
    { q: "¿Para qué sirve?", a: "Evalúa si la función respiratoria cambia después de utilizar un medicamento broncodilatador." },
    { q: "¿Cuándo se utiliza?", a: "Puede formar parte del estudio de asma u obstrucción de las vías respiratorias cuando está clínicamente indicada." },
  ],
  "Solicitar valoración respiratoria"
)}

<section class="section bg-warm">
  <div class="container">
    <div class="section-head center"><h2>Antes de tu estudio</h2></div>
    <div class="grid grid-2" style="margin-top:2rem;max-width:900px">
      <ul class="check-list">
        <li>Confirma si debes suspender algún medicamento.</li>
        <li>Lleva estudios y recetas anteriores.</li>
        <li>Informa si has tenido una reacción grave.</li>
      </ul>
      <ul class="check-list">
        <li>Notifica si estás embarazada.</li>
        <li>Evita colocar cremas en la zona de prueba cuando el equipo así lo indique.</li>
        <li>Llega con tiempo suficiente para el registro.</li>
      </ul>
    </div>
    <p class="text-muted center" style="margin-top:1.5rem;max-width:640px">Las indicaciones pueden cambiar según la edad, el tipo de prueba y la historia clínica.</p>
  </div>
</section>

${C.ctaBand(
  "La prueba correcta depende de una valoración adecuada",
  "Agenda una consulta para determinar qué estudios pueden ser útiles en tu caso.",
  { loc: "pruebas-final" }
)}
`;

module.exports = {
  slug: "/pruebas-y-diagnostico/",
  active: "/pruebas-y-diagnostico/",
  title: "Pruebas de alergia en CDMX | Alergia Balance Center",
  description:
    "Conoce las pruebas cutáneas, pruebas de parche, espirometría y estudios de broncodilatación disponibles en Alergia Balance Center.",
  breadcrumbs: bc,
  body,
};
