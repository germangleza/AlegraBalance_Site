/**
 * Componentes reutilizables de Alergia Balance Center.
 * Cada botón de cita, tarjeta y bloque global se genera aquí una sola vez
 * (spec §26: los textos no deben duplicarse dentro del código).
 */
const { site } = require("../../site.config.js");

/* --------------------------- Iconos (línea) --------------------------- */
const ICONS = {
  whatsapp:
    '<path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.46-.15-.65.15-.2.29-.74.94-.9 1.13-.17.2-.34.22-.63.07-1.7-.85-2.8-1.52-3.92-3.44-.3-.5.3-.47.84-1.56.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.56-.01-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.14.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/><path d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.05-1.32A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3 .78.8-2.92-.2-.3A8.2 8.2 0 1 1 12 20.2z" fill="currentColor" stroke="none"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  calendar:
    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  lungs:
    '<path d="M6.4 8.8C5 9.6 4 11.4 4 13.5V18a2 2 0 0 0 2.6 1.9l1.6-.5A2 2 0 0 0 9.6 17.5V6.2M17.6 8.8c1.4.8 2.4 2.6 2.4 4.7V18a2 2 0 0 1-2.6 1.9l-1.6-.5a2 2 0 0 1-1.4-1.9V6.2M12 3v9"/>',
  skin:
    '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>',
  food:
    '<path d="M12 3a6 6 0 0 0-6 6c0 4 3 4 3 9h6c0-5 3-5 3-9a6 6 0 0 0-6-6z"/><path d="M9 9h6"/>',
  child:
    '<circle cx="12" cy="6" r="3"/><path d="M12 9v7M8 12h8M9 21l3-5 3 5"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  pill:
    '<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)"/><path d="M8.5 8.5l7 7"/>',
  nose:
    '<path d="M8 3v6l-3 5a3 3 0 0 0 3 4h1M16 3v6l3 5a3 3 0 0 1-3 4h-1M9 19h6"/>',
  test:
    '<path d="M9 3h6M10 3v6l-4 8a3 3 0 0 0 3 4h6a3 3 0 0 0 3-4l-4-8V3M7.5 15h9"/>',
  patch:
    '<rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)"/><path d="M9 12h6M12 9v6"/>',
  spiro:
    '<path d="M3 12a9 9 0 1 1 9 9"/><path d="M3 12h5l2-3 2 6 2-4h3"/>',
  shield:
    '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9.5 12l1.8 1.8L15 10"/>',
  syringe:
    '<path d="M18 2l4 4M15 5l4 4M14.5 6.5l-9 9L4 20l4.5-1.5 9-9M9 11l2 2M12 8l2 2"/>',
  check:
    '<path d="M20 6L9 17l-5-5"/>',
  star:
    '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9L12 3z"/>',
  award:
    '<circle cx="12" cy="8" r="5"/><path d="M8.2 12.5L7 22l5-3 5 3-1.2-9.5"/>',
  book:
    '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5z"/><path d="M18 3v16"/>',
  heart:
    '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/>',
  pin: '<path d="M12 22s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  mail:
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  clock:
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert:
    '<path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  ear:
    '<path d="M6 8a6 6 0 1 1 12 0c0 3-2 4-3 5s-1 3-3 3a3 3 0 0 1-3-3M9 9a3 3 0 0 1 5 2"/>',
  stethoscope:
    '<path d="M6 3v5a4 4 0 0 0 8 0V3M6 3H4M14 3h2M10 16v1a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="12" r="2"/>',
  route:
    '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5V15a3 3 0 0 0 3 3h6.5"/>',
  chat:
    '<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  home: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
};

function icon(name, cls) {
  const path = ICONS[name] || "";
  return `<svg class="icon${cls ? " " + cls : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
}

/* ------------------------------- Logo -------------------------------- */
function logo(variant) {
  const light = variant === "light";
  const navy = light ? "#ffffff" : "#071E55";
  const turq = light ? "#7FD3D9" : "#137E88";
  const gold = "#B4771F";
  return `<svg viewBox="0 0 240 52" role="img" aria-label="Alergia Balance Center" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke-width="3.4" stroke-linecap="round">
    <circle cx="26" cy="26" r="18" stroke="${turq}" opacity="0.35"/>
    <path d="M14 30c4-9 10-13 12-13s3 2 3 6-3 8-3 8" stroke="${turq}"/>
    <path d="M38 22c-4 9-10 13-12 13s-3-2-3-6 3-8 3-8" stroke="${navy}"/>
    <circle cx="26" cy="26" r="3" fill="${gold}" stroke="none"/>
  </g>
  <text x="54" y="24" font-family="Manrope, sans-serif" font-weight="800" font-size="19" fill="${navy}">Alergia<tspan fill="${turq}">Balance</tspan></text>
  <text x="54" y="41" font-family="Inter, sans-serif" font-weight="600" font-size="9.5" letter-spacing="2.6" fill="${gold}">CENTER · CDMX</text>
</svg>`;
}

/* --------------------------- Botones cita ---------------------------- */
function scheduleBtn(opts = {}) {
  const cls = opts.secondary ? "btn btn--secondary" : "btn btn--primary";
  const size = opts.lg ? " btn--lg" : "";
  const label = opts.label || site.cta.schedule;
  const loc = opts.loc || "";
  return `<a href="/contacto/" class="${cls}${size}" data-track="click_schedule" data-track-loc="${loc}">${icon("calendar")}<span>${label}</span></a>`;
}
function whatsappBtn(opts = {}) {
  const size = opts.lg ? " btn--lg" : "";
  const cls = opts.secondary ? "btn btn--secondary" : "btn btn--whatsapp";
  const label = opts.label || site.cta.whatsapp;
  const loc = opts.loc || "";
  return `<a href="${site.contact.whatsapp}" class="${cls}${size}" target="_blank" rel="noopener" data-track="click_whatsapp" data-track-loc="${loc}">${icon("whatsapp")}<span>${label}</span></a>`;
}
function callBtn(opts = {}) {
  const label = opts.label || site.cta.call;
  return `<a href="${site.contact.phoneHref}" class="btn btn--secondary" data-track="click_call" data-track-loc="${opts.loc || ""}">${icon("phone")}<span>${label}</span></a>`;
}
function ghostLink(href, label) {
  return `<a href="${href}" class="btn btn--ghost">${label}</a>`;
}

/* ------------------------------ Top bar ------------------------------ */
function topbar() {
  return `<div class="topbar"><div class="container">
    <span class="topbar--desktop"><strong>Roma Norte, CDMX</strong> <span class="sep">·</span> Atención para niños y adultos <span class="sep">·</span> Citas por WhatsApp</span>
    <span class="topbar--mobile"><strong>Niños y adultos</strong> <span class="sep">·</span> Agendar por WhatsApp</span>
  </div></div>`;
}

/* ------------------------------ Header ------------------------------- */
function header(active) {
  const links = site.nav
    .map(
      (n) =>
        `<a href="${n.href}"${n.href === active ? ' aria-current="page"' : ""}>${n.label}</a>`
    )
    .join("");
  return `${topbar()}
<header class="header">
  <div class="container header__inner">
    <a href="/" class="logo" aria-label="Alergia Balance Center — Inicio">${logo()}</a>
    <nav class="nav" id="primary-nav" aria-label="Navegación principal">
      ${links}
      ${scheduleBtn({ loc: "header-mobile" })}
    </nav>
    <div class="header__actions">
      ${scheduleBtn({ loc: "header" })}
      <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="scrim" aria-hidden="true"></div>
</header>`;
}

/* ------------------------- Barra inferior móvil ---------------------- */
function mobileActions() {
  return `<nav class="mobile-actions" aria-label="Acciones rápidas">
    <a href="${site.contact.whatsapp}" target="_blank" rel="noopener" data-track="click_whatsapp" data-track-loc="mobile-bar">${icon("whatsapp")}<span>WhatsApp</span></a>
    <a href="${site.contact.phoneHref}" data-track="click_call" data-track-loc="mobile-bar">${icon("phone")}<span>Llamar</span></a>
    <a href="/contacto/" class="primary" data-track="click_schedule" data-track-loc="mobile-bar">${icon("calendar")}<span>Agendar</span></a>
  </nav>`;
}

/* ------------------------------ Footer ------------------------------- */
function footer() {
  const explore = site.nav
    .map((n) => `<li><a href="${n.href}">${n.label}</a></li>`)
    .join("");
  const hours = site.contact.hours
    .map((h) => `<li>${h.days}: ${h.time}</li>`)
    .join("");
  const a = site.contact.address;
  return `<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__logo">${logo("light")}</div>
        <p>Atención especializada en alergia e inmunología para niños y adultos.</p>
      </div>
      <div>
        <h4>Explora</h4>
        <ul>${explore}</ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul>
          <li><a href="${site.contact.phoneHref}" data-track="click_call" data-track-loc="footer">${site.contact.phoneDisplay}</a></li>
          <li><a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
          <li>${a.street}, Roma Norte, CDMX</li>
        </ul>
      </div>
      <div>
        <h4>Horarios</h4>
        <ul>${hours}</ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Alergia Balance Center. Todos los derechos reservados.</span>
      <nav aria-label="Enlaces legales">
        <a href="/aviso-de-privacidad/">Aviso de privacidad</a>
      </nav>
    </div>
  </div>
</footer>`;
}

/* --------------------------- Aviso urgencias ------------------------- */
function emergencyNotice(text) {
  const t =
    text ||
    "Ante una emergencia médica —dificultad intensa para respirar, inflamación de lengua o garganta, desmayo o una reacción rápidamente progresiva— llama al <strong>911</strong> o acude al servicio de urgencias más cercano.";
  return `<div class="notice">${icon("alert")}<div>${t}</div></div>`;
}

/* --------------------------- Revisor médico -------------------------- */
function reviewer() {
  return `<div class="reviewer">
    <div class="reviewer__avatar" aria-hidden="true">MV</div>
    <p>Contenido revisado por <strong>${site.doctor.name}</strong>, especialista en ${site.doctor.specialty}.</p>
  </div>`;
}

/* ------------------------------ Migas -------------------------------- */
function breadcrumbs(trail) {
  const items = trail
    .map((t, i) => {
      const last = i === trail.length - 1;
      return last
        ? `<li aria-current="page">${t.label}</li>`
        : `<li><a href="${t.href}">${t.label}</a></li>`;
    })
    .join("");
  return `<nav class="breadcrumbs" aria-label="Ruta de navegación"><div class="container"><ol>${items}</ol></div></nav>`;
}

/* -------------------------------- FAQ -------------------------------- */
function faq(items, idPrefix) {
  const pre = idPrefix || "faq";
  const body = items
    .map((it, i) => {
      const id = `${pre}-${i}`;
      return `<div class="faq__item">
      <button class="faq__q" id="${id}-q" aria-expanded="false" aria-controls="${id}-a">
        <span>${it.q}</span><span class="plus" aria-hidden="true"></span>
      </button>
      <div class="faq__a" id="${id}-a" role="region" aria-labelledby="${id}-q">
        <div class="faq__a-inner">${it.a}</div>
      </div>
    </div>`;
    })
    .join("");
  return `<div class="faq">${body}</div>`;
}

/* ---------------------------- Banda CTA ------------------------------ */
function ctaBand(h2, text, opts = {}) {
  return `<section class="section"><div class="container"><div class="cta-band reveal">
    <h2>${h2}</h2>
    ${text ? `<p>${text}</p>` : ""}
    <div class="btn-row">
      ${scheduleBtn({ lg: true, loc: opts.loc || "cta-band" })}
      ${opts.hideWhatsapp ? "" : whatsappBtn({ lg: true, secondary: true, loc: opts.loc || "cta-band" })}
    </div>
  </div></div></section>`;
}

/* --------------------------- Media placeholder ----------------------- */
function media(label, cls) {
  return `<div class="${cls || "media-frame"}"><div class="ph"><span>${label}</span></div></div>`;
}

module.exports = {
  site,
  icon,
  logo,
  scheduleBtn,
  whatsappBtn,
  callBtn,
  ghostLink,
  header,
  footer,
  mobileActions,
  emergencyNotice,
  reviewer,
  breadcrumbs,
  faq,
  ctaBand,
  media,
};
