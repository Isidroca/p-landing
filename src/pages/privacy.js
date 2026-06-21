import React from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const Privacy = () => {
  const helmetContext = {};
  const lastUpdate = "27 de enero de 2026";

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Política de Privacidad | ProVenta</title>
        <meta
          name="description"
          content="Conoce cómo ProVenta protege tus datos. Información detallada sobre el tratamiento de datos sensibles y privacidad para usuarios en República Dominicana."
        />
        <meta name="author" content="Isidro Calderon Abreu" />
        <link rel="canonical" href="https://proventa.app/privacidad" />
      </Helmet>

      <div className="bg-dark text-light min-vh-100 d-flex flex-column">
        <Header />

        {/* Hero Section */}
        <section className="pt-5 pb-4 pb-lg-5" style={{ marginTop: "80px" }}>
          <div className="container text-center pt-2 pt-md-4">
            <h1 className="display-3 text-white mb-3">Política de Privacidad</h1>
            <p className="lead text-light opacity-75 mb-0 mx-auto" style={{ maxWidth: "700px" }}>
              Nuestra prioridad es la seguridad de tu información. Conoce cómo gestionamos y protegemos tus datos en ProVenta.
            </p>
            <p className="small text-muted mt-4">
              <strong>Última actualización:</strong> {lastUpdate}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow-1 py-5 bg-white text-dark">
          <div className="container py-lg-4">
            <div className="row justify-content-center">
              <div className="col-lg-9">

                <article className="prose prose-lg">
                  <p className="lead mb-5 text-muted">
                    En <strong>ProVenta</strong>, valoramos profundamente la confianza que depositas en nosotros al utilizar nuestra plataforma de facturación y POS. Esta política detalla nuestras prácticas de privacidad y el compromiso de proteger tanto tu información personal como la de tu dispositivo.
                  </p>

                  <section className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary-subtle p-2 rounded-3 me-3">
                        <i className="bx bx-data fs-3 text-primary"></i>
                      </div>
                      <h2 className="h3 mb-0 fw-bold">1. Información que Recopilamos</h2>
                    </div>
                    <p className="text-muted">
                      Para garantizar el correcto funcionamiento del sistema y el cumplimiento de las normativas de facturación en República Dominicana, ProVenta gestiona los siguientes datos:
                    </p>
                    <div className="row g-4 mt-2">
                      <div className="col-md-4">
                        <div className="h-100 p-3 border rounded-3 bg-light">
                          <h4 className="h6 fw-bold">Datos de Registro</h4>
                          <p className="small mb-0 text-muted">Nombre, correo electrónico y datos de contacto para la gestión de licencias y soporte.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="h-100 p-3 border rounded-3 bg-light">
                          <h4 className="h6 fw-bold">Documentos</h4>
                          <p className="small mb-0 text-muted">Acceso temporal a PDFs e imágenes necesarios para la generación e impresión de facturas.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="h-100 p-3 border rounded-3 bg-light">
                          <h4 className="h6 fw-bold">Dispositivo</h4>
                          <p className="small mb-0 text-muted">Identificadores técnicos para asegurar la compatibilidad con impresoras térmicas.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info-subtle p-2 rounded-3 me-3">
                        <i className="bx bx-shield-quarter fs-3 text-info"></i>
                      </div>
                      <h2 className="h3 mb-0 fw-bold">2. Uso de Datos Sensibles</h2>
                    </div>
                    <div className="alert alert-info border-0 shadow-sm mb-4">
                      <p className="mb-0">
                        <strong>Transparencia:</strong> ProVenta utiliza permisos de almacenamiento exclusivamente para permitir la visualización y generación de facturas. No compartimos archivos privados del usuario con terceros sin consentimiento explícito.
                      </p>
                    </div>
                    <p className="text-muted">
                      Utilizamos protocolos de seguridad avanzados, incluyendo firmas digitales mediante <strong>Java KeyStore (.jks)</strong>, para asegurar que la integridad de tu aplicación y tus datos no se vean comprometidos durante actualizaciones o procesos de sincronización.
                    </p>
                  </section>

                  <section className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning-subtle p-2 rounded-3 me-3">
                        <i className="bx bx-user-voice fs-3 text-warning"></i>
                      </div>
                      <h2 className="h3 mb-0 fw-bold">3. Audiencia Objetivo y Menores</h2>
                    </div>
                    <p className="text-muted">
                      Nuestra plataforma está diseñada exclusivamente para <strong>uso comercial y profesional</strong>. No recopilamos conscientemente datos de menores de 13 años. Si detectamos información de menores en nuestra base de datos, procederemos a su eliminación inmediata y definitiva.
                    </p>
                  </section>

                  <section className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success-subtle p-2 rounded-3 me-3">
                        <i className="bx bx-lock-alt fs-3 text-success"></i>
                      </div>
                      <h2 className="h3 mb-0 fw-bold">4. Derechos del Usuario (ARCO)</h2>
                    </div>
                    <p className="text-muted">
                      Como titular de los datos, tienes derecho a <strong>A</strong>cceder, <strong>R</strong>ectificar, <strong>C</strong>ancelar u <strong>O</strong>ponerte (derechos ARCO) al tratamiento de tu información personal en cualquier momento. Nuestro compromiso es facilitar estos procesos de manera ágil a través de nuestros canales de soporte.
                    </p>
                  </section>

                  <hr className="my-5" />

                  <section className="bg-light p-4 p-md-5 rounded-4 border">
                    <h2 className="h4 fw-bold mb-4">Contacto y Soporte de Privacidad</h2>
                    <p className="text-muted mb-4">
                      Si tienes dudas sobre cómo tratamos tus datos o necesitas ejercer tus derechos de privacidad, estamos aquí para ayudarte:
                    </p>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                          <i className="bx bx-envelope fs-2 text-primary me-3"></i>
                          <div>
                            <div className="small text-muted">Correo electrónico</div>
                            <div className="fw-bold">ayuda.proventa@gmail.com</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm">
                          <i className="bx bx-user-pin fs-2 text-primary me-3"></i>
                          <div>
                            <div className="small text-muted">Responsable DPO</div>
                            <div className="fw-bold">Isidro Calderon A.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </article>

              </div>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
};

export default Privacy;
