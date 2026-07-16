const C = require("../lib/components.js");

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: "/tratamientos/" },
];

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid page-hero__grid--single">
      <div>
        <span class="eyebrow">Manejo individualizado</span>
        <h1>Tratamientos personalizados para alergias</h1>
        <p>El tratamiento depende del padecimiento, la intensidad de los síntomas, los desencadenantes, la edad y las necesidades de cada paciente.</p>
        <p class="text-muted">En Alergia Balance Center el plan se define después de una valoración médica y puede incluir medidas de prevención, tratamiento farmacológico, inmunoterapia, terapias de alta especialidad y seguimiento.</p>
        ${C.scheduleBtn({ loc: "tratamientos-hero" })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="feature">
      <div class="reveal">
        <span class="eyebrow">Primer objetivo</span>
        <h2>Control de síntomas y prevención</h2>
        <p>El primer objetivo es disminuir el impacto de los síntomas y reducir la exposición a desencadenantes relevantes sin imponer restricciones innecesarias.</p>
      </div>
      <ul class="check-list reveal" style="background:var(--gasa);padding:1.8rem;border-radius:var(--radius)">
        <li>Orientación sobre el entorno</li>
        <li>Medidas de cuidado en casa o escuela</li>
        <li>Uso adecuado de medicamentos indicados</li>
        <li>Planes de acción</li>
        <li>Seguimiento de la evolución</li>
      </ul>
    </div>
  </div>
</section>

<section class="section bg-gasa" id="inmunoterapia">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Tratamiento de fondo</span><h2>Inmunoterapia para alergias</h2><p>La inmunoterapia administra cantidades controladas de determinados alérgenos para modificar progresivamente la respuesta del sistema inmunológico. No está indicada para todas las personas ni para todos los tipos de alergia. La decisión depende del diagnóstico, los síntomas y la valoración médica.</p></div>
    <div class="grid grid-2" style="margin-top:2rem">
      <article class="card reveal"><div class="card__media">${C.media("Inmunoterapia sublingual", null, "/assets/images/tratamientos/sublingual.jpg")}</div><h3>Inmunoterapia sublingual</h3><p>Se administra debajo de la lengua siguiendo un esquema personalizado y con seguimiento médico.</p></article>
      <article class="card reveal"><div class="card__media">${C.media("Inmunoterapia subcutánea", null, "/assets/images/tratamientos/subcutanea.jpg")}</div><h3>Inmunoterapia subcutánea</h3><p>Se aplica mediante inyecciones en dosis programadas y requiere control de la respuesta del paciente.</p></article>
    </div>
    <div class="card reveal" style="margin-top:1.4rem">
      <h3>Objetivos posibles</h3>
      <div class="grid grid-2" style="margin-top:.6rem">
        <ul class="check-list"><li>Disminuir la intensidad de los síntomas</li><li>Reducir la sensibilidad frente a alérgenos seleccionados</li></ul>
        <ul class="check-list"><li>Mejorar el control a largo plazo</li><li>Favorecer una mejor calidad de vida</li></ul>
      </div>
      <p class="text-muted" style="margin-top:1rem">Los resultados y la duración varían entre pacientes.</p>
      <div class="btn-row" style="margin-top:1rem">${C.scheduleBtn({ loc: "inmunoterapia" })}${C.ghostLink("/tratamientos/inmunoterapia/", "Ver detalle completo")}</div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="feature reverse">
      <div class="feature__media reveal">${C.media("Terapias biotecnológicas de alta especialidad", null, "/assets/images/tratamientos/biotecnologicas.jpg")}</div>
      <div class="reveal">
        <span class="eyebrow">Alta especialidad</span>
        <h2>Terapias biotecnológicas y tratamientos de alta especialidad</h2>
        <p>Algunas enfermedades alérgicas o inmunológicas pueden requerir tratamientos dirigidos a mecanismos específicos del sistema inmunológico.</p>
        <p>Alergia Balance Center ofrece valoración y seguimiento para pacientes que pueden ser candidatos a:</p>
        <ul class="check-list" style="margin:.8rem 0"><li>Biotecnológicos</li><li>Anticuerpos monoclonales</li><li>Inmunoglobulinas</li></ul>
        <p class="text-muted">Estos tratamientos se indican únicamente cuando existe una justificación clínica y requieren seguimiento especializado.</p>
        <div style="margin-top:1rem">${C.scheduleBtn({ loc: "biotecnologicas" })}</div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="section-head"><h2>Segunda opinión médica</h2><p>Una segunda opinión puede aportar claridad y nuevas alternativas de manejo.</p></div>
    <div class="grid grid-2" style="margin-top:2rem">
      <ul class="check-list" style="background:var(--papel);padding:1.8rem;border-radius:var(--radius)">
        <li>El diagnóstico no es claro.</li>
        <li>Los síntomas no están controlados.</li>
        <li>Se ha propuesto un tratamiento de alta especialidad.</li>
        <li>Existen dudas sobre estudios o resultados previos.</li>
        <li>Se desea revisar alternativas de manejo.</li>
      </ul>
      <div class="card reveal">
        <div class="card__icon">${C.icon("stethoscope")}</div>
        <p>La consulta incluye revisión de antecedentes, estudios, tratamientos previos y objetivos del paciente.</p>
        <div style="margin-top:1rem">${C.scheduleBtn({ loc: "segunda-opinion" })}</div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-papel">
  <div class="container">
    <div class="duo">
      <div class="panel reveal">
        <div class="card__icon">${C.icon("heart")}</div>
        <h3>Orientación para pacientes y familias</h3>
        <p>Las enfermedades alérgicas pueden afectar la rutina de toda la familia. El acompañamiento incluye información práctica para reconocer síntomas, reducir riesgos y facilitar el manejo en casa, la escuela y las actividades cotidianas.</p>
        <p class="text-muted">Nuestro objetivo es que cada paciente y cuidador comprenda el plan y se sienta acompañado durante el proceso.</p>
      </div>
      <div class="panel reveal" style="background:var(--gasa)">
        <div class="card__icon">${C.icon("route")}</div>
        <h3>El tratamiento continúa con seguimiento</h3>
        <p>El control de una enfermedad alérgica puede requerir ajustes con el tiempo. En las consultas de seguimiento se revisa:</p>
        <ul class="check-list" style="margin-top:.6rem"><li>Evolución de síntomas y respuesta al tratamiento</li><li>Adherencia y dificultades</li><li>Nuevos desencadenantes</li><li>Resultados de estudios y necesidad de cambios</li></ul>
      </div>
    </div>
  </div>
</section>

${C.ctaBand(
  "Diseñemos un plan de tratamiento para tu caso",
  "Agenda una consulta y conoce las opciones de manejo adecuadas para ti o para tu hijo.",
  { loc: "tratamientos-final" }
)}
`;

module.exports = {
  slug: "/tratamientos/",
  active: "/tratamientos/",
  title: "Tratamientos para alergias e inmunoterapia en CDMX",
  description:
    "Tratamientos personalizados, inmunoterapia sublingual y subcutánea, terapias biotecnológicas y segunda opinión en Alergia Balance Center.",
  breadcrumbs: bc,
  body,
};
