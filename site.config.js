/**
 * Configuración central de Alergia Balance Center.
 * Toda la información de contacto, marca y navegación vive aquí para que
 * la clínica pueda actualizarla sin editar múltiples páginas (spec §26).
 */

const phoneDisplay = "+52 55 2755 6281";
const phoneDigits = "525527556281";
const whatsappMessage =
  "Hola, me gustaría agendar una consulta en Alergia Balance Center. ¿Me pueden compartir disponibilidad?";

const site = {
  // Producción: actualizar al dominio final antes de publicar.
  baseUrl: "https://alergiabalance.com",
  lang: "es-MX",

  brand: {
    name: "Alergia Balance Center",
    shortName: "AlergiaBalance",
    tagline: "Alergia · Asma · Inmunología",
    description:
      "Atención especializada en alergia e inmunología para niños y adultos.",
  },

  doctor: {
    name: "Dra. María de Jesús Vázquez García",
    specialty: "Alergología e Inmunología Clínica Pediátrica",
    shortDescriptor: "Alergóloga e inmunóloga pediatra",
    experience: "más de 20 años de experiencia",
  },

  contact: {
    phoneDisplay,
    phoneDigits,
    phoneHref: `tel:+${phoneDigits}`,
    email: "mariajvazquez.alergia@gmail.com",
    whatsapp: `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
      whatsappMessage
    )}`,
    address: {
      street: "Sinaloa 106, consultorio 701",
      neighborhood: "Colonia Roma Norte",
      postal: "C.P. 06700, Ciudad de México",
      full: "Sinaloa 106, consultorio 701, Colonia Roma Norte, C.P. 06700, Ciudad de México",
      locality: "Ciudad de México",
      region: "CDMX",
      postalCode: "06700",
      maps: "https://www.google.com/maps/search/?api=1&query=Sinaloa+106+Roma+Norte+CDMX",
    },
    hours: [
      { days: "Martes a viernes", time: "12:00 a 19:00" },
      { days: "Sábado", time: "11:00 a 14:00" },
      { days: "Domingo", time: "cerrado" },
    ],
  },

  // Navegación principal (spec §4.2)
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Padecimientos", href: "/padecimientos/" },
    { label: "Pruebas y diagnóstico", href: "/pruebas-y-diagnostico/" },
    { label: "Tratamientos", href: "/tratamientos/" },
    { label: "Clínica y doctora", href: "/clinica-y-doctora/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contacto", href: "/contacto/" },
  ],

  cta: {
    schedule: "Agendar consulta",
    whatsapp: "Escribir por WhatsApp",
    call: "Llamar",
  },
};

module.exports = { site };
