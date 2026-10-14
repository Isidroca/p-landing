const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const source = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

// Rutas estáticas fijas
const baseRoutes = [
  ["android", "ProVenta Mobile - POS para Android en República Dominicana", "Descarga ProVenta para Android. Factura, controla inventario, imprime recibos y gestiona tu negocio desde tu celular.", "monthly", "0.8"],
  ["como-instalar-proventa", "Cómo descargar e instalar ProVenta para Windows", "Aprende cómo descargar e instalar ProVenta para Windows y comienza a gestionar la facturación y el inventario de tu negocio.", "monthly", "0.8"],
  ["funcionalidades/teclas-rapidas", "Teclas Rápidas para Facturación POS | ProVenta", "Agiliza las ventas de tu negocio con teclas rápidas para productos y facturación POS en ProVenta.", "monthly", "0.8"],
  ["funcionalidades/facturacion-electronica", "Facturación Electrónica e-CF con la DGII | ProVenta", "Emite comprobantes fiscales electrónicos e-CF integrados con la DGII desde ProVenta.", "monthly", "0.8"],
  ["funcionalidades/ordenes-de-compra", "Órdenes de Compra y Control de Proveedores | ProVenta", "Crea órdenes de compra multimoneda, genera PDF, registra recepciones, actualiza inventario y controla cuentas por pagar con ProVenta.", "monthly", "0.8"],
  ["proventa-auto", "Software para Talleres Mecánicos | ProVenta Auto", "ProVenta Auto organiza clientes, vehículos, órdenes de servicio, historial, inventario y facturación para talleres mecánicos y negocios automotrices.", "monthly", "0.8"],
  ["por-que-proventa", "¿Por qué elegir ProVenta? | Sistema Completo en RD", "Descubre por qué ProVenta centraliza facturación, inventario, códigos de barras, impresión de etiquetas, créditos, empleados y cierres de caja en un solo sistema.", "monthly", "0.9"],
  ["fuerza-de-venta", "Software para Fuerza de Ventas y Pedidos Móviles | ProVenta", "Tus vendedores toman pedidos desde el celular y ProVenta conecta facturación, comisiones, metas y reportes para distribuidoras y surtidoras en República Dominicana.", "monthly", "0.8"],
  ["proventa-reparaciones", "Software para Talleres de Reparación | ProVenta Reparaciones", "Controla cada reparación desde la recepción hasta la factura. Modo rápido y avanzado, presupuestos, repuestos y facturación electrónica e-CF en República Dominicana.", "monthly", "0.8"],
  ["reparaciones", "Software para Talleres de Reparación | ProVenta Reparaciones", "Controla cada reparación desde la recepción hasta la factura. Modo rápido y avanzado, presupuestos, repuestos y facturación electrónica e-CF en República Dominicana.", "monthly", "0.8"],
  ["proventa-kiosko", "ProVenta Kiosko | POS para Tablet Android y Restaurantes", "Convierte una tablet Android en un punto de venta conectado a ProVenta. Toma pedidos, gestiona órdenes abiertas por mesa o barra y factura con comprobantes fiscales sin llenar tu negocio de computadoras.", "monthly", "0.9"],
  ["kiosko", "ProVenta Kiosko | POS para Tablet Android y Restaurantes", "Convierte una tablet Android en un punto de venta conectado a ProVenta. Toma pedidos, gestiona órdenes abiertas por mesa o barra y factura con comprobantes fiscales sin llenar tu negocio de computadoras.", "monthly", "0.9"],
  ["planes", "Planes y precios de ProVenta", "Conoce los planes de ProVenta para facturación, inventario y punto de venta en República Dominicana.", "monthly", "0.9"],
  ["blog", "Blog de facturación, inventario y negocios | ProVenta", "Consejos sobre facturación, inventario, ventas y gestión de negocios en República Dominicana.", "weekly", "0.8"],
  ["registro", "Regístrate en ProVenta", "Crea tu cuenta de ProVenta y comienza a gestionar las ventas, el inventario y la facturación de tu negocio.", "monthly", "0.8"],
  ["privacidad", "Política de privacidad | ProVenta", "Consulta la política de privacidad y tratamiento de datos de ProVenta.", "monthly", "0.5"],
  ["privacidad-meta", "Política de privacidad de Meta | ProVenta", "Consulta la política de privacidad aplicable a las integraciones de Meta de ProVenta.", "monthly", "0.5"],
];

const { pathToFileURL } = require("url");

// Cargar posts dinámicamente desde src/data/posts.js
async function run() {
  const postsFilePath = path.join(rootDir, "src", "data", "posts.js");
  const postsContent = fs.readFileSync(postsFilePath, "utf8");
  
  // Guardar archivo temporal mjs para importación ESM
  const tempPath = path.join(__dirname, `_temp_posts_static_${Date.now()}.mjs`);
  fs.writeFileSync(tempPath, postsContent);
  const { posts } = await import(pathToFileURL(tempPath).href);
  fs.unlinkSync(tempPath);

  // Crear rutas para todos los posts del blog
  const allRoutes = [...baseRoutes];

  for (const post of posts) {
    const route = `blog/${post.slug}`;
    const title = post.metaTitle || `${post.title} | Blog ProVenta`;
    const description = post.metaDescription || post.excerpt;
    const keywords = Array.isArray(post.keywords) ? post.keywords.join(", ") : (post.keywords || "");
    const image = post.image && post.image.startsWith("http") ? post.image : `https://www.proventa.app${post.image}`;
    const canonical = `https://www.proventa.app/${route}/`;

    const schemaData = post.schemaJsonLd || {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      },
      "headline": post.title,
      "description": description,
      "image": [image],
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Equipo ProVenta",
        "url": "https://www.proventa.app"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ProVenta",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.proventa.app/assets/img/logo-bg-black.png"
        }
      }
    };

    allRoutes.push([
      route,
      title,
      description,
      "monthly",
      "0.7",
      {
        keywords,
        image,
        schema: schemaData
      }
    ]);
  }

  // 1. Generar HTML estático para cada ruta
  for (const item of allRoutes) {
    const [route, title, description, , , extra] = item;
    const canonical = `https://www.proventa.app/${route}/`;
    
    let html = source
      .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
      .replace(/<meta\s+name="description"[\s\S]*?>/i, `<meta name="description" content="${description}">`)
      .replace(/<link\s+rel="canonical"[\s\S]*?>/i, "") // eliminar si ya existe
      .replace("</head>", `<link rel="canonical" href="${canonical}"></head>`);

    if (extra && extra.keywords) {
      html = html.replace("</head>", `<meta name="keywords" content="${extra.keywords}"></head>`);
    }

    if (extra && extra.image) {
      html = html
        .replace("</head>", `<meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:image" content="${extra.image}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="article"></head>`);
    }

    if (extra && extra.schema) {
      const scriptTag = `<script type="application/ld+json">${JSON.stringify(extra.schema)}</script>`;
      html = html.replace("</head>", `${scriptTag}</head>`);
    }

    const destination = path.join(buildDir, ...route.split("/"));
    fs.mkdirSync(destination, { recursive: true });
    fs.writeFileSync(path.join(destination, "index.html"), html);
  }

  console.log(`Generated ${allRoutes.length} static route entries (including ${posts.length} blog posts).`);

  // 2. Generar/Actualizar sitemap.xml automáticamente
  const today = new Date().toISOString().split("T")[0];
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://www.proventa.app/</loc>
  <lastmod>${today}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
`;

  for (const item of allRoutes) {
    const [route, , , changefreq, priority] = item;
    sitemapXml += `<url>
  <loc>https://www.proventa.app/${route}/</loc>
  <lastmod>${today}</lastmod>
  <changefreq>${changefreq || "monthly"}</changefreq>
  <priority>${priority || "0.7"}</priority>
</url>\n`;
  }

  sitemapXml += `</urlset>\n`;

  // Escribir en build/ y en public/
  fs.writeFileSync(path.join(buildDir, "sitemap.xml"), sitemapXml, "utf8");
  fs.writeFileSync(path.join(rootDir, "public", "sitemap.xml"), sitemapXml, "utf8");
  console.log(`✅ sitemap.xml actualizado con ${allRoutes.length + 1} URLs totales.`);
}

run().catch((err) => {
  console.error("Error en generate-static-routes:", err);
  process.exit(1);
});
