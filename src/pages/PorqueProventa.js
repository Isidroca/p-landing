import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/buttons/whats-app-button";
import ShareButton from "../components/buttons/share-button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PorqueProventa.css";

const PorqueProventa = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>¿Por qué elegir ProVenta? | Sistema Completo en RD</title>
        <meta
          name="description"
          content="Descubre por qué ProVenta centraliza facturación, inventario, códigos de barras, impresión de etiquetas, créditos, empleados y cierres de caja en un solo sistema."
        />
        <meta
          name="keywords"
          content="por que proventa, sistema completo rd, software facturacion, generador codigo de barras, impresion etiquetas, inventario, pos republica dominicana"
        />
        <link rel="canonical" href="https://www.proventa.app/por-que-proventa/" />
      </Helmet>

      <div className="porque-page bg-light text-dark min-vh-100 d-flex flex-column">
        <Header />

        {/* 1. DECLARACIÓN DE INTENCIONES (Arriba de todo) */}
        <section
          className="position-relative overflow-hidden py-5"
          style={{
            marginTop: "80px",
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(99,102,241,0.15) 0%, transparent 60%), #f8f9fa",
          }}
        >
          <div className="container position-relative text-center" style={{ zIndex: 2, paddingBottom: "2rem" }}>
            <span
              className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-4"
              style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", letterSpacing: "0.08em" }}
            >
              Potencia Empresarial
            </span>
            <h1 className="display-4 text-dark fw-bold mb-4" style={{ lineHeight: 1.15 }}>
              No somos una simple página web:<br/>
              <span
                style={{
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                somos un Sistema Completo
              </span>
            </h1>
            <p className="fs-lg text-dark mx-auto" style={{ maxWidth: 720 }}>
              Olvídate de parches o herramientas limitadas. ProVenta es una plataforma robusta diseñada para cubrir cada milímetro operativo de tu negocio en la República Dominicana: desde el mostrador hasta la gerencia.
            </p>
          </div>
        </section>

        <section className="porque-proof-strip" aria-label="Beneficios principales de ProVenta">
          <div className="container">
            <div className="row g-0 text-center">
              <div className="col-6 col-lg-3"><i className="bx bx-grid-alt"></i><strong>Todo conectado</strong><span>Ventas, inventario y caja</span></div>
              <div className="col-6 col-lg-3"><i className="bx bx-barcode"></i><strong>Códigos y etiquetas</strong><span>Genera, imprime y escanea</span></div>
              <div className="col-6 col-lg-3"><i className="bx bx-shield-quarter"></i><strong>Más control</strong><span>Permisos y auditoría</span></div>
              <div className="col-6 col-lg-3"><i className="bx bx-line-chart"></i><strong>Decisiones claras</strong><span>Costos, margen e historial</span></div>
            </div>
          </div>
        </section>

        {/* 2. BLOQUES DE FUNCIONALIDADES POR MÓDULOS */}
        <section className="container py-5">
          <div className="row g-4 justify-content-center">

            {/* FACTURAS */}
            <div className="col-lg-6">
              <div className="h-100 p-4 p-xl-5 rounded-4 shadow-sm" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-primary bg-opacity-10 text-primary me-3" style={{ width: 56, height: 56 }}>
                    <i className="bx bx-receipt fs-2"></i>
                  </div>
                  <h2 className="h3 text-dark mb-0">Facturas & Mostrador Ágil</h2>
                </div>
                <p className="text-dark mb-4">
                  Velocidad y control absoluto en el punto de venta para que ningún cliente espere de más.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-primary me-2 mt-1 fs-5"></i> <span><strong>Ventas rápidas:</strong> Interfaz fluida para cobros ágiles.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-primary me-2 mt-1 fs-5"></i> <span><strong>Cobros automáticos con terminales:</strong> Integración directa con Azul y CardNet.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-primary me-2 mt-1 fs-5"></i> <span><strong>Turnos de caja y Multi-terminal:</strong> Operación simultánea con múltiples cajeros.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-primary me-2 mt-1 fs-5"></i> <span><strong>Impresión silenciosa:</strong> Emisión de tickets sin cuadros de diálogo molestos.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-primary me-2 mt-1 fs-5"></i> <span><strong>Lector de códigos de barras:</strong> Búsqueda instantánea de mercancía.</span></li>
                  <li className="d-flex text-dark"><i className="bx bx-check text-primary me-2 mt-1 fs-5"></i> <span><strong>Historial de ventas:</strong> Auditoría detallada de cada ticket.</span></li>
                </ul>
                <Link to="/blog/como-configurar-impresion-silenciosa-pos" className="text-primary fw-bold text-decoration-none">
                  Leer guía de impresión y caja rápida &rarr;
                </Link>
              </div>
            </div>

            {/* PRODUCTOS */}
            <div className="col-lg-6">
              <div className="h-100 p-4 p-xl-5 rounded-4 shadow-sm" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-success bg-opacity-10 text-success me-3" style={{ width: 56, height: 56 }}>
                    <i className="bx bx-box fs-2"></i>
                  </div>
                  <h2 className="h3 text-dark mb-0">Productos & Inventario Inteligente</h2>
                </div>
                <p className="text-dark mb-4">
                  Mantén tu mercancía vigilada al milímetro, sin sorpresas ni diferencias de stock.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-success me-2 mt-1 fs-5"></i> <span><strong>Códigos de barras y etiquetas:</strong> Genera códigos para tus productos e imprime etiquetas listas para colocar y escanear.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-success me-2 mt-1 fs-5"></i> <span><strong>Categorías y Alertas:</strong> Organización limpia y avisos automáticos de stock bajo.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-success me-2 mt-1 fs-5"></i> <span><strong>Movimientos:</strong> Trazabilidad completa de entradas y salidas.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-success me-2 mt-1 fs-5"></i> <span><strong>Costo y Margen:</strong> Visualiza tu rentabilidad real por artículo.</span></li>
                  <li className="d-flex text-dark"><i className="bx bx-check text-success me-2 mt-1 fs-5"></i> <span><strong>Conteos y ajustes:</strong> Corrige existencias con movimientos registrados y mantén el inventario confiable.</span></li>
                </ul>
                <Link to="/blog/evitar-quiebres-inventario-pos" className="text-success fw-bold text-decoration-none">
                  Descubre cómo proteger tu stock &rarr;
                </Link>
              </div>
            </div>

            {/* CLIENTES & CRÉDITOS */}
            <div className="col-lg-6">
              <div className="h-100 p-4 p-xl-5 rounded-4 shadow-sm" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-info bg-opacity-10 text-info me-3" style={{ width: 56, height: 56 }}>
                    <i className="bx bx-group fs-2"></i>
                  </div>
                  <h2 className="h3 text-dark mb-0">Clientes & Créditos</h2>
                </div>
                <p className="text-dark mb-4">
                  Cuentas por cobrar bajo control. Gestiona relaciones, fidelidad y cartera de crédito en un solo lugar.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-info me-2 mt-1 fs-5"></i> <span><strong>Cuentas por Cobrar & Saldo:</strong> Sigue de cerca el "fiado" y los plazos de vencimiento.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-info me-2 mt-1 fs-5"></i> <span><strong>Pagos parciales y Notificaciones:</strong> Facilita abonos a capital manteniendo el comprobante.</span></li>
                  <li className="d-flex text-dark"><i className="bx bx-check text-info me-2 mt-1 fs-5"></i> <span><strong>Fidelidad y Clientes frecuentes:</strong> Premia a quienes compran seguido y conoce su historial.</span></li>
                </ul>
                <Link to="/blog/control-cuentas-por-cobrar-fiados" className="text-info fw-bold text-decoration-none">
                  Guía de gestión de deudores y créditos &rarr;
                </Link>
              </div>
            </div>

            {/* EMPLEADOS & TURNOS */}
            <div className="col-lg-6">
              <div className="h-100 p-4 p-xl-5 rounded-4 shadow-sm" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center rounded-3 bg-warning bg-opacity-10 text-warning me-3" style={{ width: 56, height: 56 }}>
                    <i className="bx bx-lock-alt fs-2"></i>
                  </div>
                  <h2 className="h3 text-dark mb-0">Empleados & Turnos</h2>
                </div>
                <p className="text-dark mb-4">
                  Asigna permisos, controla turnos y audita exactamente quién hizo cada movimiento en el sistema.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-warning me-2 mt-1 fs-5"></i> <span><strong>Permisos y Actividad:</strong> Controla qué puede hacer cada colaborador y revisa su bitácora.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-warning me-2 mt-1 fs-5"></i> <span><strong>Turnos y Arqueo:</strong> Cuadres de caja limpios al finalizar la jornada.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-warning me-2 mt-1 fs-5"></i> <span><strong>Cierre automático Verifone:</strong> Cierre automatizado de terminales, sin diferencias manuales.</span></li>
                  <li className="d-flex mb-3 text-dark"><i className="bx bx-check text-warning me-2 mt-1 fs-5"></i> <span><strong>Gastos de caja chica:</strong> Registra salidas menores justificadas sin perder el balance.</span></li>
                  <li className="d-flex text-dark"><i className="bx bx-check text-warning me-2 mt-1 fs-5"></i> <span><strong>Auditoría completa:</strong> Transparencia total en las finanzas del negocio.</span></li>
                </ul>
                <Link to="/blog/cierre-automatico-verifone-pos" className="text-warning fw-bold text-decoration-none">
                  Aprende sobre auditoría y cierres de caja &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        <section className="porque-label-section">
          <div className="container">
            <div className="porque-label-shell">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <span className="porque-label-kicker">INVENTARIO LISTO PARA VENDER</span>
                  <h2 className="display-6 fw-bold text-dark">Del producto a la etiqueta, sin salir de ProVenta</h2>
                  <p>Cuando un artículo no tiene código, ProVenta te permite generarlo e imprimir su etiqueta. Luego puedes localizarlo con el lector en el punto de venta y descontarlo del inventario automáticamente al facturar.</p>
                  <div className="porque-label-flow" aria-label="Flujo de etiquetado y venta">
                    <span><i className="bx bx-package"></i> Producto</span><b>→</b>
                    <span><i className="bx bx-barcode"></i> Código</span><b>→</b>
                    <span><i className="bx bx-printer"></i> Etiqueta</span><b>→</b>
                    <span><i className="bx bx-cart"></i> Venta</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="porque-label-preview">
                    <div className="porque-label-card">
                      <small>PROVENTA · INVENTARIO</small>
                      <strong>Café Premium 500 g</strong>
                      <div className="porque-barcode" aria-hidden="true"></div>
                      <span>7 460123 458902</span>
                      <b>RD$495.00</b>
                    </div>
                    <div className="porque-print-note"><i className="bx bx-printer"></i><span><strong>Lista para imprimir</strong><small>Identifica productos nuevos en segundos</small></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LLAMADO A LA ACCIÓN FINAL */}
        <section
          className="py-5 mt-auto text-center"
          style={{ background: "linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%)" }}
        >
          <div className="container py-4">
            <h2 className="display-5 text-white fw-bold mb-4">
              Lleva la gestión de tu negocio al siguiente nivel
            </h2>
            <p className="fs-lg text-white opacity-75 mb-5 mx-auto" style={{ maxWidth: 640 }}>
              Únete a los comercios en RD que ya automatizan sus operaciones con una plataforma seria y enfocada en el crecimiento.
            </p>
            <Link
              to="/registro"
              className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow"
              style={{ color: "#4f46e5" }}
            >
              Crea tu cuenta gratis hoy
            </Link>
          </div>
        </section>

        <Footer />
      </div>
      <WhatsAppButton />
      <ShareButton />
    </React.Fragment>
  );
};

export default PorqueProventa;


