const C = require("../lib/components.js");
const { site } = C;

function articlePage(a) {
  const bc = [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: a.crumb, href: a.slug },
  ];

  const body = `
<article>
  <header class="section section--tight bg-papel">
    <div class="container">
      <div class="article">
        <span class="tag">${a.category}</span>
        <h1 style="margin:.9rem 0 1rem">${a.h1}</h1>
        <div class="article__meta">
          <span>${C.icon("stethoscope")} ${site.doctor.name}</span>
          <span>Publicado: ${a.published}</span>
          <span>Actualizado: ${a.updated}</span>
        </div>
      </div>
    </div>
  </header>

  <div class="section section--tight bg-papel" style="padding-top:0">
    <div class="container">
      <div class="article">
        ${a.img ? `<figure class="article__hero">${C.media(a.imgAlt || a.h1, null, a.img)}</figure>` : ""}
        ${a.body}
      </div>

      <div class="article" style="margin-top:2.5rem">
        <div class="cta-band">
          <h2>${a.ctaH}</h2>
          <p>${a.ctaText}</p>
          <div class="btn-row">${C.scheduleBtn({ lg: true, loc: "articulo-" + a.crumb })}</div>
        </div>
      </div>

      <div class="article" style="margin-top:2rem">${C.reviewer()}</div>
    </div>
  </div>
</article>
`;

  return {
    slug: a.slug,
    active: "/blog/",
    title: a.title,
    description: a.description,
    breadcrumbs: bc,
    ogType: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.h1,
        datePublished: a.publishedIso,
        dateModified: a.updatedIso,
        inLanguage: "es-MX",
        author: { "@type": "Person", name: site.doctor.name },
        reviewedBy: { "@type": "Person", name: site.doctor.name },
        publisher: { "@type": "MedicalClinic", name: site.brand.name },
        ...(a.img ? { image: site.baseUrl + a.img } : {}),
        mainEntityOfPage: site.baseUrl + a.slug,
      },
      a.faq
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }
        : null,
    ].filter(Boolean),
    body,
  };
}

/* ------------------------- Artículo 1 -------------------------------- */
const article1 = articlePage({
  slug: "/alergias-y-calidad-de-vida/",
  crumb: "Alergias y calidad de vida",
  category: "Alergias y bienestar",
  title: "Alergias y calidad de vida: cómo afectan tu día a día",
  description:
    "Conoce cómo las alergias pueden afectar el sueño, la concentración, el rendimiento y el bienestar, y cuándo conviene consultar a un especialista.",
  h1: "Alergias y calidad de vida",
  img: "/assets/images/blog/alergias-calidad-de-vida.jpg",
  imgAlt: "Niña sonriente junto a un perro en un jardín, sin síntomas de alergia",
  published: "11 de mayo de 2026",
  publishedIso: "2026-05-11",
  updated: "11 de mayo de 2026",
  updatedIso: "2026-05-11",
  ctaH: "¿Tus síntomas afectan tu día a día?",
  ctaText: "Agenda una valoración especializada para revisar tu caso.",
  body: `
    <p>Las alergias no siempre se limitan a unos cuantos estornudos o a una molestia temporal en la piel. Cuando los síntomas son frecuentes o no están bien controlados, pueden afectar el sueño, la concentración, la actividad física, el rendimiento escolar o laboral y la tranquilidad de toda la familia.</p>
    <p>Comprender el impacto de una enfermedad alérgica es el primer paso para buscar una atención adecuada y recuperar bienestar.</p>

    <h2>¿Qué es una alergia?</h2>
    <p>Una alergia ocurre cuando el sistema inmunológico reacciona de forma exagerada frente a una sustancia que normalmente no representa un peligro para la mayoría de las personas.</p>
    <p>Estas sustancias se conocen como alérgenos y pueden encontrarse en el ambiente, los alimentos, los medicamentos, los animales, el polvo, el polen, los ácaros, los hongos y diversos materiales de uso cotidiano.</p>
    <p>La forma en que una alergia se manifiesta varía entre personas. Algunas presentan síntomas respiratorios; otras desarrollan reacciones en la piel, molestias digestivas o síntomas oculares.</p>

    <h2>Síntomas que pueden afectar la vida diaria</h2>
    <p>Entre los síntomas más frecuentes se encuentran:</p>
    <ul>
      <li>Congestión nasal, estornudos y escurrimiento nasal</li>
      <li>Comezón en nariz, ojos o piel</li>
      <li>Tos, silbidos al respirar o sensación de falta de aire</li>
      <li>Ronchas y dermatitis</li>
      <li>Lagrimeo y enrojecimiento ocular</li>
      <li>Reacciones después de consumir un <a href="/padecimientos/alergias-alimentarias/">alimento</a> o utilizar un <a href="/padecimientos/alergias-a-medicamentos/">medicamento</a></li>
    </ul>
    <p>Aunque algunos síntomas parezcan leves, su repetición puede generar cansancio, irritabilidad y preocupación constante.</p>

    <h2>Cómo afectan las alergias al sueño</h2>
    <p>La congestión, la tos y la comezón pueden dificultar conciliar el sueño o provocar despertares durante la noche. Dormir mal puede ocasionar fatiga durante el día, problemas de concentración, cambios de humor, menor rendimiento escolar o laboral y dificultad para realizar actividad física.</p>
    <p>En niños, el mal descanso también puede manifestarse como irritabilidad, somnolencia o dificultad para mantener la atención.</p>

    <h2>Impacto en la escuela y el trabajo</h2>
    <p>Una persona que tiene síntomas constantes puede necesitar interrumpir sus actividades, ausentarse o evitar ciertos espacios. La <a href="/padecimientos/rinitis-alergica/">rinitis</a>, el <a href="/padecimientos/asma/">asma</a>, la <a href="/padecimientos/dermatitis-atopica/">dermatitis</a> y otras enfermedades alérgicas pueden afectar la concentración, la participación en actividades físicas, la confianza personal, la convivencia social, la productividad y la asistencia a clases o al trabajo.</p>
    <p>El objetivo del tratamiento no debe limitarse a reducir un síntoma aislado. También debe buscar que el paciente pueda retomar sus actividades con mayor seguridad y tranquilidad.</p>

    <h2>El efecto en la familia</h2>
    <p>Cuando un niño presenta alergias, madres, padres y cuidadores suelen modificar alimentos, rutinas, productos de limpieza o actividades sin tener siempre claridad sobre qué medidas son realmente necesarias. Una evaluación especializada puede ayudar a evitar restricciones excesivas y a construir un plan práctico para casa, la escuela y otros entornos.</p>
    <p>En adultos, las alergias también pueden generar preocupación por reacciones inesperadas, uso frecuente de medicamentos o dificultad para identificar los desencadenantes.</p>

    <h2>¿Por qué es importante un diagnóstico adecuado?</h2>
    <p>Los síntomas alérgicos pueden confundirse con infecciones, intolerancias, irritación u otros padecimientos. El diagnóstico comienza con una historia clínica completa. En algunos casos, la doctora puede indicar <a href="/pruebas-y-diagnostico/pruebas-cutaneas/">pruebas cutáneas</a>, <a href="/pruebas-y-diagnostico/#parche">pruebas de parche</a>, <a href="/pruebas-y-diagnostico/#espirometria">estudios de función pulmonar</a> u otros <a href="/pruebas-y-diagnostico/">análisis</a>.</p>
    <p>Las pruebas no deben interpretarse de forma aislada. Sus resultados deben relacionarse con los síntomas y antecedentes del paciente.</p>

    <h2>Tratamiento personalizado</h2>
    <p>El manejo depende del tipo de alergia, la gravedad, la edad y la forma en que los síntomas afectan a la persona. Un plan puede incluir:</p>
    <ul>
      <li>Medidas para reducir la exposición a desencadenantes relevantes</li>
      <li>Tratamientos para controlar síntomas</li>
      <li>Planes de acción y orientación para casa o escuela</li>
      <li><a href="/tratamientos/inmunoterapia/">Inmunoterapia</a> cuando está indicada</li>
      <li><a href="/tratamientos/#biotecnologicas">Terapias de alta especialidad</a> en casos seleccionados</li>
      <li>Consultas de seguimiento</li>
    </ul>
    <p>No todas las personas necesitan el mismo tratamiento.</p>

    <h2>Cuándo consultar a un especialista</h2>
    <p>Conviene solicitar una valoración cuando los síntomas duran varias semanas, las molestias reaparecen con frecuencia, el sueño o las actividades diarias están afectados, existe tos, silbidos o dificultad para respirar, aparecen ronchas o inflamación recurrentes, se sospecha una reacción a alimentos o medicamentos, un niño evita actividades o alimentos por miedo, o los tratamientos utilizados no ofrecen un control adecuado.</p>
    ${C.emergencyNotice("Ante dificultad intensa para respirar, inflamación de lengua o garganta, desmayo o una reacción rápidamente progresiva, llama al <strong>911</strong> o acude a urgencias.")}

    <h2>Vivir mejor con alergias</h2>
    <p>Una enfermedad alérgica no debe definir la vida de una persona. Con información clara, un diagnóstico adecuado y seguimiento médico, es posible reducir el impacto de los síntomas y tomar decisiones con mayor confianza.</p>
    <p>En <a href="/clinica-y-doctora/">Alergia Balance Center</a> brindamos <a href="/padecimientos/">atención para niños y adultos</a> con un enfoque personalizado y orientado a mejorar la calidad de vida.</p>
  `,
});

/* ------------------------- Artículo 2 -------------------------------- */
const article2FAQ = [
  { q: "¿La rinitis alérgica es contagiosa?", a: "No. La rinitis alérgica no es una infección y no se transmite entre personas." },
  { q: "¿La rinitis tiene cura?", a: "Depende de la causa y del tipo de rinitis. En muchos casos es posible lograr un buen control de los síntomas mediante un plan personalizado." },
  { q: "¿Puede causar cansancio?", a: "Sí. La congestión y el sueño de mala calidad pueden provocar fatiga y dificultad para concentrarse." },
  { q: "¿Solo aparece en primavera?", a: "No. Algunas personas presentan síntomas por temporadas y otras durante todo el año." },
  { q: "¿Debo hacerme pruebas de alergia?", a: "No todos los pacientes las necesitan. La indicación depende de la valoración médica." },
];

const article2 = articlePage({
  slug: "/rinitis/",
  crumb: "Rinitis",
  category: "Alergias respiratorias",
  title: "Rinitis: causas, síntomas y tratamiento | Alergia Balance",
  description:
    "Conoce qué es la rinitis, sus síntomas, causas, relación con las alergias y cuándo consultar a un especialista en alergología.",
  h1: "Rinitis: causas, síntomas y tratamientos efectivos para mejorar tu calidad de vida",
  img: "/assets/images/blog/rinitis.jpg",
  imgAlt: "Niño con pañuelo por síntomas de rinitis alérgica al aire libre",
  published: "11 de mayo de 2026",
  publishedIso: "2026-05-11",
  updated: "11 de mayo de 2026",
  updatedIso: "2026-05-11",
  ctaH: "¿La congestión y los estornudos afectan tu día a día?",
  ctaText: "Agenda una valoración en Alergia Balance Center.",
  faq: article2FAQ,
  body: `
    <p>La rinitis es una inflamación de la mucosa nasal que puede provocar congestión, estornudos, escurrimiento y comezón.</p>
    <p>Aunque muchas personas la confunden con un resfriado, la rinitis puede mantenerse durante semanas, repetirse en ciertas temporadas o presentarse durante todo el año. Cuando no está bien controlada, puede afectar el sueño, la concentración y el rendimiento diario.</p>

    <h2>Principales síntomas</h2>
    <p>Los síntomas pueden variar entre personas, pero los más frecuentes son:</p>
    <ul>
      <li>Congestión nasal y estornudos repetidos</li>
      <li>Escurrimiento nasal y comezón en nariz o garganta</li>
      <li>Ojos llorosos o irritados</li>
      <li>Disminución del olfato</li>
      <li>Tos por goteo nasal y sensación de presión facial</li>
    </ul>
    <p>También puede relacionarse con fatiga, ronquidos, respiración por la boca, irritabilidad y dificultad para dormir.</p>

    <h2>Rinitis alérgica</h2>
    <p>La <a href="/padecimientos/rinitis-alergica/">rinitis alérgica</a> ocurre cuando el sistema inmunológico reacciona frente a determinados alérgenos. Entre los desencadenantes frecuentes se encuentran los ácaros del polvo, el polen, la caspa o partículas de animales, los hongos y otros alérgenos presentes en el ambiente.</p>
    <h3>Rinitis estacional</h3>
    <p>Los síntomas aparecen principalmente en determinadas épocas del año.</p>
    <h3>Rinitis perenne</h3>
    <p>Los síntomas pueden mantenerse durante todo el año, especialmente cuando existe exposición constante a alérgenos de interiores.</p>

    <h2>Rinitis no alérgica</h2>
    <p>No toda rinitis se debe a una alergia. También puede relacionarse con cambios de temperatura, olores intensos, humo, contaminación, infecciones respiratorias, cambios hormonales, uso excesivo de descongestionantes nasales y algunos medicamentos.</p>
    <p>Identificar el tipo de rinitis es importante para elegir el manejo adecuado.</p>

    <h2>Diferencia entre rinitis y resfriado</h2>
    <p>Un resfriado suele estar causado por una infección viral y puede acompañarse de malestar general, dolor de garganta o fiebre. La rinitis alérgica suele relacionarse con comezón, estornudos repetidos y síntomas que aparecen al exponerse a ciertos ambientes. Sin embargo, los síntomas pueden parecerse; una valoración médica ayuda a diferenciarlos.</p>

    <h2>Diferencia entre rinitis y sinusitis</h2>
    <p>La rinitis afecta principalmente la mucosa de la nariz. La sinusitis involucra los senos paranasales y puede causar dolor o presión facial, secreción espesa y disminución del olfato. Ambas condiciones pueden presentarse al mismo tiempo.</p>

    <h2>Cómo se diagnostica</h2>
    <p>El diagnóstico comienza con preguntas sobre la duración de los síntomas, las épocas o lugares en que aparecen, el contacto con polvo, mascotas, humedad o polen, los antecedentes familiares, los tratamientos utilizados y la presencia de asma, dermatitis u otras alergias.</p>
    <p>Cuando es necesario, la doctora puede indicar <a href="/pruebas-y-diagnostico/pruebas-cutaneas/">pruebas cutáneas</a> u otros <a href="/pruebas-y-diagnostico/">estudios</a>. Un resultado positivo debe interpretarse junto con la historia clínica: no significa por sí solo que un alérgeno sea responsable de todos los síntomas.</p>

    <h2>Tratamiento</h2>
    <p>El tratamiento depende del tipo de rinitis, la intensidad de los síntomas y las necesidades de cada paciente. Puede incluir:</p>
    <h3>Reducción de desencadenantes</h3>
    <p>Las recomendaciones deben enfocarse en alérgenos o irritantes relevantes para el paciente, evitando cambios innecesarios.</p>
    <h3>Lavados nasales</h3>
    <p>Las soluciones salinas pueden ayudar a limpiar secreciones e irritantes. La técnica y frecuencia deben adaptarse a cada caso.</p>
    <h3>Medicamentos</h3>
    <p>El médico puede indicar tratamientos para disminuir la inflamación, la comezón, los estornudos o la congestión. No se recomienda utilizar descongestionantes nasales durante periodos prolongados sin supervisión.</p>
    <h3>Inmunoterapia</h3>
    <p>En pacientes seleccionados con rinitis alérgica, la <a href="/tratamientos/inmunoterapia/">inmunoterapia</a> puede ayudar a disminuir la sensibilidad frente a determinados alérgenos.</p>

    <h2>Rinitis en niños</h2>
    <p>En niños puede manifestarse con estornudos frecuentes, congestión, respiración por la boca, ojeras, sueño inquieto, irritabilidad y dificultad para concentrarse. Cuando los síntomas son persistentes, es importante evaluar su impacto en el sueño, el crecimiento y el rendimiento escolar.</p>

    <h2>Relación entre rinitis y asma</h2>
    <p>La nariz y los pulmones forman parte de las vías respiratorias. Algunas personas con rinitis también presentan <a href="/padecimientos/asma/">asma</a>. La presencia de tos, silbidos, opresión en el pecho o falta de aire debe comentarse durante la consulta.</p>

    <h2>Cuándo consultar</h2>
    <p>Solicita una valoración cuando los síntomas duran varias semanas, la congestión afecta el sueño, los síntomas aparecen durante gran parte del año, los medicamentos de venta libre no ofrecen control, existe tos persistente o dificultad para respirar, un niño respira por la boca de forma frecuente, o se sospecha relación con mascotas, polvo, humedad o temporadas de polen.</p>

    <h2>Preguntas frecuentes</h2>
    ${C.faq(article2FAQ)}

    <h2>Conclusión</h2>
    <p>La rinitis puede parecer un problema menor, pero sus efectos en el sueño y las actividades diarias pueden ser importantes. Una evaluación especializada permite identificar el tipo de rinitis, investigar posibles desencadenantes y definir un tratamiento adecuado.</p>
  `,
});

module.exports = [article1, article2];
