import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const Install = () => {
  const helmetContext = {};
  const [version, setVersion] = useState("");
  const [appUrl, setAppUrl] = useState(
    "https://core.proventa.do/api/version"
  );

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch("https://core.proventa.do/api/version");
        if (!response.ok) {
          throw new Error("Error al obtener la versión");
        }
        const data = await response.json();
        setAppUrl(data.url_down);
        setVersion(obtenerVersion(data.url_down));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchVersion();
  }, []);

  function obtenerVersion(url) {
    const regex = /ProVenta\.setup\.(\d+\.\d+\.\d+)\.exe/;
    const coincidencia = url.match(regex);
    return coincidencia ? coincidencia[1] : null;
  }

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Cómo Instalar ProVenta en Windows | Guía Paso a Paso</title>
        <meta
          name="description"
          content="Sigue nuestra guía detallada para instalar ProVenta en tu PC con Windows. Configura tu sistema de facturación y POS en pocos minutos."
        />
        <meta name="author" content="Isidro Calderon Abreu" />
        <link rel="canonical" href="https://proventa.app/como-instalar-proventa" />
      </Helmet>

      <div className="bg-dark text-light min-vh-100 d-flex flex-column">
        <Header />

        {/* Hero Section */}
        <section className="pt-5 pb-4 pb-lg-5" style={{ marginTop: "80px" }}>
          <div className="container pt-2 pt-md-4">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white mb-3">Instalación de ProVenta</h1>
                <p className="lead text-light opacity-75 mb-5">
                  Estás a pocos pasos de transformar la gestión de tu negocio.
                  Sigue esta guía para instalar el software de facturación y POS más intuitivo de República Dominicana.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                  <a href={appUrl} className="btn btn-primary btn-lg px-4 py-3 shadow-lg">
                    <i className="bx bx-download me-2 fs-4"></i> Descargar instalador
                  </a>
                  <a href="#pasos" className="btn btn-outline-light btn-lg px-4 py-3">
                    Ver pasos de instalación
                  </a>
                </div>
                {version && (
                  <p className="small text-muted mt-3 mb-0">
                    Versión actual: <span className="text-primary fw-bold">{version}</span> para Windows
                  </p>
                )}
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="position-relative">
                  <img
                    src="/assets/img/pantalla_facturacion_claro.png"
                    className="img-fluid rounded-3 shadow-lg"
                    alt="ProVenta Billing Interface"
                    style={{ transform: "perspective(1000px) rotateY(-5deg)" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-3" style={{ transform: "translate(20px, 20px)", zIndex: -1 }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main id="pasos" className="flex-grow-1 py-5 bg-white text-dark">
          <div className="container py-lg-4">
            <div className="row justify-content-center">
              <div className="col-lg-9">

                {/* Steps Section */}
                <h2 className="h1 text-center mb-5 fw-bold">Pasos para la Instalación</h2>

                <div className="alert alert-info border-0 shadow-sm mb-5 d-flex align-items-center">
                  <div className="fs-1 me-4 text-primary">
                    <i className="bx bx-info-circle"></i>
                  </div>
                  <div>
                    <h4 className="h5 mb-1 fw-bold">Nota de Seguridad</h4>
                    <p className="mb-0 opacity-75">
                      Durante el proceso, Windows podría mostrar avisos de seguridad. Esto es normal para aplicaciones descargadas de internet. Sigue las instrucciones de abajo para continuar.
                    </p>
                  </div>
                </div>

                <div className="steps py-4">
                  {/* Step 1 */}
                  <div className="row mb-5 align-items-center">
                    <div className="col-md-5 text-center order-md-2">
                      <div className="p-4 bg-light rounded-4 mb-4 mb-md-0 shadow-sm">
                        <i className="bx bx-cloud-download display-1 text-primary"></i>
                      </div>
                    </div>
                    <div className="col-md-7 order-md-1">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>1</span>
                        <h3 className="h4 mb-0 fw-bold">Descarga el Instalador</h3>
                      </div>
                      <p className="text-muted lead fs-6">
                        Haz clic en el botón de descarga. Se descargará un archivo ejecutable (.exe) que contiene todo lo necesario para que ProVenta funcione en tu equipo.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="row mb-5 align-items-center">
                    <div className="col-md-5 text-center">
                      <img
                        src="/assets/windows_defender_alerta.png"
                        className="img-fluid rounded-3 shadow-sm border"
                        alt="Windows Defender Info"
                      />
                    </div>
                    <div className="col-md-7 ps-lg-5">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>2</span>
                        <h3 className="h4 mb-0 fw-bold">Permisos de Windows</h3>
                      </div>
                      <p className="text-muted mb-3">
                        Al ejecutar el archivo, si aparece una ventana azul de "Windows protegió su PC", haz clic en el enlace <strong>"Más información"</strong>.
                      </p>
                      <div className="bg-light p-3 rounded-3 border-start border-primary border-4">
                        <p className="small mb-0 text-dark">
                          Esto aparece porque somos un desarrollador dependiente de la reputación del archivo en la red de Microsoft.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="row mb-5 align-items-center">
                    <div className="col-md-5 text-center order-md-2">
                      <img
                        src="/assets/windows_defender_alerta_aceptar.png"
                        className="img-fluid rounded-3 shadow-sm border"
                        alt="Windows Defender Run"
                      />
                    </div>
                    <div className="col-md-7 order-md-1 pe-lg-5">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>3</span>
                        <h3 className="h4 mb-0 fw-bold">Ejecutar Instalación</h3>
                      </div>
                      <p className="text-muted">
                        Luego de hacer clic en más información, aparecerá el botón <strong>"Ejecutar de todas formas"</strong>. Haz clic en él para iniciar el proceso automático.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="row mb-5 align-items-center">
                    <div className="col-md-5 text-center">
                      <div className="p-4 bg-light rounded-4 mb-4 mb-md-0 shadow-sm">
                        <i className="bx bx-rocket display-1 text-success"></i>
                      </div>
                    </div>
                    <div className="col-md-7 ps-lg-5">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>4</span>
                        <h3 className="h4 mb-0 fw-bold">¡Listo para usar!</h3>
                      </div>
                      <p className="text-muted">
                        El sistema se instalará automáticamente. Al finalizar, ProVenta se abrirá solo y encontrarás un acceso directo en tu escritorio. ¡Ya puedes comenzar a facturar!
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                {/* Edge Section */}
                <section className="bg-light p-4 p-md-5 rounded-4 border">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <h2 className="h3 fw-bold mb-4">
                        <i className="bx bxl-edge text-primary me-2"></i>
                        Si usas Microsoft Edge
                      </h2>
                      <p className="lead fs-6 text-muted mb-4">
                        Edge puede ser un poco más estricto con las descargas. Sigue estos pasos adicionales:
                      </p>
                    </div>

                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <img src="/assets/microsoft_edge_confirmar_descarga.png" className="card-img-top p-2" alt="Edge Download" />
                          <div className="card-body">
                            <p className="small mb-0 text-center">Haz clic en los <strong>tres puntos (...)</strong> y elige <strong>"Conservar"</strong> o "Keep".</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <img src="/assets/windows_defender_aceptar_archivo.png" className="card-img-top p-2" alt="Edge Keep Anyway" />
                          <div className="card-body">
                            <p className="small mb-0 text-center">Selecciona <strong>"Mostrar más"</strong> y luego <strong>"Mantener de todos modos"</strong>.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <img src="/assets/instalacion_proventa.png" className="card-img-top p-2" alt="Edge Install" />
                          <div className="card-body">
                            <p className="small mb-0 text-center">Haz clic en el archivo descargado para iniciar la instalación.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Next Steps */}
                <div className="mt-5 text-center">
                  <h3 className="h4 fw-bold mb-4">¿Ya instalaste? Sigue con el registro</h3>
                  <a href="/registro" className="btn btn-primary btn-lg px-5">
                    Ir al Registro <i className="bx bx-right-arrow-alt ms-2"></i>
                  </a>
                </div>

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

export default Install;
