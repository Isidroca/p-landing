import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";
import ShareButton from "../components/buttons/share-button";
import "./ProventaPos.css";

const ProventaPos = () => {
  const [fastCashAmount, setFastCashAmount] = useState(1000);
  const sampleSaleTotal = 680;
  const change = Math.max(0, fastCashAmount - sampleSaleTotal);

  const keyFeatures = [
    {
      badge: "Operación & Seguridad",
      icon: "bx-lock-alt",
      iconColor: "pos-icon-rose",
      title: "Eliminación de Ítems Protegida por PIN",
      desc: "Evita mermas o fraudes en caja. La anulación o eliminación de productos de una venta activa requiere la autorización y PIN de un supervisor o encargado.",
      tag: "Seguridad Total",
    },
    {
      badge: "Velocidad de Cobro",
      icon: "bx-money",
      iconColor: "pos-icon-emerald",
      title: "Botonera Fast Cash (Cobro Rápido)",
      desc: "Botones dinámicos con denominaciones comunes dominicanas (RD$ 500, RD$ 1,000, RD$ 2,000). Calcula y muestra el devuelto exacto con un solo toque.",
      tag: "1 Clic",
    },
    {
      badge: "Impresión Inteligente",
      icon: "bx-printer",
      iconColor: "pos-icon-cyan",
      title: "Impresión Silenciosa y Multi-impresora",
      desc: "Ruta directa hacia impresoras térmicas de tickets (80mm / 58mm) sin ventanas emergentes de diálogo, reservando la impresora estándar/carta para cotizaciones y e-CF largos.",
      tag: "Cero Diálogos",
    },
    {
      badge: "Búsqueda Avanzada",
      icon: "bx-search-alt-2",
      iconColor: "pos-icon-purple",
      title: "Búsqueda Agnóstica de Acentos y Orden",
      desc: "El cajero encuentra productos al instante sin importar si escribe sin acentos o con palabras en desorden (ej: 'leche entera' o 'entera leche' ubicarán el mismo ítem).",
      tag: "Cero Errores",
    },
    {
      badge: "Control Financiero",
      icon: "bx-shield-quarter",
      iconColor: "pos-icon-amber",
      title: "Apertura y Cierre de Caja a Ciegas",
      desc: "El cajero digita el conteo de efectivo físico sin conocer el saldo teórico que calcula el sistema. Garantiza arqueos 100% transparentes e imparciales.",
      tag: "Arqueo Ciego",
    },
    {
      badge: "Seguridad de Estación",
      icon: "bx-desktop",
      iconColor: "pos-icon-cyan",
      title: "Modo Caja Dedicada (Kiosk POS)",
      desc: "Convierte una PC en una terminal blindada exclusiva. ProVenta arranca automáticamente con Windows, se expande a pantalla completa y bloquea salidas sin clave.",
      tag: "Exclusivo POS",
    },
  ];

  const paymentPlatforms = [
    {
      name: "Azul (Banco Popular)",
      badge: "Integración Certificada",
      img: "/assets/img/pos/verifone_azul.webp",
      desc: "Procesamiento ágil con terminales Verifone de Azul. Envío automático de montos a pagar y conciliación de tarjetas.",
      cierre: "Cierre automático de lote desde el sistema",
    },
    {
      name: "CardNET",
      badge: "Soporte Multi-banco",
      img: "/assets/img/pos/verifone_carnet_.jpg",
      desc: "Cobro con tarjetas de crédito y débito a través de la red CardNET en Verifones compatibles con respuesta en pantalla.",
      cierre: "Cierre de turno y cuadre de tarjetas automatizado",
    },
    {
      name: "Ingenico Lane Series",
      badge: "Chip & Contactless",
      img: "/assets/img/pos/Ingenico-Lane-7000-8000-series-Chip-and-Pin.png.webp",
      desc: "Dispositivos de última generación Ingenico Lane 7000 / 8000 con soporte Chip, Pin y pagos sin contacto (NFC / Apple Pay).",
      cierre: "Sincronización instantánea con arqueo de turno",
    },
  ];

  const faqs = [
    {
      q: "¿Cómo funciona la impresión silenciosa en tickets de 80mm y 58mm?",
      a: "El sistema envía directamente los comandos de impresión en formato ESC/POS o controlador nativo hacia la impresora térmica seleccionada por defecto. No abre cuadros de diálogo ni interrumpe al cajero, imprimiendo el recibo de inmediato al cobrar.",
    },
    {
      q: "¿Cómo se autoriza la eliminación de un producto si un cliente desiste de comprarlo?",
      a: "Si el cajero intenta borrar un artículo de la lista de venta activa, el sistema despliega una ventana de seguridad solicitando el PIN o credencial de un usuario con rol de Supervisor o Encargado. Esto queda registrado en la auditoría del sistema.",
    },
    {
      q: "¿En qué consiste el Cierre de Caja 'Ciego'?",
      a: "Al finalizar el turno, el cajero cuenta físicamente el dinero en caja (monedas y billetes) y lo digita en el formulario sin que la pantalla le muestre cuánto dinero 'debería' haber. Al confirmar, el sistema genera el arqueo oficial contrastando el monto físico contra las ventas registradas.",
    },
    {
      q: "¿Qué diferencia existe entre 'Copiar una Factura' y el Modo POS?",
      a: "La opción de 'Copiar una Factura' para reutilizar renglones o reemitir comprobantes extensos está reservada para el módulo Estándar de Facturación administrativa. El POS está diseñado para velocidad máxima de mostrador con Modo Caja exclusivo y atajos de alta rotación.",
    },
    {
      q: "¿Se pueden conectar terminales Azul y CardNET al mismo tiempo?",
      a: "Sí. ProVenta permite configurar plataformas de adquirencia para que el cajero seleccione la vía de pago correspondiente y liquide la transacción directamente en el verifone con cierres automáticos integrados.",
    },
  ];

  const faqSchema = {
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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProVenta POS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 10, Windows 11",
    offers: {
      "@type": "Offer",
      priceCurrency: "DOP",
      description: "Punto de venta (POS) de alta velocidad con soporte de verifones Azul/CardNET, impresión silenciosa y arqueo ciego.",
    },
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Punto de Venta POS - Rápido, Silencioso y Seguro | ProVenta</title>
        <meta
          name="description"
          content="Conoce el software Punto de Venta (POS) de ProVenta: impresión silenciosa de tickets, integración con Verifones Azul y CardNET, autorización por PIN, arqueo ciego y Modo Caja dedicada."
        />
        <meta
          name="keywords"
          content="punto de venta republica dominicana, proventa pos, impresion silenciosa 80mm, verifone azul, cardnet rd, arqueo ciego pos, fast cash botones de cobro, software para supermercados y tiendas rd"
        />
        <link rel="canonical" href="https://www.proventa.app/pos/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Punto de Venta POS - Rápido, Silencioso y Seguro | ProVenta"
        />
        <meta
          property="og:description"
          content="Acelera el cobro en caja con impresión silenciosa de tickets, integración con Verifones Azul y CardNET, arqueo ciego y Modo Caja dedicada."
        />
        <meta property="og:url" content="https://www.proventa.app/pos/" />
        <meta
          property="og:image"
          content="https://www.proventa.app/assets/img/pos/facturacion_pos_procesa_factura.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Punto de Venta POS - Rápido, Silencioso y Seguro | ProVenta"
        />
        <meta
          name="twitter:description"
          content="Acelera el cobro en caja con impresión silenciosa de tickets, integración con Verifones Azul y CardNET, arqueo ciego y Modo Caja dedicada."
        />
        <meta
          name="twitter:image"
          content="https://www.proventa.app/assets/img/pos/facturacion_pos_procesa_factura.png"
        />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="pos-page min-vh-100 d-flex flex-column">
        <Header />

        {/* HERO SECTION */}
        <section className="pos-hero">
          <div className="pos-hero-glow-1"></div>
          <div className="pos-hero-glow-2"></div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center gy-5">
              <div className="col-lg-6 text-center text-lg-start">
                <div className="d-inline-flex align-items-center gap-2 mb-3">
                  <span className="pos-badge pos-badge-cyan">
                    <i className="bx bx-bolt-circle fs-6"></i> Punto de Venta de Alta Velocidad
                  </span>
                  <span className="pos-badge pos-badge-emerald">
                    <i className="bx bx-check-shield fs-6"></i> Seguridad por PIN
                  </span>
                </div>

                <h1 className="display-4 fw-bold text-white mb-3" style={{ lineHeight: 1.15 }}>
                  El POS más veloz, intuitivo y blindado para tu negocio
                </h1>

                <p className="lead text-light opacity-80 mb-4 fs-5">
                  Diseñado para comercios exigentes en República Dominicana. Cobro con Verifones Azul y CardNET con cierres automáticos, impresión silenciosa en tickets de 80mm/58mm, arqueos ciegos y control absoluto de cada transacción.
                </p>

                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start pt-2">
                  <a
                    href="https://wa.me/18097874963?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20POS%20de%20ProVenta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg rounded-pill px-4 shadow"
                  >
                    <i className="bx bxl-whatsapp fs-4 me-2"></i> Solicitar Demostración
                  </a>
                  <Link
                    to="/como-instalar-proventa/"
                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                  >
                    <i className="bx bx-download me-2"></i> Descargar e Instalar
                  </Link>
                </div>

                <div className="d-flex align-items-center gap-4 mt-4 pt-3 border-top border-secondary border-opacity-25 justify-content-center justify-content-lg-start text-start">
                  <div>
                    <h4 className="text-white fw-bold mb-0">&lt; 2 seg</h4>
                    <small className="text-light opacity-60">Tiempo promedio por cobro</small>
                  </div>
                  <div className="vr bg-secondary opacity-50 my-1"></div>
                  <div>
                    <h4 className="text-white fw-bold mb-0">100%</h4>
                    <small className="text-light opacity-60">Control anti-merma por PIN</small>
                  </div>
                  <div className="vr bg-secondary opacity-50 my-1"></div>
                  <div>
                    <h4 className="text-white fw-bold mb-0">Azul / CardNET</h4>
                    <small className="text-light opacity-60">Verifones sincronizados</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="pos-hero-img-wrap position-relative">
                  <img
                    src="/assets/img/pos/pos_genera_factura_proventa.png"
                    alt="ProVenta POS Pantalla de Cobro Rápido"
                    className="img-fluid"
                  />
                  <div
                    className="pos-floating-pill"
                    style={{ bottom: "20px", left: "20px" }}
                  >
                    <div className="rounded-circle bg-success p-2 d-flex align-items-center justify-content-center text-white">
                      <i className="bx bx-printer fs-4"></i>
                    </div>
                    <div>
                      <div className="fw-bold fs-sm">Impresión Silenciosa Activa</div>
                      <small className="text-muted text-white-50">Ticket 80mm directo sin confirmación</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS DESTACADOS / GRID */}
        <section className="py-5 bg-light position-relative">
          <div className="container py-lg-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <span className="pos-badge pos-badge-cyan mb-2">Funcionalidades Clave</span>
              <h2 className="display-6 fw-bold text-dark">
                Control estricto para dueños, máxima agilidad para cajeros
              </h2>
              <p className="text-muted fs-6">
                Cada detalle del POS de ProVenta está optimizado para filas rápidas, evitar fugas de inventario y cuadrar tus turnos al centavo.
              </p>
            </div>

            <div className="row g-4">
              {keyFeatures.map((feat, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="pos-card h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className={`pos-icon-box ${feat.iconColor} mb-0`}>
                          <i className={`bx ${feat.icon}`}></i>
                        </div>
                        <span className="badge bg-light text-primary border border-primary border-opacity-25 rounded-pill px-3 py-1">
                          {feat.tag}
                        </span>
                      </div>
                      <small className="text-muted text-uppercase fw-bold letter-spacing-1">{feat.badge}</small>
                      <h3 className="h5 fw-bold text-dark mt-1 mb-2">{feat.title}</h3>
                      <p className="text-muted fs-sm mb-0">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEMO FAST CASH INTERACTIVA & BÚSQUEDA */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container py-lg-4">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6">
                <span className="pos-badge pos-badge-emerald mb-2">Flujo de Cobro</span>
                <h2 className="display-6 fw-bold text-dark mb-3">
                  Botonera Fast Cash y Devolución con 1 solo toque
                </h2>
                <p className="text-muted mb-4">
                  Elimina el cálculo mental del cajero en horas pico. ProVenta presenta botones dinámicos con las denominaciones más frecuentes en República Dominicana: <strong>RD$ 500</strong>, <strong>RD$ 1,000</strong> y <strong>RD$ 2,000</strong>. Haz clic abajo para probar la calculadora en vivo:
                </p>

                {/* Simulador Interactivo */}
                <div className="p-4 bg-dark text-white rounded-4 shadow-sm border border-secondary border-opacity-25">
                  <div className="d-flex justify-content-between align-items-center pb-3 border-bottom border-secondary border-opacity-50 mb-3">
                    <span className="text-light opacity-75">Total de Venta en Pantalla:</span>
                    <span className="fs-4 fw-bold text-warning">RD$ {sampleSaleTotal.toLocaleString()}</span>
                  </div>

                  <div className="mb-3">
                    <small className="text-light opacity-75 d-block mb-2">Selecciona billete entregado por cliente (Fast Cash):</small>
                    <div className="row g-2">
                      {[700, 1000, 2000].map((amt) => (
                        <div className="col-4" key={amt}>
                          <button
                            type="button"
                            onClick={() => setFastCashAmount(amt)}
                            className={`btn w-100 py-2 fw-bold rounded-3 ${
                              fastCashAmount === amt
                                ? "btn-info text-dark"
                                : "btn-outline-light"
                            }`}
                          >
                            RD$ {amt.toLocaleString()}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-secondary bg-opacity-25 rounded-3 d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-light opacity-75 d-block">Devuelta a entregar:</small>
                      <span className="fs-3 fw-bold text-success">
                        RD$ {change.toLocaleString()}
                      </span>
                    </div>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 px-3 py-2 rounded-pill">
                      <i className="bx bx-check-double me-1"></i> Calculado al instante
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bx bx-check-circle text-primary fs-3"></i>
                    <div>
                      <h5 className="h6 fw-bold mb-1">Búsqueda Inteligente Agnóstica de Acentos</h5>
                      <p className="text-muted small mb-0">
                        Escribe "cafe con leche", "leche cafe" o "café" y el POS identificará el mismo producto sin obligar a usar tildes ni palabras exactas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-2 bg-light rounded-4 border shadow-sm">
                  <img
                    src="/assets/img/pos/facturacion_pos_procesa_factura.png"
                    alt="Generación y cobro de factura en ProVenta POS"
                    className="img-fluid rounded-3"
                  />
                  <div className="p-3 text-center">
                    <small className="text-muted">
                      <i className="bx bx-info-circle me-1"></i> Pantalla de venta activa: búsqueda instantánea por código de barra, teclado o pantalla táctil.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLATAFORMAS DE PAGO / VERIFONES AZUL Y CARNET */}
        <section className="py-5 bg-light">
          <div className="container py-lg-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <span className="pos-badge pos-badge-cyan mb-2">Integración de Pagos</span>
              <h2 className="display-6 fw-bold text-dark">
                Soporte de Verifones Azul y CardNET con Cierre Automático
              </h2>
              <p className="text-muted fs-6">
                Liquida pagos con tarjeta sin digitar el monto a mano en la terminal. El sistema envía el total directo al verifone y realiza el cierre de lote sincronizado al terminar el turno.
              </p>
            </div>

            <div className="row g-4">
              {paymentPlatforms.map((terminal, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="terminal-brand-card">
                    <div>
                      <div className="terminal-img-wrap">
                        <img src={terminal.img} alt={terminal.name} />
                      </div>
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-1 mb-2">
                        {terminal.badge}
                      </span>
                      <h3 className="h5 fw-bold text-dark mt-2 mb-2">{terminal.name}</h3>
                      <p className="text-muted fs-sm mb-3">{terminal.desc}</p>
                    </div>
                    <div className="p-2 bg-light rounded-3 border text-start">
                      <small className="text-success fw-bold d-flex align-items-center">
                        <i className="bx bx-check-shield fs-5 me-1"></i> {terminal.cierre}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-4 bg-white border shadow-sm text-center">
              <div className="row align-items-center">
                <div className="col-lg-8 text-lg-start mb-3 mb-lg-0">
                  <h4 className="fw-bold mb-1">¿Cuentas con terminales de Azul o CardNET en tu negocio?</h4>
                  <p className="text-muted mb-0 small">
                    Nuestro equipo técnico te asiste en la sincronización de puertos y verificación de cierres automáticos para que operes sin contratiempos.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a
                    href="https://wa.me/18097874963?text=Hola%2C%20tengo%20verifones%20Azul%2FCardNET%20y%20quiero%20integrarlos%20con%20ProVenta%20POS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary rounded-pill px-4"
                  >
                    <i className="bx bx-support me-1"></i> Asesoría de Integración
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARATIVA / ARQUITECTURA: POS VS ESTÁNDAR & MODO CAJA DEDICADA */}
        <section className="py-5 bg-dark text-white">
          <div className="container py-lg-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <span className="pos-badge pos-badge-amber mb-2">Diseño y Especialización</span>
              <h2 className="display-6 fw-bold text-white">
                Módulo POS vs. Módulo Estándar de Facturación
              </h2>
              <p className="text-light opacity-75 fs-6">
                ProVenta ofrece la interfaz exacta para cada área de tu empresa: mostrador ultra rápido o administración financiera.
              </p>
            </div>

            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <div className="pos-card-dark h-100 border border-primary border-opacity-50">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-primary px-3 py-2 rounded-pill fs-xs text-uppercase fw-bold">
                      Estación POS (Mostrador)
                    </span>
                    <i className="bx bx-store-alt text-primary fs-2"></i>
                  </div>
                  <h3 className="h4 fw-bold text-white mb-3">Modo Caja Dedicada</h3>
                  <p className="text-light opacity-75 small mb-4">
                    Transforma cualquier computador en una terminal exclusiva de ventas protegida contra distracciones o manipulaciones no autorizadas.
                  </p>

                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-primary fs-4"></i>
                      <span><strong>Inicio con Windows:</strong> Arranca directo en la pantalla de cobro al encender el equipo.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-primary fs-4"></i>
                      <span><strong>Pantalla Completa Bloqueada:</strong> Oculta el escritorio y restringe la salida mediante clave de supervisor.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-primary fs-4"></i>
                      <span><strong>Impresión Silenciosa Térmica:</strong> Tickets 80mm o 58mm directos al cortar la venta.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-primary fs-4"></i>
                      <span><strong>Apertura y Cierre Ciego:</strong> Arqueo imparcial con digitación de saldo físico sin ver el teórico.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-primary fs-4"></i>
                      <span><strong>Borrado protegido con PIN:</strong> Ningún cajero puede remover ítems sin autorización.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="pos-card-dark h-100">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-secondary px-3 py-2 rounded-pill fs-xs text-uppercase fw-bold">
                      Módulo Estándar (Oficina / Admin)
                    </span>
                    <i className="bx bx-building text-secondary fs-2"></i>
                  </div>
                  <h3 className="h4 fw-bold text-white mb-3">Facturación & Gestión Integral</h3>
                  <p className="text-light opacity-75 small mb-4">
                    Orientado a departamentos de contabilidad, ventas corporativas, cotizaciones y administración general.
                  </p>

                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-info fs-4"></i>
                      <span><strong>Copiar Facturas:</strong> Clona documentos anteriores completos con un clic para clientes recurrentes.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-info fs-4"></i>
                      <span><strong>Impresora Estándar (Carta / 8.5x11):</strong> Emisión de e-CF extensos, cotizaciones y órdenes de entrega con diseño formal.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-info fs-4"></i>
                      <span><strong>RNC y DGII Avanzado:</strong> Validación directa de contribuyentes gubernamentales, regímenes especiales y crédito fiscal.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bx bx-check text-info fs-4"></i>
                      <span><strong>Cuentas por Cobrar y Pagar:</strong> Historial detallado de estados de cuenta y plazos de crédito comercial.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER DESCUBRE KIOSKO & MÓVIL */}
        <section
          className="py-5 position-relative overflow-hidden text-white"
          style={{
            background: "radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.28) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(6, 182, 212, 0.2) 0%, transparent 60%), #0b0f19",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="container py-lg-4 position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7 text-center text-lg-start">
                <div className="d-inline-flex align-items-center gap-2 mb-3">
                  <span
                    className="badge px-3 py-2 rounded-pill fw-bold text-uppercase"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
                      color: "#fff",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <i className="bx bx-tab me-1"></i> ¿Buscas algo 100% móvil y táctil?
                  </span>
                  <span className="text-light opacity-75 small d-none d-sm-inline">
                    Ideal para tablets y mostradores compactos
                  </span>
                </div>

                <h2 className="display-6 fw-bold text-white mb-3" style={{ lineHeight: 1.2 }}>
                  Conoce{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ProVenta Kiosko
                  </span>
                  : la experiencia POS en Tablet
                </h2>

                <p className="fs-6 text-light opacity-80 mb-4" style={{ maxWidth: 580 }}>
                  Si tu negocio opera en espacios ágiles como cafeterías, food trucks, bares o restaurantes pequeños, lleva tus ventas a otro nivel sin cables ni computadoras pesadas.
                </p>

                <div className="row g-3 mb-4 text-start justify-content-center justify-content-lg-start">
                  {[
                    { icon: "bx-touch", title: "Órdenes Táctiles", desc: "Comandas y cobros con toques rápidos" },
                    { icon: "bx-restaurant", title: "Cuentas y Mesas", desc: "Manejo de órdenes abiertas y comandas" },
                    { icon: "bx-sync", title: "100% Conectado", desc: "Mismo inventario y reportes que tu POS" },
                  ].map((feat, i) => (
                    <div className="col-sm-4" key={i}>
                      <div
                        className="p-3 rounded-3 h-100"
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <i className={`bx ${feat.icon} fs-4 mb-2 d-block`} style={{ color: "#a78bfa" }}></i>
                        <strong className="text-white d-block small mb-1">{feat.title}</strong>
                        <small className="text-light opacity-60 d-block" style={{ fontSize: "0.78rem" }}>
                          {feat.desc}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <Link
                    to="/proventa-kiosko/"
                    className="btn btn-lg px-4 py-3 fw-bold rounded-pill text-white shadow"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                      boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                    }}
                  >
                    <i className="bx bx-tab me-2 fs-5"></i>
                    Explorar ProVenta Kiosko
                  </Link>

                  <Link
                    to="/android/"
                    className="btn btn-lg btn-outline-light border-opacity-25 px-4 py-3 rounded-pill"
                  >
                    <i className="bx bxl-android me-2 fs-5 text-success"></i>
                    Ver Versión Móvil Android
                  </Link>
                </div>
              </div>

              <div className="col-lg-5 text-center">
                <div className="position-relative mx-auto" style={{ maxWidth: 440 }}>
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: 280,
                      height: 280,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(139, 92, 246, 0.22)",
                      filter: "blur(60px)",
                      zIndex: 0,
                    }}
                  />
                  <div
                    className="p-2 rounded-4 position-relative"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src="/assets/img/kiosko/kiosko-pos-tablet.png"
                      alt="Interfaz táctil de ProVenta Kiosko en Tablet"
                      className="img-fluid rounded-3"
                      loading="lazy"
                    />
                    <div className="p-3 text-center">
                      <span className="badge px-3 py-1 rounded-pill" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                        <i className="bx bx-check-double me-1"></i> Compatible con Tablets Android de 8" a 15"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section className="py-5 bg-light">
          <div className="container py-lg-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <span className="pos-badge pos-badge-cyan mb-2">Dudas Resueltas</span>
              <h2 className="display-6 fw-bold text-dark">Preguntas Frecuentes sobre el POS</h2>
              <p className="text-muted">
                Respuestas directas sobre la operación, impresoras y seguridad en caja.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion pos-accordion" id="accordionPosFaq">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {faq.q}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionPosFaq"
                      >
                        <div className="accordion-body text-muted">
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

        {/* CALL TO ACTION FINAL */}
        <section
          className="py-5 text-white position-relative"
          style={{
            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
          }}
        >
          <div className="container text-center py-4">
            <h2 className="display-6 fw-bold text-white mb-3">
              ¿Listo para acelerar el cobro y proteger tu caja?
            </h2>
            <p className="lead opacity-90 mb-4 mx-auto" style={{ maxWidth: 650 }}>
              Instala ProVenta POS en tus terminales y experimenta la tranquilidad de un sistema robusto, con impresión silenciosa y arqueo ciego garantizado.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a
                href="https://wa.me/18097874963?text=Hola%2C%20quiero%20adquirir%20e%20instalar%20el%20POS%20de%20ProVenta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-lg rounded-pill px-5 fw-bold text-primary shadow"
              >
                <i className="bx bxl-whatsapp fs-4 me-2"></i> Contactar a Ventas
              </a>
              <Link
                to="/planes"
                className="btn btn-outline-light btn-lg rounded-pill px-5"
              >
                Ver Planes y Precios
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
        <ShareButton />
      </div>
    </React.Fragment>
  );
};

export default ProventaPos;
