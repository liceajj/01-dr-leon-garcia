const fs = require("fs");

const domain = "https://dr-rodrigoleon-ortopedista.com"; // Cambia esto por tu dominio real

const pages = [
  "/", 
  "/ortopedia", 
  "/traumatologia", 
  "/contacto",
  "/acerca-de"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${domain}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("✅ Sitemap generado correctamente.");
