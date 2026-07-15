const C = require("../lib/components.js");
const { site } = C;

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Padecimientos", href: "/padecimientos/" },
];

function defBlock(h, p, href) {
  const link = href
    ? ` <a href="${href}" class="btn btn--ghost" style="font-size:.9rem;padding-top:.4rem">Ver detalle</a>`
    : "";
  return `<div class="def-block reveal"><h3>${h}</h3><p>${p}</p>${link}</div>`;
}

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Atención para niños y adultos</span>
        <h1>Padecimientos alérgicos que atendemos</h1>
        <p>Las alergias pueden manifestarse en la nariz, los pulmones, la piel, los ojos y el sistema digestivo. En Alergia Balance Center realizamos una evaluación integral para comprender los síntomas, identificar posibles desencadenantes y definir un plan de atención personalizado.</p>
        ${C.scheduleBtn({ loc: "padecimientos-hero" })}
      </div>
      <div class="page-hero__media">${C.media("Consultorio de alergología en Roma Norte", "ph")}</div>
    </div>
  </div>
</section>

<section class="section bg-papel" id="respiratorias">
  <div class="container">
    <div class="section-head"><h2>Alergias respiratorias</h2><p>Los síntomas respiratorios pueden relacionarse con alérgenos ambientales, irritantes, infecciones u otras condiciones. Una valoración especializada permite estudiar el contexto completo de cada paciente.</p></div>
    <div style="margin-top:2rem;max-width:820px">
      ${defBlock("Rinitis alérgica", "Puede causar estornudos, congestión, escurrimiento nasal, comezón y molestias oculares. Los síntomas pueden presentarse por temporadas o durante todo el año.", "/padecimientos/rinitis-alergica/")}
      ${defBlock("Rinosinusitis", "Puede generar congestión persistente, presión facial, secreción nasal, dolor de cabeza y alteraciones del olfato.")}
      ${defBlock("Tos crónica", "Una tos que se mantiene durante varias semanas puede requerir evaluación para investigar causas respiratorias, alérgicas u otras condiciones.")}
      ${defBlock("Asma bronquial", "Puede manifestarse con tos, silbidos, presión en el pecho y dificultad para respirar. El diagnóstico y seguimiento adecuados son importantes para mejorar el control.", "/padecimientos/asma/")}
    </div>
    <div style="margin-top:1.5rem">${C.scheduleBtn({ loc: "respiratorias" })}</div>
  </div>
</section>

<section class="section bg-gasa" id="piel">
  <div class="container">
    <div class="section-head"><h2>Alergias y enfermedades inflamatorias de la piel</h2><p>La comezón, la irritación y las lesiones recurrentes pueden afectar el sueño, la concentración y la calidad de vida.</p></div>
    <div style="margin-top:2rem;max-width:820px">
      ${defBlock("Dermatitis atópica", "Enfermedad inflamatoria que suele causar piel seca, comezón y brotes recurrentes. Puede presentarse desde la infancia y requiere un manejo adaptado a cada etapa.", "/padecimientos/dermatitis-atopica/")}
      ${defBlock("Dermatitis de contacto", "Aparece cuando la piel reacciona a determinadas sustancias o materiales. Las pruebas de parche pueden ser útiles en algunos casos.")}
      ${defBlock("Urticaria", "Produce ronchas elevadas, comezón y, en ocasiones, inflamación. La evaluación depende de la duración, frecuencia y características de los episodios.", "/padecimientos/urticaria/")}
    </div>
    <div style="margin-top:1.5rem">${C.scheduleBtn({ loc: "piel" })}</div>
  </div>
</section>

<section class="section bg-papel" id="alimentarias">
  <div class="container">
    <div class="section-head"><h2>Alergias alimentarias y padecimientos digestivos relacionados</h2><p>Las reacciones relacionadas con alimentos pueden presentarse de distintas formas. Es importante diferenciarlas de intolerancias y otras enfermedades digestivas.</p></div>
    <div style="margin-top:2rem;max-width:820px">
      ${defBlock("Alergias alimentarias", "La valoración considera el alimento sospechoso, el tiempo en que aparecieron los síntomas, la cantidad consumida y los antecedentes del paciente.", "/padecimientos/alergias-alimentarias/")}
      ${defBlock("Esofagitis eosinofílica", "Es una enfermedad inflamatoria del esófago que puede causar dificultad al tragar, sensación de alimento atorado y otros síntomas digestivos. Requiere evaluación y seguimiento especializados.")}
    </div>
    <div class="notice" style="margin-top:1.5rem;max-width:820px">${C.icon("alert")}<div>No elimines alimentos esenciales ni realices dietas restrictivas sin orientación médica, especialmente en niños.</div></div>
    <div style="margin-top:1.5rem">${C.scheduleBtn({ loc: "alimentarias" })}</div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="duo">
      <div class="panel reveal" id="medicamentos" style="background:var(--papel)">
        <div class="card__icon">${C.icon("pill")}</div>
        <h2 style="font-size:var(--t-h3)">Reacciones a medicamentos</h2>
        <p>Haber presentado una reacción no siempre significa que exista una alergia confirmada. La valoración médica revisa qué medicamento se utilizó, qué síntomas aparecieron, cuánto tiempo pasó y qué otros factores estaban presentes.</p>
        <p>El objetivo es reducir riesgos y orientar alternativas seguras cuando sea posible.</p>
        <div class="btn-row">${C.scheduleBtn({ loc: "medicamentos" })}${C.ghostLink("/padecimientos/alergias-a-medicamentos/", "Ver detalle")}</div>
      </div>
      <div class="panel reveal" id="oculares" style="background:var(--papel)">
        <div class="card__icon">${C.icon("eye")}</div>
        <h2 style="font-size:var(--t-h3)">Alergias oculares</h2>
        <p>La comezón, el lagrimeo, el enrojecimiento y la irritación ocular pueden relacionarse con alergias ambientales o de contacto.</p>
        <p>La evaluación ayuda a distinguirlas de infecciones y otros problemas oculares.</p>
        ${C.scheduleBtn({ loc: "oculares" })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-papel" id="pediatrica">
  <div class="container">
    <div class="feature">
      <div class="feature__media reveal">${C.media("Atención pediátrica de alergias", "ph")}</div>
      <div class="reveal">
        <span class="eyebrow">Atención pediátrica</span>
        <h2>Alergias en bebés, niños y adolescentes</h2>
        <p>Los síntomas alérgicos pueden afectar el sueño, la alimentación, la actividad física y el rendimiento escolar.</p>
        <p>La atención pediátrica considera la edad del paciente, su crecimiento, los antecedentes familiares, la dinámica en casa y escuela, y las necesidades de madres, padres y cuidadores.</p>
        ${C.scheduleBtn({ loc: "pediatrica" })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-gasa">
  <div class="container">
    <div class="section-head center"><h2>¿Cuándo conviene consultar?</h2></div>
    <div class="grid grid-2" style="margin-top:2rem;max-width:900px" >
      <ul class="check-list">
        <li>Los síntomas duran varias semanas o reaparecen con frecuencia.</li>
        <li>La congestión, la tos o la comezón afectan el sueño.</li>
        <li>Existe dificultad para respirar.</li>
        <li>Aparecen ronchas o inflamación recurrentes.</li>
      </ul>
      <ul class="check-list">
        <li>Los síntomas se presentan después de comer o tomar un medicamento.</li>
        <li>Un niño evita alimentos o actividades por miedo a una reacción.</li>
        <li>Los tratamientos habituales no ofrecen un control suficiente.</li>
        <li>Se busca una segunda opinión.</li>
      </ul>
    </div>
    <div style="margin-top:2rem;max-width:900px">${C.emergencyNotice("<strong>La dificultad intensa para respirar, la inflamación de lengua o garganta, el desmayo o una reacción rápidamente progresiva requieren atención de urgencia.</strong> Llama al 911 o acude al servicio de urgencias más cercano.")}</div>
  </div>
</section>

${C.ctaBand(
  "Cada paciente requiere una evaluación individual",
  "Agenda una consulta para revisar tus síntomas, antecedentes y opciones de atención.",
  { loc: "padecimientos-final" }
)}
`;

module.exports = {
  slug: "/padecimientos/",
  active: "/padecimientos/",
  title: "Padecimientos alérgicos en niños y adultos | Alergia Balance",
  description:
    "Atención para rinitis, asma, dermatitis, urticaria, alergias alimentarias, alergias a medicamentos y otros padecimientos en CDMX.",
  breadcrumbs: bc,
  body,
};
