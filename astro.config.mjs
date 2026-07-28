// @ts-check
import { defineConfig } from "astro/config";

// Sitio estático de Alergia Balance Center.
// Se conservan las URLs con barra final (/pagina/) y el dominio de producción.
export default defineConfig({
  site: "https://alergiabalance.com",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
