/* Alergia Balance Center — interacciones ligeras y accesibles */
(function () {
  "use strict";

  // Envío de eventos de conversión (spec §22). Compatible con GA4 si existe.
  function track(name, params) {
    try {
      if (typeof window.gtag === "function") window.gtag("event", name, params || {});
      if (Array.isArray(window.dataLayer))
        window.dataLayer.push(Object.assign({ event: name }, params || {}));
    } catch (e) {}
  }
  window.abcTrack = track;

  document.addEventListener("DOMContentLoaded", function () {
    /* ---------------- Menú móvil ---------------- */
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    var scrim = document.querySelector(".scrim");

    function closeMenu() {
      if (!nav) return;
      nav.classList.remove("mobile-open");
      toggle.setAttribute("aria-expanded", "false");
      if (scrim) scrim.classList.remove("show");
      document.body.style.overflow = "";
    }
    function openMenu() {
      nav.classList.add("mobile-open");
      toggle.setAttribute("aria-expanded", "true");
      if (scrim) scrim.classList.add("show");
      document.body.style.overflow = "hidden";
    }
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") === "true";
        open ? closeMenu() : openMenu();
      });
      if (scrim) scrim.addEventListener("click", closeMenu);
      nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) closeMenu();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
      });
    }

    /* ---------------- Acordeón FAQ ---------------- */
    document.querySelectorAll(".faq__q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) {
          panel.style.maxHeight = expanded ? "0px" : panel.scrollHeight + "px";
        }
      });
    });

    /* ---------------- Animaciones de aparición ---------------- */
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) {
        el.classList.add("in");
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach(function (el) {
        io.observe(el);
      });
    }

    /* ---------------- Eventos de conversión ---------------- */
    document.querySelectorAll("[data-track]").forEach(function (el) {
      el.addEventListener("click", function () {
        track(el.getAttribute("data-track"), {
          location: el.getAttribute("data-track-loc") || document.title,
        });
      });
    });

    /* ---------------- Carga diferida del mapa ---------------- */
    var mapBtn = document.querySelector("[data-load-map]");
    if (mapBtn) {
      mapBtn.addEventListener("click", function () {
        var holder = document.querySelector(".map-block");
        var src = mapBtn.getAttribute("data-load-map");
        if (holder && src) {
          var f = document.createElement("iframe");
          f.setAttribute("src", src);
          f.setAttribute("loading", "lazy");
          f.setAttribute("title", "Mapa de Alergia Balance Center en Roma Norte, CDMX");
          f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
          holder.innerHTML = "";
          holder.appendChild(f);
          mapBtn.remove();
        }
      });
    }

    /* ---------------- Formulario de cita ---------------- */
    var form = document.getElementById("appointment-form");
    if (form) {
      var status = form.querySelector(".form__status");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Honeypot antispam invisible
        var hp = form.querySelector('input[name="empresa"]');
        if (hp && hp.value.trim() !== "") return;

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        status.className = "form__status ok";
        status.textContent =
          "Recibimos tu solicitud. El equipo de Alergia Balance Center se pondrá en contacto contigo para confirmar disponibilidad.";
        track("submit_contact_form", { location: document.title });
        track("form_success", {});
        form.reset();
        status.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
        // Integración real de envío (correo/CRM) se conecta aquí antes de publicar.
      });
    }
  });
})();
