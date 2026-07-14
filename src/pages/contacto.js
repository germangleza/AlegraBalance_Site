const C = require("../lib/components.js");
const { site } = C;

const bc = [
  { label: "Inicio", href: "/" },
  { label: "Contacto", href: "/contacto/" },
];

const hours = site.contact.hours
  .map((h) => `<li>${C.icon("clock")}<div>${h.days}: ${h.time}</div></li>`)
  .join("");

const mapEmbed =
  "https://www.google.com/maps?q=Sinaloa%20106%20Roma%20Norte%20CDMX&output=embed";

const body = `
<section class="page-hero">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <span class="eyebrow">Estamos para ayudarte</span>
        <h1>Agenda una consulta</h1>
        <p>Solicita una valoración para ti o para tu hijo. El equipo de Alergia Balance Center te ayudará a confirmar disponibilidad y las indicaciones previas a tu cita.</p>
        <div class="btn-row">${C.whatsappBtn({ loc: "contacto-hero" })}${C.callBtn({ loc: "contacto-hero" })}</div>
      </div>
      <div class="page-hero__media">${C.media("Recepción de Alergia Balance Center", "ph")}</div>
    </div>
  </div>
</section>

<section class="section bg-white">
  <div class="container">
    <div class="contact-grid" style="margin-bottom:2.5rem">
      <div class="contact-option reveal">
        <div class="card__icon">${C.icon("whatsapp")}</div>
        <div><h3>Agenda por WhatsApp</h3><p>Escríbenos para consultar horarios disponibles.</p>${C.whatsappBtn({ loc: "contacto-opciones" })}</div>
      </div>
      <div class="contact-option reveal">
        <div class="card__icon">${C.icon("phone")}</div>
        <div><h3>Llama al consultorio</h3><p><a href="${site.contact.phoneHref}"><strong>${site.contact.phoneDisplay}</strong></a></p>${C.callBtn({ loc: "contacto-opciones" })}</div>
      </div>
    </div>

    <div class="feature" style="align-items:start">
      <form class="form reveal" id="appointment-form" novalidate>
        <div class="section-head" style="margin-bottom:1.4rem">
          <h2 style="font-size:var(--heading-3)">Solicita una cita</h2>
          <p style="font-size:1rem">Completa el formulario y nos pondremos en contacto contigo.</p>
        </div>
        <div class="form__status" role="status" aria-live="polite"></div>

        <div class="field">
          <label for="nombre">Nombre completo <span class="req">*</span></label>
          <input type="text" id="nombre" name="nombre" autocomplete="name" required>
        </div>
        <div class="field-row">
          <div class="field">
            <label for="telefono">Teléfono <span class="req">*</span></label>
            <input type="tel" id="telefono" name="telefono" autocomplete="tel" required>
          </div>
          <div class="field">
            <label for="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" autocomplete="email">
          </div>
        </div>

        <div class="field">
          <label>La consulta es para: <span class="req">*</span></label>
          <div class="radio-group">
            <div class="radio-pill"><input type="radio" id="tipo-nino" name="tipo" value="Niño o adolescente" required><label for="tipo-nino">Niño o adolescente</label></div>
            <div class="radio-pill"><input type="radio" id="tipo-adulto" name="tipo" value="Adulto"><label for="tipo-adulto">Adulto</label></div>
          </div>
        </div>

        <div class="field">
          <label for="motivo">Motivo principal de consulta <span class="req">*</span></label>
          <textarea id="motivo" name="motivo" required placeholder="Cuéntanos brevemente qué síntomas presentas."></textarea>
        </div>

        <div class="field">
          <label for="horario">Horario preferido</label>
          <select id="horario" name="horario">
            <option value="">Selecciona una opción</option>
            <option>Mañana</option>
            <option>Mediodía</option>
            <option>Tarde</option>
            <option>Sin preferencia</option>
          </select>
        </div>

        <div class="honeypot" aria-hidden="true">
          <label for="empresa">No llenar este campo</label>
          <input type="text" id="empresa" name="empresa" tabindex="-1" autocomplete="off">
        </div>

        <div class="field">
          <label class="checkbox"><input type="checkbox" name="privacidad" required> Acepto el <a href="/aviso-de-privacidad/">aviso de privacidad</a> y el tratamiento de mis datos para gestionar mi solicitud de cita.</label>
        </div>

        <button type="submit" class="btn btn--primary btn--lg" style="width:100%">${C.icon("calendar")}<span>Solicitar cita</span></button>

        <div class="notice" style="margin-top:1.4rem">${C.icon("alert")}<div>Este formulario no es un canal de urgencias. Ante una emergencia médica, llama al <strong>911</strong> o acude al servicio de urgencias más cercano.</div></div>
      </form>

      <div class="reveal">
        <div class="card" style="margin-bottom:1.4rem">
          <h2 style="font-size:var(--heading-3);margin-bottom:1rem">Alergia Balance Center</h2>
          <ul class="info-list">
            <li>${C.icon("pin")}<div><strong>${site.contact.address.street}</strong><br>${site.contact.address.neighborhood}<br>${site.contact.address.postal}</div></li>
            <li>${C.icon("phone")}<a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a></li>
            <li>${C.icon("mail")}<a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
          </ul>
          <h3 style="font-size:1.05rem;margin:1.4rem 0 .8rem">Horario</h3>
          <ul class="info-list">${hours}</ul>
          <div style="margin-top:1.4rem">
            <a href="${site.contact.address.maps}" target="_blank" rel="noopener" class="btn btn--secondary" data-track="click_directions" data-track-loc="contacto">${C.icon("route")}<span>Abrir en Google Maps</span></a>
          </div>
        </div>

        <div class="map-block" role="group" aria-label="Mapa de ubicación">
          <div class="ph" style="flex-direction:column;gap:1rem">
            <span>Mapa de ubicación · Roma Norte, CDMX</span>
            <button class="btn btn--secondary" data-load-map="${mapEmbed}" type="button">${C.icon("pin")}<span>Cargar mapa</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-warm">
  <div class="container">
    <div class="section-head center"><h2>Información importante</h2><p>WhatsApp, teléfono y formulario se utilizan para citas y orientación administrativa.</p></div>
    <div style="max-width:820px;margin:1.6rem auto 0">
      ${C.emergencyNotice("<strong>Ante dificultad intensa para respirar, inflamación de lengua o garganta, desmayo o una reacción rápidamente progresiva, llama al 911 o acude al servicio de urgencias más cercano.</strong> No esperes una respuesta por WhatsApp ante una emergencia.")}
    </div>
  </div>
</section>
`;

module.exports = {
  slug: "/contacto/",
  active: "/contacto/",
  title: "Agenda una consulta de alergia en CDMX | Alergia Balance",
  description:
    "Solicita una consulta de alergia e inmunología para niños o adultos en Roma Norte, CDMX. Contacto por WhatsApp, teléfono o formulario.",
  breadcrumbs: bc,
  body,
};
