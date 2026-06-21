import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/buttons/whats-app-button";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Android = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          ProVenta Mobile - El mejor POS para Android en República Dominicana
        </title>
        <meta
          name="description"
          content="Descarga ProVenta para Android. Factura, controla inventario, imprime recibos y gestiona tu negocio desde tu celular."
        />
        <meta
          name="keywords"
          content="Facturación móvil RD, Sistema para colmados, impresora térmica Bluetooth, App de facturación, POS Android, Software de ventas República Dominicana"
        />
      </Helmet>

      <div className="bg-dark text-light min-vh-100 d-flex flex-column">
        <Header />

        {/* Hero Section */}
        <section
          className="position-relative pt-5 pb-4 pb-lg-5 overflow-hidden"
          style={{ marginTop: "80px" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                <h1 className="display-4 text-white mb-3">
                  Tu negocio en tu bolsillo, donde sea que estés. 📱
                </h1>
                <p className="lead text-light opacity-75 mb-4">
                  Factura rápido, controla inventario y vende desde cualquier
                  lugar con ProVenta para Android. Compatible con impresoras
                  térmicas y NCF dominicanos.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.proventa.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg rounded-pill"
                  >
                    <i className="bx bxl-play-store fs-4 me-2"></i>
                    Descargar y probar gratis
                  </a>
                  <Link
                    to="/"
                    className="btn btn-outline-light btn-lg rounded-pill"
                  >
                    Ver versión Windows
                  </Link>
                </div>
                <div
                  className="mt-4 p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-10 shadow-sm"
                  style={{ maxWidth: "450px" }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <i className="bx bx-gift me-2 text-primary fs-4"></i>
                    <span className="text-white fw-medium">
                      Beneficio exclusivo:
                    </span>
                  </div>
                  <ul className="list-unstyled mb-0 text-light opacity-75 small">
                    <li className="mb-2 d-flex align-items-start">
                      <i className="bx bx-check-circle me-2 text-primary mt-1"></i>
                      <span>
                        <strong>Gratis:</strong> Incluido en todos los planes
                        ProVenta Desktop.
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <i className="bx bx-check-circle me-2 text-primary mt-1"></i>
                      <span>
                        <strong>Prueba sin riesgo:</strong> 7 días gratis para
                        nuevos usuarios.
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="bx bx-check-circle me-2 text-primary mt-1"></i>
                      <span>
                        <strong>Independiente:</strong> RD$600 mensual (solo
                        versión móvil).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 position-relative">
                {/* Decorator circles */}
                <div
                  className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary opacity-25 blur-3xl"
                  style={{
                    width: "300px",
                    height: "300px",
                    filter: "blur(60px)",
                    zIndex: 0,
                  }}
                ></div>

                <div className="text-center position-relative zindex-2">
                  <img
                    src="/assets/img/android/dashboard_android_kpis.jpeg"
                    alt="Dashboard ProVenta Android"
                    className="img-fluid rounded-3 shadow-lg border border-secondary"
                    style={{
                      maxHeight: "600px",
                      transform: "rotate(-5deg)",
                      backfaceVisibility: "hidden",
                      willChange: "transform",
                    }}
                  />
                  <img
                    src="/assets/img/android/pantalla_generar_nueva_factura_android.jpeg"
                    alt="Facturación Android"
                    className="img-fluid rounded-3 shadow-lg border border-secondary position-absolute top-50 start-0 translate-middle-y d-none d-md-block"
                    style={{
                      maxHeight: "450px",
                      transform: "rotate(5deg) translateX(-20%)",
                      zIndex: -1,
                      backfaceVisibility: "hidden",
                      willChange: "transform",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-5">
          <div className="row g-4">
            {/* Feature 1: NCF */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 h-100 text-center p-4 rounded-4 shadow-sm hover-lift-light">
                <div className="card-body">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bx bx-file fs-2"></i>
                  </div>
                  <h3 className="h5 text-dark">Facturación con NCF</h3>
                  <p className="text-muted small">
                    Emite facturas válidas para crédito fiscal y consumo
                    directamente desde tu celular. Ideal para vendedores de
                    calle y entregas a domicilio.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: Impresión */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 h-100 text-center p-4 rounded-4 shadow-sm hover-lift-light">
                <div className="card-body">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bx bx-printer fs-2"></i>
                  </div>
                  <h3 className="h5 text-dark">Impresión Térmica Bluetooth</h3>
                  <p className="text-muted small">
                    Conecta tu impresora portátil y entrega tickets
                    profesionales al instante. Configuración rápida y estable.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Inventario */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 h-100 text-center p-4 rounded-4 shadow-sm hover-lift-light">
                <div className="card-body">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bx bx-box fs-2"></i>
                  </div>
                  <h3 className="h5 text-dark">Control de Inventario Real</h3>
                  <p className="text-muted small">
                    Consulta existencias y precios en tiempo real. No más
                    'déjame ver si queda en el almacén'.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4: Cloud Sync */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 h-100 text-center p-4 rounded-4 shadow-sm hover-lift-light">
                <div className="card-body">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bx bx-cloud fs-2"></i>
                  </div>
                  <h3 className="h5 text-dark">Sincronización en la Nube</h3>
                  <p className="text-muted small">
                    Usa la App de forma independiente o sincronízala con tu
                    sistema ProVenta para Windows. Todo tu negocio conectado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container py-5 mb-5">
          <h2 className="text-center text-white mb-5">Todo lo que necesitas</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <img
                src="/assets/img/android/listado_productos_con_imagenes.jpeg"
                className="img-fluid rounded-3 shadow border border-secondary"
                alt="Lista productos"
              />
              <p className="text-center mt-2 text-light opacity-75 small">
                Catálogo Visual
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src="/assets/img/android/factura_detalle_android.jpeg"
                className="img-fluid rounded-3 shadow border border-secondary"
                alt="Detalle factura"
              />
              <p className="text-center mt-2 text-light opacity-75 small">
                Detalle de Ventas
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src="/assets/img/android/opciones_imprimir_android_pdf_impresora_compartir.jpeg"
                className="img-fluid rounded-3 shadow border border-secondary"
                alt="Opciones compartir"
              />
              <p className="text-center mt-2 text-light opacity-75 small">
                Comparte y Exporta
              </p>
            </div>
            <div className="col-6 col-md-3">
              <img
                src="/assets/img/android/listado_facturas_android.jpeg"
                className="img-fluid rounded-3 shadow border border-secondary"
                alt="Historial facturas"
              />
              <p className="text-center mt-2 text-light opacity-75 small">
                Historial Completo
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-primary py-5 mt-auto">
          <div className="container text-center">
            <h2 className="text-white mb-3">
              Empieza hoy por solo RD$600 mensuales.
            </h2>
            <p className="lead text-white opacity-90 mb-4">
              Sin contratos largos, sin complicaciones.{" "}
              <br className="d-none d-md-inline" />
              El sistema que entiende al comerciante dominicano.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.proventa.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg rounded-pill shadow px-4 py-2"
            >
              <i className="bx bxl-android fs-4 me-2"></i>
              Descargar APK / Google Play
            </a>
            <p className="text-white mt-3 opacity-75 mb-0 small">
              Versión 1.0.0 • 15 MB
            </p>
          </div>
        </section>

        <Footer />
      </div>
      <WhatsAppButton />
    </React.Fragment>
  );
};

export default Android;
