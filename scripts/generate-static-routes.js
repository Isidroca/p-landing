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
  ["proventa-auto", "Software para Talleres Mecánicos | ProVenta Auto", "ProVenta Auto organiza clientes, vehículos, órdenes de servicio, historial, inventario y facturación para talleres mecánicos y negocios automotrices."],
  ["fuerza-de-venta", "Software para Fuerza de Ventas y Pedidos Móviles | ProVenta", "Tus vendedores toman pedidos desde el celular y ProVenta conecta facturación, comisiones, metas y reportes para distribuidoras y surtidoras en República Dominicana."],
  ["planes", "Planes y precios de ProVenta", "Conoce los planes de ProVenta para facturación, inventario y punto de venta en República Dominicana."],
  ["blog", "Blog de facturación, inventario y negocios | ProVenta", "Consejos sobre facturación, inventario, ventas y gestión de negocios en República Dominicana."],
  ["blog/como-vender-mas-con-teclas-rapidas", "Cómo vender más con Teclas Rápidas | Blog ProVenta", "Descubre cómo las teclas rápidas agilizan la facturación POS y reducen el tiempo de espera de tus clientes."],
  ["blog/importancia-inventario-tiempo-real", "La importancia del inventario en tiempo real | Blog ProVenta", "Aprende por qué controlar el inventario en tiempo real ayuda a evitar faltantes, pérdidas y ventas perdidas."],
  ["blog/ventajas-facturacion-ncf", "Ventajas de la facturación con NCF | Blog ProVenta", "Conoce las ventajas de emitir facturas con NCF y mantener organizado el cumplimiento fiscal de tu negocio."],
  ["registro", "Regístrate en ProVenta", "Crea tu cuenta de ProVenta y comienza a gestionar las ventas, el inventario y la facturación de tu negocio."],
  ["privacidad", "Política de privacidad | ProVenta", "Consulta la política de privacidad y tratamiento de datos de ProVenta."],
  ["privacidad-meta", "Política de privacidad de Meta | ProVenta", "Consulta la política de privacidad aplicable a las integraciones de Meta de ProVenta."],
];

for (const [route, title, description] of routes) {
  const canonical = `https://www.proventa.app/${route}/`;
  const html = source
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?>/i, `<meta name="description" content="${description}">`)
    .replace("</head>", `<link rel="canonical" href="${canonical}"></head>`);
  const destination = path.join(buildDir, ...route.split("/"));
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(path.join(destination, "index.html"), html);
}

console.log(`Generated ${routes.length} static route entries.`);
