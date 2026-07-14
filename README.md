# Alergia Balance Center — Sitio web

Sitio estático de la clínica de alergia e inmunología **Alergia Balance Center**
(Roma Norte, CDMX), construido a partir de la especificación
`ALERGIA_BALANCE_ESPECIFICACION_WEB.md`.

Generador estático propio, **sin dependencias externas**: compila componentes y
contenido estructurado a HTML plano, rápido y optimizado para SEO.

## Comandos

```bash
npm run build     # genera el sitio en dist/
npm run serve     # sirve dist/ en http://localhost:4321
npm run dev       # build + serve
node scripts/make-og.js   # regenera la imagen Open Graph (requiere Chromium)
```

## Estructura

```
site.config.js          Configuración central (contacto, marca, navegación)
src/
  lib/
    components.js        Componentes reutilizables (header, footer, tarjetas, FAQ, CTA…)
    layout.js            Envoltura HTML: <head>, SEO, JSON-LD, Open Graph
  pages/                 Una página por archivo (o array de páginas)
  content/               Contenido estructurado
public/
  css/styles.css         Sistema de diseño
  js/main.js             Interacciones (menú, acordeón, formulario, animaciones)
  assets/                Logo, favicon, imagen OG
build.js                 Compilador → dist/
scripts/serve.js         Servidor estático de previsualización
```

## Páginas

Inicio · Padecimientos · Pruebas y diagnóstico · Tratamientos ·
Clínica y doctora · Blog + 2 artículos · Contacto · Gracias ·
Aviso de privacidad · 404. Incluye `sitemap.xml`, `robots.txt` y `_redirects`.

## Características

- Sistema de diseño con la paleta de marca (azul marino, turquesa, morado, dorado).
- Tipografías Manrope + Inter.
- Componentes reutilizables; los datos de contacto viven en `site.config.js`.
- SEO técnico: metadatos únicos, canonical, Open Graph, Twitter Cards y
  JSON-LD (MedicalClinic, Physician, Article, FAQPage, BreadcrumbList, WebSite).
- Accesibilidad: navegación por teclado, foco visible, `prefers-reduced-motion`,
  contraste AA, formularios etiquetados.
- Rendimiento: HTML estático, CSS/JS ligeros, mapa e imágenes con carga diferida.
- Conversión visible: CTA de cita, WhatsApp y barra inferior móvil.

## Pendientes antes de publicar

Revisar la lista de verificación de la especificación (§28). En particular:
confirmar datos de contacto y horarios, sustituir los marcadores de imagen por
fotografías reales de la doctora y la clínica, conectar el envío real del
formulario, aprobar los textos médicos y el aviso de privacidad, y verificar
credenciales y certificaciones antes de mostrarlas.
