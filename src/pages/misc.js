const C = require("../lib/components.js");
const { site } = C;

/* ------------------------------ Gracias ------------------------------ */
const gracias = {
  slug: "/gracias/",
  active: "/",
  noindex: true,
  title: "Recibimos tu solicitud | Alergia Balance Center",
  description:
    "Gracias por contactar a Alergia Balance Center. Nuestro equipo se pondrá en contacto contigo para confirmar disponibilidad.",
  body: `
<section class="section bg-white">
  <div class="container center" style="max-width:640px">
    <div class="card__icon" style="margin:0 auto 1.4rem;width:72px;height:72px;background:var(--bg-turq)">${C.icon("check")}</div>
    <h1 style="margin-bottom:1rem">Recibimos tu solicitud</h1>
    <p class="lead">Gracias por contactar a Alergia Balance Center. Nuestro equipo revisará tu información y se pondrá en contacto contigo para confirmar disponibilidad.</p>
    <div class="btn-row" style="justify-content:center;margin-top:2rem">
      <a href="/" class="btn btn--primary">${C.icon("home")}<span>Volver al inicio</span></a>
      ${C.whatsappBtn({ secondary: true, loc: "gracias" })}
    </div>
  </div>
</section>`,
};

/* ------------------------------- 404 --------------------------------- */
const notFound = {
  slug: "/404/",
  active: "/",
  noindex: true,
  title: "Página no encontrada | Alergia Balance Center",
  description: "No encontramos esta página.",
  body: `
<section class="section bg-white">
  <div class="container center" style="max-width:640px">
    <p class="eyebrow">Error 404</p>
    <h1 style="margin-bottom:1rem">No encontramos esta página</h1>
    <p class="lead">Es posible que el contenido haya cambiado de ubicación o que la dirección no sea correcta.</p>
    <div class="btn-row" style="justify-content:center;margin-top:2rem">
      <a href="/" class="btn btn--primary">${C.icon("home")}<span>Volver al inicio</span></a>
      <a href="/padecimientos/" class="btn btn--secondary">Ver padecimientos</a>
      ${C.scheduleBtn({ loc: "404" })}
    </div>
  </div>
</section>`,
};

/* ------------------------- Aviso de privacidad ----------------------- */
const privacidad = {
  slug: "/aviso-de-privacidad/",
  active: "/",
  title: "Aviso de privacidad | Alergia Balance Center",
  description:
    "Aviso de privacidad de Alergia Balance Center sobre el tratamiento de datos personales.",
  breadcrumbs: [
    { label: "Inicio", href: "/" },
    { label: "Aviso de privacidad", href: "/aviso-de-privacidad/" },
  ],
  body: `
<section class="section bg-white">
  <div class="container">
    <div class="article">
      <h1 style="margin-bottom:1.4rem">Aviso de privacidad</h1>
      <div class="notice" style="margin-bottom:1.6rem">${C.icon("alert")}<div>Este es un texto base de referencia. Debe ser revisado y aprobado conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares antes de su publicación.</div></div>

      <h2>Responsable</h2>
      <p>Alergia Balance Center, con domicilio en ${site.contact.address.full}, es responsable del tratamiento de los datos personales que nos proporcione.</p>

      <h2>Datos que recabamos</h2>
      <p>Podemos recabar nombre, teléfono, correo electrónico, motivo de consulta y datos necesarios para agendar y brindar atención médica. Los datos de salud se tratan como datos sensibles con medidas de seguridad reforzadas.</p>

      <h2>Finalidades</h2>
      <ul>
        <li>Gestionar solicitudes de cita y confirmar disponibilidad.</li>
        <li>Brindar atención médica y dar seguimiento clínico.</li>
        <li>Comunicar indicaciones previas a estudios o consultas.</li>
      </ul>

      <h2>Uso de la información</h2>
      <p>No enviamos información médica sensible a herramientas de analítica ni la compartimos con terceros con fines comerciales. La información se utiliza únicamente para las finalidades descritas.</p>

      <h2>Derechos ARCO</h2>
      <p>Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos escribiendo a <a href="mailto:${site.contact.email}">${site.contact.email}</a>.</p>

      <h2>Contacto</h2>
      <p>Para dudas sobre este aviso, comunícate al ${site.contact.phoneDisplay} o al correo ${site.contact.email}.</p>
    </div>
  </div>
</section>`,
};

module.exports = [gracias, notFound, privacidad];
