# Alergia Balance Center
## Especificación integral para rediseño y desarrollo web

**Versión:** 1.0  
**Objetivo principal:** presentar claramente los padecimientos, pruebas y tratamientos de la clínica; fortalecer la confianza en Alergia Balance Center y en la Dra. María de Jesús Vázquez García; y convertir más visitas en citas.  
**Sitio actual:** `https://alergiabalance.com/`  
**Idioma principal:** español de México.  
**Audiencias:** pacientes adultos, madres y padres de pacientes pediátricos, cuidadores y personas que buscan una segunda opinión médica.

---

# 1. Resumen ejecutivo

El nuevo sitio debe dejar de sentirse como una plantilla médica genérica y convertirse en una experiencia clara, confiable y orientada a conversión.

La ruta principal del usuario debe ser:

**Síntoma o necesidad → padecimiento → evaluación y pruebas → tratamiento → confianza en la clínica y la doctora → cita**

El sitio debe comunicar dos activos de confianza al mismo nivel:

1. **Alergia Balance Center como clínica:** un espacio profesional, seguro, cercano y especializado en alergia e inmunología.
2. **La Dra. María de Jesús Vázquez García:** alergóloga e inmunóloga pediatra con más de 20 años de experiencia, formación especializada, certificación y experiencia académica y médico-científica.

La información debe ser fácil de leer. Evitar párrafos largos, exceso de tecnicismos y promesas absolutas. Cada página debe tener un objetivo claro y al menos una llamada a la acción para agendar.

---

# 2. Información base y reglas de publicación

## 2.1 Nombre de marca

**Alergia Balance Center**

Usar esta escritura en encabezados, metadatos, datos estructurados y pie de página.

En textos corridos también puede utilizarse:

**AlergiaBalance**

No mezclar variaciones como “Alergiabalance”, “Alergia Balance” y “AlergiaBalance Center” sin criterio.

## 2.2 Doctora

**Nombre completo:** Dra. María de Jesús Vázquez García  
**Especialidad principal:** Alergología e Inmunología Clínica Pediátrica  
**Descriptor corto permitido:** Alergia · Asma · Inmunología  
**Experiencia:** más de 20 años

## 2.3 Datos de contacto actuales

> Estos datos provienen del sitio actual. Deben confirmarse antes de publicar la versión final.

- **Teléfono y WhatsApp:** +52 55 2755 6281
- **Correo:** mariajvazquez.alergia@gmail.com
- **Dirección publicada actualmente:** Sinaloa 106, consultorio 701, Colonia Roma Norte, C.P. 06700, Ciudad de México
- **Horario publicado actualmente:** martes a viernes de 12:00 a 19:00; sábado de 11:00 a 14:00; domingo cerrado

## 2.4 Nota sobre Guadalajara

La referencia visual proporcionada incluye una promoción temporal en Guadalajara y la dirección:

**Lacandones 256, Fracc. Monráz, Guadalajara, Jalisco**

No utilizar esta dirección como ubicación permanente o sede principal en el sitio sin confirmación expresa. La imagen se toma principalmente como referencia de color, estilo y lenguaje visual.

## 2.5 Reglas médicas y de confianza

- No prometer curas ni resultados garantizados.
- No afirmar que una prueba por sí sola determina la causa de todos los síntomas.
- Usar expresiones como “puede ayudar a identificar”, “cuando está clínicamente indicada” y “de acuerdo con la valoración médica”.
- No publicar testimonios inventados, genéricos o provenientes de plantillas.
- No mostrar calificaciones, número de pacientes, premios o asociaciones sin poder comprobarlos.
- No presentar WhatsApp como sustituto de un servicio de urgencias.
- Mostrar un aviso claro: ante una emergencia médica, llamar al 911 o acudir a urgencias.
- Los contenidos médicos deben aparecer como revisados por la Dra. María de Jesús Vázquez García.

---

# 3. Objetivos del sitio

## Objetivos principales

1. Conseguir más solicitudes de cita por WhatsApp, llamada o formulario.
2. Explicar de forma clara qué padecimientos atiende la clínica.
3. Mostrar qué pruebas y tratamientos ofrece.
4. Generar confianza antes de la primera consulta.
5. Posicionar a Alergia Balance Center en búsquedas locales y en respuestas generadas por asistentes de inteligencia artificial.
6. Construir una base escalable para publicar más páginas de padecimientos y artículos en el futuro.

## Conversiones principales

- Clic en **Agendar consulta**
- Clic en **WhatsApp**
- Clic en **Llamar**
- Envío del formulario
- Clic en **Cómo llegar**
- Clic desde una página de padecimiento hacia la agenda

---

# 4. Arquitectura del sitio

## 4.1 Rutas principales

```text
/
├── /padecimientos/
├── /pruebas-y-diagnostico/
├── /tratamientos/
├── /clinica-y-doctora/
├── /blog/
│   ├── /alergias-y-calidad-de-vida/
│   └── /rinitis/
├── /contacto/
├── /aviso-de-privacidad/
└── /gracias/
```

## 4.2 Menú principal

- Inicio
- Padecimientos
- Pruebas y diagnóstico
- Tratamientos
- Clínica y doctora
- Blog
- Contacto
- **Botón:** Agendar consulta

## 4.3 Barra superior

**Roma Norte, CDMX · Atención para niños y adultos · Citas por WhatsApp**

En móvil, reducir a:

**Niños y adultos · Agendar por WhatsApp**

## 4.4 Navegación móvil fija

Mostrar una barra inferior fija con tres acciones:

- **WhatsApp**
- **Llamar**
- **Agendar**

No debe cubrir formularios, avisos de cookies ni contenido importante.

---

# 5. Sistema de diseño

## 5.1 Dirección visual

La identidad debe sentirse:

- Médica y profesional
- Cercana y humana
- Limpia y contemporánea
- Confiable, sin ser fría
- Especializada, sin ser excesivamente técnica

Evitar:

- Apariencia de hospital genérico
- Plantillas dentales o imágenes que no correspondan a alergología
- Exceso de degradados
- Ilustraciones infantiles en toda la web
- Fotografías de stock demasiado artificiales
- Saturación de iconos y recuadros

## 5.2 Activos proporcionados

```text
/assets/alergia-balance-logo.png
/assets/referencia-visual-colores.png
```

El logo debe tener suficiente espacio de protección y nunca colocarse sobre fondos que dificulten la lectura.

## 5.3 Paleta recomendada

Paleta derivada del logo y de la referencia visual:

| Uso | Color | Hex |
|---|---|---|
| Azul marino principal | Confianza, encabezados, navegación | `#071E55` |
| Turquesa principal | CTA, enlaces, íconos, elementos activos | `#137E88` |
| Morado secundario | Detalles, categorías y campañas | `#60328F` |
| Dorado de marca | Logo, líneas finas y acentos premium | `#B4771F` |
| Gris carbón | Texto principal | `#3F3D3B` |
| Gris medio | Texto secundario | `#6B6B6B` |
| Fondo cálido | Fondo general | `#FAF9F6` |
| Fondo turquesa suave | Tarjetas y bloques informativos | `#E8F3F4` |
| Fondo morado suave | Tarjetas secundarias | `#F1ECF7` |
| Blanco | Tarjetas y contraste | `#FFFFFF` |

### Distribución recomendada

- 55% blanco y fondo cálido
- 20% azul marino
- 15% turquesa
- 5% morado
- 5% dorado y detalles

El dorado debe funcionar como acento de marca, no como color principal de botones.

## 5.4 Tipografía

### Opción recomendada

- **Encabezados:** Manrope, 600–800
- **Texto y componentes:** Inter, 400–600

### Alternativa

- **Encabezados:** Montserrat
- **Texto:** Source Sans 3

No usar más de dos familias tipográficas.

## 5.5 Escala tipográfica

```css
--display-xl: clamp(2.5rem, 6vw, 4.75rem);
--display-lg: clamp(2.1rem, 4.5vw, 3.75rem);
--heading-1: clamp(2rem, 4vw, 3.25rem);
--heading-2: clamp(1.65rem, 3vw, 2.5rem);
--heading-3: clamp(1.25rem, 2vw, 1.65rem);
--body-lg: 1.125rem;
--body: 1rem;
--small: 0.875rem;
```

## 5.6 Componentes

- Botones con altura mínima de 48 px.
- Radio de borde: 14–22 px.
- Tarjetas con borde suave y sombra muy ligera.
- Ancho máximo de contenido: 1180–1240 px.
- Ancho máximo de párrafos: 680–760 px.
- Separación vertical entre secciones: 80–120 px en escritorio y 56–80 px en móvil.
- Iconos lineales, consistentes y simples.
- Usar fotografías reales de la doctora, la clínica, el consultorio y el equipo.
- Evitar carruseles automáticos.
- Usar animaciones discretas; respetar `prefers-reduced-motion`.

## 5.7 Botones

### Primario

- Fondo turquesa
- Texto blanco
- Hover azul marino
- Copy principal: **Agendar consulta**

### Secundario

- Borde azul marino
- Texto azul marino
- Fondo transparente
- Copy según contexto: **Ver servicios**, **Conocer la clínica**, **Cómo llegar**

### WhatsApp

- Puede usar el turquesa de marca.
- No es necesario usar verde WhatsApp en toda la interfaz.
- Incluir icono para reconocimiento.

---

# 6. Componentes globales y microcopy

## 6.1 CTA principal

**Agendar consulta**

## 6.2 CTA de WhatsApp

**Escribir por WhatsApp**

### Mensaje precargado

```text
Hola, me gustaría agendar una consulta en Alergia Balance Center. ¿Me pueden compartir disponibilidad?
```

### URL

```text
https://wa.me/525527556281?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20en%20Alergia%20Balance%20Center.%20%C2%BFMe%20pueden%20compartir%20disponibilidad%3F
```

## 6.3 Formulario

### Campos

- Nombre completo
- Teléfono
- Correo electrónico, opcional
- La consulta es para:
  - Niño o adolescente
  - Adulto
- Motivo principal de consulta
- Horario preferido
- Casilla de aceptación del aviso de privacidad

### Botón

**Solicitar cita**

### Mensaje de éxito

**Recibimos tu solicitud. El equipo de Alergia Balance Center se pondrá en contacto contigo para confirmar disponibilidad.**

### Mensaje de error

**No pudimos enviar tu solicitud. Inténtalo nuevamente o escríbenos por WhatsApp.**

### Aviso debajo del formulario

**Este formulario no es un canal de urgencias. Ante una emergencia médica, llama al 911 o acude al servicio de urgencias más cercano.**

## 6.4 Breadcrumbs

Ejemplo:

```text
Inicio / Pruebas y diagnóstico / Pruebas cutáneas
```

## 6.5 Autoría médica

Al final de artículos y páginas clínicas:

**Contenido revisado por la Dra. María de Jesús Vázquez García, especialista en Alergología e Inmunología Clínica Pediátrica.**

---

# 7. Página de inicio

**Ruta:** `/`

## 7.1 SEO

**Title:** Clínica de Alergia e Inmunología en CDMX | Alergia Balance  
**Meta description:** Atención especializada para niños y adultos con rinitis, asma, dermatitis, urticaria y otras alergias. Agenda una consulta en Roma Norte, CDMX.  
**H1:** Clínica de Alergia e Inmunología en Roma Norte, CDMX

## 7.2 Hero

### Eyebrow

**ALERGIA · ASMA · INMUNOLOGÍA**

### H1

# Clínica de Alergia e Inmunología en Roma Norte, CDMX

### Texto

Atención especializada para niños y adultos con rinitis, asma, dermatitis, urticaria, alergias alimentarias y otros padecimientos alérgicos.

En Alergia Balance Center combinamos evaluación clínica, pruebas diagnósticas, tratamientos personalizados y acompañamiento cercano para ayudarte a comprender y controlar tus síntomas.

### Botones

- **Agendar consulta**
- **Escribir por WhatsApp**

### Indicadores de confianza

- Más de 20 años de experiencia
- Atención para niños y adultos
- Certificación CONICA
- Diagnóstico y tratamiento personalizado

### Dirección visual

- Texto a la izquierda.
- Fotografía profesional real de la doctora en el consultorio a la derecha.
- Fondo cálido con formas orgánicas muy discretas.
- Usar turquesa y azul marino como colores principales.
- El dorado del logo puede aparecer en una línea o detalle pequeño.

---

## 7.3 Síntomas

### Eyebrow

**¿CÓMO PODEMOS AYUDARTE?**

### H2

## ¿Presentas alguno de estos síntomas?

### Introducción

Los síntomas alérgicos pueden afectar la respiración, la piel, el descanso y las actividades diarias. Una valoración especializada ayuda a identificar posibles desencadenantes y definir el manejo adecuado para cada paciente.

### Tarjeta 1

#### Alergias respiratorias

- Estornudos frecuentes
- Congestión nasal
- Tos persistente
- Silbidos o dificultad para respirar

**CTA:** Conocer alergias respiratorias

### Tarjeta 2

#### Alergias en la piel

- Ronchas
- Comezón
- Irritación
- Dermatitis recurrente

**CTA:** Conocer alergias de la piel

### Tarjeta 3

#### Reacciones a alimentos o medicamentos

- Inflamación
- Malestar después de comer
- Reacciones cutáneas
- Síntomas después de tomar un medicamento

**CTA:** Conocer estas alergias

### Tarjeta 4

#### Alergias en niños

- Síntomas respiratorios recurrentes
- Dermatitis
- Alergias alimentarias
- Molestias que afectan el sueño o la escuela

**CTA:** Conocer la atención pediátrica

### Bloque inferior

**No necesitas saber qué tipo de alergia tienes para solicitar una valoración.**

**Botón:** Agendar valoración

---

## 7.4 Cómo ayudamos

### Eyebrow

**ATENCIÓN INTEGRAL**

### H2

## De la evaluación al seguimiento

### Texto

Cada paciente requiere una valoración individual. Nuestro proceso integra historia clínica, exploración, pruebas cuando están indicadas y un plan de tratamiento adaptado a sus necesidades.

### Paso 1

#### Evaluación especializada

Revisamos síntomas, antecedentes, posibles desencadenantes y el impacto que el padecimiento tiene en la vida diaria.

### Paso 2

#### Pruebas y diagnóstico

Cuando son necesarias, realizamos estudios para obtener más información y orientar el diagnóstico de forma precisa.

### Paso 3

#### Tratamiento personalizado

Diseñamos un plan para controlar síntomas, reducir riesgos y mejorar la calidad de vida a corto y largo plazo.

**Botón:** Conocer nuestros servicios

---

## 7.5 Padecimientos

### Eyebrow

**PADECIMIENTOS QUE ATENDEMOS**

### H2

## Atención especializada para distintos tipos de alergia

### Introducción

Atendemos enfermedades alérgicas respiratorias, cutáneas, digestivas, oculares y relacionadas con medicamentos en pacientes pediátricos y adultos.

### Tarjetas

#### Rinitis alérgica

Congestión, estornudos, comezón y secreción nasal que pueden presentarse por temporadas o durante todo el año.

#### Asma y alergias respiratorias

Valoración de tos crónica, silbidos, falta de aire y otros síntomas respiratorios.

#### Dermatitis

Atención de dermatitis atópica, dermatitis de contacto, irritación y comezón persistente.

#### Urticaria y ronchas

Evaluación de ronchas, inflamación y episodios recurrentes en la piel.

#### Alergias alimentarias

Valoración de posibles reacciones relacionadas con alimentos y enfermedades digestivas asociadas.

#### Alergias a medicamentos

Evaluación de reacciones previas para orientar el manejo y reducir riesgos futuros.

#### Alergias oculares

Atención de comezón, lagrimeo, enrojecimiento e irritación ocular relacionados con alergias.

#### Rinosinusitis y tos crónica

Estudio de síntomas persistentes de nariz, senos paranasales y vías respiratorias.

**Botón:** Ver todos los padecimientos

---

## 7.6 Clínica y doctora

> Esta sección debe presentar a la clínica y a la doctora como una sola experiencia de atención, no como elementos aislados.

### Eyebrow

**EXPERIENCIA, CONFIANZA Y ACOMPAÑAMIENTO**

### H2

## Atención médica especializada en un entorno cercano y profesional

### Texto principal

En Alergia Balance Center combinamos la experiencia de la Dra. María de Jesús Vázquez García con un espacio pensado para brindar atención segura, clara y personalizada.

La clínica atiende a niños y adultos con enfermedades alérgicas e inmunológicas mediante una valoración integral, herramientas diagnósticas y seguimiento continuo. El objetivo no es únicamente controlar síntomas, sino ayudar a cada paciente y a su familia a comprender el padecimiento y tomar decisiones informadas sobre su salud.

### Columna clínica

#### Alergia Balance Center

Un espacio profesional y confiable para la evaluación, diagnóstico y tratamiento de enfermedades alérgicas.

- Atención para niños y adultos
- Evaluación integral
- Pruebas diagnósticas cuando están indicadas
- Tratamientos personalizados
- Acompañamiento para pacientes y familias

### Columna doctora

#### Dra. María de Jesús Vázquez García

Alergóloga e inmunóloga pediatra, académica y asesora médico-científica con más de 20 años de experiencia.

- Especialidad en Pediatría
- Subespecialidad en Alergia e Inmunología Clínica
- Certificación por CONICA
- Académica en la UNAM
- Experiencia en terapias de alta especialidad

### Cierre

**Medicina especializada con un trato humano, cercano y orientado a mejorar tu calidad de vida.**

**Botón:** Conocer la clínica y a la doctora

### Dirección visual

- Sección dividida en dos columnas.
- Incluir una fotografía de la doctora y una fotografía real del consultorio.
- En móvil, primero mostrar a la doctora y después el espacio clínico.
- Puede utilizarse un fondo azul marino con tarjetas blancas o un fondo cálido con detalles dorados.

---

## 7.7 Atención por etapa de vida

### H2

## Atención especializada en cada etapa de la vida

### Bloque 1

#### Alergología pediátrica

Atención cercana para bebés, niños y adolescentes con enfermedades alérgicas respiratorias, alimentarias y cutáneas.

El acompañamiento incluye orientación para madres, padres y cuidadores, con recomendaciones adaptadas a la vida en casa, la escuela y las actividades cotidianas.

**CTA:** Conocer atención pediátrica

### Bloque 2

#### Alergología para adultos

Evaluación y tratamiento de alergias que afectan la respiración, la piel, la alimentación, el descanso y las actividades diarias.

Cada plan se define de acuerdo con la historia clínica, los síntomas y las necesidades de la persona.

**CTA:** Conocer atención para adultos

---

## 7.8 Pruebas y tratamientos destacados

### Eyebrow

**DIAGNÓSTICO Y MANEJO PERSONALIZADO**

### H2

## Pruebas y tratamientos de acuerdo con cada caso

### Tarjeta 1

#### Pruebas cutáneas

Ayudan a evaluar la sensibilidad frente a diferentes alérgenos y deben interpretarse junto con los síntomas y antecedentes del paciente.

### Tarjeta 2

#### Pruebas de parche

Se utilizan para investigar posibles causas de dermatitis de contacto y reacciones tardías en la piel.

### Tarjeta 3

#### Espirometría

Permite valorar la función pulmonar en pacientes con asma, tos persistente o dificultad respiratoria.

### Tarjeta 4

#### Inmunoterapia

Tratamiento que puede ayudar a disminuir progresivamente la sensibilidad a determinados alérgenos cuando existe una indicación médica.

**Botón:** Ver pruebas y tratamientos

---

## 7.9 Proceso de atención

### H2

## Tu atención en cuatro pasos

### Paso 1

#### Agenda tu consulta

Elige la opción de contacto que prefieras y solicita una fecha disponible.

### Paso 2

#### Valoración especializada

Revisamos síntomas, antecedentes, tratamientos previos y posibles desencadenantes.

### Paso 3

#### Estudios cuando sean necesarios

La doctora determina qué pruebas pueden aportar información útil para tu caso.

### Paso 4

#### Tratamiento y seguimiento

Recibes un plan personalizado y acompañamiento para evaluar tu evolución.

---

## 7.10 Testimonios

No publicar esta sección hasta contar con testimonios reales, verificables y autorizados.

### Título reservado

## Experiencias de nuestros pacientes

### Reglas

- No usar los testimonios dentales de la plantilla actual.
- No utilizar “Paciente AlergiaBalance” como si fuera una opinión comprobada.
- Preferir reseñas verificadas de Google o Doctoralia.
- Mostrar la fuente.
- Solicitar autorización cuando se muestre nombre, fotografía o detalles clínicos.
- No agregar estrellas mediante datos estructurados si no cumplen las políticas de la plataforma.

Si no existen testimonios verificados al momento del lanzamiento, ocultar completamente este módulo.

---

## 7.11 Blog

### Eyebrow

**INFORMACIÓN PARA CUIDAR TU SALUD**

### H2

## Aprende más sobre alergias e inmunología

### Texto

Contenido educativo para comprender mejor los síntomas, los posibles desencadenantes y la importancia de recibir una valoración especializada.

### Entrada 1

#### Alergias y calidad de vida

Las alergias pueden afectar el sueño, la concentración, el rendimiento y las actividades cotidianas. Conoce por qué un diagnóstico adecuado puede marcar una diferencia.

**CTA:** Leer artículo

### Entrada 2

#### Rinitis: causas, síntomas y tratamientos efectivos para mejorar tu calidad de vida

Conoce qué es la rinitis, cuáles son sus síntomas más frecuentes y en qué momento conviene consultar a un especialista.

**CTA:** Leer artículo

**Botón general:** Ver blog

---

## 7.12 Preguntas frecuentes

### H2

## Preguntas frecuentes antes de tu consulta

### ¿Cuándo debería consultar a un alergólogo?

Cuando los síntomas son frecuentes, persisten durante varias semanas, afectan el sueño o las actividades diarias, aparecen después de comer o tomar un medicamento, o no mejoran con el manejo habitual.

### ¿Atienden niños y adultos?

Sí. Alergia Balance Center brinda atención especializada para pacientes pediátricos y adultos.

### ¿Qué sucede durante la primera consulta?

Se revisan los síntomas, antecedentes personales y familiares, tratamientos previos y posibles desencadenantes. Con base en la valoración, la doctora determina si es necesario realizar estudios adicionales.

### ¿Las pruebas de alergia se realizan el mismo día?

Depende del tipo de prueba, la preparación requerida, la disponibilidad y la valoración médica. El equipo confirmará las indicaciones correspondientes al agendar.

### ¿Debo suspender medicamentos antes de una prueba?

Algunos medicamentos pueden interferir con determinados estudios. No suspendas ningún tratamiento por tu cuenta. Solicita instrucciones al equipo antes de tu cita.

### ¿Necesito llevar estudios anteriores?

Es recomendable llevar resultados de laboratorio, estudios, recetas y una lista de los medicamentos que utilizas actualmente.

### ¿Cómo puedo agendar?

Puedes solicitar una cita por WhatsApp, teléfono o mediante el formulario del sitio.

---

## 7.13 Ubicación

### Eyebrow

**VISÍTANOS**

### H2

## Consulta en Roma Norte, CDMX

### Texto

Estamos ubicados en una zona de fácil acceso para brindar atención especializada a niños y adultos.

### Dirección

**Sinaloa 106, consultorio 701**  
Colonia Roma Norte  
C.P. 06700, Ciudad de México

### Acciones

- **Cómo llegar**
- **Agendar consulta**
- **Llamar**

### Nota de implementación

- Integrar Google Maps mediante carga diferida.
- Mostrar fotografía exterior del edificio.
- Agregar referencias, estacionamiento o accesibilidad únicamente cuando hayan sido confirmados.

---

## 7.14 CTA final

### H2

## Da el primer paso para comprender y controlar tus alergias

### Texto

Recibe una valoración especializada y conoce qué opciones de diagnóstico y tratamiento pueden ser adecuadas para ti o para tu hijo.

### Botones

- **Agendar consulta**
- **Escribir por WhatsApp**

---

# 8. Página de padecimientos

**Ruta:** `/padecimientos/`

## 8.1 SEO

**Title:** Padecimientos alérgicos en niños y adultos | Alergia Balance  
**Meta description:** Atención para rinitis, asma, dermatitis, urticaria, alergias alimentarias, alergias a medicamentos y otros padecimientos en CDMX.  
**H1:** Padecimientos alérgicos que atendemos

## 8.2 Hero

### Eyebrow

**ATENCIÓN PARA NIÑOS Y ADULTOS**

### H1

# Padecimientos alérgicos que atendemos

### Texto

Las alergias pueden manifestarse en la nariz, los pulmones, la piel, los ojos y el sistema digestivo. En Alergia Balance Center realizamos una evaluación integral para comprender los síntomas, identificar posibles desencadenantes y definir un plan de atención personalizado.

**Botón:** Agendar valoración

---

## 8.3 Alergias respiratorias

### H2

## Alergias respiratorias

Los síntomas respiratorios pueden relacionarse con alérgenos ambientales, irritantes, infecciones u otras condiciones. Una valoración especializada permite estudiar el contexto completo de cada paciente.

### Rinitis alérgica

Puede causar estornudos, congestión, escurrimiento nasal, comezón y molestias oculares. Los síntomas pueden presentarse por temporadas o durante todo el año.

### Rinosinusitis

Puede generar congestión persistente, presión facial, secreción nasal, dolor de cabeza y alteraciones del olfato.

### Tos crónica

Una tos que se mantiene durante varias semanas puede requerir evaluación para investigar causas respiratorias, alérgicas u otras condiciones.

### Asma bronquial

Puede manifestarse con tos, silbidos, presión en el pecho y dificultad para respirar. El diagnóstico y seguimiento adecuados son importantes para mejorar el control.

**CTA:** Solicitar valoración respiratoria

---

## 8.4 Alergias en la piel

### H2

## Alergias y enfermedades inflamatorias de la piel

La comezón, la irritación y las lesiones recurrentes pueden afectar el sueño, la concentración y la calidad de vida.

### Dermatitis atópica

Enfermedad inflamatoria que suele causar piel seca, comezón y brotes recurrentes. Puede presentarse desde la infancia y requiere un manejo adaptado a cada etapa.

### Dermatitis de contacto

Aparece cuando la piel reacciona a determinadas sustancias o materiales. Las pruebas de parche pueden ser útiles en algunos casos.

### Urticaria

Produce ronchas elevadas, comezón y, en ocasiones, inflamación. La evaluación depende de la duración, frecuencia y características de los episodios.

**CTA:** Solicitar valoración de piel

---

## 8.5 Alergias alimentarias y digestivas

### H2

## Alergias alimentarias y padecimientos digestivos relacionados

Las reacciones relacionadas con alimentos pueden presentarse de distintas formas. Es importante diferenciarlas de intolerancias y otras enfermedades digestivas.

### Alergias alimentarias

La valoración considera el alimento sospechoso, el tiempo en que aparecieron los síntomas, la cantidad consumida y los antecedentes del paciente.

### Esofagitis eosinofílica

Es una enfermedad inflamatoria del esófago que puede causar dificultad al tragar, sensación de alimento atorado y otros síntomas digestivos. Requiere evaluación y seguimiento especializados.

### Importante

No elimines alimentos esenciales ni realices dietas restrictivas sin orientación médica, especialmente en niños.

**CTA:** Solicitar valoración

---

## 8.6 Alergias a medicamentos

### H2

## Reacciones a medicamentos

Haber presentado una reacción no siempre significa que exista una alergia confirmada. La valoración médica revisa qué medicamento se utilizó, qué síntomas aparecieron, cuánto tiempo pasó y qué otros factores estaban presentes.

El objetivo es reducir riesgos y orientar alternativas seguras cuando sea posible.

**CTA:** Agendar evaluación

---

## 8.7 Alergias oculares

### H2

## Alergias oculares

La comezón, el lagrimeo, el enrojecimiento y la irritación ocular pueden relacionarse con alergias ambientales o de contacto.

La evaluación ayuda a distinguirlas de infecciones y otros problemas oculares.

**CTA:** Solicitar consulta

---

## 8.8 Atención pediátrica

### H2

## Alergias en bebés, niños y adolescentes

Los síntomas alérgicos pueden afectar el sueño, la alimentación, la actividad física y el rendimiento escolar.

La atención pediátrica considera la edad del paciente, su crecimiento, los antecedentes familiares, la dinámica en casa y escuela, y las necesidades de madres, padres y cuidadores.

**Botón:** Agendar consulta pediátrica

---

## 8.9 Señales para solicitar valoración

### H2

## ¿Cuándo conviene consultar?

- Los síntomas duran varias semanas o reaparecen con frecuencia.
- La congestión, la tos o la comezón afectan el sueño.
- Existe dificultad para respirar.
- Aparecen ronchas o inflamación recurrentes.
- Los síntomas se presentan después de comer o tomar un medicamento.
- Un niño evita alimentos o actividades por miedo a una reacción.
- Los tratamientos habituales no ofrecen un control suficiente.
- Se busca una segunda opinión.

### Alerta

**La dificultad intensa para respirar, la inflamación de lengua o garganta, el desmayo o una reacción rápidamente progresiva requieren atención de urgencia. Llama al 911 o acude al servicio de urgencias más cercano.**

---

## 8.10 CTA final

### H2

## Cada paciente requiere una evaluación individual

### Texto

Agenda una consulta para revisar tus síntomas, antecedentes y opciones de atención.

**Botón:** Agendar consulta

---

# 9. Página de pruebas y diagnóstico

**Ruta:** `/pruebas-y-diagnostico/`

## 9.1 SEO

**Title:** Pruebas de alergia en CDMX | Alergia Balance Center  
**Meta description:** Conoce las pruebas cutáneas, pruebas de parche, espirometría y estudios de broncodilatación disponibles en Alergia Balance Center.  
**H1:** Pruebas y diagnóstico de alergias

## 9.2 Hero

### Eyebrow

**EVALUACIÓN ESPECIALIZADA**

### H1

# Pruebas y diagnóstico de alergias

### Texto

No todos los pacientes necesitan las mismas pruebas. La selección de estudios depende de los síntomas, antecedentes, edad, tratamientos actuales y hallazgos de la valoración médica.

Las pruebas deben interpretarse junto con la historia clínica; un resultado positivo no siempre significa que una sustancia sea la causa de los síntomas.

**Botón:** Agendar valoración

---

## 9.3 Evaluación clínica

### H2

## El diagnóstico comienza con una valoración completa

### Texto

Durante la consulta se revisan:

- Síntomas y duración
- Momentos o lugares en que aparecen
- Alimentos, medicamentos o sustancias sospechosas
- Antecedentes personales y familiares
- Tratamientos utilizados
- Estudios previos
- Impacto en el sueño y las actividades diarias

Con esta información, la doctora define si una prueba puede aportar datos relevantes.

---

## 9.4 Pruebas cutáneas Prick

### H2

## Pruebas cutáneas Prick

### ¿Qué son?

Son estudios realizados sobre la piel para evaluar la respuesta frente a distintos alérgenos.

### ¿Para qué pueden servir?

Pueden ayudar a investigar sensibilidad a alérgenos ambientales, respiratorios o alimentarios, de acuerdo con la sospecha clínica.

### ¿Cómo se realizan?

Se colocan pequeñas cantidades de los alérgenos seleccionados en la piel y se observa la respuesta bajo supervisión médica.

### ¿Requieren preparación?

Algunos medicamentos pueden modificar los resultados. El equipo debe proporcionar instrucciones antes de la prueba.

### Nota

No suspender medicamentos sin indicación médica.

**CTA:** Consultar disponibilidad

---

## 9.5 Pruebas de parche o epicutáneas

### H2

## Pruebas de parche

### ¿Qué son?

Son estudios que ayudan a evaluar reacciones tardías de la piel frente a sustancias que pueden causar dermatitis de contacto.

### ¿Cuándo pueden indicarse?

Cuando existe irritación, comezón o lesiones recurrentes relacionadas con metales, cosméticos, fragancias, productos de cuidado personal, materiales u otras sustancias.

### ¿Cómo se realizan?

Los materiales se colocan sobre la espalda durante un periodo indicado y se realizan lecturas posteriores para evaluar la respuesta.

**CTA:** Agendar evaluación de dermatitis

---

## 9.6 Espirometría

### H2

## Espirometría

### ¿Qué evalúa?

Mide diferentes aspectos de la función pulmonar y puede aportar información en pacientes con tos, silbidos, falta de aire o sospecha de asma.

### ¿Cómo se realiza?

El paciente respira a través de un equipo siguiendo instrucciones específicas. La prueba requiere colaboración y puede repetirse para asegurar resultados confiables.

**CTA:** Consultar disponibilidad

---

## 9.7 Prueba de broncodilatación

### H2

## Prueba de broncodilatación

### ¿Para qué sirve?

Evalúa si la función respiratoria cambia después de utilizar un medicamento broncodilatador.

### ¿Cuándo se utiliza?

Puede formar parte del estudio de asma u obstrucción de las vías respiratorias cuando está clínicamente indicada.

**CTA:** Solicitar valoración respiratoria

---

## 9.8 Antes de una prueba

### H2

## Antes de tu estudio

- Confirma si debes suspender algún medicamento.
- Lleva estudios y recetas anteriores.
- Informa si has tenido una reacción grave.
- Notifica si estás embarazada.
- Evita colocar cremas en la zona de prueba cuando el equipo así lo indique.
- Llega con tiempo suficiente para el registro.

### Nota

Las indicaciones pueden cambiar según la edad, el tipo de prueba y la historia clínica.

---

## 9.9 CTA final

### H2

## La prueba correcta depende de una valoración adecuada

### Texto

Agenda una consulta para determinar qué estudios pueden ser útiles en tu caso.

**Botón:** Agendar consulta

---

# 10. Página de tratamientos

**Ruta:** `/tratamientos/`

## 10.1 SEO

**Title:** Tratamientos para alergias e inmunoterapia en CDMX  
**Meta description:** Tratamientos personalizados, inmunoterapia sublingual y subcutánea, terapias biotecnológicas y segunda opinión en Alergia Balance Center.  
**H1:** Tratamientos personalizados para alergias

## 10.2 Hero

### Eyebrow

**MANEJO INDIVIDUALIZADO**

### H1

# Tratamientos personalizados para alergias

### Texto

El tratamiento depende del padecimiento, la intensidad de los síntomas, los desencadenantes, la edad y las necesidades de cada paciente.

En Alergia Balance Center el plan se define después de una valoración médica y puede incluir medidas de prevención, tratamiento farmacológico, inmunoterapia, terapias de alta especialidad y seguimiento.

**Botón:** Agendar valoración

---

## 10.3 Control y prevención

### H2

## Control de síntomas y prevención

El primer objetivo es disminuir el impacto de los síntomas y reducir la exposición a desencadenantes relevantes sin imponer restricciones innecesarias.

El plan puede incluir:

- Orientación sobre el entorno
- Medidas de cuidado en casa o escuela
- Uso adecuado de medicamentos indicados
- Planes de acción
- Seguimiento de la evolución

---

## 10.4 Inmunoterapia

### H2

## Inmunoterapia para alergias

La inmunoterapia administra cantidades controladas de determinados alérgenos para modificar progresivamente la respuesta del sistema inmunológico.

No está indicada para todas las personas ni para todos los tipos de alergia. La decisión depende del diagnóstico, los síntomas y la valoración médica.

### Inmunoterapia sublingual

Se administra debajo de la lengua siguiendo un esquema personalizado y con seguimiento médico.

### Inmunoterapia subcutánea

Se aplica mediante inyecciones en dosis programadas y requiere control de la respuesta del paciente.

### Objetivos posibles

- Disminuir la intensidad de los síntomas
- Reducir la sensibilidad frente a alérgenos seleccionados
- Mejorar el control a largo plazo
- Favorecer una mejor calidad de vida

Los resultados y la duración varían entre pacientes.

**CTA:** Conocer si soy candidato

---

## 10.5 Terapias biotecnológicas

### H2

## Terapias biotecnológicas y tratamientos de alta especialidad

Algunas enfermedades alérgicas o inmunológicas pueden requerir tratamientos dirigidos a mecanismos específicos del sistema inmunológico.

Alergia Balance Center ofrece valoración y seguimiento para pacientes que pueden ser candidatos a:

- Biotecnológicos
- Anticuerpos monoclonales
- Inmunoglobulinas

Estos tratamientos se indican únicamente cuando existe una justificación clínica y requieren seguimiento especializado.

**CTA:** Solicitar evaluación

---

## 10.6 Segunda opinión

### H2

## Segunda opinión médica

Una segunda opinión puede ser útil cuando:

- El diagnóstico no es claro.
- Los síntomas no están controlados.
- Se ha propuesto un tratamiento de alta especialidad.
- Existen dudas sobre estudios o resultados previos.
- Se desea revisar alternativas de manejo.

### Texto

La consulta incluye revisión de antecedentes, estudios, tratamientos previos y objetivos del paciente.

**Botón:** Agendar segunda opinión

---

## 10.7 Acompañamiento familiar

### H2

## Orientación para pacientes y familias

Las enfermedades alérgicas pueden afectar la rutina de toda la familia. Por ello, el acompañamiento incluye información práctica para reconocer síntomas, reducir riesgos y facilitar el manejo en casa, la escuela y las actividades cotidianas.

Nuestro objetivo es que cada paciente y cuidador comprenda el plan y se sienta acompañado durante el proceso.

---

## 10.8 Seguimiento

### H2

## El tratamiento continúa con seguimiento

El control de una enfermedad alérgica puede requerir ajustes con el tiempo. En las consultas de seguimiento se revisa:

- Evolución de síntomas
- Respuesta al tratamiento
- Adherencia y dificultades
- Nuevos desencadenantes
- Resultados de estudios
- Necesidad de cambios en el plan

**Botón:** Agendar consulta

---

# 11. Página Clínica y Doctora

**Ruta:** `/clinica-y-doctora/`

## 11.1 SEO

**Title:** Alergia Balance Center y Dra. María de Jesús Vázquez  
**Meta description:** Conoce la clínica, el modelo de atención y la trayectoria de la Dra. María de Jesús Vázquez García, alergóloga e inmunóloga pediatra.  
**H1:** Alergia Balance Center y Dra. María de Jesús Vázquez García

## 11.2 Hero

### Eyebrow

**EXPERIENCIA MÉDICA Y ATENCIÓN HUMANA**

### H1

# Alergia Balance Center y Dra. María de Jesús Vázquez García

### Texto

Una clínica especializada en alergia e inmunología para niños y adultos, liderada por una médica con más de 20 años de experiencia en atención clínica, docencia y asesoría médico-científica.

**Botón:** Agendar consulta

### Imagen

Usar fotografía real de la doctora dentro de la clínica. Evitar retratos aislados con fondo genérico.

---

## 11.3 La clínica

### H2

## Una clínica enfocada en el bienestar de cada paciente

### Texto

Alergia Balance Center es un espacio dedicado a la evaluación, diagnóstico, tratamiento y seguimiento de enfermedades alérgicas e inmunológicas.

La atención combina experiencia clínica, herramientas diagnósticas, tratamientos personalizados y comunicación clara. Cada consulta busca comprender no solo los síntomas, sino también la forma en que afectan el descanso, la escuela, el trabajo, la actividad física y la vida familiar.

### Principios de atención

#### Atención integral

Consideramos los síntomas, antecedentes, entorno, tratamientos previos y necesidades de cada paciente.

#### Medicina personalizada

Las pruebas y tratamientos se seleccionan de acuerdo con la valoración clínica, no mediante esquemas iguales para todos.

#### Acompañamiento cercano

Explicamos las opciones de atención y damos seguimiento a la evolución del paciente.

#### Calidad de vida

El objetivo es ayudar a reducir el impacto de la enfermedad en las actividades cotidianas.

---

## 11.4 Misión

### H2

## Nuestra misión

Brindar atención especializada en alergia e inmunología con un enfoque integral, humano y orientado a mejorar la calidad de vida de cada paciente.

---

## 11.5 La doctora

### Eyebrow

**TRAYECTORIA MÉDICA**

### H2

## Dra. María de Jesús Vázquez García

### Descriptor

**Alergóloga e inmunóloga pediatra, académica y asesora médico-científica**

### Biografía

La Dra. María de Jesús Vázquez García cuenta con más de 20 años de experiencia en el diagnóstico y tratamiento de enfermedades alérgicas.

Su práctica integra formación pediátrica, especialización en Alergia e Inmunología Clínica, actividad académica y experiencia médico-científica en terapias de alta especialidad.

Su enfoque se caracteriza por una atención cercana, explicaciones claras y planes adaptados a las necesidades de niños, adultos y familias.

---

## 11.6 Formación y credenciales

### H2

## Formación y experiencia

- Egresada de la Facultad de Medicina de la Universidad Autónoma de Guadalajara.
- Especialidad en Pediatría.
- Subespecialidad en Alergia e Inmunología Clínica, avalada por la Universidad Nacional Autónoma de México y el Centro Médico Nacional 20 de Noviembre del ISSSTE.
- Maestría en Dirección y Gestión de Instituciones de Salud, avalada por la Universidad Anáhuac México Sur.
- Certificada por el Consejo Nacional de Inmunología Clínica y Alergia, CONICA.
- Académica en la Universidad Nacional Autónoma de México.
- Miembro de la Academia Mexicana de Pediatría.
- Experiencia como asesora médico-científica para compañías farmacéuticas transnacionales en terapias de alta especialidad.
- Miembro de asociaciones y colegios relacionados con Alergia e Inmunología.

### Reglas de publicación

Antes de publicar:

- Verificar nombres oficiales de instituciones.
- Agregar cédulas profesionales cuando la doctora autorice su publicación.
- Confirmar vigencia de certificaciones y membresías.
- Incluir enlaces a perfiles médicos oficiales cuando estén disponibles.

---

## 11.7 Áreas de atención

### H2

## Áreas de atención

- Alergias respiratorias
- Rinitis y rinosinusitis
- Asma
- Dermatitis y urticaria
- Alergias alimentarias
- Alergias a medicamentos
- Alergias oculares
- Pruebas diagnósticas
- Inmunoterapia
- Terapias biotecnológicas
- Segunda opinión médica
- Alergología pediátrica

---

## 11.8 Modelo de atención

### H2

## Un proceso centrado en la persona

### Paso 1

#### Escuchar

Comprender qué síntomas presenta el paciente, desde cuándo y cómo afectan su vida diaria.

### Paso 2

#### Evaluar

Revisar antecedentes, exploración clínica y estudios previos.

### Paso 3

#### Investigar

Seleccionar pruebas cuando pueden aportar información útil.

### Paso 4

#### Personalizar

Definir un plan de tratamiento y seguimiento adaptado al caso.

### Paso 5

#### Acompañar

Resolver dudas, revisar avances y ajustar el manejo cuando sea necesario.

---

## 11.9 Galería

### H2

## Conoce Alergia Balance Center

### Fotografías requeridas

1. Retrato profesional de la doctora.
2. Doctora atendiendo en consultorio, sin mostrar información del paciente.
3. Recepción.
4. Consultorio.
5. Área de pruebas.
6. Exterior del edificio.
7. Detalles de equipo diagnóstico.
8. Fotografía horizontal del espacio para el hero.

### Texto alternativo recomendado

- “Dra. María de Jesús Vázquez García en Alergia Balance Center”
- “Consultorio de Alergia Balance Center en Roma Norte, CDMX”
- “Área de evaluación y pruebas de alergia”
- “Recepción de Alergia Balance Center”

---

## 11.10 CTA final

### H2

## Atención especializada con experiencia y cercanía

### Texto

Agenda una valoración para ti o para tu hijo y conoce las opciones de atención disponibles.

**Botón:** Agendar consulta

---

# 12. Página del blog

**Ruta:** `/blog/`

## 12.1 SEO

**Title:** Blog sobre alergias e inmunología | Alergia Balance  
**Meta description:** Información sobre rinitis, alergias, síntomas, diagnóstico, tratamientos y calidad de vida, revisada por una especialista.  
**H1:** Información para comprender mejor las alergias

## 12.2 Hero

### Eyebrow

**BLOG DE ALERGIA E INMUNOLOGÍA**

### H1

# Información para comprender mejor las alergias

### Texto

Artículos educativos para pacientes y familias sobre síntomas, prevención, diagnóstico y opciones de atención.

---

## 12.3 Entradas

Por ahora mostrar únicamente estas dos entradas.

### Entrada 1

**Título:** Alergias y calidad de vida  
**Fecha:** 11 de mayo de 2026  
**Categoría:** Alergias y bienestar  
**Excerpt:** Las alergias pueden afectar el sueño, la concentración, el rendimiento y las actividades cotidianas. Conoce por qué una valoración adecuada puede ayudarte a recuperar bienestar.  
**CTA:** Leer artículo  
**Ruta:** `/alergias-y-calidad-de-vida/`

### Entrada 2

**Título:** Rinitis: causas, síntomas y tratamientos efectivos para mejorar tu calidad de vida  
**Fecha:** 11 de mayo de 2026  
**Categoría:** Alergias respiratorias  
**Excerpt:** La rinitis puede confundirse con un resfriado, pero sus síntomas pueden mantenerse durante semanas o repetirse a lo largo del año. Conoce sus principales causas y opciones de manejo.  
**CTA:** Leer artículo  
**Ruta:** `/rinitis/`

## 12.4 Reglas

- No mostrar archivo de autor por correo electrónico.
- El autor visible debe ser **Dra. María de Jesús Vázquez García**.
- No mostrar la categoría “Uncategorized”.
- No publicar comentarios.
- No añadir entradas ficticias para llenar la cuadrícula.
- Usar una cuadrícula de dos columnas en escritorio y una columna en móvil.
- Cada artículo debe mostrar fecha de publicación y fecha de actualización.
- Añadir “Contenido revisado por” al final.

---

# 13. Artículo 1

**Ruta:** `/alergias-y-calidad-de-vida/`

## 13.1 SEO

**Title:** Alergias y calidad de vida: cómo afectan tu día a día  
**Meta description:** Conoce cómo las alergias pueden afectar el sueño, la concentración, el rendimiento y el bienestar, y cuándo conviene consultar a un especialista.  
**H1:** Alergias y calidad de vida

## 13.2 Copy completo

# Alergias y calidad de vida

Las alergias no siempre se limitan a unos cuantos estornudos o a una molestia temporal en la piel. Cuando los síntomas son frecuentes o no están bien controlados, pueden afectar el sueño, la concentración, la actividad física, el rendimiento escolar o laboral y la tranquilidad de toda la familia.

Comprender el impacto de una enfermedad alérgica es el primer paso para buscar una atención adecuada y recuperar bienestar.

## ¿Qué es una alergia?

Una alergia ocurre cuando el sistema inmunológico reacciona de forma exagerada frente a una sustancia que normalmente no representa un peligro para la mayoría de las personas.

Estas sustancias se conocen como alérgenos y pueden encontrarse en el ambiente, los alimentos, los medicamentos, los animales, el polvo, el polen, los ácaros, los hongos y diversos materiales de uso cotidiano.

La forma en que una alergia se manifiesta varía entre personas. Algunas presentan síntomas respiratorios; otras desarrollan reacciones en la piel, molestias digestivas o síntomas oculares.

## Síntomas que pueden afectar la vida diaria

Entre los síntomas más frecuentes se encuentran:

- Congestión nasal
- Estornudos
- Escurrimiento nasal
- Comezón en nariz, ojos o piel
- Tos
- Silbidos al respirar
- Sensación de falta de aire
- Ronchas
- Dermatitis
- Lagrimeo y enrojecimiento ocular
- Reacciones después de consumir un alimento o utilizar un medicamento

Aunque algunos síntomas parezcan leves, su repetición puede generar cansancio, irritabilidad y preocupación constante.

## Cómo afectan las alergias al sueño

La congestión, la tos y la comezón pueden dificultar conciliar el sueño o provocar despertares durante la noche.

Dormir mal puede ocasionar:

- Fatiga durante el día
- Problemas de concentración
- Cambios de humor
- Menor rendimiento escolar o laboral
- Dificultad para realizar actividad física

En niños, el mal descanso también puede manifestarse como irritabilidad, somnolencia o dificultad para mantener la atención.

## Impacto en la escuela y el trabajo

Una persona que tiene síntomas constantes puede necesitar interrumpir sus actividades, ausentarse o evitar ciertos espacios.

La rinitis, el asma, la dermatitis y otras enfermedades alérgicas pueden afectar:

- La capacidad de concentración
- La participación en actividades físicas
- La confianza personal
- La convivencia social
- La productividad
- La asistencia a clases o al trabajo

El objetivo del tratamiento no debe limitarse a reducir un síntoma aislado. También debe buscar que el paciente pueda retomar sus actividades con mayor seguridad y tranquilidad.

## El efecto en la familia

Cuando un niño presenta alergias, madres, padres y cuidadores suelen modificar alimentos, rutinas, productos de limpieza o actividades sin tener siempre claridad sobre qué medidas son realmente necesarias.

Una evaluación especializada puede ayudar a evitar restricciones excesivas y a construir un plan práctico para casa, la escuela y otros entornos.

En adultos, las alergias también pueden generar preocupación por reacciones inesperadas, uso frecuente de medicamentos o dificultad para identificar los desencadenantes.

## ¿Por qué es importante un diagnóstico adecuado?

Los síntomas alérgicos pueden confundirse con infecciones, intolerancias, irritación u otros padecimientos.

El diagnóstico comienza con una historia clínica completa. En algunos casos, la doctora puede indicar pruebas cutáneas, pruebas de parche, estudios de función pulmonar u otros análisis.

Las pruebas no deben interpretarse de forma aislada. Sus resultados deben relacionarse con los síntomas y antecedentes del paciente.

## Tratamiento personalizado

El manejo depende del tipo de alergia, la gravedad, la edad y la forma en que los síntomas afectan a la persona.

Un plan puede incluir:

- Medidas para reducir la exposición a desencadenantes relevantes
- Tratamientos para controlar síntomas
- Planes de acción
- Orientación para casa o escuela
- Inmunoterapia cuando está indicada
- Terapias de alta especialidad en casos seleccionados
- Consultas de seguimiento

No todas las personas necesitan el mismo tratamiento.

## Cuándo consultar a un especialista

Conviene solicitar una valoración cuando:

- Los síntomas duran varias semanas.
- Las molestias reaparecen con frecuencia.
- El sueño o las actividades diarias están afectados.
- Existe tos, silbidos o dificultad para respirar.
- Aparecen ronchas o inflamación recurrentes.
- Se sospecha una reacción a alimentos o medicamentos.
- Un niño evita actividades o alimentos por miedo.
- Los tratamientos utilizados no ofrecen un control adecuado.

Ante dificultad intensa para respirar, inflamación de lengua o garganta, desmayo o una reacción rápidamente progresiva, llama al 911 o acude a urgencias.

## Vivir mejor con alergias

Una enfermedad alérgica no debe definir la vida de una persona. Con información clara, un diagnóstico adecuado y seguimiento médico, es posible reducir el impacto de los síntomas y tomar decisiones con mayor confianza.

En Alergia Balance Center brindamos atención para niños y adultos con un enfoque personalizado y orientado a mejorar la calidad de vida.

### CTA

## ¿Tus síntomas afectan tu día a día?

Agenda una valoración especializada para revisar tu caso.

**Botón:** Agendar consulta

### Autoría

**Autora y revisora médica:** Dra. María de Jesús Vázquez García  
**Especialidad:** Alergología e Inmunología Clínica Pediátrica  
**Fecha de publicación:** 11 de mayo de 2026  
**Fecha de actualización:** usar la fecha real de revisión antes del lanzamiento

---

# 14. Artículo 2

**Ruta:** `/rinitis/`

## 14.1 SEO

**Title:** Rinitis: causas, síntomas y tratamiento | Alergia Balance  
**Meta description:** Conoce qué es la rinitis, sus síntomas, causas, relación con las alergias y cuándo consultar a un especialista en alergología.  
**H1:** Rinitis: causas, síntomas y tratamientos efectivos para mejorar tu calidad de vida

## 14.2 Copy completo

# Rinitis: causas, síntomas y tratamientos efectivos para mejorar tu calidad de vida

La rinitis es una inflamación de la mucosa nasal que puede provocar congestión, estornudos, escurrimiento y comezón.

Aunque muchas personas la confunden con un resfriado, la rinitis puede mantenerse durante semanas, repetirse en ciertas temporadas o presentarse durante todo el año.

Cuando no está bien controlada, puede afectar el sueño, la concentración y el rendimiento diario.

## Principales síntomas

Los síntomas pueden variar entre personas, pero los más frecuentes son:

- Congestión nasal
- Estornudos repetidos
- Escurrimiento nasal
- Comezón en nariz o garganta
- Ojos llorosos o irritados
- Disminución del olfato
- Tos por goteo nasal
- Sensación de presión facial

También puede relacionarse con fatiga, ronquidos, respiración por la boca, irritabilidad y dificultad para dormir.

## Rinitis alérgica

La rinitis alérgica ocurre cuando el sistema inmunológico reacciona frente a determinados alérgenos.

Entre los desencadenantes frecuentes se encuentran:

- Ácaros del polvo
- Polen
- Caspa o partículas de animales
- Hongos
- Alérgenos presentes en el ambiente

### Rinitis estacional

Los síntomas aparecen principalmente en determinadas épocas del año.

### Rinitis perenne

Los síntomas pueden mantenerse durante todo el año, especialmente cuando existe exposición constante a alérgenos de interiores.

## Rinitis no alérgica

No toda rinitis se debe a una alergia. También puede relacionarse con:

- Cambios de temperatura
- Olores intensos
- Humo
- Contaminación
- Infecciones respiratorias
- Cambios hormonales
- Uso excesivo de descongestionantes nasales
- Algunos medicamentos

Identificar el tipo de rinitis es importante para elegir el manejo adecuado.

## Diferencia entre rinitis y resfriado

Un resfriado suele estar causado por una infección viral y puede acompañarse de malestar general, dolor de garganta o fiebre.

La rinitis alérgica suele relacionarse con comezón, estornudos repetidos y síntomas que aparecen al exponerse a ciertos ambientes.

Sin embargo, los síntomas pueden parecerse. Una valoración médica ayuda a diferenciarlos.

## Diferencia entre rinitis y sinusitis

La rinitis afecta principalmente la mucosa de la nariz.

La sinusitis involucra los senos paranasales y puede causar dolor o presión facial, secreción espesa y disminución del olfato.

Ambas condiciones pueden presentarse al mismo tiempo.

## Cómo se diagnostica

El diagnóstico comienza con preguntas sobre:

- Duración de los síntomas
- Épocas o lugares en que aparecen
- Contacto con polvo, mascotas, humedad o polen
- Antecedentes familiares
- Tratamientos utilizados
- Presencia de asma, dermatitis u otras alergias

Cuando es necesario, la doctora puede indicar pruebas cutáneas u otros estudios.

Un resultado positivo debe interpretarse junto con la historia clínica. No significa por sí solo que un alérgeno sea responsable de todos los síntomas.

## Tratamiento

El tratamiento depende del tipo de rinitis, la intensidad de los síntomas y las necesidades de cada paciente.

Puede incluir:

### Reducción de desencadenantes

Las recomendaciones deben enfocarse en alérgenos o irritantes relevantes para el paciente, evitando cambios innecesarios.

### Lavados nasales

Las soluciones salinas pueden ayudar a limpiar secreciones e irritantes. La técnica y frecuencia deben adaptarse a cada caso.

### Medicamentos

El médico puede indicar tratamientos para disminuir la inflamación, la comezón, los estornudos o la congestión.

No se recomienda utilizar descongestionantes nasales durante periodos prolongados sin supervisión.

### Inmunoterapia

En pacientes seleccionados con rinitis alérgica, la inmunoterapia puede ayudar a disminuir la sensibilidad frente a determinados alérgenos.

## Rinitis en niños

En niños puede manifestarse con:

- Estornudos frecuentes
- Congestión
- Respiración por la boca
- Ojeras
- Sueño inquieto
- Irritabilidad
- Dificultad para concentrarse

Cuando los síntomas son persistentes, es importante evaluar su impacto en el sueño, el crecimiento y el rendimiento escolar.

## Relación entre rinitis y asma

La nariz y los pulmones forman parte de las vías respiratorias. Algunas personas con rinitis también presentan asma.

La presencia de tos, silbidos, opresión en el pecho o falta de aire debe comentarse durante la consulta.

## Cuándo consultar

Solicita una valoración cuando:

- Los síntomas duran varias semanas.
- La congestión afecta el sueño.
- Los síntomas aparecen durante gran parte del año.
- Los medicamentos de venta libre no ofrecen control.
- Existe tos persistente o dificultad para respirar.
- Un niño respira por la boca de forma frecuente.
- Se sospecha relación con mascotas, polvo, humedad o temporadas de polen.

## Preguntas frecuentes

### ¿La rinitis alérgica es contagiosa?

No. La rinitis alérgica no es una infección y no se transmite entre personas.

### ¿La rinitis tiene cura?

Depende de la causa y del tipo de rinitis. En muchos casos es posible lograr un buen control de los síntomas mediante un plan personalizado.

### ¿Puede causar cansancio?

Sí. La congestión y el sueño de mala calidad pueden provocar fatiga y dificultad para concentrarse.

### ¿Solo aparece en primavera?

No. Algunas personas presentan síntomas por temporadas y otras durante todo el año.

### ¿Debo hacerme pruebas de alergia?

No todos los pacientes las necesitan. La indicación depende de la valoración médica.

## Conclusión

La rinitis puede parecer un problema menor, pero sus efectos en el sueño y las actividades diarias pueden ser importantes.

Una evaluación especializada permite identificar el tipo de rinitis, investigar posibles desencadenantes y definir un tratamiento adecuado.

### CTA

## ¿La congestión y los estornudos afectan tu día a día?

Agenda una valoración en Alergia Balance Center.

**Botón:** Agendar consulta

### Autoría

**Autora y revisora médica:** Dra. María de Jesús Vázquez García  
**Especialidad:** Alergología e Inmunología Clínica Pediátrica  
**Fecha de publicación:** 11 de mayo de 2026  
**Fecha de actualización:** usar la fecha real de revisión antes del lanzamiento

---

# 15. Página de contacto

**Ruta:** `/contacto/`

## 15.1 SEO

**Title:** Agenda una consulta de alergia en CDMX | Alergia Balance  
**Meta description:** Solicita una consulta de alergia e inmunología para niños o adultos en Roma Norte, CDMX. Contacto por WhatsApp, teléfono o formulario.  
**H1:** Agenda una consulta

## 15.2 Hero

### Eyebrow

**ESTAMOS PARA AYUDARTE**

### H1

# Agenda una consulta

### Texto

Solicita una valoración para ti o para tu hijo. El equipo de Alergia Balance Center te ayudará a confirmar disponibilidad y las indicaciones previas a tu cita.

---

## 15.3 Opciones de contacto

### WhatsApp

#### Agenda por WhatsApp

Escríbenos para consultar horarios disponibles.

**Botón:** Escribir por WhatsApp

### Teléfono

#### Llama al consultorio

**+52 55 2755 6281**

**Botón:** Llamar

### Formulario

#### Solicita una cita

Completa el formulario y nos pondremos en contacto contigo.

**Botón:** Solicitar cita

---

## 15.4 Formulario

Usar los campos y microcopy definidos en la sección de componentes globales.

No incluir CAPTCHA matemático visible como “13 + 14”. Utilizar protección antispam invisible o un honeypot accesible.

---

## 15.5 Ubicación

### H2

## Alergia Balance Center

**Sinaloa 106, consultorio 701**  
Colonia Roma Norte  
C.P. 06700, Ciudad de México

### Horario

- Martes a viernes: 12:00 a 19:00
- Sábado: 11:00 a 14:00
- Domingo: cerrado

### Datos

- WhatsApp y teléfono: +52 55 2755 6281
- Correo: mariajvazquez.alergia@gmail.com

### Botón

**Abrir en Google Maps**

---

## 15.6 Aviso de urgencias

### H2

## Información importante

WhatsApp, teléfono y formulario se utilizan para citas y orientación administrativa.

**Ante dificultad intensa para respirar, inflamación de lengua o garganta, desmayo o una reacción rápidamente progresiva, llama al 911 o acude al servicio de urgencias más cercano.**

No esperar una respuesta por WhatsApp ante una emergencia.

---

# 16. Página de gracias

**Ruta:** `/gracias/`

## H1

# Recibimos tu solicitud

## Texto

Gracias por contactar a Alergia Balance Center. Nuestro equipo revisará tu información y se pondrá en contacto contigo para confirmar disponibilidad.

## Acciones

- **Volver al inicio**
- **Escribir por WhatsApp**

## Nota

Esta página debe estar excluida del índice de buscadores mediante `noindex`.

---

# 17. Página 404

## H1

# No encontramos esta página

## Texto

Es posible que el contenido haya cambiado de ubicación o que la dirección no sea correcta.

## Acciones

- **Volver al inicio**
- **Ver padecimientos**
- **Agendar consulta**

---

# 18. Footer

## Columna 1

Logo de Alergia Balance Center

**Atención especializada en alergia e inmunología para niños y adultos.**

## Columna 2

### Explora

- Inicio
- Padecimientos
- Pruebas y diagnóstico
- Tratamientos
- Clínica y doctora
- Blog
- Contacto

## Columna 3

### Contacto

- +52 55 2755 6281
- mariajvazquez.alergia@gmail.com
- Sinaloa 106, consultorio 701, Roma Norte, CDMX

## Columna 4

### Horarios

- Martes a viernes: 12:00 a 19:00
- Sábado: 11:00 a 14:00
- Domingo: cerrado

## Línea inferior

**© 2026 Alergia Balance Center. Todos los derechos reservados.**

Enlaces:

- Aviso de privacidad
- Términos de uso, cuando correspondan
- Redes sociales verificadas

Eliminar por completo:

- “Follow”
- “Divi”
- Enlaces dentales
- Copyright de la plantilla
- Autor por correo electrónico
- “Uncategorized”

---

# 19. SEO técnico

## 19.1 Reglas generales

- Una sola etiqueta `H1` por página.
- Jerarquía semántica correcta de `H2` y `H3`.
- URLs cortas, legibles y en minúsculas.
- Etiquetas `title` y descripciones únicas.
- Canonical en cada página.
- `sitemap.xml`.
- `robots.txt`.
- Certificado HTTPS.
- Redirecciones 301 desde URLs anteriores cuando cambien.
- Breadcrumbs visibles y en datos estructurados.
- Open Graph y Twitter Cards.
- Imágenes WebP o AVIF.
- Texto alternativo descriptivo.
- No cargar scripts innecesarios.
- No bloquear el contenido principal mediante JavaScript.
- No duplicar el contenido de los dos artículos.

## 19.2 Redirecciones recomendadas

```text
/nosotros/  → /clinica-y-doctora/
/servicios/ → /padecimientos/ o una landing de servicios
/author/krklinkigmail-com/ → /blog/
/category/uncategorized/ → /blog/
```

Mantener:

```text
/alergias-y-calidad-de-vida/
/rinitis/
```

## 19.3 SEO local

Mantener exactamente los mismos datos de nombre, dirección y teléfono en:

- Sitio web
- Google Business Profile
- Doctoralia
- Facebook
- Instagram
- Directorios médicos
- Datos estructurados

Agregar enlaces desde el sitio hacia los perfiles oficiales verificados.

## 19.4 Metadatos sociales

### Imagen OG

- Medida: 1200 × 630 px.
- Logo.
- Fotografía real de la doctora o clínica.
- Fondo azul marino o turquesa.
- Texto máximo de seis a ocho palabras.
- No reutilizar el flyer vertical como imagen OG.

---

# 20. GEO y visibilidad en asistentes de IA

## Reglas de contenido

- Responder preguntas de forma directa al inicio de cada sección.
- Usar el nombre completo de la clínica y de la doctora.
- Identificar a la especialista responsable del contenido.
- Incluir fechas de publicación y actualización.
- Explicar claramente qué se ofrece, para quién y en qué ubicación.
- Relacionar padecimientos, pruebas y tratamientos mediante enlaces internos.
- Mantener información de contacto consistente.
- Evitar afirmaciones vagas como “la mejor clínica” o “tecnología líder” sin evidencia.
- Publicar preguntas frecuentes reales de pacientes.
- No impedir el acceso de buscadores y rastreadores legítimos que la clínica decida permitir.
- Mantener el HTML semántico y el contenido principal disponible sin interacción adicional.

## Respuestas breves destacables

Cada página debe comenzar con un bloque que pueda ser comprendido de forma independiente.

Ejemplo:

> Alergia Balance Center es una clínica de alergia e inmunología en Roma Norte, CDMX, que atiende a niños y adultos con rinitis, asma, dermatitis, urticaria, alergias alimentarias y otros padecimientos alérgicos.

---

# 21. Datos estructurados

Implementar JSON-LD.

## 21.1 MedicalClinic

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Alergia Balance Center",
  "url": "https://alergiabalance.com/",
  "telephone": "+525527556281",
  "email": "mariajvazquez.alergia@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sinaloa 106, consultorio 701",
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX",
    "postalCode": "06700",
    "addressCountry": "MX"
  },
  "medicalSpecialty": [
    "Alergología",
    "Inmunología",
    "Pediatría"
  ]
}
```

## 21.2 Physician

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dra. María de Jesús Vázquez García",
  "worksFor": {
    "@type": "MedicalClinic",
    "name": "Alergia Balance Center"
  },
  "medicalSpecialty": [
    "Alergología",
    "Inmunología Clínica Pediátrica"
  ],
  "telephone": "+525527556281",
  "url": "https://alergiabalance.com/clinica-y-doctora/"
}
```

## 21.3 Otros esquemas

- `BreadcrumbList`
- `Article`
- `FAQPage`, únicamente cuando las preguntas y respuestas sean visibles
- `Organization`
- `WebSite`
- `WebPage`

No implementar `AggregateRating` o `Review` sin reseñas verificadas y cumplimiento de políticas.

---

# 22. Analítica y conversiones

Configurar:

- Google Analytics 4
- Google Search Console
- Google Tag Manager, únicamente si se requiere
- Consentimiento de cookies cuando aplique
- Seguimiento de conversiones de Google Ads, si se utiliza

## Eventos

```text
click_whatsapp
click_call
click_schedule
submit_contact_form
form_success
click_directions
view_padecimiento
view_prueba
view_tratamiento
read_blog_article
```

## Parámetros útiles

- Página de origen
- Botón o sección
- Dispositivo
- Tipo de consulta seleccionado
- Campaña UTM

No enviar información médica sensible a herramientas de analítica.

---

# 23. Accesibilidad

- Contraste mínimo WCAG AA.
- Navegación completa con teclado.
- Estados de foco visibles.
- Etiquetas asociadas a campos de formulario.
- Mensajes de error comprensibles.
- Botones de al menos 44 × 44 px.
- Texto alternativo en imágenes informativas.
- Imágenes decorativas con `alt=""`.
- No depender únicamente del color.
- Respetar el tamaño de texto del usuario.
- No reproducir audio o video automáticamente.
- Añadir subtítulos a videos.
- Utilizar lenguaje claro.

---

# 24. Rendimiento

Objetivo:

- LCP menor a 2.5 s.
- CLS menor a 0.1.
- INP menor a 200 ms.
- Lighthouse superior a 90 en rendimiento, accesibilidad, buenas prácticas y SEO, siempre que la infraestructura lo permita.

## Reglas

- Optimizar imágenes.
- Precargar únicamente recursos críticos.
- Carga diferida para mapas y contenido fuera del primer viewport.
- No cargar fuentes con múltiples pesos innecesarios.
- Evitar sliders pesados.
- Reducir scripts de terceros.
- Usar caché.
- Renderizar contenido clínico en servidor o de manera estática.

---

# 25. Modelo de contenido

## Entidad: Padecimiento

```text
title
slug
summary
symptoms[]
when_to_consult[]
diagnosis
tests[]
treatments[]
faq[]
medical_reviewer
published_at
updated_at
seo_title
seo_description
featured_image
```

## Entidad: Prueba

```text
title
slug
summary
what_is_it
what_is_it_for
how_it_is_done
preparation
age_notes
faq[]
medical_reviewer
seo_title
seo_description
```

## Entidad: Tratamiento

```text
title
slug
summary
who_may_be_candidate
how_it_works
follow_up
important_notes
faq[]
medical_reviewer
seo_title
seo_description
```

## Entidad: Artículo

```text
title
slug
excerpt
body
category
author
medical_reviewer
published_at
updated_at
seo_title
seo_description
featured_image
```

---

# 26. Componentes técnicos recomendados

```text
Header
TopBar
MobileBottomActions
Hero
TrustBadges
SymptomCard
ConditionCard
ServiceCard
DoctorClinicSplit
ProcessSteps
FAQAccordion
BlogCard
ContactOptions
AppointmentForm
MapBlock
EmergencyNotice
MedicalReviewer
Breadcrumbs
CTASection
Footer
CookieConsent
```

## Reglas

- El acordeón de FAQ debe permitir lectura con teclado y lectores de pantalla.
- Los botones de cita deben reutilizar el mismo componente.
- Los textos no deben duplicarse dentro del código.
- Los datos de teléfono, correo, dirección y horarios deben vivir en una configuración central.
- La clínica debe poder cambiar esos datos sin editar múltiples páginas.
- Usar un CMS o archivos de contenido estructurados si el proyecto lo requiere.

---

# 27. Orden de implementación

## Fase 1

1. Sistema de diseño
2. Header, footer y componentes globales
3. Inicio
4. Padecimientos
5. Pruebas y diagnóstico
6. Tratamientos
7. Clínica y doctora
8. Blog con dos entradas
9. Contacto
10. Aviso de privacidad
11. Analítica
12. SEO técnico
13. Pruebas móviles y de accesibilidad

## Fase 2

Crear páginas individuales para los padecimientos con mayor demanda:

- Rinitis alérgica
- Asma
- Dermatitis atópica
- Urticaria
- Alergias alimentarias
- Alergias a medicamentos
- Pruebas cutáneas
- Inmunoterapia

Las tarjetas de la primera versión deben poder enlazar posteriormente a estas páginas sin necesidad de rediseñar componentes.

---

# 28. Lista de verificación antes de publicar

## Contenido

- [ ] Confirmar dirección de Roma Norte.
- [ ] Confirmar si existe una sede permanente en Guadalajara.
- [ ] Confirmar horarios.
- [ ] Confirmar correo y teléfono.
- [ ] Confirmar perfiles de redes sociales.
- [ ] Revisar y aprobar todos los textos médicos.
- [ ] Confirmar formación, certificaciones y membresías.
- [ ] Añadir cédulas únicamente con autorización.
- [ ] Eliminar todo contenido dental.
- [ ] Eliminar testimonios falsos o de plantilla.
- [ ] Mantener solamente las dos entradas actuales del blog.
- [ ] Sustituir el autor por el nombre de la doctora.
- [ ] Añadir fechas reales de actualización.

## Diseño

- [ ] Usar el logo proporcionado.
- [ ] Usar la paleta azul marino, turquesa, morado y dorado.
- [ ] Incorporar fotografías reales de la clínica.
- [ ] Incorporar fotografías reales de la doctora.
- [ ] Revisar contraste y legibilidad.
- [ ] Revisar la experiencia móvil.
- [ ] Mantener visible el CTA de cita sin saturar.

## Técnico

- [ ] Formularios funcionando.
- [ ] Enlaces de teléfono y WhatsApp funcionando.
- [ ] Página de gracias configurada.
- [ ] Eventos de conversión configurados.
- [ ] Sitemap y robots.
- [ ] Canonicals.
- [ ] Redirecciones 301.
- [ ] JSON-LD.
- [ ] Open Graph.
- [ ] Política de privacidad.
- [ ] Rendimiento.
- [ ] Accesibilidad.
- [ ] Revisión en dispositivos reales.

---

# 29. Resultado esperado

El sitio debe comunicar de manera inmediata:

1. Qué es Alergia Balance Center.
2. A quién atiende.
3. Qué padecimientos puede valorar.
4. Qué pruebas y tratamientos ofrece.
5. Quién es la Dra. María de Jesús Vázquez García.
6. Por qué la clínica genera confianza.
7. Dónde se encuentra.
8. Cómo agendar una cita.

La experiencia final debe sentirse médica, humana y especializada, con un lenguaje claro y una ruta de conversión visible en todo momento.
