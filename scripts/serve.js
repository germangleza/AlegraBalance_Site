#!/usr/bin/env node
/** Servidor estático mínimo para previsualizar dist/ (sin dependencias). */
const http = require("http");
const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "..", "dist");
const PORT = process.env.PORT || 4321;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json",
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(DIST, p);
    if (p.endsWith("/")) file = path.join(file, "index.html");
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      const tryIndex = path.join(DIST, p, "index.html");
      if (fs.existsSync(tryIndex)) file = tryIndex;
    }
    if (!fs.existsSync(file)) {
      const nf = path.join(DIST, "404.html");
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.existsSync(nf) ? fs.readFileSync(nf) : "404");
      return;
    }
    const ext = path.extname(file);
    res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
    res.end(fs.readFileSync(file));
  })
  .listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
