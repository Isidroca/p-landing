import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";
import "./ProventaReparaciones.css";

const whatsappUrl = "https://wa.me/18097874963?text=Hola%2C%20quiero%20solicitar%20una%20demostraci%C3%B3n%20de%20ProVenta%20Reparaciones";

const processSteps = [
  {
    number: "01",
    icon: "bx-log-in-circle",
    title: "Recepción y condiciones",
    desc: "Registra los datos del cliente, equipo, fallas, accesorios recibidos y fotografías de su estado.",
  },
  {
    number: "02",
    icon: "bx-search-alt",
    title: "Diagnóstico técnico",
    desc: "Evalúa el equipo y documenta las causas del problema para un diagnóstico claro y transparente.",
  },
  {
    number: "03",
    icon: "bx-calculator",
    title: "Presupuesto y repuestos",
    desc: "Añade piezas desde el inventario de ProVenta y cotiza la mano de obra para aprobación del cliente.",
  },
  {
    number: "04",
    icon: "bx-wrench",
    title: "Asignación y reparación",
    desc: "Asigna el trabajo al técnico responsable y actualiza el avance de la orden en tiempo real.",
  },
  {
    number: "05",
    icon: "bx-receipt",
    title: "Factura e-CF y entrega",
    desc: "Convierte la orden en factura fiscal electrónica en 1 clic y emite el comprobante de salida.",
  },
];

const fastFeatures = [
  "Recibir equipo rápidamente",
  "Agregar piezas y mano de obra al instante",
  "Registrar observaciones del trabajo",
  "Facturar y entregar sin intermediarios",
  "Imprimir comprobantes de recepción y entrega",
];

const advancedFeatures = [
  "Recepción detallada con accesorios y fotos",
  "Registro formal de diagnóstico técnico",
  "Preparación y aprobación de presupuesto",
  "Asignación de técnicos y seguimiento de avance",
  "Pruebas de calidad, entrega y trazabilidad completa",
];

const mainFeatures = [
  {
    icon: "bx-id-card",
    title: "Recepción con número de orden",
    desc: "Identifica cada equipo con un código único y fecha para un control riguroso desde el primer minuto.",
  },
  {
    icon: "bx-slider-alt",
    title: "Modo rápido y modo avanzado",
    desc: "Elige la agilidad de un proceso directo o la profundidad de un flujo completo según cada trabajo.",
  },
  {
    icon: "bx-list-check",
    title: "Fallas, condiciones y accesorios",
    desc: "Documenta rayones, golpes, cargadores, estuches y motivos de ingreso para total respaldo.",
  },
  {
    icon: "bx-camera",
    title: "Fotografías del equipo",
    desc: "Adjunta fotos del estado físico al recibir y entregar el equipo para evitar reclamos infundados.",
  },
  {
    icon: "bx-microchip",
    title: "Diagnóstico técnico",
    desc: "Registra hallazgos, pruebas realizadas y soluciones propuestas por el personal calificado.",
  },
  {
    icon: "bx-dollar-circle",
    title: "Presupuestos con piezas y mano de obra",
    desc: "Presenta cotizaciones transparentes al cliente antes de intervenir o consumir repuestos.",
  },
  {
    icon: "bx-user-pin",
    title: "Asignación y seguimiento de técnicos",
    desc: "Distribuye órdenes entre los técnicos del taller y conoce quién atiende cada equipo.",
  },
  {
    icon: "bx-loader-circle",
    title: "Estados personalizados",
    desc: "Monitorea etapas claras: En espera, En diagnóstico, Esperando repuesto, Listo y Entregado.",
  },
  {
    icon: "bx-history",
    title: "Historial del cliente y sus equipos",
    desc: "Consulta reparaciones previas, garantías, repuestos instalados y notas acumuladas por cliente.",
  },
  {
    icon: "bx-printer",
    title: "Impresión de recepción y salida",
    desc: "Emite tickets térmicos o páginas estándar para resguardo del cliente e identificación interna.",
  },
  {
    icon: "bx-transfer-alt",
    title: "Conversión de reparación a factura",
    desc: "Pasa los repuestos y servicios aprobados a factura automáticamente sin volver a digitarlos.",
  },
  {
    icon: "bx-file",
    title: "Facturación fiscal y e-CF DGII",
    desc: "Emite comprobantes fiscales B01, B02 o electrónicos e-CF con validación oficial y código QR.",
  },
  {
    icon: "bx-package",
    title: "Control de repuestos en inventario",
    desc: "Descuenta componentes de almacén en tiempo real al aplicarlos a una orden de servicio.",
  },
  {
    icon: "bx-grid-alt",
    title: "Dashboard de órdenes activas",
    desc: "Visualiza de un vistazo los equipos en taller, órdenes listas para entrega y facturación del día.",
  },
];

const targetBusinesses = [
  {
    icon: "bx-mobile",
    title: "Talleres de celulares y tablets",
    desc: "Cambio de pantallas, baterías, puertos de carga y microelectrónica con control de accesorios y claves.",
  },
  {
    icon: "bx-laptop",
    title: "Computadoras, laptops y servidores",
    desc: "Mantenimiento preventivo, reparaciones de placa, actualización de componentes y formateos.",
  },
  {
    icon: "bx-tv",
    title: "Televisores y equipos de audio",
    desc: "Gestión de tarjetas electrónicas, retroiluminación LED, fuentes de poder y amplificadores.",
  },
  {
    icon: "bx-home-alt-2",
    title: "Electrodomésticos y refrigeración",
    desc: "Seguimiento a equipos domésticos o comerciales, diagnósticos y cotizaciones antes de intervenir.",
  },
  {
    icon: "bx-joystick",
    title: "Consolas y dispositivos electrónicos",
    desc: "Talleres especializados en PlayStation, Xbox, Nintendo, drones y tarjetas de control.",
  },
  {
    icon: "bx-cog",
    title: "Servicio técnico multimarca",
    desc: "Para cualquier negocio que reciba equipos de terceros, gestione técnicos y facture servicios con garantía.",
  },
];

function ScreenFrame({ src, alt, title = "ProVenta Reparaciones", className = "" }) {
  return (
    <div className={`rep-screen-frame ${className}`}>
      <div className="rep-screen-bar">
        <i></i><i></i><i></i><span>{title}</span>
      </div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

const ProventaReparaciones = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProVenta Reparaciones",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Web, Android",
    description: "Software para talleres de reparación y centros de servicio técnico. Control de órdenes de servicio, diagnóstico, presupuestos, modo rápido y avanzado, repuestos y facturación electrónica e-CF en República Dominicana.",
    url: "https://www.proventa.app/proventa-reparaciones/",
    brand: { "@type": "Brand", name: "ProVenta" },
    offers: { "@type": "Offer", priceCurrency: "DOP", description: "Planes de ProVenta para talleres con facturación e inventario integrado." },
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Software para Talleres de Reparación | ProVenta Reparaciones</title>
        <meta
          name="description"
          content="Controla cada reparación desde la recepción hasta la factura. Diagnóstico, presupuestos, modo rápido y avanzado, repuestos y facturación electrónica e-CF en República Dominicana."
        />
        <meta
          name="keywords"
          content="software para talleres de reparaciones, sistema para servicio técnico, control de reparaciones celulares, taller de computadoras, órdenes de reparación, comprobante de recepción, facturación electrónica talleres, e-CF República Dominicana"
        />
        <link rel="canonical" href="https://www.proventa.app/proventa-reparaciones/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software para Talleres de Reparación | ProVenta Reparaciones" />
        <meta
          property="og:description"
          content="Controla cada reparación desde la recepción hasta la factura. Proceso rápido o avanzado, control de repuestos y facturación e-CF."
        />
        <meta property="og:url" content="https://www.proventa.app/proventa-reparaciones/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="rep-page min-vh-100 d-flex flex-column">
        <Header />
        <main>
          {/* 1. Portada (Hero) */}
          <section className="rep-hero">
            <div className="container position-relative">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <span className="rep-kicker mb-3">
                    <i className="bx bx-wrench"></i> ProVenta Reparaciones
                  </span>
                  <h1>
                    Controla cada reparación <span>desde la recepción hasta la factura</span>
                  </h1>
                  <p className="lead-text">
                    Recibe equipos, registra diagnósticos, prepara presupuestos, controla el trabajo de tus técnicos y factura sin duplicar información.
                  </p>
                  <p className="sublead-text">
                    Con ProVenta Reparaciones puedes trabajar con un proceso sencillo y rápido o utilizar un flujo avanzado con mayor seguimiento y control.
                  </p>
                  <div className="rep-hero-actions justify-content-center justify-content-lg-start">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rep-btn-primary"
                    >
                      <i className="bx bxl-whatsapp fs-5"></i> Solicitar una demostración
                    </a>
                    <a href="#proceso" className="rep-btn-secondary">
                      <i className="bx bx-play-circle fs-5"></i> Ver cómo funciona
                    </a>
                  </div>
                  <div className="rep-hero-badges justify-content-center justify-content-lg-start">
                    <span>
                      <i className="bx bx-check-shield"></i> Modo rápido y avanzado
                    </span>
                    <span>
                      <i className="bx bx-barcode"></i> Comprobantes de recepción
                    </span>
                    <span>
                      <i className="bx bx-receipt"></i> e-CF con la DGII
                    </span>
                  </div>
                </div>

                <div className="col-lg-6">
                  {/* Hero Screenshot Real: Bandeja Operativa de Órdenes de Trabajo */}
                  <div className="rep-hero-screen-wrap">
                    <ScreenFrame
                      src="/assets/img/reparaciones/ordenes-de-trabajo.png"
                      alt="Bandeja de órdenes de trabajo en ProVenta Reparaciones"
                      title="ProVenta · Bandeja Operativa de Reparaciones"
                    />
                    <div className="rep-hero-screen-pill">
                      <i className="bx bx-radio-circle-marked"></i>
                      <span><strong>Software real:</strong> 11 órdenes activas · Celulares, TV, PC, Consolas y más</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. El proceso completo */}
          <section className="rep-flow-section" id="proceso">
            <div className="container">
              <div className="rep-heading">
                <span className="rep-subtitle">EL PROCESO COMPLETO</span>
                <h2>Del equipo recibido a la factura, sin perder información</h2>
                <p>
                  Registra los datos del cliente y del equipo, documenta sus condiciones, añade piezas y mano de obra, controla el avance de la reparación y genera la factura cuando el trabajo esté listo.
                </p>
              </div>

              <div className="rep-timeline">
                {processSteps.map((step, idx) => (
                  <article className="rep-timeline-card" key={step.number}>
                    <span className="rep-timeline-step-num">PASO {step.number}</span>
                    <div className="rep-step-icon">
                      <i className={`bx ${step.icon}`}></i>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    {idx < processSteps.length - 1 && (
                      <span className="rep-timeline-connector">
                        <i className="bx bx-right-arrow-alt"></i>
                      </span>
                    )}
                  </article>
                ))}
              </div>

              <div className="rep-flow-banner">
                <div className="rep-flow-banner-left">
                  <i className="bx bx-network-chart"></i>
                  <div>
                    <strong>Toda la operación queda conectada dentro de ProVenta</strong>
                    <span>
                      Sin hojas sueltas, mensajes olvidados en WhatsApp ni cálculos repetidos.
                    </span>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rep-btn-primary py-2 px-4 fs-sm"
                >
                  <i className="bx bxl-whatsapp"></i> Probar con mi equipo
                </a>
              </div>
            </div>
          </section>

          {/* 3. Dos formas de trabajar */}
          <section className="rep-modes-section" id="modos">
            <div className="container">
              <div className="rep-heading">
                <span className="rep-subtitle">DOS FORMAS DE TRABAJAR</span>
                <h2>Trabaja con la simplicidad que tu negocio necesita</h2>
                <p>
                  No todos los servicios requieren el mismo nivel de detalle. Elige entre un flujo directo para trabajos rápidos o un proceso completo con aprobación y seguimiento.
                </p>
              </div>

              <div className="rep-modes-grid">
                {/* Modo Rápido */}
                <article className="rep-mode-card rep-mode-fast">
                  <div className="rep-mode-header">
                    <div>
                      <span className="rep-mode-badge">Flujo Ágil</span>
                      <h3 className="mt-2">Modo Rápido</h3>
                      <p className="rep-mode-tagline">Para negocios con procesos sencillos</p>
                    </div>
                    <i className="bx bx-bolt-circle text-info fs-1"></i>
                  </div>

                  <p className="rep-mode-summary">
                    Ideal para pequeños talleres y negocios que necesitan registrar el equipo, indicar el trabajo realizado, agregar piezas o mano de obra y facturar rápidamente. Sin pasos innecesarios: recibe, repara, cobra y entrega.
                  </p>

                  <ul className="rep-mode-checklist">
                    {fastFeatures.map((item) => (
                      <li key={item}>
                        <i className="bx bx-check-circle"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mockup Modo Rápido */}
                  <div className="rep-mode-mockup-frame">
                    <div className="rep-mockup-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                      <small>Ingreso y Cobro Rápido</small>
                    </div>
                    <div className="rep-fast-form">
                      <div className="rep-form-row">
                        <input
                          type="text"
                          readOnly
                          className="rep-fast-input"
                          value="Cliente: María Fernández"
                        />
                        <input
                          type="text"
                          readOnly
                          className="rep-fast-input small"
                          value="Orden #R-812"
                        />
                      </div>
                      <div className="rep-form-row">
                        <input
                          type="text"
                          readOnly
                          className="rep-fast-input"
                          value="Equipo: Samsung Galaxy A54 · No enciende"
                        />
                      </div>
                      <div className="rep-form-row">
                        <input
                          type="text"
                          readOnly
                          className="rep-fast-input"
                          value="Trabajo: Limpieza de pin + Batería"
                        />
                        <input
                          type="text"
                          readOnly
                          className="rep-fast-input small"
                          value="RD$2,400"
                        />
                      </div>
                      <button className="rep-fast-submit" type="button">
                        <i className="bx bx-printer"></i> Facturar y Entregar Comprobante
                      </button>
                    </div>
                  </div>
                </article>

                {/* Modo Avanzado */}
                <article className="rep-mode-card rep-mode-advanced">
                  <div className="rep-mode-header">
                    <div>
                      <span className="rep-mode-badge">Control Completo</span>
                      <h3 className="mt-2">Modo Avanzado</h3>
                      <p className="rep-mode-tagline">Para talleres que necesitan mayor control</p>
                    </div>
                    <i className="bx bx-layer text-success fs-1"></i>
                  </div>

                  <p className="rep-mode-summary">
                    Diseñado para operaciones que requieren diagnóstico, presupuesto, aprobación del cliente, asignación de técnicos y seguimiento detallado de cada reparación. Tendrás mayor control sin perder la rapidez característica de ProVenta.
                  </p>

                  <ul className="rep-mode-checklist">
                    {advancedFeatures.map((item) => (
                      <li key={item}>
                        <i className="bx bx-check-shield"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mockup Modo Avanzado */}
                  <div className="rep-mode-mockup-frame">
                    <div className="rep-mockup-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                      <small>Orden de Servicio Integral</small>
                    </div>
                    <div className="rep-adv-tabs">
                      <span className="rep-adv-tab">1. Recepción</span>
                      <span className="rep-adv-tab">2. Diagnóstico</span>
                      <span className="rep-adv-tab active">3. Presupuesto</span>
                      <span className="rep-adv-tab">4. Pruebas</span>
                    </div>
                    <div className="rep-adv-timeline-mini">
                      <div className="rep-adv-item">
                        <div>
                          <i className="bx bx-check-circle"></i>
                          <span>Diagnóstico Técnico Aprobado</span>
                        </div>
                        <span className="badge bg-success bg-opacity-25 text-success">Listo</span>
                      </div>
                      <div className="rep-adv-item">
                        <div>
                          <i className="bx bx-user-check"></i>
                          <span>Técnico: Carlos Santana</span>
                        </div>
                        <span className="badge bg-info bg-opacity-25 text-info">Asignado</span>
                      </div>
                      <div className="rep-adv-item">
                        <div>
                          <i className="bx bx-dollar-circle"></i>
                          <span>Presupuesto Aprobado por WhatsApp</span>
                        </div>
                        <span className="text-success fw-bold">RD$6,850</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 4. Recepción e impresión */}
          <section className="rep-reception-section">
            <div className="container">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6">
                  <span className="rep-subtitle">CLARIDAD Y RESPALDO</span>
                  <h2 className="text-white display-6 fw-bold mb-3">
                    Recibe cada equipo con claridad y respaldo
                  </h2>
                  <p className="rep-section-desc mb-4">
                    Registra el equipo, la falla reportada, sus condiciones, accesorios entregados, observaciones y fotografías. Al finalizar la recepción puedes imprimir un comprobante para el cliente y otro para identificar o controlar internamente el equipo.
                  </p>

                  <div className="rep-reception-list">
                    <div className="rep-reception-item">
                      <div className="rep-item-icon">
                        <i className="bx bx-receipt"></i>
                      </div>
                      <div>
                        <h4>Comprobante de Recepción</h4>
                        <p>
                          Entrega al cliente la constancia formal con número de orden, fecha de ingreso, fallas indicadas y accesorios dejados bajo custodia.
                        </p>
                      </div>
                    </div>

                    <div className="rep-reception-item">
                      <div className="rep-item-icon">
                        <i className="bx bx-barcode"></i>
                      </div>
                      <div>
                        <h4>Etiqueta o Comprobante Interno</h4>
                        <p>
                          Identifica físicamente el equipo en la mesa de trabajo para que ningún técnico confunda componentes o accesorios.
                        </p>
                      </div>
                    </div>

                    <div className="rep-reception-item">
                      <div className="rep-item-icon">
                        <i className="bx bx-check-double"></i>
                      </div>
                      <div>
                        <h4>Comprobante de Salida</h4>
                        <p>
                          Al entregar el equipo reparado, imprime el comprobante de entrega con la firma del cliente, dejando respaldo de las pruebas de satisfacción.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rep-callout-docs">
                    <i className="bx bx-info-circle"></i>
                    <div>
                      <strong>Documentos claros para cada momento:</strong> Emite comprobantes de recepción y salida para el resguardo operativo, reservando la factura comercial o e-CF para el cobro definitivo.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="rep-ticket-wrapper">
                    {/* Mockup de Ticket Térmico de Recepción */}
                    <div className="rep-thermal-ticket">
                      <div className="rep-ticket-header">
                        <h4>TALLER TECH PRO</h4>
                        <p>RNC: 1-31-89765-4 · Santo Domingo, RD</p>
                        <p>Tel: (809) 555-8899</p>
                        <span className="rep-ticket-doc-type">COMPROBANTE DE RECEPCIÓN</span>
                      </div>

                      <div className="rep-ticket-body">
                        <div className="rep-ticket-row">
                          <span>ORDEN:</span>
                          <strong>#REP-10492</strong>
                        </div>
                        <div className="rep-ticket-row">
                          <span>FECHA/HORA:</span>
                          <span>10/09/2026 10:45 AM</span>
                        </div>
                        <div className="rep-ticket-row">
                          <span>CLIENTE:</span>
                          <strong>Lic. Ramón Gómez</strong>
                        </div>
                        <div className="rep-ticket-row">
                          <span>TELÉFONO:</span>
                          <span>829-444-1234</span>
                        </div>

                        <div className="rep-ticket-divider"></div>

                        <div className="rep-ticket-row">
                          <span>EQUIPO:</span>
                          <strong>Dell XPS 15 9520</strong>
                        </div>
                        <div className="rep-ticket-row">
                          <span>SERIE / SERVICE TAG:</span>
                          <span>7XG9B42</span>
                        </div>
                        <div className="rep-ticket-row">
                          <span>FALLA REPORTADA:</span>
                          <span>No carga / Se recalienta</span>
                        </div>
                        <div className="rep-ticket-row">
                          <span>ESTADO FÍSICO:</span>
                          <span>Leve golpe en esquina izq.</span>
                        </div>

                        <div className="rep-ticket-accessories">
                          <strong>ACCESORIOS RECIBIDOS:</strong>
                          <div>[✓] Cargador Original 130W Type-C</div>
                          <div>[✓] Funda protectora negra</div>
                        </div>

                        <div className="rep-ticket-barcode">
                          <div className="rep-barcode-lines"></div>
                          <small>*REP10492*</small>
                        </div>

                        <div className="rep-ticket-signature">
                          <span>Firma de Aceptación del Cliente</span>
                          <small>Autorizo la revisión y diagnóstico del equipo detallado arriba.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Captura real de la pantalla de recepción */}
              <div className="row mt-5 pt-4">
                <div className="col-12">
                  <div className="text-center mb-4">
                    <span className="rep-kicker mb-2"><i className="bx bx-window-alt"></i> Pantalla de Ingreso</span>
                    <h3 className="text-white">Formulario real de recepción de equipos</h3>
                    <p className="rep-section-subdesc">
                      Captura el cliente, fallas iniciales, condiciones físicas (golpes, humedad, roturas), PIN o patrón, accesorios entregados y fotos del equipo.
                    </p>
                  </div>
                  <ScreenFrame
                    src="/assets/img/reparaciones/recepcion-equipo.png"
                    alt="Pantalla real de recepción de equipos en ProVenta Reparaciones"
                    title="ProVenta · Recibir equipo - Nueva orden de reparación"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 5. Presupuestos y aprobación */}
          <section className="rep-budget-section">
            <div className="container">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6 order-2 order-lg-1">
                  {/* Presupuesto Mockup */}
                  <div className="rep-budget-card">
                    <div className="rep-budget-header">
                      <div>
                        <small className="text-info fw-bold">PRESUPUESTO #PRE-402</small>
                        <h4>Equipo: MacBook Air M2 (A2681)</h4>
                      </div>
                      <span className="badge bg-success bg-opacity-25 text-success rounded-pill px-3 py-2">
                        <i className="bx bx-check-double me-1"></i> Aprobado
                      </span>
                    </div>

                    <table className="rep-budget-table">
                      <thead>
                        <tr>
                          <th>Concepto</th>
                          <th style={{ textAlign: "center" }}>Cant.</th>
                          <th style={{ textAlign: "right" }}>Precio</th>
                          <th style={{ textAlign: "right" }}>Importe</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="rep-concept-tag rep-tag-part">Pieza</span>
                            Teclado retroiluminado M2 Español
                          </td>
                          <td style={{ textAlign: "center" }}>1</td>
                          <td style={{ textAlign: "right" }}>RD$5,400.00</td>
                          <td style={{ textAlign: "right" }}>RD$5,400.00</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="rep-concept-tag rep-tag-part">Pieza</span>
                            Sensor de ángulo de pantalla Lid Sensor
                          </td>
                          <td style={{ textAlign: "center" }}>1</td>
                          <td style={{ textAlign: "right" }}>RD$1,800.00</td>
                          <td style={{ textAlign: "right" }}>RD$1,800.00</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="rep-concept-tag rep-tag-labor">Servicio</span>
                            Mano de obra especializada + Limpieza ultrasonido
                          </td>
                          <td style={{ textAlign: "center" }}>1</td>
                          <td style={{ textAlign: "right" }}>RD$2,500.00</td>
                          <td style={{ textAlign: "right" }}>RD$2,500.00</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="rep-budget-totals">
                      <div className="rep-budget-total-row">
                        <span>Subtotal Repuestos:</span>
                        <span>RD$7,200.00</span>
                      </div>
                      <div className="rep-budget-total-row">
                        <span>Subtotal Servicios:</span>
                        <span>RD$2,500.00</span>
                      </div>
                      <div className="rep-budget-total-row grand-total">
                        <span>Total Estimado:</span>
                        <span>RD$9,700.00</span>
                      </div>
                    </div>

                    <div className="rep-budget-approval-bar">
                      <div className="rep-approval-status">
                        <i className="bx bx-check-circle fs-4"></i>
                        <span>Cliente aceptó vía WhatsApp el 10/09</span>
                      </div>
                      <button className="rep-continue-btn" type="button">
                        <i className="bx bx-wrench"></i> Continuar Reparación
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2">
                  <span className="rep-subtitle">PRESUPUESTOS Y APROBACIÓN</span>
                  <h2 className="text-white display-6 fw-bold mb-3">
                    Prepara presupuestos antes de iniciar la reparación
                  </h2>
                  <p className="rep-section-desc mb-3">
                    Agrega piezas, materiales, servicios y mano de obra para presentar al cliente el costo estimado del trabajo con total claridad.
                  </p>
                  <p className="rep-section-subdesc mb-4">
                    Una vez aprobado, continúa la reparación utilizando la misma información, sin tener que volver a registrar los conceptos ni recalcular importes.
                  </p>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bx bx-check text-info fs-3"></i>
                      <span className="rep-benefit-text">
                        <strong>Cero retrabajo:</strong> Las piezas aprobadas quedan reservadas de tu inventario ProVenta.
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <i className="bx bx-check text-info fs-3"></i>
                      <span className="rep-benefit-text">
                        <strong>Costos transparentes:</strong> Separa el costo de los repuestos de la mano de obra para que el cliente comprenda el valor del trabajo.
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <i className="bx bx-check text-info fs-3"></i>
                      <span className="rep-benefit-text">
                        <strong>Flujo directo a facturación:</strong> Si el cliente aprueba, pasas a reparación y luego a factura con un solo clic.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Facturación electrónica */}
          <section className="rep-ecf-section">
            <div className="container">
              <div className="rep-heading">
                <span className="rep-subtitle">POTENCIA FISCAL PROVENTA</span>
                <h2>Reparaciones conectadas con facturación electrónica</h2>
                <p>
                  Cuando el trabajo esté terminado, convierte la orden en factura sin volver a registrar el cliente, las piezas ni la mano de obra.
                </p>
              </div>

              <div className="rep-ecf-visual-pipeline">
                {/* Nodo 1: Orden Terminada */}
                <div className="rep-ecf-node">
                  <div className="rep-ecf-node-top">
                    <i className="bx bx-task"></i>
                    <span className="badge bg-success bg-opacity-25 text-success">Completada</span>
                  </div>
                  <h4>Orden de Reparación</h4>
                  <p>
                    Piezas instaladas, horas técnicas registradas y pruebas de calidad aprobadas.
                  </p>
                  <div className="p-2 rounded bg-black bg-opacity-30 border border-white border-opacity-10 text-white-50 small">
                    Orden #REP-2049 · RD$13,700.00
                  </div>
                </div>

                {/* Conector */}
                <div className="rep-arrow-connector">
                  <i className="bx bx-right-arrow-alt"></i>
                </div>

                {/* Nodo 2: Acción Convertir */}
                <div className="rep-ecf-node text-center justify-content-center">
                  <div className="rep-ecf-node-top justify-content-center">
                    <i className="bx bx-sync text-info fs-1"></i>
                  </div>
                  <h4>Acción en 1 Clic</h4>
                  <p>Convertir orden en factura formal sin digitar nuevamente.</p>
                  <button className="rep-btn-primary py-2 px-3 fs-sm w-100 justify-content-center" type="button">
                    <i className="bx bx-check"></i> Convertir en Factura
                  </button>
                </div>

                {/* Conector */}
                <div className="rep-arrow-connector">
                  <i className="bx bx-right-arrow-alt"></i>
                </div>

                {/* Nodo 3: Factura e-CF Resultante */}
                <div className="rep-ecf-node active">
                  <div className="rep-ecf-node-top">
                    <i className="bx bx-receipt"></i>
                    <span className="badge bg-primary bg-opacity-25 text-info">e-CF Certificado</span>
                  </div>
                  <h4>Factura Electrónica</h4>
                  <p>Emitida con comprobante fiscal e-CF integrado con la DGII.</p>

                  <div className="rep-fiscal-card-preview">
                    <div className="rep-fiscal-badge-dgii">
                      <i className="bx bx-shield-quarter"></i> DGII Aceptado
                    </div>
                    <div className="rep-fiscal-encf">e-NCF: E310000049281</div>
                    <div className="text-muted" style={{ fontSize: "0.72rem" }}>
                      Cliente: Juan Pablo Rosario (RNC 131-89765-4)
                    </div>
                    <div className="fw-bold mt-1" style={{ color: "#0f172a" }}>
                      Total Facturado: RD$13,700.00
                    </div>

                    <div className="rep-fiscal-qr-area">
                      <div className="rep-mini-qr">
                        <i className="bx bx-qr"></i>
                      </div>
                      <div className="rep-qr-info">
                        <strong>Código QR Fiscal</strong>
                        <div>Verificación DGII e-CF en línea</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Captura real de facturación electrónica con e-CF */}
              <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-11">
                  <div className="text-center mb-4">
                    <span className="rep-kicker mb-2"><i className="bx bx-receipt"></i> Facturación DGII en Vivo</span>
                    <h3 className="text-white">Factura generada con e-CF oficial y partidas detalladas</h3>
                    <p className="rep-section-subdesc">
                      Observa cómo la orden pasa a factura con comprobante fiscal electrónico E32, cliente identificado, piezas ("Solenoides") y mano de obra sin doble digitación.
                    </p>
                  </div>
                  <ScreenFrame
                    src="/assets/img/reparaciones/factura-reparacion-ecf.png"
                    alt="Facturación electrónica con e-CF en ProVenta Reparaciones"
                    title="ProVenta · Factura #1175 - Factura de Consumo Electrónica e-CF"
                  />
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <div className="rep-platform-card text-center">
                    <span className="rep-platform-badge mb-3">
                      <i className="bx bx-check-shield"></i> Ecosistema Integrado
                    </span>
                    <h3 className="rep-platform-title">Una sola plataforma para todo el taller</h3>
                    <p className="rep-platform-text">
                      Desde la misma plataforma ProVenta puedes controlar <strong>reparaciones</strong>, <strong>inventario de repuestos</strong>, <strong>caja chica</strong>, <strong>cuentas por cobrar</strong>, <strong>clientes</strong> y <strong>facturación formal</strong>. Todo sincronizado en tiempo real sin comprar sistemas aislados.
                    </p>
                    <div className="rep-platform-pills mt-4">
                      <span><i className="bx bx-wrench"></i> Reparaciones</span>
                      <span><i className="bx bx-package"></i> Inventario de repuestos</span>
                      <span><i className="bx bx-wallet"></i> Caja chica</span>
                      <span><i className="bx bx-credit-card"></i> Cuentas por cobrar</span>
                      <span><i className="bx bx-user-check"></i> Clientes</span>
                      <span><i className="bx bx-receipt"></i> Facturación e-CF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Funciones principales */}
          <section className="rep-features-section" id="funciones">
            <div className="container">
              <div className="rep-heading">
                <span className="rep-subtitle">TODO BAJO CONTROL</span>
                <h2>Todo lo necesario para controlar tus reparaciones</h2>
                <p>
                  Herramientas creadas específicamente para talleres que buscan agilidad en mostrador y rigor en administración.
                </p>
              </div>

              <div className="rep-features-grid">
                {mainFeatures.map((feat) => (
                  <article className="rep-feature-box" key={feat.title}>
                    <div className="rep-feat-icon">
                      <i className={`bx ${feat.icon}`}></i>
                    </div>
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Showcase del Dashboard operativo */}
              <div className="rep-dashboard-showcase">
                <div className="rep-dashboard-header">
                  <span className="rep-kicker mb-2">
                    <i className="bx bx-bar-chart-alt-2"></i> Resumen Operativo
                  </span>
                  <h3>Dashboard en tiempo real: Entradas, entregas y alertas</h3>
                  <p>
                    Conoce el estado exacto de tu taller: órdenes recibidas, entregadas, promedio de días de entrega, alertas de órdenes atrasadas y gráfica de evolución diaria.
                  </p>
                </div>
                <ScreenFrame
                  src="/assets/img/reparaciones/dashboard-reparaciones.png"
                  alt="Dashboard operativo del módulo de reparaciones de ProVenta"
                  title="ProVenta · Reparaciones - Resumen operativo del módulo"
                />
              </div>
            </div>
          </section>

          {/* 8. Comercios a los que va dirigido */}
          <section className="rep-audience-section">
            <div className="container">
              <div className="rep-heading">
                <span className="rep-subtitle">HECHO A TU MEDIDA</span>
                <h2>Diseñado para negocios que reciben equipos para reparar</h2>
                <p>
                  ProVenta Reparaciones se adapta a talleres de celulares, computadoras, televisores, electrodomésticos, equipos electrónicos y otros negocios de servicio técnico.
                </p>
                <div className="mt-3">
                  <span className="badge rounded-pill bg-info bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-2">
                    Comienza sencillo y activa funciones avanzadas a medida que crece tu operación
                  </span>
                </div>
              </div>

              <div className="rep-audience-grid">
                {targetBusinesses.map((biz) => (
                  <article className="rep-audience-card" key={biz.title}>
                    <div className="rep-audience-icon">
                      <i className={`bx ${biz.icon}`}></i>
                    </div>
                    <h4>{biz.title}</h4>
                    <p>{biz.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 9. Cierre */}
          <section className="rep-cta-section">
            <div className="container">
              <div className="rep-cta-banner">
                <span className="rep-kicker mb-3">
                  <i className="bx bx-check-double"></i> OPERACIÓN INTEGRADA
                </span>
                <h2>Organiza tus reparaciones y factura desde un solo sistema</h2>
                <p>
                  Deja atrás los talonarios, las órdenes extraviadas y la información duplicada. Con ProVenta puedes controlar la recepción, el trabajo técnico, la entrega y la facturación desde una plataforma integrada.
                </p>
                <div className="rep-cta-buttons">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rep-btn-primary"
                  >
                    <i className="bx bxl-whatsapp fs-4"></i> Solicitar una demostración
                  </a>
                  <Link to="/planes/" className="rep-btn-secondary">
                    <i className="bx bx-credit-card fs-5"></i> Conocer los planes
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </React.Fragment>
  );
};

export default ProventaReparaciones;
