/* Alergia Balance Center — interacciones ligeras y accesibles.
   Sin dependencias. FAQ es <details>/<summary> nativo (cero JS). */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    /* ---------------- Header: condensar al pasar 80px ---------------- */
    var header = document.querySelector(".header");
    var topbar = document.querySelector(".topbar");
    var sentinel = document.querySelector(".scroll-sentinel");
    if (header && sentinel && "IntersectionObserver" in window) {
      var headerIo = new IntersectionObserver(
        function (entries) {
          var condensed = !entries[0].isIntersecting;
          header.classList.toggle("is-condensed", condensed);
          if (topbar) topbar.classList.toggle("is-collapsed", condensed);
        },
        { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
      );
      headerIo.observe(sentinel);
    }

    /* ---------------- Reveals por scroll ---------------- */
    var reveals = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) {
        el.classList.add("is-in");
      });
    } else {
      var revealIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              revealIo.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );
      reveals.forEach(function (el) {
        revealIo.observe(el);
      });
    }

    /* ---------------- Línea de progreso: 4 pasos ---------------- */
    var tracks = document.querySelectorAll(".steps-track");
    if (tracks.length && "IntersectionObserver" in window) {
      var trackIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var fill = entry.target.querySelector(".steps-track__fill");
              if (fill) fill.classList.add("is-filled");
              trackIo.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      tracks.forEach(function (el) {
        trackIo.observe(el);
      });
    }

    /* ---------------- Barra CTA móvil: aparece tras el hero ---------------- */
    var hero = document.querySelector(".hero, .page-hero");
    var mobileCta = document.querySelector(".mobile-cta");
    if (hero && mobileCta && "IntersectionObserver" in window) {
      var ctaIo = new IntersectionObserver(
        function (entries) {
          var e = entries[0];
          var pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
          mobileCta.classList.toggle("is-visible", pastHero);
        },
        { threshold: 0 }
      );
      ctaIo.observe(hero);
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
