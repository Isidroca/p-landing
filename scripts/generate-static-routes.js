const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const source = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

const routes = [
  ["android", "ProVenta Mobile - POS para Android en República Dominicana", "Descarga ProVenta para Android. Factura, controla inventario, imprime recibos y gestiona tu negocio desde tu celular."],
  ["como-instalar-proventa", "Cómo descargar e instalar ProVenta para Windows", "Aprende cómo descargar e instalar ProVenta para Windows y comienza a gestionar la facturación y el inventario de tu negocio."],
  ["funcionalidades/teclas-rapidas", "Teclas Rápidas para Facturación POS | ProVenta", "Agiliza las ventas de tu negocio con teclas rápidas para productos y facturación POS en ProVenta."],
  ["funcionalidades/facturacion-electronica", "Facturación Electrónica e-CF con la DGII | ProVenta", "Emite comprobantes fiscales electrónicos e-CF integrados con la DGII desde ProVenta."],
  ["funcionalidades/ordenes-de-compra", "Órdenes de Compra y Control de Proveedores | ProVenta", "Crea órdenes de compra multimoneda, genera PDF, registra recepciones, actualiza inventario y controla cuentas por pagar con ProVenta."],
  ["planes", "Planes y precios de ProVenta", "Conoce los planes de ProVenta para facturación, inventario y punto de venta en República Dominicana."],
  ["blog", "Blog de facturación, inventario y negocios | ProVenta", "Consejos sobre facturación, inventario, ventas y gestión de negocios en República Dominicana."],
  ["registro", "Regístrate en ProVenta", "Crea tu cuenta de ProVenta y comienza a gestionar las ventas, el inventario y la facturación de tu negocio."],
  ["privacidad", "Política de privacidad | ProVenta", "Consulta la política de privacidad y tratamiento de datos de ProVenta."],
  ["privacidad-meta", "Política de privacidad de Meta | ProVenta", "Consulta la política de privacidad aplicable a las integraciones de Meta de ProVenta."],
];

for (const [route, title, description] of routes) {
  const canonical = `https://www.proventa.app/${route}`;
  const html = source
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?>/i, `<meta name="description" content="${description}">`)
    .replace("</head>", `<link rel="canonical" href="${canonical}"></head>`);
  const destination = path.join(buildDir, ...route.split("/"));
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(path.join(destination, "index.html"), html);
}

console.log(`Generated ${routes.length} static route entries.`);
