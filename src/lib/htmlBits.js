// Fragmentos HTML para inyectar dentro del cuerpo de los artículos (prosa larga).
// Reproducen exactamente icon()/emergencyNotice()/faq() del sistema anterior.
import { ICONS } from "./icons.js";

export function iconHtml(name, cls) {
  const path = ICONS[name] || "";
  return `<svg class="icon${cls ? " " + cls : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
}

export function emergencyNoticeHtml(text) {
  const t =
    text ||
    "Ante una emergencia médica —dificultad intensa para respirar, inflamación de lengua o garganta, desmayo o una reacción rápidamente progresiva— llama al <strong>911</strong> o acude al servicio de urgencias más cercano.";
  return `<div class="notice">${iconHtml("alert")}<div>${t}</div></div>`;
}

export function faqHtml(items) {
  const body = items
    .map(
      (it) => `<details class="faq__item">
      <summary>
        <span>${it.q}</span><span class="plus" aria-hidden="true"></span>
      </summary>
      <div class="faq-cuerpo"><div>
        <div class="faq__a-inner">${it.a}</div>
      </div></div>
    </details>`
    )
    .join("");
  return `<div class="faq">${body}</div>`;
}
