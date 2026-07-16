/**
 * Fase 2 — Páginas individuales de padecimientos, pruebas y tratamientos
 * de mayor demanda (spec §27). El contenido sigue el modelo de §25.
 */
const { renderCondition, renderTest, renderTreatment } = require("../lib/detail.js");

/* Enlaces internos reutilizables */
const R = {
  rinitis: { icon: "nose", label: "Rinitis alérgica", href: "/padecimientos/rinitis-alergica/" },
  asma: { icon: "lungs", label: "Asma", href: "/padecimientos/asma/" },
  dermatitis: { icon: "skin", label: "Dermatitis atópica", href: "/padecimientos/dermatitis-atopica/" },
  urticaria: { icon: "heart", label: "Urticaria", href: "/padecimientos/urticaria/" },
  alimentarias: { icon: "food", label: "Alergias alimentarias", href: "/padecimientos/alergias-alimentarias/" },
  medicamentos: { icon: "pill", label: "Alergias a medicamentos", href: "/padecimientos/alergias-a-medicamentos/" },
  prick: { icon: "test", label: "Pruebas cutáneas", href: "/pruebas-y-diagnostico/pruebas-cutaneas/" },
  inmuno: { icon: "syringe", label: "Inmunoterapia", href: "/tratamientos/inmunoterapia/" },
  espiro: { icon: "spiro", label: "Espirometría", href: "/pruebas-y-diagnostico/#espirometria" },
  parche: { icon: "patch", label: "Pruebas de parche", href: "/pruebas-y-diagnostico/#parche" },
};

/* ============================ PADECIMIENTOS ========================== */

const conditions = [
  {
    id: "rinitis-alergica",
    slug: "/padecimientos/rinitis-alergica/",
    crumb: "Rinitis alérgica",
    conditionName: "Rinitis alérgica",
    eyebrow: "Alergias respiratorias",
    title: "Rinitis alérgica",
    image: "Valoración de rinitis alérgica",
    summary:
      "La rinitis alérgica es una inflamación de la mucosa nasal causada por la reacción del sistema inmunológico frente a ciertos alérgenos. Puede presentarse por temporadas o durante todo el año y afectar el sueño y las actividades diarias.",
    answer:
      "La rinitis alérgica se atiende con una valoración clínica que identifica posibles desencadenantes y, cuando está indicado, pruebas cutáneas. El manejo puede incluir medidas de reducción de exposición, medicamentos e inmunoterapia según cada caso.",
    symptoms: [
      "Estornudos repetidos y escurrimiento nasal",
      "Congestión nasal y respiración por la boca",
      "Comezón en nariz, garganta u ojos",
      "Ojos llorosos o irritados",
      "Disminución del olfato y goteo nasal posterior",
    ],
    whenToConsult: [
      "Los síntomas duran varias semanas o se repiten durante el año.",
      "La congestión afecta el sueño o la concentración.",
      "Los medicamentos de venta libre no ofrecen control.",
      "Se sospecha relación con polvo, mascotas, humedad o polen.",
      "Un niño respira por la boca de forma frecuente.",
    ],
    diagnosis:
      "El estudio comienza con una historia clínica que revisa la duración de los síntomas, las épocas o lugares en que aparecen y los antecedentes familiares. Cuando es necesario, la doctora puede indicar pruebas cutáneas. Un resultado positivo debe interpretarse junto con la historia clínica.",
    related: [R.prick, R.inmuno, R.asma],
    article: "/rinitis/",
    faq: [
      { q: "¿La rinitis alérgica tiene cura?", a: "Depende de la causa y del tipo de rinitis. En muchos casos es posible lograr un buen control de los síntomas mediante un plan personalizado." },
      { q: "¿Es contagiosa?", a: "No. La rinitis alérgica no es una infección y no se transmite entre personas." },
      { q: "¿Se relaciona con el asma?", a: "La nariz y los pulmones forman parte de las vías respiratorias. Algunas personas con rinitis también presentan asma, por lo que conviene comentarlo en la consulta." },
    ],
    seoTitle: "Rinitis alérgica: síntomas y tratamiento en CDMX | Alergia Balance",
    seoDescription:
      "Atención de rinitis alérgica para niños y adultos en Roma Norte, CDMX: síntomas, diagnóstico, pruebas cutáneas e inmunoterapia según cada caso.",
  },
  {
    id: "asma",
    slug: "/padecimientos/asma/",
    crumb: "Asma",
    conditionName: "Asma bronquial",
    eyebrow: "Alergias respiratorias",
    title: "Asma bronquial",
    image: "Valoración de asma",
    summary:
      "El asma es una enfermedad inflamatoria de las vías respiratorias que puede manifestarse con tos, silbidos, presión en el pecho y dificultad para respirar. Un diagnóstico y seguimiento adecuados son importantes para mejorar el control.",
    answer:
      "El asma se valora con historia clínica y estudios de función pulmonar como la espirometría cuando están indicados. El tratamiento busca controlar la inflamación, reducir las crisis y mejorar la calidad de vida, con un plan de acción personalizado.",
    symptomsIntro:
      "Los síntomas pueden aparecer o intensificarse con el ejercicio, las infecciones respiratorias o la exposición a alérgenos:",
    symptoms: [
      "Tos, especialmente nocturna o con el ejercicio",
      "Silbidos al respirar (sibilancias)",
      "Presión u opresión en el pecho",
      "Sensación de falta de aire",
      "Despertares por dificultad para respirar",
    ],
    whenToConsult: [
      "Existe tos persistente, silbidos o falta de aire.",
      "Los síntomas interrumpen el sueño o el ejercicio.",
      "Se usan inhaladores de rescate con frecuencia.",
      "Las crisis son recurrentes o difíciles de controlar.",
      "Coexisten rinitis, dermatitis u otras alergias.",
    ],
    diagnosis:
      "La valoración integra la historia clínica y, cuando está indicada, la espirometría y la prueba de broncodilatación para estudiar la función pulmonar. Se revisan también los desencadenantes y el impacto en la vida diaria.",
    diagnosisNote:
      "<strong>Una crisis de asma con dificultad intensa para respirar es una urgencia.</strong> Llama al 911 o acude al servicio de urgencias más cercano.",
    related: [R.espiro, R.inmuno, R.rinitis],
    faq: [
      { q: "¿El asma se cura?", a: "El asma es una enfermedad crónica, pero en la mayoría de los casos puede controlarse bien con un tratamiento adecuado y seguimiento." },
      { q: "¿Puedo hacer ejercicio si tengo asma?", a: "En general sí. Con un buen control, muchas personas con asma realizan actividad física. El plan de manejo se define en la consulta." },
      { q: "¿La inmunoterapia sirve para el asma?", a: "En pacientes seleccionados con asma alérgica, la inmunoterapia puede formar parte del manejo cuando existe indicación médica." },
    ],
    seoTitle: "Asma: diagnóstico y tratamiento en CDMX | Alergia Balance",
    seoDescription:
      "Atención de asma para niños y adultos en Roma Norte, CDMX: síntomas, espirometría, plan de acción y tratamiento personalizado.",
  },
  {
    id: "dermatitis-atopica",
    slug: "/padecimientos/dermatitis-atopica/",
    crumb: "Dermatitis atópica",
    conditionName: "Dermatitis atópica",
    eyebrow: "Alergias en la piel",
    title: "Dermatitis atópica",
    image: "Valoración de dermatitis atópica",
    summary:
      "La dermatitis atópica es una enfermedad inflamatoria de la piel que suele causar resequedad, comezón y brotes recurrentes. Puede presentarse desde la infancia y requiere un manejo adaptado a cada etapa.",
    answer:
      "La dermatitis atópica se maneja con cuidado de la piel, control de la comezón y de los brotes, e identificación de factores que la agravan. Cuando se sospecha dermatitis de contacto asociada, las pruebas de parche pueden ser útiles.",
    symptoms: [
      "Piel seca y áspera",
      "Comezón intensa, a veces con alteración del sueño",
      "Brotes de enrojecimiento e inflamación",
      "Lesiones que reaparecen en pliegues o mejillas",
      "Engrosamiento de la piel por el rascado",
    ],
    whenToConsult: [
      "La comezón afecta el sueño o la concentración.",
      "Los brotes son frecuentes o difíciles de controlar.",
      "Las lesiones se infectan o supuran.",
      "Se sospecha relación con alimentos o sustancias de contacto.",
      "El tratamiento habitual no ofrece control suficiente.",
    ],
    diagnosis:
      "El diagnóstico es clínico y considera los antecedentes personales y familiares de alergia. Cuando existe sospecha de reacciones a sustancias de contacto, pueden indicarse pruebas de parche; en algunos casos se valora la sensibilidad a alérgenos.",
    related: [R.parche, R.prick, R.urticaria],
    faq: [
      { q: "¿La dermatitis atópica es contagiosa?", a: "No. No es una infección y no se transmite entre personas." },
      { q: "¿Debo eliminar alimentos de la dieta?", a: "No elimines alimentos por tu cuenta, especialmente en niños. La relación con alimentos debe valorarse médicamente antes de hacer cambios." },
      { q: "¿Se puede controlar?", a: "En muchos casos es posible reducir la frecuencia e intensidad de los brotes con un plan de cuidado de la piel y tratamiento adecuados." },
    ],
    seoTitle: "Dermatitis atópica: tratamiento en CDMX | Alergia Balance",
    seoDescription:
      "Atención de dermatitis atópica para niños y adultos en Roma Norte, CDMX: control de brotes, comezón, pruebas de parche y manejo personalizado.",
  },
  {
    id: "urticaria",
    slug: "/padecimientos/urticaria/",
    crumb: "Urticaria",
    conditionName: "Urticaria",
    eyebrow: "Alergias en la piel",
    title: "Urticaria y ronchas",
    image: "Valoración de urticaria",
    summary:
      "La urticaria produce ronchas elevadas, comezón y, en ocasiones, inflamación. Puede ser aguda o mantenerse durante semanas. La evaluación depende de la duración, la frecuencia y las características de los episodios.",
    answer:
      "La urticaria se valora identificando posibles desencadenantes y diferenciándola de otras causas. El manejo busca controlar la comezón y las ronchas; en la urticaria persistente se investiga el contexto completo del paciente.",
    symptoms: [
      "Ronchas elevadas que aparecen y desaparecen",
      "Comezón, a veces intensa",
      "Inflamación de labios o párpados (angioedema)",
      "Episodios que cambian de lugar en el cuerpo",
      "Lesiones que reaparecen por semanas en casos crónicos",
    ],
    whenToConsult: [
      "Las ronchas reaparecen con frecuencia o duran semanas.",
      "Se acompañan de inflamación de labios o párpados.",
      "Interfieren con el sueño o las actividades diarias.",
      "Se sospecha relación con alimentos o medicamentos.",
      "Los tratamientos habituales no ofrecen control.",
    ],
    diagnosis:
      "La valoración revisa la duración, la frecuencia, los posibles desencadenantes y los antecedentes. Según el caso, pueden indicarse estudios para orientar el diagnóstico; no siempre se identifica una única causa.",
    diagnosisNote:
      "<strong>La inflamación de lengua o garganta, la dificultad para respirar o una reacción rápidamente progresiva requieren atención de urgencia.</strong> Llama al 911 o acude a urgencias.",
    related: [R.prick, R.alimentarias, R.medicamentos],
    faq: [
      { q: "¿La urticaria siempre es por alergia?", a: "No. Muchos casos, sobre todo los crónicos, no se deben a una alergia identificable. La valoración ayuda a orientar la causa." },
      { q: "¿Cuánto dura?", a: "La urticaria aguda suele durar días; la crónica puede mantenerse durante semanas o más y requiere seguimiento." },
      { q: "¿Puedo tomar antihistamínicos por mi cuenta?", a: "Consulta antes de iniciar o combinar medicamentos. El plan de tratamiento debe adaptarse a cada caso." },
    ],
    seoTitle: "Urticaria y ronchas: tratamiento en CDMX | Alergia Balance",
    seoDescription:
      "Atención de urticaria aguda y crónica para niños y adultos en Roma Norte, CDMX: causas, diagnóstico y manejo de ronchas y comezón.",
  },
  {
    id: "alergias-alimentarias",
    slug: "/padecimientos/alergias-alimentarias/",
    crumb: "Alergias alimentarias",
    conditionName: "Alergia alimentaria",
    eyebrow: "Alergias alimentarias",
    title: "Alergias alimentarias",
    image: "Valoración de alergias alimentarias",
    summary:
      "Las reacciones relacionadas con alimentos pueden presentarse de distintas formas. Es importante diferenciarlas de las intolerancias y de otras enfermedades digestivas mediante una valoración especializada.",
    answer:
      "La alergia alimentaria se estudia considerando el alimento sospechoso, el tiempo en que aparecieron los síntomas, la cantidad consumida y los antecedentes. El objetivo es un diagnóstico preciso que evite restricciones innecesarias.",
    symptoms: [
      "Ronchas, comezón o inflamación después de comer",
      "Malestar digestivo, vómito o dolor abdominal",
      "Síntomas respiratorios asociados",
      "Reacciones que aparecen poco después del alimento",
      "En casos graves, reacción rápidamente progresiva",
    ],
    whenToConsult: [
      "Aparecen síntomas después de consumir un alimento.",
      "Existe duda sobre qué alimento provoca la reacción.",
      "Un niño evita alimentos por miedo a una reacción.",
      "Se han hecho dietas restrictivas sin diagnóstico claro.",
      "Se busca confirmar o descartar una alergia alimentaria.",
    ],
    diagnosis:
      "La valoración integra la historia clínica detallada y, cuando está indicado, pruebas cutáneas u otros estudios. La interpretación siempre se relaciona con los síntomas: una prueba positiva no confirma por sí sola una alergia.",
    diagnosisNote:
      "<strong>No elimines alimentos esenciales ni realices dietas restrictivas sin orientación médica, especialmente en niños.</strong> Ante una reacción grave, llama al 911.",
    related: [R.prick, R.urticaria, R.dermatitis],
    faq: [
      { q: "¿Alergia e intolerancia son lo mismo?", a: "No. La alergia involucra al sistema inmunológico; la intolerancia tiene otros mecanismos. Diferenciarlas es parte de la valoración." },
      { q: "¿Se puede superar una alergia alimentaria?", a: "Algunas alergias, sobre todo en la infancia, pueden modificarse con el tiempo. El seguimiento médico ayuda a determinarlo." },
      { q: "¿Necesito llevar una lista de alimentos?", a: "Sí. Anotar qué se consumió, cuándo aparecieron los síntomas y su intensidad ayuda mucho a la valoración." },
    ],
    seoTitle: "Alergias alimentarias: diagnóstico en CDMX | Alergia Balance",
    seoDescription:
      "Atención de alergias alimentarias para niños y adultos en Roma Norte, CDMX: diagnóstico, pruebas y manejo sin restricciones innecesarias.",
  },
  {
    id: "alergias-a-medicamentos",
    slug: "/padecimientos/alergias-a-medicamentos/",
    crumb: "Alergias a medicamentos",
    conditionName: "Alergia a medicamentos",
    eyebrow: "Reacciones a medicamentos",
    title: "Alergias a medicamentos",
    image: "Valoración de reacciones a medicamentos",
    summary:
      "Haber presentado una reacción a un medicamento no siempre significa que exista una alergia confirmada. La valoración médica ayuda a reducir riesgos y a orientar alternativas seguras cuando es posible.",
    answer:
      "La reacción a medicamentos se estudia revisando qué fármaco se utilizó, qué síntomas aparecieron, cuánto tiempo pasó y qué otros factores estaban presentes. El objetivo es orientar alternativas seguras y reducir riesgos futuros.",
    symptoms: [
      "Ronchas, comezón o erupciones en la piel",
      "Inflamación de labios, párpados o rostro",
      "Síntomas respiratorios o digestivos",
      "Reacciones tras iniciar un medicamento",
      "En casos graves, reacción rápidamente progresiva",
    ],
    whenToConsult: [
      "Se presentó una reacción tras tomar un medicamento.",
      "Existe duda sobre qué fármaco la provocó.",
      "Se necesita usar un medicamento relacionado.",
      "Hay antecedentes de reacciones a varios fármacos.",
      "Se busca confirmar o descartar una alergia.",
    ],
    diagnosis:
      "La valoración revisa el historial completo del episodio y los medicamentos involucrados. Con base en ello, la doctora orienta el manejo y, cuando es posible, alternativas seguras. No suspendas ni inicies tratamientos por tu cuenta.",
    diagnosisNote:
      "<strong>Una reacción con dificultad para respirar o inflamación de lengua o garganta es una urgencia.</strong> Llama al 911 o acude a urgencias.",
    related: [R.prick, R.urticaria, { icon: "calendar", label: "Agendar evaluación", href: "/contacto/" }],
    faq: [
      { q: "¿Puedo volver a usar el medicamento que me causó la reacción?", a: "No lo decidas por tu cuenta. La valoración médica determina el riesgo y las alternativas posibles." },
      { q: "¿Una reacción confirma siempre una alergia?", a: "No. Existen otras causas de reacciones. Por eso es importante estudiar cada caso." },
      { q: "¿Qué información debo llevar?", a: "El nombre del medicamento, la fecha, los síntomas que presentaste y cualquier estudio o receta relacionada." },
    ],
    seoTitle: "Alergia a medicamentos: evaluación en CDMX | Alergia Balance",
    seoDescription:
      "Evaluación de reacciones a medicamentos para niños y adultos en Roma Norte, CDMX, para reducir riesgos y orientar alternativas seguras.",
  },
];

/* =============================== PRUEBAS ============================= */

const tests = [
  {
    id: "pruebas-cutaneas",
    slug: "/pruebas-y-diagnostico/pruebas-cutaneas/",
    crumb: "Pruebas cutáneas",
    title: "Pruebas cutáneas Prick",
    image: "Pruebas cutáneas de alergia",
    img: "/assets/images/pruebas/prick-cutaneas.jpg",
    summary:
      "Las pruebas cutáneas Prick evalúan la respuesta de la piel frente a distintos alérgenos. Se interpretan siempre junto con los síntomas y antecedentes del paciente.",
    answer:
      "Las pruebas cutáneas Prick ayudan a investigar la sensibilidad a alérgenos ambientales, respiratorios o alimentarios de acuerdo con la sospecha clínica. Un resultado positivo no significa por sí solo que una sustancia sea la causa de todos los síntomas.",
    whatIsIt:
      "Son estudios realizados sobre la piel en los que se colocan pequeñas cantidades de alérgenos seleccionados para observar la respuesta bajo supervisión médica.",
    whatIsItFor:
      "Pueden ayudar a investigar sensibilidad a alérgenos ambientales, respiratorios o alimentarios, según la sospecha clínica y la valoración médica.",
    howItIsDone:
      "Se aplican pequeñas gotas de los alérgenos en el antebrazo o la espalda y se realiza una punción superficial. La lectura se hace a los pocos minutos, evaluando la reacción de la piel.",
    preparation: [
      "Confirma si debes suspender algún medicamento (por ejemplo, antihistamínicos).",
      "No suspendas ningún tratamiento sin indicación médica.",
      "Informa si has tenido una reacción alérgica grave.",
      "Notifica si estás embarazada.",
      "Evita colocar cremas en la zona de prueba cuando el equipo lo indique.",
    ],
    ageNotes:
      "Las indicaciones pueden cambiar según la edad, el tipo de prueba y la historia clínica. El equipo confirmará la preparación adecuada al agendar.",
    related: [R.rinitis, R.asma, R.alimentarias],
    faq: [
      { q: "¿Son dolorosas?", a: "Suelen ser molestas más que dolorosas: la punción es superficial. Puede aparecer comezón temporal en las zonas positivas." },
      { q: "¿Se realizan el mismo día de la consulta?", a: "Depende de la preparación requerida, la disponibilidad y la valoración médica. El equipo confirmará las indicaciones al agendar." },
      { q: "¿Un resultado positivo confirma la alergia?", a: "No por sí solo. El resultado debe interpretarse junto con los síntomas y antecedentes del paciente." },
    ],
    seoTitle: "Pruebas cutáneas de alergia (Prick) en CDMX | Alergia Balance",
    seoDescription:
      "Pruebas cutáneas Prick para evaluar la sensibilidad a alérgenos en Roma Norte, CDMX. Preparación, procedimiento e interpretación médica.",
  },
];

/* ============================ TRATAMIENTOS ========================== */

const treatments = [
  {
    id: "inmunoterapia",
    slug: "/tratamientos/inmunoterapia/",
    crumb: "Inmunoterapia",
    title: "Inmunoterapia para alergias",
    image: "Inmunoterapia para alergias",
    summary:
      "La inmunoterapia administra cantidades controladas de determinados alérgenos para modificar progresivamente la respuesta del sistema inmunológico. No está indicada para todas las personas ni para todos los tipos de alergia.",
    answer:
      "La inmunoterapia puede ayudar a disminuir la sensibilidad frente a alérgenos seleccionados cuando existe indicación médica. Se administra de forma sublingual o subcutánea, con un esquema personalizado y seguimiento continuo.",
    howItWorks:
      "Se administran dosis controladas y progresivas de los alérgenos seleccionados, por vía sublingual (debajo de la lengua) o subcutánea (inyecciones programadas). El esquema es personalizado y requiere seguimiento médico para evaluar la respuesta.",
    candidates: [
      "Pacientes con rinitis alérgica no controlada con otras medidas",
      "Pacientes seleccionados con asma alérgica",
      "Casos con sensibilidad demostrada a alérgenos relevantes",
      "Cuando existe indicación médica tras la valoración",
    ],
    goals: [
      "Disminuir la intensidad de los síntomas",
      "Reducir la sensibilidad frente a alérgenos seleccionados",
      "Mejorar el control a largo plazo",
      "Favorecer una mejor calidad de vida",
    ],
    variability: "Los resultados y la duración del tratamiento varían entre pacientes.",
    followUp:
      "El tratamiento se acompaña de consultas de seguimiento para revisar la respuesta, la tolerancia y la adherencia, y para ajustar el esquema cuando sea necesario.",
    importantNote:
      "La inmunoterapia se administra bajo supervisión médica. Informa siempre sobre reacciones previas y no modifiques las dosis por tu cuenta.",
    related: [R.rinitis, R.asma, R.alimentarias],
    faq: [
      { q: "¿Cuánto dura la inmunoterapia?", a: "Suele ser un tratamiento de varios años. La duración exacta depende de cada paciente y se define durante el seguimiento." },
      { q: "¿Sublingual o subcutánea?", a: "La vía se elige según el caso, el tipo de alérgeno y las preferencias, siempre con criterio médico." },
      { q: "¿Es para cualquier alergia?", a: "No. Está indicada para pacientes seleccionados y determinados alérgenos, de acuerdo con el diagnóstico y la valoración." },
    ],
    seoTitle: "Inmunoterapia para alergias en CDMX | Alergia Balance",
    seoDescription:
      "Inmunoterapia sublingual y subcutánea para alergias en Roma Norte, CDMX. Candidatos, objetivos y seguimiento, según indicación médica.",
  },
];

module.exports = [
  ...conditions.map(renderCondition),
  ...tests.map(renderTest),
  ...treatments.map(renderTreatment),
];
