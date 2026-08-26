import "../App.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { RWebShare } from "react-web-share";
import WhatsAppButton from "../components/buttons/whats-app-button";
import InvoiceSlider from "../components/buttons/general/invoice-slider";
import { Link, useNavigate } from "react-router-dom";
import AndroidBanner from "../components/AndroidBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingRedesign from "../components/LandingRedesign";
import LandingConversion, { faqItems } from "../components/LandingConversion";

function Index() {
  const navigate = useNavigate();
  const helmetContext = {};
  const [version, setVersion] = useState("");
  const [appUrl, setAppUrl] = useState(
    `https://s3.us-east-1.amazonaws.com/proventa.do/app/ProVenta.setup.${version}.exe`,
  );

  const heroImages = [
    "assets/img/post-facturacion-claro.png",
    "assets/img/pantalla_facturacion_claro.png",
    "assets/img/facturacion_teclas_rapidas_pos.png"
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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
  }, []); // Dependencias vacías para ejecutarse solo una vez al montar

  function obtenerVersion(url) {
    const regex = /ProVenta\.setup\.(\d+\.\d+\.\d+)\.exe/;
    const coincidencia = url.match(regex);
    return coincidencia ? coincidencia[1] : null;
  }

  const download = async (e) => {
    e.preventDefault();
    try {
      document.getElementById("my_download").click();
    } catch { }
  };

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>ProVenta | Software de Facturación, POS e Inventario en RD</title>
        <meta
          name="description"
          content="Software de facturación, POS e inventario para negocios en República Dominicana. Facturación electrónica DGII, multimoneda y aplicación Android."
        />
        <meta name="author" content="Isidro Calderon Abreu" />
        <link rel="canonical" href="https://www.proventa.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ProVenta | Software de Facturación, POS e Inventario en RD" />
        <meta property="og:description" content="Facturación electrónica DGII, POS, inventario, compras y aplicación Android para negocios dominicanos." />
        <meta property="og:url" content="https://www.proventa.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"ProVenta",applicationCategory:"BusinessApplication",operatingSystem:"Windows, Android",url:"https://www.proventa.app/",description:"Software de facturación, POS e inventario para negocios en República Dominicana."})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))})}</script>
      </Helmet>

      <div className="App">
        <main className="page-wrapper" id="top">
          <Header />
          <section
            className="dark-mode bg-dark position-relative overflow-hidden py-4 mb-4"
            style={{
              minHeight: "85vh",
              display: "flex",
              alignItems: "center",
              background: "radial-gradient(circle at 10% 20%, rgba(0, 102, 255, 0.15) 0%, rgba(0, 0, 0, 0) 40%), radial-gradient(circle at 90% 80%, rgba(0, 102, 255, 0.1) 0%, rgba(0, 0, 0, 0) 40%)"
            }}
          >
            {/* Background Decoration */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
              <div
                className="position-absolute bg-primary opacity-10 rounded-circle"
                style={{ width: "500px", height: "500px", top: "-250px", right: "-100px", filter: "blur(120px)" }}
              ></div>
              <div
                className="position-absolute bg-primary opacity-5 rounded-circle"
                style={{ width: "400px", height: "400px", bottom: "-100px", left: "-100px", filter: "blur(100px)" }}
              ></div>
            </div>

            <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
              <div className="row align-items-center pt-3 pb-2 py-md-4">
                <div className="col-xl-6 col-lg-6 pt-lg-5 text-center text-lg-start mb-5 mb-lg-0">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-sm-5 animate__animated animate__fadeInDown">
                    <div className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20 px-3 py-2 rounded-pill me-3">
                      <span className="fw-bold">NUEVO:</span> Facturación Electrónica DGII 🧾
                    </div>
                    <RWebShare
                      data={{
                        text: "ProVenta: Software de Facturación y POS Inteligente en República Dominicana",
                        url: "https://www.proventa.app",
                        title: "ProVenta",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle border-primary border-opacity-20 bg-primary bg-opacity-10 shadow-sm" title="Compartir ProVenta">
                        <i className="bx bx-share-alt text-primary"></i>
                      </button>
                    </RWebShare>
                  </div>
                  <h1 className="display-2 fw-extra-bold pb-2 pb-sm-3 mb-4 animate__animated animate__fadeInUp" style={{ lineHeight: "1.1" }}>
                    Facturación y POS <span className="text-primary text-gradient-blue">Inteligente</span> para tu Negocio
                  </h1>
                  <p className="fs-xl text-light opacity-80 mb-5 animate__animated animate__fadeInUp animate__delay-1s" style={{ maxWidth: "540px" }}>
                    Toma el control total de tu inventario, ventas y clientes con el software más rápido y confiable de República Dominicana. Diseñado para crecer contigo.
                  </p>

                  <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 animate__animated animate__fadeInUp animate__delay-1s">
                    <a
                      id="my_download"
                      href={appUrl}
                      download
                      style={{ display: "none" }}
                    >
                      x
                    </a>
                    <a
                      href={"/"}
                      onClick={async (e) => download(e)}
                      className="btn btn-lg btn-primary shadow-primary px-4 py-3"
                      style={{ borderRadius: "12px", minWidth: "200px" }}
                    >
                      <i className="bx bxl-windows fs-4 me-2"></i>
                      Descargar Windows
                    </a>
                    <Link
                      to="/android"
                      className="btn btn-lg btn-outline-light border-opacity-25 px-4 py-3"
                      style={{ borderRadius: "12px", minWidth: "200px", backdropFilter: "blur(10px)" }}
                    >
                      <i className="bx bxl-android fs-4 me-2 text-success"></i>
                      Versión Android
                    </Link>
                  </div>

                  <div className="mt-5 pt-2 d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 opacity-70">
                    <div className="d-flex align-items-center fs-sm">
                      <i className="bx bx-check-circle text-success me-2 fs-5"></i>
                      <span>Prueba Gratis (15 días)</span>
                    </div>
                    <div className="d-flex align-items-center fs-sm">
                      <i className="bx bx-check-circle text-success me-2 fs-5"></i>
                      <span>Listo para la DGII</span>
                    </div>
                    <div className="d-flex align-items-center fs-sm">
                      <i className="bx bx-check-circle text-success me-2 fs-5"></i>
                      <span>Soporte local en español</span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 d-flex justify-content-center animate__animated animate__fadeInRight">
                  <div className="position-relative">
                    {/* Glass Card Backdrop (Increased size and blur) */}
                    <div className="position-absolute top-50 start-50 translate-middle bg-primary opacity-15 rounded-circle"
                      style={{
                        width: "120%",
                        height: "120%",
                        filter: "blur(130px)",
                        zIndex: -1
                      }}></div>

                    <img
                      src={heroImages[currentHeroImage]}
                      className="rounded-4 shadow-3xl transform-hover transition-all animate__animated animate__fadeIn"
                      key={currentHeroImage}
                      alt="ProVenta Dashboard"
                      style={{
                        maxHeight: "850px",
                        width: "100%",
                        objectFit: "contain",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)"
                      }}
                    />

                    {/* Floating Info Card ocultar por ahora, no se ve bien 
                    <div className=" position-absolute bottom-0 start-0 translate-middle-x mb-5 ms-md-n5 d-none d-md-block animate__animated animate__bounceIn">
                      <div className="bg-dark bg-opacity-80 border border-white border-opacity-10 rounded-4 p-3 shadow-lg" style={{ backdropFilter: "blur(15px)", minWidth: "220px" }}>
                        <div className="d-flex align-items-center mb-2">
                          <div className="bg-success bg-opacity-20 text-success rounded-circle p-1 me-2">
                            <i className="bx bx-trending-up"></i>
                          </div>
                          <span className="fs-xs fw-bold text-light">VENTAS DEL DÍA</span>
                        </div>
                        <div className="h4 text-white mb-0">RD$ 45,200.00</div>
                        <div className="fs-xs text-success mt-1">
                          <i className="bx bx-caret-up"></i> +12.5% vs ayer
                        </div>
                      </div>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* aunque lo tenemos mas abajo no quiero ponerlo tan arriba, algunas personas podrian pensar que solo funciona para estos rublos */}
          <section className="d-none container py-4 mb-2 mb-md-4 mb-lg-5">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-top border-bottom border-light border-opacity-10 py-4 py-md-5 gap-4">
              <div className="text-center text-md-start mb-2 mb-md-0">
                <h4 className="h5 mb-1 opacity-60">Ideal para:</h4>
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 opacity-40 grayscale-filter-hover transition-all">
                <div className="text-center" style={{ minWidth: "100px" }}>
                  <i className="bx bx-store fs-1 mb-2"></i>
                  <div className="fs-xs fw-bold">FERRETERÍAS</div>
                </div>
                <div className="text-center" style={{ minWidth: "100px" }}>
                  <i className="bx bx-plus-medical fs-1 mb-2"></i>
                  <div className="fs-xs fw-bold">FARMACIAS</div>
                </div>
                <div className="text-center" style={{ minWidth: "100px" }}>
                  <i className="bx bx-wine fs-1 mb-2"></i>
                  <div className="fs-xs fw-bold">COLMADOS</div>
                </div>
                <div className="text-center" style={{ minWidth: "100px" }}>
                  <i className="bx bx-cut fs-1 mb-2"></i>
                  <div className="fs-xs fw-bold">SALONES</div>
                </div>
                <div className="text-center" style={{ minWidth: "100px" }}>
                  <i className="bx bx-book fs-1 mb-2"></i>
                  <div className="fs-xs fw-bold">LIBRERÍAS</div>
                </div>
              </div>
            </div>
          </section>

          <AndroidBanner />

          <hr />
          <section className="container py-5 my-lg-4 my-xl-5">
            <h2
              className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2"
              style={{ maxWidth: "930px" }}
            >
              La forma más rápida y eficiente de facturar, controlar inventario
              y vender en línea
            </h2>

            <div>
              <p className="pb-2 mb-4 mb-lg-5 text-center">
                Con ProVenta puedes gestionar todas las ventas de tu negocio
                desde un solo lugar. Nuestro software de facturación y punto de
                venta en la nube está diseñado para negocios en República
                Dominicana que buscan rapidez, control de inventario,
                integración con tienda en línea y una interfaz intuitiva para
                cajeros. Ideal para supermercados, colmados, salones, librerías
                y mucho más.
              </p>
            </div>

            <div className="position-relative px-4 px-sm-5 mb-3 mb-md-4">
              <img
                src="assets/img/pantalla_facturacion_claro.png"
                width="1079"
                className="d-block mx-auto"
                style={{
                  borderRadius: "1.5rem",
                  boxShadow: "0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)",
                }}
                alt="consulta cliente en la DGII con su rnc, un software fácil de usar."
              />
              <div
                className="position-absolute w-100"
                style={{ left: "0", bottom: "13%", paddingRight: "74.33%" }}
              >
                <img
                  src="assets/img/factura-vista-previa.png"
                  width="308"
                  className="rellax d-block"
                  style={{
                    borderRadius: ".75rem",
                    boxShadow:
                      "0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)",
                  }}
                  alt="vista previa de factura y generación de pdf."
                  data-rellax-percentage="0.5"
                  data-rellax-speed="1"
                  data-disable-parallax-down="lg"
                />
              </div>
              <div
                className="position-absolute w-100"
                style={{ left: "0", bottom: "12%", paddingRight: "74.16%" }}
              >
                <img
                  src="assets/img/factura-vista-previa.png"
                  width="310"
                  className="rellax d-block"
                  style={{
                    borderRadius: ".75rem",
                    boxShadow:
                      "0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)",
                  }}
                  alt="envia facturas por email y whatsapp a tu clientes"
                  data-rellax-percentage="0.5"
                  data-rellax-speed="1"
                  data-disable-parallax-down="lg"
                />
              </div>
              <div
                className="position-absolute w-100"
                style={{
                  right: "0",
                  bottom: "9.4%",
                  paddingLeft: "64.83%",
                  paddingRight: "5.5%",
                }}
              ></div>
            </div>
          </section>

          {/* Featured functionality shortcuts */}
          <section
            className="position-relative overflow-hidden py-5"
            aria-labelledby="featured-functions-title"
            style={{
              background: "linear-gradient(180deg, #0b0f19 0%, #111827 52%, #0b0f19 100%)",
              borderTop: "1px solid rgba(255,255,255,.06)",
              borderBottom: "1px solid rgba(255,255,255,.06)",
            }}
          >
            <div
              className="position-absolute rounded-circle"
              style={{ width: 420, height: 420, top: -220, left: -130, background: "rgba(37,99,235,.16)", filter: "blur(90px)" }}
            ></div>
            <div
              className="position-absolute rounded-circle"
              style={{ width: 380, height: 380, right: -140, bottom: -210, background: "rgba(16,185,129,.13)", filter: "blur(90px)" }}
            ></div>

            <div className="container position-relative py-lg-4" style={{ zIndex: 2 }}>
              <div className="row align-items-end mb-5 gy-3">
                <div className="col-lg-8">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{ color: "#93c5fd", background: "rgba(59,130,246,.12)", border: "1px solid rgba(96,165,250,.22)" }}
                  >
                    MUCHO MÁS QUE FACTURACIÓN
                  </span>
                  <h2 id="featured-functions-title" className="display-5 fw-bold text-white mb-3">
                    Cinco formas de llevar tu negocio al siguiente nivel
                  </h2>
                  <p className="fs-lg text-light opacity-60 mb-0" style={{ maxWidth: 720 }}>
                    Descubre las herramientas que hacen de ProVenta un sistema completo: conecta vendedores,
                    pedidos, compras, inventario, facturación y operaciones especializadas.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <span className="text-light opacity-50 small">
                    Selecciona una función para conocerla <i className="bx bx-right-arrow-alt ms-1"></i>
                  </span>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <article className="proventa-feature-card proventa-auto-card h-100 rounded-4 overflow-hidden position-relative" role="link" tabIndex="0" aria-label="Conocer ProVenta Auto" onClick={(event) => { if (!event.target.closest("a")) navigate("/proventa-auto/"); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); navigate("/proventa-auto/"); } }}>
                    <div className="proventa-feature-glow"></div>
                    <div className="position-relative h-100 p-4 p-xl-5 d-flex flex-column" style={{ zIndex: 2 }}>
                      <div className="d-flex justify-content-between align-items-start mb-5">
                        <div className="proventa-feature-icon"><i className="bx bx-car"></i></div>
                        <span className="badge rounded-pill px-3 py-2 text-dark" style={{ background: "#fbbf24" }}>
                          NUEVO
                        </span>
                      </div>
                      <div className="mt-auto">
                        <small className="d-block text-uppercase fw-bold mb-2" style={{ color: "#fcd34d", letterSpacing: ".12em" }}>Gestión especializada para talleres</small>
                        <h3 className="display-6 text-white fw-bold mb-3">ProVenta Auto</h3>
                        <p className="text-light opacity-70 mb-4" style={{ maxWidth: 520 }}>
                          Una nueva experiencia creada para talleres y negocios automotrices. Mantén tus servicios,
                          vehículos, clientes y operación conectados en un solo lugar.
                        </p>
                        <Link to="/proventa-auto/" className="proventa-feature-link">
                          Conocer ProVenta Auto <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-md-6">
                  <article className="proventa-feature-card purchase-card h-100 rounded-4 overflow-hidden position-relative" role="link" tabIndex="0" aria-label="Explorar Órdenes de Compra" onClick={(event) => { if (!event.target.closest("a")) navigate("/funcionalidades/ordenes-de-compra/"); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); navigate("/funcionalidades/ordenes-de-compra/"); } }}>
                    <div className="proventa-feature-glow"></div>
                    <div className="position-relative h-100 p-4 p-xl-5 d-flex flex-column" style={{ zIndex: 2 }}>
                      <div className="d-flex justify-content-between align-items-start mb-5">
                        <div className="proventa-feature-icon"><i className="bx bx-cart-alt"></i></div>
                        <span className="badge rounded-pill px-3 py-2" style={{ color: "#6ee7b7", background: "rgba(16,185,129,.13)", border: "1px solid rgba(52,211,153,.25)" }}>
                          NUEVO
                        </span>
                      </div>
                      <div className="mt-auto">
                        <small className="d-block text-uppercase fw-bold mb-2" style={{ color: "#6ee7b7", letterSpacing: ".12em" }}>Compra con control</small>
                        <h3 className="display-6 text-white fw-bold mb-3">Órdenes de Compra</h3>
                        <p className="text-light opacity-70 mb-4" style={{ maxWidth: 520 }}>
                          Crea órdenes en peso, dólar o yuan, genera PDF, recibe mercancía por partes y conecta
                          inventario, costos, cuentas por pagar y abonos.
                        </p>
                        <Link to="/funcionalidades/ordenes-de-compra/" className="proventa-feature-link">
                          Explorar Órdenes de Compra <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-md-6">
                  <article className="proventa-feature-card shortcuts-card h-100 rounded-4 overflow-hidden position-relative" role="link" tabIndex="0" aria-label="Descubrir Teclas Rápidas" onClick={(event) => { if (!event.target.closest("a")) navigate("/funcionalidades/teclas-rapidas/"); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); navigate("/funcionalidades/teclas-rapidas/"); } }}>
                    <div className="proventa-feature-glow"></div>
                    <div className="position-relative h-100 p-4 p-xl-5 d-flex flex-column" style={{ zIndex: 2 }}>
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div className="proventa-feature-icon"><i className="bx bx-grid-alt"></i></div>
                        <span className="proventa-card-number">03</span>
                      </div>
                      <div className="mt-auto">
                        <small className="d-block text-uppercase fw-bold mb-2" style={{ color: "#c4b5fd", letterSpacing: ".12em" }}>Cada segundo cuenta</small>
                        <h3 className="h1 text-white fw-bold mb-3">Teclas Rápidas</h3>
                        <p className="text-light opacity-70 mb-4">
                          Convierte tus productos frecuentes en botones visuales y factura con un toque. Ideal para
                          colmados, cafeterías y negocios de alta rotación.
                        </p>
                        <Link to="/funcionalidades/teclas-rapidas/" className="proventa-feature-link">
                          Descubrir Teclas Rápidas <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-md-6">
                  <article className="proventa-feature-card pos-card h-100 rounded-4 overflow-hidden position-relative" role="link" tabIndex="0" aria-label="Conocer el Punto de Venta POS" onClick={(event) => { if (!event.target.closest("a")) document.getElementById("pos-inteligente")?.scrollIntoView({ behavior: "smooth" }); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); document.getElementById("pos-inteligente")?.scrollIntoView({ behavior: "smooth" }); } }}>
                    <div className="proventa-feature-glow"></div>
                    <div className="position-relative h-100 p-4 p-xl-5 d-flex flex-column" style={{ zIndex: 2 }}>
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div className="proventa-feature-icon"><i className="bx bx-store-alt"></i></div>
                        <span className="proventa-card-number">04</span>
                      </div>
                      <div className="mt-auto">
                        <small className="d-block text-uppercase fw-bold mb-2" style={{ color: "#7dd3fc", letterSpacing: ".12em" }}>Vende sin detenerte</small>
                        <h3 className="h1 text-white fw-bold mb-3">Punto de Venta POS</h3>
                        <p className="text-light opacity-70 mb-4">
                          Facturación ágil, códigos de barras, inventario en tiempo real y una operación pensada para
                          atender más clientes con velocidad y precisión.
                        </p>
                        <a href="#pos-inteligente" className="proventa-feature-link">
                          Conocer el POS <i className="bx bx-down-arrow-alt"></i>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-12">
                  <article className="proventa-feature-card sales-force-card h-100 rounded-4 overflow-hidden position-relative" role="link" tabIndex="0" aria-label="Conocer Fuerza de Ventas con ProVenta" onClick={(event) => { if (!event.target.closest("a")) navigate("/fuerza-de-venta/"); }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); navigate("/fuerza-de-venta/"); } }}>
                    <div className="proventa-feature-glow"></div>
                    <div className="row g-0 align-items-center position-relative h-100" style={{ zIndex: 2 }}>
                      <div className="col-lg-6 p-4 p-xl-5">
                        <div className="d-flex justify-content-between align-items-start mb-5">
                          <div className="proventa-feature-icon"><i className="bx bx-group"></i></div>
                          <span className="badge rounded-pill px-3 py-2" style={{ color: "#bfdbfe", background: "rgba(59,130,246,.15)", border: "1px solid rgba(96,165,250,.28)" }}>
                            INCLUIDA CON PROVENTA
                          </span>
                        </div>
                        <small className="d-block text-uppercase fw-bold mb-2" style={{ color: "#93c5fd", letterSpacing: ".12em" }}>Tu equipo vende. ProVenta conecta todo lo demás.</small>
                        <h3 className="display-6 text-white fw-bold mb-3">Fuerza de Ventas</h3>
                        <p className="text-light opacity-70 mb-4" style={{ maxWidth: 560 }}>
                          Tus vendedores toman pedidos desde el celular; la oficina los recibe para procesar y facturar.
                          Controla comisiones, metas y resultados sin volver a digitar la venta.
                        </p>
                        <Link to="/fuerza-de-venta/" className="proventa-feature-link">
                          Conocer Fuerza de Ventas <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                      <div className="col-lg-6 align-self-stretch d-flex align-items-end justify-content-end">
                        <div className="sales-force-preview">
                          <div className="sales-force-preview-bar"><i></i><i></i><i></i><span>Dashboard de Fuerza de Ventas</span></div>
                          <img src="/assets/img/fuerza-venta/dashboard-fuerza-venta.png" alt="Dashboard de Fuerza de Ventas de ProVenta con metas, comisiones y pedidos" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <style>{`
              .proventa-feature-card {
                min-height: 390px;
                background: rgba(255,255,255,.035);
                border: 1px solid rgba(255,255,255,.09);
                box-shadow: 0 24px 70px rgba(0,0,0,.22);
                transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
                cursor: pointer;
              }
              .proventa-feature-card:focus-visible { outline: 3px solid #fbbf24; outline-offset: 4px; }
              .proventa-feature-card:hover {
                transform: translateY(-8px);
                border-color: rgba(255,255,255,.2);
                box-shadow: 0 32px 90px rgba(0,0,0,.36);
              }
              .proventa-feature-glow {
                position: absolute;
                width: 270px;
                height: 270px;
                top: -145px;
                right: -105px;
                border-radius: 50%;
                filter: blur(45px);
                opacity: .48;
                transition: opacity .3s ease, transform .3s ease;
              }
              .proventa-feature-card:hover .proventa-feature-glow { opacity: .75; transform: scale(1.15); }
              .proventa-auto-card { background: linear-gradient(145deg,rgba(120,53,15,.32),rgba(255,255,255,.025) 60%); }
              .proventa-auto-card .proventa-feature-glow { background: #f59e0b; }
              .purchase-card { background: linear-gradient(145deg,rgba(6,78,59,.38),rgba(255,255,255,.025) 60%); }
              .purchase-card .proventa-feature-glow { background: #10b981; }
              .shortcuts-card { background: linear-gradient(145deg,rgba(76,29,149,.31),rgba(255,255,255,.025) 60%); }
              .shortcuts-card .proventa-feature-glow { background: #8b5cf6; }
              .pos-card { background: linear-gradient(145deg,rgba(7,89,133,.34),rgba(255,255,255,.025) 60%); }
              .pos-card .proventa-feature-glow { background: #0ea5e9; }
              .sales-force-card { min-height: 430px; background: linear-gradient(125deg,rgba(30,64,175,.46),rgba(12,30,61,.72) 58%,rgba(255,255,255,.025)); }
              .sales-force-card .proventa-feature-glow { width: 420px; height: 420px; top: -180px; right: 24%; background: #2563eb; }
              .sales-force-preview { width: 96%; margin: 4rem -2.5rem -2.5rem 0; padding: 7px; border: 1px solid rgba(255,255,255,.15); border-radius: 18px 18px 0 0; background: rgba(255,255,255,.08); box-shadow: 0 28px 70px rgba(0,0,0,.38); transform: rotate(-1deg); transition: transform .35s ease; }
              .sales-force-card:hover .sales-force-preview { transform: translateY(-8px) rotate(0); }
              .sales-force-preview-bar { display: flex; align-items: center; gap: 6px; height: 29px; padding: 0 9px; border-radius: 10px 10px 0 0; background: #f8fafc; }
              .sales-force-preview-bar i { width: 7px; height: 7px; border-radius: 50%; background: #fb7185; }
              .sales-force-preview-bar i:nth-child(2) { background: #fbbf24; }
              .sales-force-preview-bar i:nth-child(3) { background: #34d399; }
              .sales-force-preview-bar span { margin: auto; color: #94a3b8; font-size: .62rem; font-weight: 700; }
              .sales-force-preview img { display: block; width: 100%; }
              .proventa-feature-icon {
                width: 64px;
                height: 64px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 18px;
                color: #fff;
                font-size: 2rem;
                background: rgba(255,255,255,.1);
                border: 1px solid rgba(255,255,255,.13);
                backdrop-filter: blur(10px);
              }
              .proventa-card-number { color: rgba(255,255,255,.15); font-size: 2.5rem; font-weight: 800; line-height: 1; }
              .proventa-feature-link {
                display: inline-flex;
                align-items: center;
                gap: .5rem;
                color: #fff;
                font-weight: 700;
                text-decoration: none;
              }
              .proventa-feature-link i { font-size: 1.45rem; transition: transform .25s ease; }
              .proventa-feature-link:hover { color: #fff; }
              .proventa-feature-link:hover i { transform: translateX(6px); }
              @media (max-width: 767.98px) {
                .proventa-feature-card { min-height: 350px; }
                .sales-force-card { min-height: auto; }
                .sales-force-preview { width: calc(100% - 1.5rem); margin: 0 0 -1rem 1.5rem; }
              }
            `}</style>
          </section>

          <LandingRedesign />
          <LandingConversion onDownload={async (e) => download(e)} />

          <section className="d-none container pb-5 pt-5 mb-md-0 mb-lg-0 mb-xl-0">
            <div className="row align-items-center pt-2 pb-3">
              <div className="col-md-6 col-xl-5 text-center text-md-start mb-5 mb-md-0">
                <h2 className="h1 pb-2 pb-lg-3">POS Inteligente</h2>
                <p className="pb-2 mb-4 mb-lg-5">
                  Transforma tu punto de venta con tecnología avanzada, diseñada
                  para procesar transacciones sin esfuerzo. Ideal para el uso
                  con código de barras en supermercados, ferreterías, farmacias
                  y colmados. Maximiza la velocidad y precisión en cada venta,
                  reduciendo tiempos de espera para tus clientes.
                </p>
                <hr />
                <div className="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5">
                  <div className="mx-3 mx-md-0">
                    <div className="display-3 text-dark mb-1">100%</div>
                    <span>
                      En la nube. Conéctate desde cualquier lugar, seguro y ágil
                    </span>
                  </div>
                  <div className="mx-3 mx-md-0 ms-3">
                    <div className="display-3 text-dark mb-1">Temas</div>
                    <span>
                      Soporte para múltiples temas. Trabaja como te sientas
                      cómodo
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 offset-xl-1">
                <div
                  className="parallax ratio ratio-1x1 mx-auto"
                  style={{ maxWidth: "550px" }}
                >
                  <div
                    className="parallax-layer position-absolute zindex-2"
                    data-depth="-0.15"
                  >
                    <img
                      src="assets/img/landing/saas-3/feature-2/avatars.png"
                      alt="Avatar"
                    />
                  </div>
                  <div
                    className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                    data-depth="0.1"
                  >
                    <div
                      className="rounded-circle bg-primary"
                      style={{ width: "70%", height: "70%", opacity: ".06" }}
                    ></div>
                  </div>
                  <div
                    className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                    data-depth="0.2"
                  >
                    <div
                      className="rounded-circle bg-primary"
                      style={{ width: "55%", height: "55%", opacity: ".06" }}
                    ></div>
                  </div>
                  <div
                    className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-3"
                    data-depth="0.4"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center rounded-circle bg-primary"
                      style={{
                        width: "93px",
                        height: "93px",
                        boxShadow:
                          "0 .1875rem 1.875rem -.125rem rgba(99,102,241, .95)",
                      }}
                    >
                      <span className="h5 text-light mb-0">
                        <i className="bi bi-shop"></i> +
                      </span>
                    </div>
                  </div>
                  <div
                    className="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                    data-depth="0.3"
                  >
                    <div
                      className="rounded-circle bg-primary"
                      style={{ width: "40%", height: "40%", opacity: ".06" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="d-none container pt-0 pt-sm-0 pb-5 mb-md-2 mb-lg-4 mb-xl-5">
            <div className="row align-items-center mb-2 pb-sm-3 pb-md-4">
              <div className="col-md-5 col-lg-6 col-xl-5 offset-xl-1 order-md-2 text-center text-md-start mb-5 mb-md-0">
                <h2 className="h1 pb-2 pb-lg-3">Simplifica tu Facturación</h2>
                <p>
                  Optimiza y acelera tus ventas con ProVenta, un avanzado
                  sistema diseñado específicamente para negocios que requieren
                  un control preciso y detallado de sus operaciones. Desde la
                  facturación de productos y servicios hasta la gestión de
                  comisiones de empleados, ProVenta te permite manejar cada
                  aspecto de tu negocio con total facilidad. Genera facturas
                  personalizadas basadas en cotizaciones en cuestión de
                  segundos, asegurando un flujo de trabajo rápido y eficiente.
                </p>
                <p>
                  Este sistema es ideal para una amplia gama de negocios como
                  salones de belleza, spas, librerías, y más. Además, su
                  interfaz intuitiva y amigable permite una operación sin
                  complicaciones, incluso desde dispositivos táctiles,
                  reduciendo la necesidad del uso del teclado. Con ProVenta,
                  llevar el control de tu negocio nunca ha sido tan fácil ni tan
                  eficiente.
                </p>
                <hr />
                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-md-between pt-3">
                  <img
                    src="assets/img/ferreteria_pos_high.png"
                    width="120"
                    className="d-block m-2 mx-md-0"
                    alt="facturación ferreterías"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <img
                    src="assets/img/salon_pos_high.png"
                    width="120"
                    className="d-block m-2 mx-md-0"
                    alt="facturación para salones de belleza con comision a empleados"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <img
                    src="assets/img/spa.jpg"
                    width="120"
                    className="d-block m-2 mx-md-0"
                    alt="BlockFi"
                    style={{ height: "250px" }}
                  />
                  <img
                    src="assets/img/autopartes_pos_high.png"
                    width="120"
                    className="d-block m-2 mx-md-0"
                    alt="facturacion para repuestos de vehículos y autopartes"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="col-md-7 col-lg-6 order-md-1">
                <div
                  className="position-relative"
                  style={{ maxWidth: "636px" }}
                >
                  <img
                    src="assets/img/temas-claro-oscuro.png"
                    className="d-block rounded-3 mt-md-0"
                    alt="trabaja como te sientas mas cómodo, elije entre temas claro o oscuro"
                    style={{
                      boxShadow:
                        "0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="d-none dark-mode bg-dark pt-5 pb-5 mb-md-2 mb-lg-4 mb-xl-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-7 text-center">
                <h2 className="display-4 mb-3">Todo lo que necesitas en un <span className="text-primary">solo lugar</span></h2>
                <p className="fs-lg text-muted">Gestión integral diseñada para simplificar el caos operativo de tu negocio.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                      <i className="bx bx-package fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Gestión de Inventario</h3>
                    <p className="fs-sm text-muted mb-0">Alertas de stock bajo, historial de movimientos y control preciso por sucursal.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-info bg-opacity-10 text-info rounded-3 p-3 mb-4">
                      <i className="bx bx-user-voice fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Manejo de Clientes</h3>
                    <p className="fs-sm text-muted mb-0">Perfiles de clientes, historial de compras y envío de facturas por WhatsApp.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-success bg-opacity-10 text-success rounded-3 p-3 mb-4">
                      <i className="bx bx-cart-alt fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Pedidos Online</h3>
                    <p className="fs-sm text-muted mb-0">Recibe pedidos de tus clientes directamente en tu sistema de POS.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-warning bg-opacity-10 text-warning rounded-3 p-3 mb-4">
                      <i className="bx bx-file fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Cotizaciones</h3>
                    <p className="fs-sm text-muted mb-0">Convierte cotizaciones en facturas reales con un solo clic.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-danger bg-opacity-10 text-danger rounded-3 p-3 mb-4">
                      <i className="bx bx-id-card fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Nómina y Comisiones</h3>
                    <p className="fs-sm text-muted mb-0">Control de pagos a empleados y comisiones por ventas automáticas.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-dark bg-opacity-10 text-dark rounded-3 p-3 mb-4">
                      <i className="bx bx-group fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Multi-Usuarios</h3>
                    <p className="fs-sm text-muted mb-0">Roles personalizados para cajeros, administradores y contables.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-primary bg-opacity-10 text-primary rounded-3 p-3 mb-4">
                      <i className="bx bx-image-alt fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Productos con Fotos</h3>
                    <p className="fs-sm text-muted mb-0">Identifica tus productos rápidamente con hasta 6 fotos por artículo.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm card-hover bg-transparent">
                  <div className="card-body">
                    <div className="d-inline-block bg-success bg-opacity-10 text-success rounded-3 p-3 mb-4">
                      <i className="bx bx-support fs-2"></i>
                    </div>
                    <h3 className="h5 mb-2">Soporte Vitalicio</h3>
                    <p className="fs-sm text-muted mb-0">Estamos contigo en cada paso con soporte local en español.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Pricing (Premium Dark Mode) */}
          <section className="dark-mode bg-dark py-5 mt-5" id="planes" style={{ background: "linear-gradient(180deg, #0b0f19 0%, #05070a 100%)", display: 'none' }} >
            <div className="container mt-lg-5 my-md-4 my-3 py-xl-3">
              <div className="text-center mb-5 animate__animated animate__fadeIn">
                <h2 className="display-4 text-white mb-3">Planes que <span className="text-primary">Crecen Contigo</span></h2>
                <p className="fs-xl text-light opacity-70">Precios transparentes, sin sorpresas. Comienza tu transformación digital hoy.</p>
              </div>

              <div className="row g-4 justify-content-center">
                {/* Personal */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-white border-opacity-10 bg-secondary p-4 rounded-4 shadow-lg animate__animated animate__fadeInLeft" style={{ backdropFilter: "blur(10px)" }}>
                    <div className="card-body">
                      <h3 className="h4 text-white mb-2">Personal</h3>
                      <p className="fs-sm text-light opacity-60 mb-4">Ideal para emprendedores y negocios que están dando sus primeros pasos.</p>
                      <div className="display-5 text-white mb-1">RD$1,000</div>
                      <div className="fs-sm text-light opacity-50 mb-4">por mes</div>
                      <ul className="list-unstyled fs-sm text-light opacity-80 mb-5">
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> 1 Usuarios incluidos</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> 5 Empleados</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> Facturas Ilimitadas</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> Versión Android Incluida</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <a href={"/"} onClick={async (e) => download(e)} className="btn btn-outline-light w-100 py-3 rounded-pill border-opacity-25">Probar Gratis</a>
                    </div>
                  </div>
                </div>

                {/* Emprendedor - Most Popular */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-primary bg-primary p-4 rounded-4 position-relative overflow-hidden animate__animated animate__pulse animate__infinite animate__slower" style={{ animationDuration: "3s" }}>
                    <div className="position-absolute top-0 end-0 bg-warning text-dark px-4 py-1 fs-xs fw-bold" style={{ transform: "rotate(45deg) translate(25px, -10px)", width: "160px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>MÁS VENDIDO</div>
                    <div className="card-body text-white">
                      <h3 className="h4 text-white mb-2">Emprendedor</h3>
                      <p className="fs-sm opacity-80 mb-4">La solución perfecta para pequeños comercios y PYMEs en crecimiento.</p>
                      <div className="display-5 text-white mb-1">RD$1,800</div>
                      <div className="fs-sm opacity-70 mb-4">por mes</div>
                      <ul className="list-unstyled fs-sm mb-5">
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-warning me-2 fs-5"></i> 3 Usuarios incluidos</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-warning me-2 fs-5"></i> 10 Empleados</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-warning me-2 fs-5"></i> Reportes de Ventas Avanzados</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-warning me-2 fs-5"></i> Pedidos Online Integrados</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <a href={"/"} onClick={async (e) => download(e)} className="btn btn-light w-100 py-3 rounded-pill shadow-sm fw-bold">Descargar Ahora</a>
                    </div>
                  </div>
                </div>

                {/* Profesional */}
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-white border-opacity-10 bg-secondary p-4 rounded-4 shadow-lg animate__animated animate__fadeInRight" style={{ backdropFilter: "blur(10px)" }}>
                    <div className="card-body">
                      <h3 className="h4 text-white mb-2">Profesional</h3>
                      <p className="fs-sm text-light opacity-60 mb-4">Para empresas con alto volumen y múltiples puntos de venta.</p>
                      <div className="display-5 text-white mb-1">RD$2,300</div>
                      <div className="fs-sm text-light opacity-50 mb-4">por mes</div>
                      <ul className="list-unstyled fs-sm text-light opacity-80 mb-5">
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> 5 Ilimitados</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> Empleados Ilimitados</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> Soporte local en español</li>
                        <li className="d-flex align-items-center mb-3"><i className="bx bx-check-circle text-primary me-2 fs-5"></i> Multisuclursales</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <a href={"/"} onClick={async (e) => download(e)} className="btn btn-outline-light w-100 py-3 rounded-pill border-opacity-25">Hablar con Ventas</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Business Types (Clean Light Mode) */}
          <section className="d-none bg-white py-5 my-md-2 my-lg-4 my-xl-5 overflow-hidden">
            <div className="container py-2 py-md-4">
              <div className="row justify-content-center pt-1 pb-1 mb-5">
                <div className="col-lg-8 col-md-9 text-center">
                  <div className="badge bg-secondary text-dark mb-3 px-3 py-2 rounded-pill fw-bold">CASOS DE USO</div>
                  <h2 className="display-4 text-dark mb-4">Una solución <span className="text-primary">a tu medida</span></h2>
                  <p className="fs-lg text-muted mb-0">
                    No importa el sector de tu negocio. ProVenta está diseñado para adaptarse y potenciar cada una de tus operaciones diarias con herramientas específicas.
                  </p>
                </div>
              </div>

              <div className="row g-4 g-xl-5 justify-content-center">
                <div className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm h-100 card-hover transition-all">
                    <img src="assets/img/ferreteria_pos_high.png" className="card-img-top" alt="Ferreterías" style={{ height: "250px", objectFit: "cover" }} />
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">Ferreterías</h3>
                      <p className="fs-sm text-muted mb-0">Modalidad de "caja única": los vendedores despachan y el cajero factura. Control total de inventario por libras, metros o unidades.</p>
                      <div className="mt-4 pt-2 border-top border-light">
                        <span className="text-primary fw-bold fs-xs text-uppercase">Ver más detalles <i className="bx bx-right-arrow-alt align-middle ms-1"></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm h-100 card-hover transition-all">
                    <img src="assets/img/autopartes_pos_high.png" className="card-img-top" alt="Auto partes" style={{ height: "250px", objectFit: "cover" }} />
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">Auto partes</h3>
                      <p className="fs-sm text-muted mb-0">Gestión de repuestos y accesorios con búsqueda inteligente. Convierte cotizaciones de clientes en facturas en segundos.</p>
                      <div className="mt-4 pt-2 border-top border-light">
                        <span className="text-primary fw-bold fs-xs text-uppercase">Optimizar ventas <i className="bx bx-right-arrow-alt align-middle ms-1"></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm h-100 card-hover transition-all">
                    <img src="assets/img/supermercados_pos_high.png" className="card-img-top" alt="Supermercados" style={{ height: "250px", objectFit: "cover" }} />
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">Supermercados</h3>
                      <p className="fs-sm text-muted mb-0">Facturación ultra-rápida con atajos de teclado y códigos de barras. Cierres de caja precisos por cajero y turno.</p>
                      <div className="mt-4 pt-2 border-top border-light">
                        <span className="text-primary fw-bold fs-xs text-uppercase">Configurar POS <i className="bx bx-right-arrow-alt align-middle ms-1"></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm h-100 card-hover transition-all">
                    <img src="assets/img/salon_pos_high.png" className="card-img-top" alt="Salones de belleza" style={{ height: "250px", objectFit: "cover" }} />
                    <div className="card-body p-4">
                      <h3 className="h5 mb-3">Salones y Spas</h3>
                      <p className="fs-sm text-muted mb-0">Cálculo automático de comisiones por servicio para cada empleado. Gestión de propinas y agenda de clientes integrada.</p>
                      <div className="mt-4 pt-2 border-top border-light">
                        <span className="text-primary fw-bold fs-xs text-uppercase">Probar sistema <i className="bx bx-right-arrow-alt align-middle ms-1"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d-none position-relative dark-mode bg-dark py-5 my-md-2 my-lg-4 my-xl-0 overflow-hidden">
            <div className="container position-relative zindex-2">
              <div className="row justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
                <div className="col-lg-8 col-md-10 text-center my-3">
                  <h2 className="display-5 mb-4">
                    Tu negocio en tu bolsillo 📱
                  </h2>
                  <p
                    className="fs-lg text-light opacity-70 mb-5 mx-auto"
                    style={{ maxWidth: "600px" }}
                  >
                    Gestiona facturas, revisa tus KPIs y controla tu inventario
                    desde cualquier lugar con nuestra nueva versión para
                    Android.
                  </p>

                  <div
                    className="position-relative mt-5 mb-5 d-flex justify-content-center align-items-center"
                    style={{ minHeight: "500px" }}
                  >
                    {/* Círculo de brillo de fondo corregido */}
                    <div
                      className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary opacity-20"
                      style={{
                        width: "400px",
                        height: "400px",
                        filter: "blur(100px)",
                        zIndex: 0,
                      }}
                    ></div>

                    {/* Imagen Izquierda (Facturación) */}
                    <img
                      src="/assets/img/android/pantalla_generar_nueva_factura_android.jpeg"
                      alt="Facturación Android"
                      className="img-fluid rounded-4 shadow-lg border border-white border-opacity-10 d-none d-md-block position-absolute"
                      style={{
                        maxHeight: "400px",
                        transform: "rotate(-15deg) translateX(-140%)",
                        zIndex: 1,
                      }}
                    />

                    {/* Imagen Central (KPIs - Principal) */}
                    <img
                      src="/assets/img/android/dashboard_android_kpis.jpeg"
                      alt="Dashboard ProVenta Android"
                      className="img-fluid rounded-4 shadow-lg border border-primary border-opacity-25 position-relative"
                      style={{
                        maxHeight: "500px",
                        zIndex: 3,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                      }}
                    />

                    {/* Imagen Derecha (Detalle Factura) */}
                    <img
                      src="/assets/img/android/factura_detalle_android.jpeg"
                      alt="Detalle Factura Android"
                      className="img-fluid rounded-4 shadow-lg border border-white border-opacity-10 d-none d-md-block position-absolute"
                      style={{
                        maxHeight: "400px",
                        transform: "rotate(15deg) translateX(140%)",
                        zIndex: 1,
                      }}
                    />
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/android"
                      className="btn btn-primary btn-lg rounded-pill shadow-primary px-5"
                    >
                      <i className="bx bxl-android fs-4 me-2"></i>
                      Descubrir versión Mobile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="d-none bg-secondary py-5">
            <div className="container my-2 py-md-2 py-lg-5">
              <div className="row">
                <div className="col-xl-4 col-md-5 text-center text-md-start pb-2 pb-md-0 mb-4 mb-md-0">
                  <h2 className="pb-3 mb-1 mb-lg-2">
                    ¿Tienes preguntas? <br className="d-none d-md-inline" />
                    Estas son las más comunes
                  </h2>
                  <p className="fs-lg pb-3 mb-2 mb-lg-3">
                    ¿Todavía tiene preguntas sin responder y necesita ponerse en
                    contacto?
                  </p>
                  <a
                    href="/"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-primary"
                  >
                    <i className="bx bxl-whatsapp fs-4 me-2"></i> (809) 787-4963
                  </a>
                </div>
                <div className="col-md-7 offset-xl-1">
                  <div className="accordion" id="faq">
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q1-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q1"
                          aria-expanded="false"
                          aria-controls="q1"
                        >
                          ¿Cómo sé qué plan es el adecuado para mí?
                        </button>
                      </h2>
                      <div
                        id="q1"
                        className="accordion-collapse collapse"
                        aria-labelledby="q1-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body pt-0">
                          <p>
                            Al elegir el plan adecuado para ti, es importante
                            considerar tus necesidades específicas y el tamaño
                            de tu negocio. ProVenta ofrece diferentes planes que
                            se adaptan a distintos niveles de operación. Aquí
                            hay algunos factores a tener en cuenta al decidir
                            qué plan es el adecuado para ti:
                            <div>
                              <ul>
                                <li className="mt-4">
                                  Tamaño del negocio: Evalúa el tamaño de tu
                                  negocio en términos de ventas, número de
                                  productos y clientes. Si tienes un negocio
                                  pequeño con volúmenes de facturación y niveles
                                  de inventario limitados, es posible que un
                                  plan básico sea suficiente. Para negocios más
                                  grandes con un alto volumen de transacciones y
                                  un inventario extenso, es posible que un plan
                                  más completo y escalable sea la mejor opción.
                                </li>
                                <li className="mt-4">
                                  Funcionalidades requeridas: Revisa las
                                  funcionalidades que necesitas para tu negocio.
                                  Cada plan de ProVenta ofrece diferentes
                                  características y capacidades. Considera si
                                  necesitas características adicionales como
                                  control de gastos, reportes detallados,
                                  integraciones con otros sistemas, entre otros.
                                  Evalúa qué funcionalidades son esenciales para
                                  tu negocio y busca un plan que las incluya.
                                </li>
                              </ul>
                            </div>
                          </p>
                          <p>
                            Para ayudarte a elegir el plan adecuado, ProVenta
                            proporciona descripciones detalladas de cada plan en
                            nuestro sitio web. Puedes comparar las
                            características y capacidades de cada plan y tomar
                            una decisión informada en función de tus necesidades
                            comerciales.
                          </p>
                          <p>
                            Recuerda que si tienes dificultades para elegir el
                            plan adecuado, nuestro equipo de atención al cliente
                            está disponible para responder tus preguntas y
                            brindarte asesoramiento personalizado. Estaremos
                            encantados de ayudarte a encontrar la mejor opción
                            para tu negocio.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q2-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q2"
                          aria-expanded="false"
                          aria-controls="q2"
                        >
                          ¿Existen compromisos a largo plazo o tarifas de
                          cancelación?
                        </button>
                      </h2>
                      <div
                        id="q2"
                        className="accordion-collapse collapse"
                        aria-labelledby="q2-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body pt-0">
                          <p>
                            No hay compromisos a largo plazo ni pagos por
                            cancelación
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q3-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q3"
                          aria-expanded="false"
                          aria-controls="q3"
                        >
                          ¿Cómo cancelo mi suscripción?
                        </button>
                      </h2>
                      <div
                        id="q3"
                        className="accordion-collapse collapse"
                        aria-labelledby="q3-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body pt-0">
                          <p>
                            Cancelar tu suscripción mensual en ProVenta es un
                            proceso sencillo. Sigue estos pasos:
                          </p>
                          <p className="mb-0">
                            <div>
                              <ol>
                                <li className="mt-1">
                                  Inicia sesión en tu cuenta de ProVenta
                                  utilizando tus credenciales de acceso.
                                </li>
                                <li className="mt-1">
                                  Una vez que hayas iniciado sesión, busca la
                                  sección de "Configuración" o "Cuenta" en el
                                  menú principal. Puede variar según la interfaz
                                  de usuario de ProVenta.
                                </li>
                                <li className="mt-1">
                                  Dentro de la sección de configuración o
                                  cuenta, busca la opción de "Suscripción" o
                                  "Facturación". Haz clic en esa opción para
                                  acceder a los detalles de tu suscripción
                                  actual.
                                </li>
                                <li className="mt-1">
                                  Dentro de los detalles de la suscripción,
                                  deberías encontrar la opción para cancelar la
                                  suscripción, "Cancelar suscripción" o algo
                                  similar. Haz clic en esa opción.
                                </li>
                              </ol>
                            </div>
                          </p>
                          <p>
                            Es importante tener en cuenta que al cancelar tu
                            suscripción mensual, perderás el acceso a las
                            funcionalidades y características de ProVenta una
                            vez finalizado el período de facturación actual.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q4-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q4"
                          aria-expanded="false"
                          aria-controls="q4"
                        >
                          ¿Qué tipo de entrenamiento o soporte recibo?
                        </button>
                      </h2>
                      <div
                        id="q4"
                        className="accordion-collapse collapse"
                        aria-labelledby="q4-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body pt-0">
                          <p>
                            Nuestro objetivo es brindarte el soporte necesario
                            para garantizar tu éxito. Si tienes necesidades
                            específicas de entrenamiento o requieres un nivel
                            más personalizado de soporte estaremos ahí para ti.
                          </p>
                          <p className="mb-0">
                            Recuerda que estamos comprometidos a ayudarte en
                            cada paso.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d-none position-relative dark-mode bg-dark py-5 my-md-2 my-lg-4 my-xl-0">
            <div className="row justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
              <div className="col-lg-8 col-md-9 text-center my-3">
                <h2 className="h1 mb-md-4 mb-3 pb-lg-3 pb-2 text-center">
                  Modelos de facturas y estados de cuenta profesionales
                </h2>
                <p className="fs-lg text-muted mb-0">
                  Facturas, cotizaciones, conduces y estados de cuenta listos
                  para imprimir, enviar por correo o compartir por WhatsApp.
                  Diseños modernos que se adaptan a cualquier tipo de negocio,
                  con soporte para imágenes en productos firma digital y sellos.
                </p>
              </div>
            </div>
            <InvoiceSlider />
          </section>
          <section className="d-none container py-5 my-md-2 my-lg-4 my-xl-5">
            <div className="row justify-content-center pt-1 pb-1 mb-2 mb-md-3 mb-lg-4">
              <div className="col-lg-8 col-md-9 text-center">
                <h2 className="h1 mb-4">
                  Visitamos tu negocio y te dejamos todo listo
                </h2>
                <p className="fs-lg text-muted mb-0">
                  Olvídate de complicaciones. Nos encargamos de configurar
                  ProVenta en tu negocio, para que puedas empezar a facturar sin
                  esfuerzo.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-lg-2 pb-xl-3">
              <div className="col">
                <div className="card card-hover border-0 bg-transparent h-100">
                  <div className="position-relative">
                    <a
                      href="https://proventa.do"
                      target="_blank"
                      className="text-decoration-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/assets/img/market/tienda-en-linea.jpg"
                        className="rounded-3 w-100"
                        alt="tu tienda en línea"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </a>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                      <div className="position-relative d-flex zindex-2"></div>
                    </div>
                  </div>
                  <div className="card-body text-center p-3">
                    <h3 className="fs-lg fw-semibold pt-1 mb-2">
                      <a
                        href="https://proventa.do"
                        target="_blank"
                        className="text-decoration-none"
                        rel="noreferrer"
                      >
                        Tienda en Linea
                      </a>
                    </h3>
                    <p className="fs-sm mb-0">
                      Instalamos y configuramos el sistema en tu negocio,
                      incluyendo la integración con tu{" "}
                      <a
                        href="https://proventa.do"
                        target="_blank"
                        className="text-decoration-none"
                        rel="noreferrer"
                      >
                        tienda en línea.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover border-0 bg-transparent h-100">
                  <div className="position-relative">
                    <img
                      src="/assets/img/market/cargamos-tu-inventario.jpg"
                      className="rounded-3 w-100"
                      alt="Cargamos tu inventario"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                      <div className="position-relative d-flex zindex-2"></div>
                    </div>
                  </div>
                  <div className="card-body text-center p-3">
                    <h3 className="fs-lg fw-semibold pt-1 mb-2">Inventario</h3>
                    <p className="fs-sm mb-0">
                      Cargamos tu inventario inicial de forma rápida y
                      eficiente. Puedes importar tus productos fácilmente desde
                      un archivo Excel o ingresarlos manualmente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover border-0 bg-transparent h-100">
                  <div className="position-relative">
                    <img
                      src="assets/img/market/entrenamos-a-tu-personal.jpg"
                      className="rounded-3 w-100"
                      alt="Entrenamos a tu personal"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                      <div className="position-relative d-flex zindex-2"></div>
                    </div>
                  </div>
                  <div className="card-body text-center p-3">
                    <h3 className="fs-lg fw-semibold pt-1 mb-2">
                      Capacitación
                    </h3>
                    <p className="fs-sm mb-0">
                      Brindamos una capacitación rápida y práctica para ti y tu
                      equipo, asegurándonos de que todos sepan cómo usar el
                      sistema de manera eficiente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover border-0 bg-transparent h-100">
                  <div className="position-relative">
                    <img
                      src="assets/img/market/asesoria-en-facturación-POS-y-comprobantes-fiscales.jpg"
                      className="rounded-3 w-100"
                      alt="asesoría"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                      <div className="position-relative d-flex zindex-2"></div>
                    </div>
                  </div>
                  <div className="card-body text-center p-3">
                    <h3 className="fs-lg fw-semibold pt-1 mb-2">Asesoría</h3>
                    <p className="fs-sm mb-0">
                      Te asesoramos en todo lo relacionado con facturación, uso
                      del POS y configuración de comprobantes fiscales (NCF) según las normativas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-secondary pt-lg-4 pt-xl-5 overflow-hidden">
            <div className="container pt-5">
              <div className="row pt-2 pt-sm-3 pt-md-4">
                <div className="col-md-6 col-xl-5 col-xxl-4 text-center text-md-start pb-4 pb-sm-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
                  <h2 className="h1 mb-5">
                    Pistolas de códigos de barras disponibles:
                  </h2>
                  <div className="d-flex d-md-block mt-n2 mt-sm-0">
                    <div className="row row-cols-1 row-cols-lg-2 align-items-lg-end me-1 me-md-0 pb-md-4 mb-md-3">
                      <div className="col">
                        <h3 className="fs-base fw-normal opacity-60 mb-2">
                          ProVenta.do
                        </h3>
                        <div className="text-nowrap text-warning pb-1 mb-2">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                        <h4 className="mb-1">Precio oferta</h4>
                        <p className="mb-0">Solo RD$ 1,499</p>
                      </div>
                      <div className="col d-xl-flex justify-content-end">
                        <a
                          className="btn btn-dark btn-lg w-xl-100 px-3 py-2 ms-xl-3 mt-3 mt-lg-0"
                          href="https://proventa.do/producto/pistola-codigo-barras-portatil-bidimensional-cable-usb/6262f2ec77802c03a4c25867"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-cart-check"></i>
                          &nbsp;&nbsp;Comprar ahora
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-7 col-xxl-8">
                  <a
                    href="https://proventa.do/producto/pistola-codigo-barras-portatil-bidimensional-cable-usb/6262f2ec77802c03a4c25867"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="assets/img/market/pistola-codigos-barras.png"
                      width="618"
                      className="rellax d-block mx-auto mb-10"
                      alt=""
                    />
                  </a>
                  <div
                    className="d-none d-xl-block"
                    style={{ marginBottom: "-450px" }}
                  ></div>
                  <div
                    className="d-none d-lg-block d-xl-none"
                    style={{ marginBottom: "-800px" }}
                  ></div>
                  <div
                    className="d-none d-sm-block d-lg-none"
                    style={{ marginBottom: "-400px" }}
                  ></div>
                  <div
                    className="d-sm-none"
                    style={{ marginBottom: "-240px" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </main >

        <Footer />
      </div >
      <WhatsAppButton />
    </HelmetProvider >
  );
}

export default Index;
