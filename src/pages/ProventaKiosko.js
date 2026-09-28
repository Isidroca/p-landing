import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";
import "./ProventaKiosko.css";

const whatsappDemoUrl =
  "https://wa.me/18097874963?text=Hola%2C%20quiero%20solicitar%20una%20demostraci%C3%B3n%20de%20ProVenta%20Kiosko";
const whatsappContactUrl =
  "https://wa.me/18097874963?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20ProVenta%20Kiosko%20para%20mi%20negocio";

const targetBusinesses = [
  {
    icon: "bx-coffee",
    title: "Cafeterías",
    desc: "Toma pedidos rápidos en mostrador o mesas y despacha bebidas sin demoras.",
  },
  {
    icon: "bx-restaurant",
    title: "Restaurantes pequeños",
    desc: "Atención por mesas, órdenes abiertas y comanda impresa directo al servicio.",
  },
  {
    icon: "bx-drink",
    title: "Bares y Lounges",
    desc: "Manejo de cuentas por barra o mesa con adición continua de tragos y platos.",
  },
  {
    icon: "bx-car",
    title: "Food trucks",
    desc: "Cobro táctil y ágil en espacios reducidos con hardware compacto.",
  },
  {
    icon: "bx-popsicle",
    title: "Heladerías",
    desc: "Catálogo visual con sabores y combinaciones listas para marcar en un toque.",
  },
  {
    icon: "bx-baguette",
    title: "Panaderías y Reposterías",
    desc: "Atención veloz de clientes en fila con cálculo automático de devuelta.",
  },
  {
    icon: "bx-store-alt",
    title: "Kioscos de plazas",
    desc: "Punto de venta elegante y pequeño sin necesidad de muebles pesados para PC.",
  },
  {
    icon: "bx-dish",
    title: "Comedores y Buffets",
    desc: "Registro instantáneo de platos del día y extras con control de caja.",
  },
  {
    icon: "bx-timer",
    title: "Comida rápida",
    desc: "Flujo simplificado para tomar orden, cobrar en segundos y despachar.",
  },
  {
    icon: "bx-shopping-bag",
    title: "Tiendas y ventas móviles",
    desc: "Puntos de atención adicionales en pasillos, eventos y temporadas altas.",
  },
];

const openOrdersSteps = [
  {
    number: "1",
    title: "Creación del pedido",
    desc: "El empleado toma los productos solicitados directamente en la pantalla táctil de la tablet.",
  },
  {
    number: "2",
    title: "Asigna la referencia",
    desc: "Indica fácilmente Mesa 5, Barra 1, Nombre del cliente o Turno para ubicarlo sin error.",
  },
  {
    number: "3",
    title: "Guarda la orden",
    desc: "Con un solo toque la comanda queda resguardada y visible en la lista de órdenes activas.",
  },
  {
    number: "4",
    title: "Atiende a otros clientes",
    desc: "La tablet queda libre inmediatamente para seguir tomando nuevos pedidos en el local.",
  },
  {
    number: "5",
    title: "Retoma la orden",
    desc: "Cuando el cliente desea pedir algo más, el empleado vuelve a abrir la orden en un instante.",
  },
  {
    number: "6",
    title: "Modifica productos",
    desc: "Aumenta cantidades, añade bebidas o elimina ítems manteniendo el subtotal al día.",
  },
  {
    number: "7",
    title: "Cobra y factura",
    desc: "Elige efectivo, tarjeta o transferencia y emite el comprobante fiscal en segundos.",
  },
];

const comparisonHighlights = [
  {
    icon: "bx-dollar-circle",
    title: "Bajo costo para comenzar",
    desc: "Aprovecha tablets Android comerciales y económicas en lugar de adquirir computadoras completas.",
  },
  {
    icon: "bx-tab",
    title: "Solo necesitas una tablet compatible",
    desc: "Instala ProVenta Kiosko en dispositivos Android accesibles y comienza a operar de inmediato.",
  },
  {
    icon: "bx-devices",
    title: "Sin una PC por cada punto",
    desc: "Multiplica tus puestos de atención sin duplicar el gasto en monitores, torres ni cableados.",
  },
  {
    icon: "bx-sync",
    title: "PC y tablets en simultáneo",
    desc: "Un cajero factura en la computadora principal mientras los camareros atienden en tablets.",
  },
  {
    icon: "bx-data",
    title: "Misma información centralizada",
    desc: "Precios, productos, inventario y ventas se sincronizan con la base de datos de ProVenta.",
  },
  {
    icon: "bx-trending-up",
    title: "Crece a tu propio ritmo",
    desc: "Agrega nuevas tablets según aumente la afluencia de clientes sin configuraciones complejas.",
  },
];

const differentialsList = [
  "Funciona en tablets Android comerciales",
  "Bajo costo de implementación y mantenimiento",
  "Interfaz 100 % táctil con botones grandes y ergonómicos",
  "Múltiples cajeros y usuarios trabajando en equipo",
  "Múltiples dispositivos conectados al mismo negocio",
  "PC y tablets operando de manera simultánea",
  "Gestión ágil de órdenes abiertas en tiempo real",
  "Identificación por mesa, barra, turno, cliente o referencia libre",
  "Continuar y actualizar pedidos existentes en 1 toque",
  "Cobro directo desde la comanda sin duplicar registros",
  "Cálculo automático de impuestos y descuentos",
  "Desglose de propina legal del 10 % para gastronomía",
  "Comprobantes fiscales (NCF) y factura a Consumidor Final",
  "Integración con Facturación Electrónica e-CF de la DGII",
  "Impresión de pedidos y recibos desde la tablet",
  "Catálogo visual de productos con fotos y categorías rápidas",
  "Manejo de clientes con RNC o venta rápida de mostrador",
  "Inventario conectado en tiempo real con ProVenta",
  "Reportes y control administrativo centralizado en ProVenta",
];

const faqs = [
  {
    q: "¿ProVenta Kiosko reemplaza a ProVenta para computadora?",
    a: "No. ProVenta Kiosko está diseñado como una extensión complementaria y flexible de ProVenta. Permite convertir tablets Android en puntos de venta táctiles adicionales, mientras mantienes tu computadora principal para administración general, compras, inventario y facturación de caja.",
  },
  {
    q: "¿Qué tipo de tablet necesito para usar ProVenta Kiosko?",
    a: "Funciona en tablets con sistema operativo Android. Puedes utilizar modelos económicos del mercado, lo que te permite ahorrar significativamente en equipamiento frente a la compra de terminales POS tradicionales o computadoras completas.",
  },
  {
    q: "¿Puedo tener varios empleados atendiendo con diferentes tablets a la vez?",
    a: "Sí. Múltiples cajeros o meseros pueden tomar pedidos, abrir órdenes por mesa o barra y registrar ventas en paralelo desde distintas tablets, todas conectadas al mismo sistema ProVenta.",
  },
  {
    q: "¿Cómo se manejan los comprobantes fiscales y la DGII?",
    a: "Desde el flujo de cobro de ProVenta Kiosko puedes seleccionar comprobante fiscal o Consumidor Final. Utiliza la configuración fiscal de tu empresa en ProVenta y, si tienes habilitada la Facturación Electrónica e-CF con la DGII, se integra automáticamente al emitir la factura.",
  },
  {
    q: "¿Puedo imprimir tickets o pedidos desde la tablet?",
    a: "Sí. Las órdenes y facturas pueden imprimirse en impresoras térmicas compatibles conectadas a tu red o vía inalámbrica según la configuración de tu negocio.",
  },
];

const ProventaKiosko = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProVenta Kiosko",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, Windows",
    description:
      "Extensión POS táctil de ProVenta para tablets Android. Toma pedidos, gestiona órdenes abiertas por mesa o barra, cobra en efectivo, tarjeta o transferencia y emite comprobantes fiscales y e-CF conectados con ProVenta.",
    url: "https://www.proventa.app/proventa-kiosko/",
    brand: {
      "@type": "Brand",
      name: "ProVenta",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "DOP",
      description:
        "Extensión punto de venta para tablets Android conectada al ecosistema ProVenta.",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>
          ProVenta Kiosko | POS para Tablet Android y Restaurantes en RD
        </title>
        <meta
          name="description"
          content="Convierte una tablet Android en un punto de venta conectado a ProVenta. Toma pedidos, gestiona órdenes abiertas por mesa o barra y factura con comprobantes fiscales sin llenar tu negocio de computadoras."
        />
        <meta
          name="keywords"
          content="POS para tablet, sistema POS Android, punto de venta para tablet, sistema para restaurantes, sistema para cafeterías, sistema de pedidos para restaurantes, POS para restaurantes República Dominicana, facturación desde tablet, sistema de órdenes para restaurantes, facturación electrónica para restaurantes, sistema POS República Dominicana, ProVenta Kiosko"
        />
        <link rel="canonical" href="https://www.proventa.app/proventa-kiosko/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ProVenta Kiosko | POS para Tablet Android y Restaurantes"
        />
        <meta
          property="og:description"
          content="Toma pedidos, gestiona órdenes abiertas y factura desde una tablet Android conectada a ProVenta. Ideal para cafeterías, restaurantes, food trucks y negocios ágiles."
        />
        <meta
          property="og:url"
          content="https://www.proventa.app/proventa-kiosko/"
        />
        <meta
          property="og:image"
          content="https://www.proventa.app/assets/img/kiosko/kiosko-pos-tablet.png"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="kiosko-page min-vh-100 d-flex flex-column">
        <Header />

        <main>
          {/* ================================================================
              1. HERO SECTION
             ================================================================ */}
          <section className="kiosko-hero" id="inicio">
            <div className="container position-relative">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <div className="mb-3">
                    <span className="kiosko-badge kiosko-badge-purple">
                      <i className="bx bxl-android fs-6"></i>
                      ProVenta Kiosko · Extensión POS para Tablet
                    </span>
                  </div>

                  <h1 className="kiosko-hero-title mb-3">
                    Tu punto de venta,{" "}
                    <span className="kiosko-gradient-text">
                      ahora en una tablet.
                    </span>
                  </h1>

                  <p className="kiosko-hero-lead mb-4">
                    Toma pedidos, gestiona órdenes abiertas y factura desde una
                    tablet Android, totalmente conectado con ProVenta.
                  </p>

                  <div className="kiosko-hero-actions d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4">
                    <a href="#vende-desde-cualquier-punto" className="kiosko-btn-primary">
                      <i className="bx bx-play-circle fs-5"></i>
                      Conocer ProVenta Kiosko
                    </a>
                    <a
                      href={whatsappDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kiosko-btn-secondary"
                    >
                      <i className="bx bxl-whatsapp fs-5 text-success"></i>
                      Solicitar una demo
                    </a>
                  </div>

                  <div className="pt-2">
                    <small className="text-muted fw-semibold d-block mb-2 text-uppercase letter-spacing">
                      Diseñado para la agilidad de tu negocio:
                    </small>
                    <div className="kiosko-hero-badges justify-content-center justify-content-lg-start">
                      <span className="kiosko-hero-badge-item">
                        <i className="bx bxl-android"></i> Tablets Android
                      </span>
                      <span className="kiosko-hero-badge-item">
                        <i className="bx bx-receipt"></i> Órdenes abiertas
                      </span>
                      <span className="kiosko-hero-badge-item">
                        <i className="bx bx-check-circle"></i> Facturación integrada
                      </span>
                      <span className="kiosko-hero-badge-item">
                        <i className="bx bx-group"></i> Múltiples cajeros
                      </span>
                      <span className="kiosko-hero-badge-item">
                        <i className="bx bx-file"></i> Comprobantes fiscales
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="kiosko-tablet-frame">
                    <img
                      src="/assets/img/kiosko/kiosko-pos-tablet.png"
                      alt="ProVenta Kiosko interfaz táctil en tablet Android con catálogo visual y venta actual"
                      className="img-fluid"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              2. SECCIÓN: VENDE DESDE CUALQUIER PUNTO (Beneficio Económico)
             ================================================================ */}
          <section
            className="kiosko-sec-economic py-5"
            id="vende-desde-cualquier-punto"
          >
            <div className="container py-lg-4">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 780 }}>
                <span className="kiosko-badge kiosko-badge-purple mb-3">
                  <i className="bx bx-trending-up"></i>
                  Eficiencia y Menor Inversión
                </span>
                <h2 className="display-6 fw-bold text-dark mb-3">
                  Más puntos de venta sin llenar tu negocio de computadoras
                </h2>
                <p className="fs-5 text-muted mb-0">
                  ProVenta Kiosko permite utilizar tablets Android como puntos
                  de atención conectados al mismo negocio. Un cajero puede estar
                  facturando desde la computadora mientras otro empleado toma
                  pedidos o cobra desde una tablet.
                </p>
              </div>

              {/* Economic highlights grid */}
              <div className="row g-4 mb-5">
                {comparisonHighlights.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="kiosko-eco-card">
                      <div className="kiosko-eco-icon">
                        <i className={`bx ${item.icon}`}></i>
                      </div>
                      <h3 className="h5 fw-bold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ecosystem harmony banner */}
              <div className="kiosko-eco-comparison-banner">
                <div className="row align-items-center gy-4 position-relative">
                  <div className="col-lg-8">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
                      EXTENSIÓN FLEXIBLE DE PROVENTA
                    </span>
                    <h3 className="h2 fw-bold text-white mb-3">
                      La tablet no reemplaza a tu computadora: la complementa.
                    </h3>
                    <p className="text-white text-opacity-80 mb-0 fs-6">
                      Mantén tu PC principal para control de compras, ajustes de
                      inventario, auditoría y facturación administrativa, mientras
                      distribuyes tablets Android entre tus empleados para atender
                      a los clientes donde ocurre la venta.
                    </p>
                  </div>
                  <div className="col-lg-4 text-lg-end d-flex flex-column gap-2 justify-content-lg-end">
                    <Link
                      to="/"
                      className="kiosko-btn-outline-light"
                    >
                      <i className="bx bx-desktop fs-5"></i>
                      Ver ProVenta para PC
                    </Link>
                    <a
                      href={whatsappContactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kiosko-btn-outline-light"
                    >
                      <i className="bx bx-message-rounded-dots fs-5"></i>
                      Consultar compatibilidad
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              3. SECCIÓN: VENTA RÁPIDA Y TÁCTIL
             ================================================================ */}
          <section className="kiosko-sec-tactile py-5" id="venta-rapida">
            <div className="container py-lg-4">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6">
                  <div className="kiosko-tablet-frame">
                    <img
                      src="/assets/img/kiosko/kiosko-pos-tablet.png"
                      alt="Pantalla de Venta Rápida en ProVenta Kiosko con categorías, fotos y venta actual"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <span className="kiosko-badge kiosko-badge-purple mb-3">
                    <i className="bx bx-fingerprint"></i>
                    Operación 100 % Táctil
                  </span>
                  <h2 className="display-6 fw-bold text-dark mb-3">
                    Diseñado para vender rápido
                  </h2>
                  <p className="text-muted mb-4 fs-6">
                    La interfaz de ProVenta Kiosko está optimizada para pantallas
                    táctiles y operaciones ágiles. Pensada para empleados que
                    necesitan despachar clientes en fila o atender mesas sin
                    perderse en menús administrativos complejos.
                  </p>

                  <div className="kiosko-feature-list">
                    <div className="kiosko-feature-list-item">
                      <div className="kiosko-feature-icon">
                        <i className="bx bx-images"></i>
                      </div>
                      <div>
                        <strong className="d-block text-dark">
                          Productos mostrados visualmente
                        </strong>
                        <small className="text-muted">
                          Fotografías e iconos claros para identificar cada plato,
                          bebida o producto al instante.
                        </small>
                      </div>
                    </div>

                    <div className="kiosko-feature-list-item">
                      <div className="kiosko-feature-icon">
                        <i className="bx bx-category-alt"></i>
                      </div>
                      <div>
                        <strong className="d-block text-dark">
                          Categorías rápidas y buscador integrado
                        </strong>
                        <small className="text-muted">
                          Filtra por Entradas, Platos Fuertes, Postres, Bebidas o
                          escribe en el buscador en tiempo real.
                        </small>
                      </div>
                    </div>

                    <div className="kiosko-feature-list-item">
                      <div className="kiosko-feature-icon">
                        <i className="bx bx-plus-circle"></i>
                      </div>
                      <div>
                        <strong className="d-block text-dark">
                          Agregar con un toque (+ / -)
                        </strong>
                        <small className="text-muted">
                          Suma productos con tocar su tarjeta y ajusta
                          cantidades velozmente en el panel lateral.
                        </small>
                      </div>
                    </div>

                    <div className="kiosko-feature-list-item">
                      <div className="kiosko-feature-icon">
                        <i className="bx bx-calculator"></i>
                      </div>
                      <div>
                        <strong className="d-block text-dark">
                          Totales siempre a la vista
                        </strong>
                        <small className="text-muted">
                          Visualización permanente de Subtotal, Impuestos,
                          Descuentos, Propina legal (10 %) y Total en DOP.
                        </small>
                      </div>
                    </div>

                    <div className="kiosko-feature-list-item">
                      <div className="kiosko-feature-icon">
                        <i className="bx bx-shield-quarter"></i>
                      </div>
                      <div>
                        <strong className="d-block text-dark">
                          Botones grandes y ergonómicos
                        </strong>
                        <small className="text-muted">
                          Acceso directo a "Guardar orden" y "Cobrar y facturar"
                          evitando errores de digitación.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              4. SECCIÓN: ÓRDENES ABIERTAS
             ================================================================ */}
          <section className="kiosko-sec-orders py-5" id="ordenes-abiertas">
            <div className="container py-lg-4">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 820 }}>
                <span className="kiosko-badge kiosko-badge-purple mb-3">
                  <i className="bx bx-food-menu"></i>
                  Gestión de Comandas y Cuentas
                </span>
                <h2 className="display-6 fw-bold text-dark mb-3">
                  Toma el pedido ahora. Cobra cuando el cliente esté listo.
                </h2>
                <p className="fs-5 text-muted mb-4">
                  Maneja múltiples pedidos simultáneamente sin perder el control
                  de quién pidió qué. Asigna una mesa, barra o referencia y
                  continúa atendiendo sin esperas.
                </p>

                {/* Chips of reference types */}
                <div className="d-flex flex-wrap justify-content-center gap-2 pt-1">
                  <span className="kiosko-ref-chip">
                    <i className="bx bx-chair text-primary"></i> Mesa 5
                  </span>
                  <span className="kiosko-ref-chip">
                    <i className="bx bx-drink text-primary"></i> Barra 1
                  </span>
                  <span className="kiosko-ref-chip">
                    <i className="bx bx-hotel text-primary"></i> Habitación 204
                  </span>
                  <span className="kiosko-ref-chip">
                    <i className="bx bx-user text-primary"></i> Cliente por nombre
                  </span>
                  <span className="kiosko-ref-chip">
                    <i className="bx bx-hash text-primary"></i> Turno #14
                  </span>
                  <span className="kiosko-ref-chip">
                    <i className="bx bx-sun text-primary"></i> Terraza
                  </span>
                </div>
              </div>

              {/* Screenshot of open orders */}
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                  <div className="kiosko-tablet-frame">
                    <img
                      src="/assets/img/kiosko/kiosko-ordenes-abiertas-tablet.png"
                      alt="Bandeja de Órdenes Abiertas en ProVenta Kiosko mostrando Mesa 5, Barra 1 y Mesa 3"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Data highlight details directly from the screenshot */}
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="kiosko-mock-card h-100">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="kiosko-mock-badge">ABIERTA · #1220</span>
                      <small className="text-muted">Hace 0 min</small>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-1">Mesa 5</h3>
                    <div className="h3 fw-bold text-primary mb-3">RD$345.60</div>
                    <div className="small text-muted mb-3">
                      <i className="bx bx-basket me-1"></i> 2 productos · Pamela Perez
                    </div>
                    <div className="d-flex gap-2">
                      <span className="badge bg-light text-dark border p-2 flex-grow-1 text-center">
                        Continuar orden
                      </span>
                      <span className="badge bg-primary text-white p-2 flex-grow-1 text-center">
                        Cobrar
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="kiosko-mock-card h-100">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="kiosko-mock-badge">ABIERTA · #1219</span>
                      <small className="text-muted">Hace 0 min</small>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-1">Barra 1</h3>
                    <div className="h3 fw-bold text-primary mb-3">RD$149.10</div>
                    <div className="small text-muted mb-3">
                      <i className="bx bx-basket me-1"></i> 2 productos · Pamela Perez
                    </div>
                    <div className="d-flex gap-2">
                      <span className="badge bg-light text-dark border p-2 flex-grow-1 text-center">
                        Continuar orden
                      </span>
                      <span className="badge bg-primary text-white p-2 flex-grow-1 text-center">
                        Cobrar
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="kiosko-mock-card h-100">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="kiosko-mock-badge">ABIERTA · #1218</span>
                      <small className="text-muted">Hace 1 min</small>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-1">Mesa 3</h3>
                    <div className="h3 fw-bold text-primary mb-3">RD$428.80</div>
                    <div className="small text-muted mb-3">
                      <i className="bx bx-basket me-1"></i> 2 productos · Pamela Perez
                    </div>
                    <div className="d-flex gap-2">
                      <span className="badge bg-light text-dark border p-2 flex-grow-1 text-center">
                        Continuar orden
                      </span>
                      <span className="badge bg-primary text-white p-2 flex-grow-1 text-center">
                        Cobrar
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7-step process */}
              <div className="text-center mb-4">
                <h3 className="h4 fw-bold text-dark">
                  Flujo operativo sencillo en 7 pasos
                </h3>
              </div>
              <div className="row g-3">
                {openOrdersSteps.map((step, idx) => (
                  <div className="col-sm-6 col-lg" key={idx}>
                    <div className="kiosko-step-card">
                      <div className="kiosko-step-number">{step.number}</div>
                      <h4 className="h6 fw-bold text-dark mb-1">
                        {step.title}
                      </h4>
                      <p className="small text-muted mb-0">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              5. SECCIÓN: MÚLTIPLES CAJEROS / DISPOSITIVOS
             ================================================================ */}
          <section className="kiosko-sec-devices py-5" id="multiples-dispositivos">
            <div className="container py-lg-5">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
                <span className="kiosko-badge kiosko-badge-dark mb-3">
                  <i className="bx bx-network-chart"></i>
                  Operación Colaborativa
                </span>
                <h2 className="display-6 fw-bold text-white mb-3">
                  Todos trabajando en el mismo negocio
                </h2>
                <p className="fs-5 text-light text-opacity-75 mb-0">
                  ProVenta Kiosko no está limitado a una sola tablet. Un negocio
                  puede tener varios dispositivos trabajando en simultáneo sobre
                  la misma información y base de datos centralizada.
                </p>
              </div>

              {/* Device network visualization */}
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-3 col-sm-6">
                  <div className="kiosko-device-node">
                    <div className="kiosko-device-icon">
                      <i className="bx bx-desktop"></i>
                    </div>
                    <span className="badge bg-primary mb-2">CAJA PRINCIPAL</span>
                    <h3 className="h5 text-white mb-2">ProVenta Desktop</h3>
                    <p className="small text-light text-opacity-70 mb-0">
                      Facturación general, administración, compras, cierres de caja
                      y control de inventario.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="kiosko-device-node">
                    <div className="kiosko-device-icon">
                      <i className="bx bx-tab"></i>
                    </div>
                    <span className="badge bg-info text-dark mb-2">TABLET 1</span>
                    <h3 className="h5 text-white mb-2">Mesas y Pedidos</h3>
                    <p className="small text-light text-opacity-70 mb-0">
                      Atención en salón comedor, apertura de cuentas por mesa y
                      adición rápida de órdenes.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="kiosko-device-node">
                    <div className="kiosko-device-icon">
                      <i className="bx bx-drink"></i>
                    </div>
                    <span className="badge bg-warning text-dark mb-2">TABLET 2</span>
                    <h3 className="h5 text-white mb-2">Barra y Bebidas</h3>
                    <p className="small text-light text-opacity-70 mb-0">
                      Despacho veloz de tragos, cócteles y snacks con cobro o
                      comanda directa.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="kiosko-device-node">
                    <div className="kiosko-device-icon">
                      <i className="bx bx-bolt-circle"></i>
                    </div>
                    <span className="badge bg-success mb-2">TABLET 3</span>
                    <h3 className="h5 text-white mb-2">Caja Rápida / Take-Out</h3>
                    <p className="small text-light text-opacity-70 mb-0">
                      Para pedidos para llevar o filas en mostrador durante horas
                      pico de máxima afluencia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Central hub confirmation */}
              <div className="mt-4">
                <div className="kiosko-hub-central">
                  <div className="row align-items-center gy-3 text-center text-lg-start">
                    <div className="col-lg-9">
                      <h4 className="h5 text-white mb-1">
                        <i className="bx bx-check-double text-warning me-2 fs-4"></i>
                        Cero duplicidad de datos y sincronización transparente
                      </h4>
                      <p className="small text-light text-opacity-75 mb-0">
                        Cada empleado trabaja desde su punto correspondiente. Las
                        órdenes, productos descontados y facturas forman parte de
                        un único reporte consolidado en ProVenta.
                      </p>
                    </div>
                    <div className="col-lg-3 text-lg-end">
                      <a
                        href={whatsappDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-dark"
                      >
                        Probar con tu equipo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              6. SECCIÓN: COBRO Y FACTURACIÓN
             ================================================================ */}
          <section className="kiosko-sec-checkout py-5" id="cobro-facturacion">
            <div className="container py-lg-4">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6 order-2 order-lg-1">
                  <span className="kiosko-badge kiosko-badge-purple mb-3">
                    <i className="bx bx-credit-card-front"></i>
                    Cobro Instantáneo
                  </span>
                  <h2 className="display-6 fw-bold text-dark mb-3">
                    Del pedido a la factura en segundos
                  </h2>
                  <p className="text-muted mb-4 fs-6">
                    Una orden abierta se convierte directamente en factura sin
                    tener que volver a registrar los productos. El modal de cobro
                    ofrece todo lo necesario para cerrar la transacción con
                    máxima agilidad.
                  </p>

                  <div className="row g-3 mb-4">
                    <div className="col-12">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="kiosko-pill-tab active">
                          <i className="bx bx-money"></i> Efectivo
                        </span>
                        <span className="kiosko-pill-tab">
                          <i className="bx bx-credit-card"></i> Tarjeta
                        </span>
                        <span className="kiosko-pill-tab">
                          <i className="bx bx-transfer-alt"></i> Transferencia
                        </span>
                      </div>
                      <small className="text-muted d-block">
                        Elige el método de pago preferido por el cliente en un solo clic.
                      </small>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-3 border">
                        <small className="text-muted d-block mb-1">
                          Cálculo de Devuelta
                        </small>
                        <strong className="text-success h5 mb-0 d-block">
                          Devuelta automática
                        </strong>
                        <span className="small text-muted">
                          Ingresa monto recibido (o botón "Monto exacto") y calcula
                          el cambio al instante.
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-3 border">
                        <small className="text-muted d-block mb-1">
                          Propina Legal del 10 %
                        </small>
                        <strong className="text-dark h5 mb-0 d-block">
                          Casilla configurable
                        </strong>
                        <span className="small text-muted">
                          Aplica automáticamente el 10 % de propina legal para
                          restaurantes y bares.
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-3 border">
                        <small className="text-muted d-block mb-1">
                          Selección de Cliente
                        </small>
                        <strong className="text-dark h6 mb-0 d-block">
                          Consumidor Final o RNC
                        </strong>
                        <span className="small text-muted">
                          Asigna clientes habituales o factura a Consumidor Final
                          por defecto.
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-light rounded-3 border">
                        <small className="text-muted d-block mb-1">
                          Transparencia Total
                        </small>
                        <strong className="text-dark h6 mb-0 d-block">
                          Impuestos y Descuentos
                        </strong>
                        <span className="small text-muted">
                          Visualiza Subtotal, ITBIS, Descuento y Total neto a
                          pagar sin sorpresas.
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kiosko-btn-primary"
                  >
                    <i className="bx bx-check-shield fs-5"></i>
                    Ver demostración de cobro
                  </a>
                </div>

                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="kiosko-tablet-frame">
                    <img
                      src="/assets/img/kiosko/kiosko-cobro-facturar-tablet.png"
                      alt="Modal de cobro y facturación en ProVenta Kiosko con Efectivo, Tarjeta, Devuelta y Propina legal"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              7. SECCIÓN: FACTURACIÓN FISCAL Y E-CF
             ================================================================ */}
          <section className="kiosko-sec-fiscal py-5" id="facturacion-fiscal">
            <div className="container py-lg-4">
              <div className="row align-items-center gy-5">
                <div className="col-lg-5">
                  <span className="kiosko-badge kiosko-badge-amber mb-3">
                    <i className="bx bx-check-shield"></i>
                    Cumplimiento Fiscal en RD
                  </span>
                  <h2 className="display-6 fw-bold text-dark mb-3">
                    Listo para la facturación de tu negocio
                  </h2>
                  <p className="text-muted mb-4 fs-6">
                    A diferencia de aplicaciones informales que solo imprimen
                    comandas, ProVenta Kiosko está respaldado por la estructura
                    fiscal formal de ProVenta en República Dominicana.
                  </p>
                  <p className="text-muted mb-4 fs-6">
                    Desde el flujo de cobro puedes activar la casilla{" "}
                    <strong>"Requiere comprobante fiscal"</strong> para emitir
                    comprobantes con valor de crédito fiscal (B01) o de consumo
                    (B02) utilizando la numeración centralizada de la empresa.
                  </p>

                  <div className="p-3 bg-white rounded-3 border-start border-4 border-warning shadow-sm">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <i className="bx bx-qr-scan text-warning fs-4"></i>
                      <strong className="text-dark">
                        Facturación Electrónica e-CF DGII
                      </strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Si tu empresa tiene habilitada la Facturación Electrónica
                      con la DGII en ProVenta, las ventas realizadas desde Kiosko
                      se emiten electrónicamente con total validez regulatoria.
                    </p>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="kiosko-fiscal-card">
                        <div className="kiosko-eco-icon">
                          <i className="bx bx-receipt"></i>
                        </div>
                        <h3 className="h5 fw-bold text-dark mb-2">
                          Consumidor Final
                        </h3>
                        <p className="text-muted small mb-0">
                          Ventas rápidas a clientes particulares con cálculo
                          preciso de ITBIS y comprobante de consumo según la
                          normativa.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="kiosko-fiscal-card">
                        <div className="kiosko-eco-icon">
                          <i className="bx bx-building"></i>
                        </div>
                        <h3 className="h5 fw-bold text-dark mb-2">
                          Crédito Fiscal y RNC
                        </h3>
                        <p className="text-muted small mb-0">
                          Asigna el RNC del cliente empresarial para emitir
                          comprobantes con valor fiscal válidos para gastos.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="kiosko-fiscal-card">
                        <div className="kiosko-eco-icon">
                          <i className="bx bx-cog"></i>
                        </div>
                        <h3 className="h5 fw-bold text-dark mb-2">
                          Configuración Central
                        </h3>
                        <p className="text-muted small mb-0">
                          Tus secuencias de NCF, impuestos y reglas de negocio se
                          configuran una sola vez en ProVenta y aplican a todas
                          las tablets.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="kiosko-fiscal-card">
                        <div className="kiosko-eco-icon">
                          <i className="bx bx-file-blank"></i>
                        </div>
                        <h3 className="h5 fw-bold text-dark mb-2">
                          e-CF Integrado
                        </h3>
                        <p className="text-muted small mb-0">
                          Generación transparente de comprobantes fiscales
                          electrónicos cuando el módulo e-CF esté activo en tu
                          cuenta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              8. SECCIÓN: PEDIDOS E IMPRESIÓN
             ================================================================ */}
          <section className="py-5" id="pedidos-impresion">
            <div className="container py-lg-4">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
                <span className="kiosko-badge kiosko-badge-purple mb-3">
                  <i className="bx bx-printer"></i>
                  Flujo de Despacho
                </span>
                <h2 className="display-6 fw-bold text-dark mb-3">
                  El pedido llega donde tiene que llegar
                </h2>
                <p className="fs-5 text-muted mb-0">
                  Los pedidos registrados desde Kiosko forman parte del flujo de
                  ProVenta y pueden imprimirse desde la tablet cuando la
                  configuración del negocio lo permita.
                </p>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-4">
                  <div className="kiosko-flow-box h-100">
                    <div className="kiosko-eco-icon flex-shrink-0">
                      <i className="bx bx-chair"></i>
                    </div>
                    <div>
                      <span className="badge bg-primary mb-1">MESA</span>
                      <h3 className="h6 fw-bold text-dark mb-1">
                        Mesa → Tablet → Pedido → Impresión
                      </h3>
                      <p className="small text-muted mb-0">
                        El mesero toma la orden junto a la mesa y se imprime el
                        ticket para preparación inmediata.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="kiosko-flow-box h-100">
                    <div className="kiosko-eco-icon flex-shrink-0">
                      <i className="bx bx-drink"></i>
                    </div>
                    <div>
                      <span className="badge bg-info text-dark mb-1">BARRA</span>
                      <h3 className="h6 fw-bold text-dark mb-1">
                        Barra → Tablet → Pedido → Impresión
                      </h3>
                      <p className="small text-muted mb-0">
                        El bartender anota la ronda directamente en la tablet y
                        emite comanda o recibo según el caso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="kiosko-flow-box h-100">
                    <div className="kiosko-eco-icon flex-shrink-0">
                      <i className="bx bx-store"></i>
                    </div>
                    <div>
                      <span className="badge bg-success mb-1">MOSTRADOR</span>
                      <h3 className="h6 fw-bold text-dark mb-1">
                        Mostrador → Tablet → Cobro → Factura
                      </h3>
                      <p className="small text-muted mb-0">
                        El cliente ordena, paga en efectivo o tarjeta y se imprime
                        su factura térmica en el momento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-light rounded-4 border text-center">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-8">
                    <h4 className="h5 fw-bold text-dark mb-2">
                      Evita viajes innecesarios a la computadora de caja
                    </h4>
                    <p className="text-muted small mb-0">
                      Tus empleados registran pedidos e imprimen desde sus puestos
                      de trabajo sin tener que desplazarse de un extremo al otro
                      del local solo para digitar una comanda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              9. SECCIÓN: TODO CONECTADO CON PROVENTA (Ecosistema)
             ================================================================ */}
          <section className="kiosko-sec-ecosystem py-5" id="ecosistema">
            <div className="container py-lg-5">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 780 }}>
                <span className="kiosko-badge kiosko-badge-dark mb-3">
                  <i className="bx bx-git-merge"></i>
                  Ecosistema Unificado
                </span>
                <h2 className="display-6 fw-bold text-white mb-3">
                  No es un sistema separado. Es ProVenta.
                </h2>
                <p className="fs-5 text-light text-opacity-75 mb-0">
                  Las ventas realizadas desde Kiosko terminan dentro de la misma
                  operación administrativa del negocio. Una sola fuente de verdad
                  para todo tu equipo.
                </p>
              </div>

              {/* Architecture diagram */}
              <div
                className="p-4 p-md-5 rounded-4 mb-5 text-center mx-auto"
                style={{
                  maxWidth: 820,
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-primary text-white fw-bold mb-4">
                  <i className="bx bx-server fs-5"></i> PROVENTA CLOUD & CORE
                </div>

                <div className="row g-3 justify-content-center mb-4">
                  <div className="col-md-4">
                    <div className="p-3 rounded-3 border" style={{ background: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
                      <i className="bx bx-desktop fs-3 text-warning mb-2 d-block"></i>
                      <strong className="text-white d-block">Desktop</strong>
                      <small className="text-light opacity-75">
                        Windows POS y Administración
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="p-3 rounded-3 border"
                      style={{
                        background: "rgba(92, 52, 219, 0.35)",
                        borderColor: "rgba(167, 139, 250, 0.4)",
                      }}
                    >
                      <i className="bx bx-tab fs-3 text-white mb-2 d-block"></i>
                      <strong className="text-white d-block">Kiosko</strong>
                      <small className="text-light opacity-75">
                        Tablets Android Táctiles
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded-3 border" style={{ background: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
                      <i className="bx bx-mobile-alt fs-3 text-info mb-2 d-block"></i>
                      <strong className="text-white d-block">Móvil</strong>
                      <small className="text-light opacity-75">
                        Smartphones Android
                      </small>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-top border-white border-opacity-10">
                  <span className="badge bg-light text-dark px-3 py-2 rounded-pill fw-semibold">
                    <i className="bx bx-sync me-1 text-primary"></i> Facturación
                    e Inventario en Tiempo Real
                  </span>
                </div>
              </div>

              {/* Real synchronized items */}
              <div className="row g-3">
                {[
                  ["bx-package", "Productos", "Precios, descripciones, impuestos y fotos sincronizados."],
                  ["bx-user-check", "Clientes", "Historial, balances de crédito y registro con RNC/Cédula."],
                  ["bx-receipt", "Facturación", "Secuencias de NCF, comprobantes e-CF y cobros registrados."],
                  ["bx-archive", "Inventario", "Descuento de stock en tiempo real con cada venta cerrada."],
                  ["bx-calculator", "Impuestos", "ITBIS y propina legal calculados con reglas fiscales."],
                  ["bx-lock-alt", "Usuarios y Cajeros", "Control de turnos, permisos y auditoría por empleado."],
                  ["bx-bar-chart-alt-2", "Reportes de ventas", "Cierre de caja Z/X y reportes consolidados del negocio."],
                ].map(([icon, title, desc], idx) => (
                  <div className="col-sm-6 col-lg" key={idx}>
                    <div className="kiosko-eco-module-card h-100">
                      <i className={`bx ${icon} fs-4 text-warning mb-2 d-block`}></i>
                      <h3 className="h6 text-white mb-1">{title}</h3>
                      <p className="small text-light text-opacity-70 mb-0">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              10. SECCIÓN: ¿PARA QUIÉN ES?
             ================================================================ */}
          <section className="py-5" id="para-quien-es">
            <div className="container py-lg-4">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
                <span className="kiosko-badge kiosko-badge-purple mb-3">
                  <i className="bx bx-store-alt"></i>
                  Sectores de Aplicación
                </span>
                <h2 className="display-6 fw-bold text-dark mb-3">
                  Perfecto para negocios donde cada segundo cuenta
                </h2>
                <p className="fs-5 text-muted mb-0">
                  Una alternativa versátil que se adapta al ritmo de cafeterías,
                  restaurantes, bares y cualquier negocio de atención rápida.
                </p>
              </div>

              {/* Primer bloque de 5 negocios */}
              <div className="kiosko-grid-5 mb-4">
                {targetBusinesses.slice(0, 5).map((b, idx) => (
                  <div className="kiosko-industry-card" key={idx}>
                    <div className="kiosko-industry-icon">
                      <i className={`bx ${b.icon}`}></i>
                    </div>
                    <h3 className="h6 fw-bold text-dark mb-2">{b.title}</h3>
                    <p className="small text-muted mb-0">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Segundo bloque de 5 negocios */}
              <div className="kiosko-grid-5">
                {targetBusinesses.slice(5, 10).map((b, idx) => (
                  <div className="kiosko-industry-card" key={idx}>
                    <div className="kiosko-industry-icon">
                      <i className={`bx ${b.icon}`}></i>
                    </div>
                    <h3 className="h6 fw-bold text-dark mb-2">{b.title}</h3>
                    <p className="small text-muted mb-0">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              11. SECCIÓN: EJEMPLO REAL
             ================================================================ */}
          <section className="py-5 bg-light" id="ejemplo-real">
            <div className="container py-lg-4">
              <div className="row align-items-center gy-4">
                <div className="col-lg-5">
                  <span className="kiosko-badge kiosko-badge-purple mb-3">
                    <i className="bx bx-bulb"></i>
                    Escenario en Acción
                  </span>
                  <h2 className="display-6 fw-bold text-dark mb-3">
                    Un día normal en tu negocio con ProVenta Kiosko
                  </h2>
                  <p className="text-muted fs-6 mb-4">
                    Un pequeño restaurante no necesita invertir miles de pesos en
                    tres computadoras completas. Puede tener ProVenta en la PC de
                    caja y dos tablets económicas para sus empleados.
                  </p>
                  <div className="p-3 bg-white rounded-3 border shadow-sm mb-4">
                    <strong className="text-dark d-block mb-1">
                      El resultado inmediato:
                    </strong>
                    <p className="small text-muted mb-0">
                      Menor inversión inicial en equipos, órdenes sin errores de
                      lectura en papel, cobros ágiles y clientes atendidos sin
                      filas innecesarias.
                    </p>
                  </div>
                  <a
                    href={whatsappDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kiosko-btn-primary"
                  >
                    <i className="bx bxl-whatsapp fs-5"></i>
                    Cotizar para mi negocio
                  </a>
                </div>

                <div className="col-lg-7">
                  <div className="kiosko-story-card">
                    <div className="d-flex align-items-start gap-3 pb-3 mb-3 border-bottom">
                      <div
                        className="rounded-circle bg-primary bg-opacity-10 text-primary p-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="bx bx-tab fs-4"></i>
                      </div>
                      <div>
                        <span className="badge bg-primary mb-1">TABLET 1 · SALÓN</span>
                        <h3 className="h6 fw-bold text-dark mb-1">
                          Mesero en el área de mesas
                        </h3>
                        <p className="small text-muted mb-0">
                          Toma el pedido de la <strong>Mesa 5</strong> (2 platos del
                          día y bebidas). Asigna la referencia, guarda la orden
                          #1220 y continúa atendiendo otras mesas sin tener que ir a
                          la caja.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 pb-3 mb-3 border-bottom">
                      <div
                        className="rounded-circle bg-warning bg-opacity-10 text-warning p-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="bx bx-drink fs-4"></i>
                      </div>
                      <div>
                        <span className="badge bg-warning text-dark mb-1">
                          TABLET 2 · BARRA
                        </span>
                        <h3 className="h6 fw-bold text-dark mb-1">
                          Bartender en barra
                        </h3>
                        <p className="small text-muted mb-0">
                          Abre la orden <strong>Barra 1</strong> (#1219) por
                          RD$149.10, agrega las bebidas pedidas al momento y
                          mantiene la cuenta abierta mientras los clientes disfrutan
                          su estadía.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <div
                        className="rounded-circle bg-dark bg-opacity-10 text-dark p-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="bx bx-desktop fs-4"></i>
                      </div>
                      <div>
                        <span className="badge bg-dark mb-1">
                          PC · CAJA PRINCIPAL
                        </span>
                        <h3 className="h6 fw-bold text-dark mb-1">
                          Cajero / Administrador
                        </h3>
                        <p className="small text-muted mb-0">
                          Factura a clientes que salen del local, consulta las
                          órdenes abiertas en tiempo real, registra compras de
                          proveedores o revisa el inventario sin interrumpir a los
                          meseros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              12. SECCIÓN DE DIFERENCIALES
             ================================================================ */}
          <section className="py-5" id="diferenciales">
            <div className="container py-lg-4">
              <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
                <span className="kiosko-badge kiosko-badge-purple mb-3">
                  <i className="bx bx-list-check"></i>
                  Resumen de Ventajas
                </span>
                <h2 className="display-6 fw-bold text-dark mb-3">
                  Todo lo que incluye ProVenta Kiosko
                </h2>
                <p className="fs-5 text-muted mb-0">
                  Un conjunto completo de funcionalidades pensadas para hacer tu
                  operación más rápida, confiable y rentable.
                </p>
              </div>

              <div className="row g-3">
                {differentialsList.map((diff, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="kiosko-check-item">
                      <i className="bx bx-check-circle kiosko-check-icon"></i>
                      <span className="text-dark fw-medium fs-6">{diff}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              13. SECCIÓN: PREGUNTAS FRECUENTES (FAQ)
             ================================================================ */}
          <section className="py-5 bg-light" id="faq">
            <div className="container py-lg-4">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="text-center mb-5">
                    <span className="kiosko-badge kiosko-badge-purple mb-3">
                      <i className="bx bx-help-circle"></i>
                      Dudas Frecuentes
                    </span>
                    <h2 className="display-6 fw-bold text-dark mb-3">
                      Preguntas frecuentes sobre ProVenta Kiosko
                    </h2>
                    <p className="text-muted fs-6">
                      Resolvemos las dudas más comunes sobre la implementación de
                      tablets POS en tu negocio.
                    </p>
                  </div>

                  <div className="accordion" id="kioskoFaqAccordion">
                    {faqs.map((faq, index) => (
                      <div
                        className="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"
                        key={index}
                      >
                        <h3 className="accordion-header" id={`heading-${index}`}>
                          <button
                            className="accordion-button collapsed shadow-none fw-semibold text-dark fs-6"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${index}`}
                          >
                            {faq.q}
                          </button>
                        </h3>
                        <div
                          id={`collapse-${index}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading-${index}`}
                          data-bs-parent="#kioskoFaqAccordion"
                        >
                          <div className="accordion-body text-muted pt-0 pb-4">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              14. CTA FINAL
             ================================================================ */}
          <section className="py-5" id="contacto">
            <div className="container py-lg-4">
              <div className="kiosko-cta-banner text-center position-relative">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="kiosko-cta-pill mb-3">
                      <i className="bx bx-rocket"></i> COMIENZA HOY MISMO
                    </div>
                    <h2 className="display-5 fw-bold text-white mb-3">
                      Empieza con una tablet. Crece cuando tu negocio lo necesite.
                    </h2>
                    <p className="fs-5 text-white text-opacity-90 mb-4 pb-2">
                      Agrega puntos de atención a tu negocio sin complicar tu
                      operación. ProVenta Kiosko conecta pedidos, ventas y
                      facturación con el resto de ProVenta.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                      <a
                        href={whatsappDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-primary shadow"
                      >
                        <i className="bx bxl-whatsapp fs-4 me-2 text-success"></i>
                        Solicitar una demo
                      </a>
                      <a
                        href={whatsappContactUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 fw-bold"
                      >
                        <i className="bx bx-conversation fs-4 me-2"></i>
                        Hablar con nosotros
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <WhatsAppButton />
    </React.Fragment>
  );
};

export default ProventaKiosko;
