/**
 * Tarjeta de presentación digital (vCard) de la doctora.
 * Página autocontenida (bare: sin header/footer del sitio), pensada para
 * compartir por WhatsApp/redes. Reutiliza tokens y componentes globales.
 */
const C = require("../lib/components.js");
const { site } = C;

const photo = "/assets/images/doctora/dra-maria-vazquez.jpg";

const actionBtn = (href, cls, icon, label, attrs = "") =>
  `<a href="${href}" class="vc-btn ${cls}" ${attrs}>${C.icon(icon)}<span>${label}</span></a>`;

const locations = site.contact.locations
  .map((l) => C.locationCard(l, { loc: "vcard" }))
  .join("");

const body = `
<style>
  body.bare { background: var(--tinta); }
  /* Sin JS global en modo bare: mostrar los .reveal (p. ej. location-card). */
  body.bare .reveal { opacity: 1; transform: none; }
  .vcard-wrap {
    min-height: 100dvh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: clamp(0px, 4vw, 48px);
    background:
      radial-gradient(120% 60% at 50% 0%, rgba(197, 115, 18, 0.16), transparent 60%),
      var(--tinta);
  }
  .vcard {
    width: 100%;
    max-width: 460px;
    background: var(--papel);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }
  .vcard__cover {
    height: 132px;
    background:
      radial-gradient(90% 140% at 82% -20%, rgba(197, 115, 18, 0.5), transparent 55%),
      linear-gradient(135deg, var(--tinta), #0b2f7a);
  }
  .vcard__body { padding: 0 clamp(20px, 6vw, 34px) clamp(24px, 6vw, 34px); }
  .vcard__avatar {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center 22%;
    border: 5px solid var(--papel);
    margin: -76px auto 0;
    display: block;
    box-shadow: 0 6px 18px rgba(7, 30, 85, 0.18);
  }
  .vcard__head { text-align: center; margin-top: var(--s2); }
  .vcard__head .eyebrow { margin-bottom: 0.6rem; }
  .vcard__name {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.15;
    color: var(--tinta);
    letter-spacing: -0.01em;
  }
  .vcard__role {
    color: var(--tinta-70);
    font-size: 0.98rem;
    margin-top: 0.5rem;
  }
  .vcard__org {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: var(--s3);
    padding-top: var(--s3);
    border-top: 1px solid var(--linea);
  }
  .vcard__org img { height: 30px; width: auto; }
  .vcard__actions {
    display: grid;
    gap: 0.7rem;
    margin-top: var(--s3);
  }
  .vc-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    min-height: 52px;
    padding: 0.8rem 1.2rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 1rem;
    border: 1.5px solid transparent;
    transition: transform 80ms var(--ease-suave), background var(--d-rapido) var(--ease-suave),
      color var(--d-rapido) var(--ease-suave), border-color var(--d-rapido) var(--ease-suave);
  }
  .vc-btn:hover { transform: translateY(-1px); }
  .vc-btn .icon { width: 1.25em; height: 1.25em; flex: none; }
  .vc-btn--wa { background: #25d366; color: #08331b; }
  .vc-btn--primary { background: var(--tinta); color: #fff; }
  .vc-btn--line { background: var(--papel); color: var(--tinta); border-color: var(--tinta); }
  .vc-btn--line:hover { background: var(--tinta); color: #fff; }
  .vcard__section-label {
    font-family: var(--font-mono);
    font-size: var(--t-mono);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--polen);
    margin: var(--s4) 0 var(--s2);
  }
  .vcard__locations { display: grid; gap: var(--s2); }
  .vcard__locations .location-card { height: auto; }
  .vcard__foot {
    text-align: center;
    margin-top: var(--s4);
    font-size: 0.85rem;
    color: var(--tinta-70);
  }
  .vcard__foot a { color: var(--tinta); font-weight: 700; }
  @media (prefers-color-scheme: dark) {
    /* La tarjeta se mantiene clara a propósito para legibilidad al compartir. */
  }
</style>
<div class="vcard-wrap">
  <article class="vcard">
    <div class="vcard__cover"></div>
    <div class="vcard__body">
      <img class="vcard__avatar" src="${photo}" alt="Dra. María de Jesús Vázquez García" width="132" height="132">
      <div class="vcard__head">
        <span class="eyebrow">Alergología e Inmunología</span>
        <h1 class="vcard__name">Dra. María de Jesús Vázquez García</h1>
        <p class="vcard__role">${site.doctor.shortDescriptor} · ${site.doctor.experience}</p>
        <div class="vcard__org">
          ${C.logo()}
        </div>
      </div>

      <div class="vcard__actions">
        ${actionBtn(site.contact.whatsapp, "vc-btn--wa", "whatsapp", "Agendar por WhatsApp", 'target="_blank" rel="noopener"')}
        ${actionBtn(site.contact.phoneHref, "vc-btn--line", "phone", "Llamar")}
        ${actionBtn("/contacto/", "vc-btn--primary", "calendar", "Agendar consulta")}
        ${actionBtn("mailto:" + site.contact.email, "vc-btn--line", "mail", "Enviar correo")}
      </div>

      <p class="vcard__section-label">Dónde te atiende</p>
      <div class="vcard__locations">
        ${locations}
      </div>

      <div class="vcard__actions" style="margin-top:var(--s3)">
        ${actionBtn("/assets/dra-maria-vazquez.vcf", "vc-btn--line", "download", "Guardar contacto", 'download')}
      </div>

      <p class="vcard__foot">
        <a href="/">Conoce Alergia Balance Center →</a>
      </p>
    </div>
  </article>
</div>
`;

module.exports = {
  slug: "/dramariadejesus/",
  title: "Dra. María de Jesús Vázquez García | Tarjeta de contacto",
  description:
    "Tarjeta de contacto de la Dra. María de Jesús Vázquez García, alergóloga e inmunóloga pediatra. WhatsApp, teléfono, correo y ubicaciones en CDMX y Guadalajara.",
  bare: true,
  ogType: "profile",
  ogImage: site.baseUrl + photo,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: site.doctor.name,
      image: site.baseUrl + photo,
      jobTitle: site.doctor.shortDescriptor,
      medicalSpecialty: ["Allergology", "Pediatric Immunology"],
      worksFor: { "@type": "MedicalClinic", name: site.brand.name },
      telephone: "+" + site.contact.phoneDigits,
      email: site.contact.email,
      url: site.baseUrl + "/dramariadejesus/",
      address: site.contact.locations.map((l) => ({
        "@type": "PostalAddress",
        streetAddress: l.street,
        addressLocality: l.locality,
        addressRegion: l.region,
        addressCountry: "MX",
      })),
    },
  ],
  body,
};
