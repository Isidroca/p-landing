import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "18097874963";
const WHATSAPP_INSTALL_MSG = encodeURIComponent(
  "Hola, estoy instalando ProVenta y Windows no me permite continuar."
);
const WHATSAPP_INSTALL_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_INSTALL_MSG}`;

/* ─── Datos de los pasos ─────────────────────────────────────────────── */
const steps = [
  {
    num: 1,
    title: "Descarga ProVenta desde el sitio oficial",
    desc: (
      <>
        Haz clic en el botón <strong>Descargar ProVenta</strong> en esta misma
        página. Se descargará el archivo <code>ProVenta.setup.exe</code>{" "}
        directamente desde nuestros servidores oficiales.
      </>
    ),
    icon: "bx bx-cloud-download",
    iconColor: "#2563eb",
    img: null,
    imgAlt: null,
  },
  {
    num: 2,
    title: "Abre el instalador descargado",
    desc: (
      <>
        Busca el archivo en tu carpeta de <strong>Descargas</strong> y haz
        doble clic para ejecutarlo. También puedes hacer clic en él desde la
        barra de descargas de tu navegador.
      </>
    ),
    icon: "bx bx-file",
    iconColor: "#16a34a",
    img: null,
    imgAlt: null,
  },
  {
    num: 3,
    title: 'Windows muestra "Windows protegió su PC"',
    desc: (
      <>
        Es normal. Microsoft SmartScreen muestra esta pantalla azul porque
        ProVenta todavía no acumula suficientes descargas para ser reconocida
        automáticamente. Haz clic en{" "}
        <strong className="text-primary">Más información</strong> (More info).
      </>
    ),
    icon: null,
    iconColor: null,
    img: "/assets/windows_defender_alerta.png",
    imgAlt:
      'Pantalla azul de Windows SmartScreen que dice "Windows protegió su PC" con el enlace "Más información"',
    imgHighlight: "Haz clic aquí → «Más información»",
    badge: "SmartScreen · Pantalla 1 de 2",
  },
  {
    num: 4,
    title: "Haz clic en «Ejecutar de todas formas»",
    desc: (
      <>
        Después de pulsar "Más información" aparece el botón{" "}
        <strong className="text-success">Ejecutar de todas formas</strong> (Run
        anyway). Haz clic en él para iniciar la instalación de ProVenta.
      </>
    ),
    icon: null,
    iconColor: null,
    img: "/assets/windows_defender_alerta_aceptar.png",
    imgAlt:
      'Pantalla de SmartScreen mostrando los botones "Ejecutar de todas formas" y "No ejecutar"',
    imgHighlight: "Haz clic aquí → «Ejecutar de todas formas»",
    badge: "SmartScreen · Pantalla 2 de 2",
  },
  {
    num: 5,
    title: "Completa la instalación e inicia sesión",
    desc: (
      <>
        ProVenta se instala automáticamente en segundos. Al terminar, se abre
        solo y encontrarás un acceso directo en tu escritorio.{" "}
        <Link to="/registro/" className="fw-bold">
          Crea tu cuenta gratis
        </Link>{" "}
        o inicia sesión si ya tienes una.
      </>
    ),
    icon: "bx bx-rocket",
    iconColor: "#16a34a",
    img: null,
    imgAlt: null,
  },
];

/* ─── Componente principal ───────────────────────────────────────────── */
const Install = () => {
  const helmetContext = {};
  const [version, setVersion] = useState("");
  const [appUrl, setAppUrl] = useState("https://proventa.app/");

  useEffect(() => {
    fetch("https://core.proventa.do/api/version")
      .then((r) => r.json())
      .then((data) => {
        setAppUrl(data.url_down);
        const m = data.url_down.match(/ProVenta\.setup\.(\d+\.\d+\.\d+)\.exe/);
        if (m) setVersion(m[1]);
      })
      .catch(() => {});
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Cómo Instalar ProVenta en Windows | Guía Paso a Paso</title>
        <meta
          name="description"
          content="Guía visual de instalación de ProVenta para Windows. Aprende a manejar la advertencia de SmartScreen y empieza a facturar en menos de 2 minutos."
        />
        <meta name="author" content="Isidro Calderon Abreu" />
        <link
          rel="canonical"
          href="https://www.proventa.app/como-instalar-proventa/"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cómo Instalar ProVenta en Windows | Guía Paso a Paso"
        />
        <meta
          property="og:description"
          content="Guía visual de instalación de ProVenta para Windows. Aprende a manejar la advertencia de SmartScreen y empieza a facturar en menos de 2 minutos."
        />
        <meta
          property="og:url"
          content="https://www.proventa.app/como-instalar-proventa/"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo instalar ProVenta en Windows",
            description:
              "Guía paso a paso para instalar el software de facturación y POS ProVenta en Windows, incluyendo cómo pasar la advertencia de SmartScreen.",
            estimatedCost: { "@type": "MonetaryAmount", currency: "DOP", value: "0" },
            totalTime: "PT2M",
            step: steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
            })),
          })}
        </script>
      </Helmet>

      <div className="bg-white text-dark d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Header />

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="pt-5 pb-5"
          style={{
            marginTop: "80px",
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)",
          }}
        >
          <div className="container pt-3 pt-md-5">
            <div className="row align-items-center gy-5">
              {/* Left */}
              <div className="col-lg-6 text-center text-lg-start">
                {/* Breadcrumb / pill */}
                <span
                  className="badge rounded-pill px-3 py-2 mb-4 d-inline-block"
                  style={{
                    background: "rgba(99,179,255,.15)",
                    color: "#93c5fd",
                    border: "1px solid rgba(99,179,255,.25)",
                    fontSize: ".75rem",
                    letterSpacing: ".06em",
                  }}
                >
                  <i className="bx bx-time me-1" />
                  Instalación en 2 minutos · Solo para Windows
                </span>

                <h1 className="display-4 fw-bold text-white mb-4" style={{ lineHeight: 1.15 }}>
                  Instala ProVenta{" "}
                  <span style={{ color: "#60a5fa" }}>en pocos pasos</span>
                </h1>
                <p className="fs-5 text-light opacity-75 mb-5" style={{ maxWidth: 520 }}>
                  Software de facturación y POS para Windows. Sigue esta guía
                  visual y empieza a vender hoy mismo.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <a
                    href={appUrl}
                    className="btn btn-primary btn-lg px-4 py-3 shadow-lg"
                    style={{ borderRadius: 12 }}
                  >
                    <i className="bx bx-download me-2 fs-5" />
                    Descargar ProVenta
                  </a>
                  <a
                    href="#pasos"
                    className="btn btn-outline-light btn-lg px-4 py-3"
                    style={{ borderRadius: 12 }}
                  >
                    Ver pasos de instalación
                  </a>
                </div>

                {version && (
                  <p className="small text-light opacity-50 mt-3 mb-0">
                    Versión actual:{" "}
                    <span className="text-primary fw-bold">{version}</span>{" "}
                    para Windows
                  </p>
                )}

                {/* Mini trust signals */}
                <div className="d-flex flex-wrap gap-4 mt-5 justify-content-center justify-content-lg-start opacity-60">
                  {[
                    { icon: "bx bx-shield-check", text: "Descarga segura" },
                    { icon: "bx bx-time", text: "2 minutos" },
                    { icon: "bx bxl-windows", text: "Windows 10 / 11" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="d-flex align-items-center gap-2 text-light small">
                      <i className={`${icon} fs-5 text-primary`} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – requirements card */}
              <div className="col-lg-5 offset-lg-1">
                <div
                  className="rounded-4 p-4 p-lg-5"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.12)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <h2 className="h5 text-white fw-bold mb-4">
                    <i className="bx bx-desktop me-2 text-primary" />
                    Requisitos mínimos
                  </h2>
                  <ul className="list-unstyled mb-0 text-light opacity-80">
                    {[
                      ["bx bxl-windows", "Windows 10 o Windows 11 (64-bit)"],
                      ["bx bx-memory-card", "4 GB de RAM o más"],
                      ["bx bx-hdd", "500 MB de espacio libre"],
                      ["bx bx-wifi", "Conexión a internet"],
                      ["bx bx-user", "Cuenta de administrador (para instalar)"],
                    ].map(([icon, text]) => (
                      <li key={text} className="d-flex align-items-start gap-3 mb-3">
                        <i className={`${icon} fs-5 text-primary mt-1 flex-shrink-0`} />
                        <span style={{ fontSize: ".95rem" }}>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <hr style={{ borderColor: "rgba(255,255,255,.12)" }} />

                  {/* Video placeholder */}
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center gap-3 p-3"
                    style={{
                      background: "rgba(255,255,255,.07)",
                      border: "1px solid rgba(255,255,255,.1)",
                      cursor: "default",
                    }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(37,99,235,.35)",
                        border: "1px solid rgba(96,165,250,.3)",
                      }}
                    >
                      <i className="bx bx-play text-white fs-4" />
                    </div>
                    <div>
                      <div className="text-white small fw-bold">Video tutorial · 45 seg</div>
                      <div className="text-light opacity-50" style={{ fontSize: ".78rem" }}>
                        Disponible próximamente
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SmartScreen alert banner ────────────────────────────────── */}
        <div
          className="py-3 px-4"
          style={{ background: "#fffbeb", borderBottom: "1px solid #fcd34d" }}
        >
          <div className="container">
            <div className="d-flex align-items-start gap-3">
              <i
                className="bx bx-shield-quarter fs-3 flex-shrink-0"
                style={{ color: "#d97706", marginTop: 2 }}
              />
              <p className="mb-0 small" style={{ color: "#92400e", lineHeight: 1.6 }}>
                <strong>ProVenta es una aplicación segura para Windows.</strong> En algunos
                equipos, Microsoft Defender SmartScreen puede mostrar una advertencia porque
                la aplicación todavía no cuenta con suficiente reconocimiento de descargas.
                Sigue los pasos a continuación para completar la instalación desde nuestro
                sitio oficial.
              </p>
            </div>
          </div>
        </div>

        {/* ── Pasos ────────────────────────────────────────────────────── */}
        <main id="pasos" className="flex-grow-1 py-5 py-lg-6 bg-white">
          <div className="container py-lg-4">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">

                <h2 className="h1 text-center fw-bold mb-2">Pasos de instalación</h2>
                <p className="text-center text-muted mb-5">
                  Tiempo estimado: <strong>2 minutos</strong>
                </p>

                {/* Steps */}
                <div className="steps">
                  {steps.map((step, idx) => {
                    const isEven = idx % 2 === 1;
                    return (
                      <div
                        key={step.num}
                        className={`row align-items-center mb-5 pb-4 ${idx < steps.length - 1 ? "border-bottom" : ""}`}
                        style={{ rowGap: "1.5rem" }}
                      >
                        {/* Image / icon col */}
                        <div
                          className={`col-md-5 text-center ${isEven ? "order-md-2" : ""}`}
                        >
                          {step.img ? (
                            <div className="position-relative d-inline-block">
                              {step.badge && (
                                <span
                                  className="badge position-absolute top-0 start-50 translate-middle-x px-3 py-2"
                                  style={{
                                    background: "#1e40af",
                                    color: "#fff",
                                    fontSize: ".7rem",
                                    top: "-12px !important",
                                    zIndex: 2,
                                    borderRadius: 8,
                                  }}
                                >
                                  {step.badge}
                                </span>
                              )}
                              <img
                                src={step.img}
                                className="img-fluid rounded-3 shadow border"
                                alt={step.imgAlt}
                                style={{ maxWidth: 380 }}
                              />
                              {step.imgHighlight && (
                                <div
                                  className="mt-2 small fw-semibold text-center"
                                  style={{ color: "#2563eb" }}
                                >
                                  <i className="bx bx-pointer me-1" />
                                  {step.imgHighlight}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div
                              className="rounded-4 d-inline-flex align-items-center justify-content-center shadow-sm"
                              style={{
                                width: 120,
                                height: 120,
                                background: `${step.iconColor}15`,
                                border: `1.5px solid ${step.iconColor}30`,
                              }}
                            >
                              <i
                                className={`${step.icon} display-4`}
                                style={{ color: step.iconColor }}
                              />
                            </div>
                          )}
                        </div>

                        {/* Text col */}
                        <div
                          className={`col-md-7 ${isEven ? "order-md-1 pe-lg-5" : "ps-lg-5"}`}
                        >
                          <div className="d-flex align-items-center mb-3 gap-3">
                            <span
                              className="fw-bold text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{
                                width: 40,
                                height: 40,
                                background: "#2563eb",
                                fontSize: ".95rem",
                              }}
                            >
                              {step.num}
                            </span>
                            <h3 className="h4 fw-bold mb-0">{step.title}</h3>
                          </div>
                          <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ── Troubleshoot: no encuentro el botón ────────────── */}
                <div
                  className="rounded-4 p-4 p-md-5 mb-5"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bx bx-question-mark text-warning me-2 fs-4" />
                    No encuentro el botón "Ejecutar de todas formas"
                  </h2>
                  <p className="text-muted mb-4">
                    Si solo ves el botón <strong>"No ejecutar"</strong> (Don't run) y no
                    aparece <strong>"Ejecutar de todas formas"</strong>, sigue estos pasos:
                  </p>
                  <ol className="mb-4 ps-3 text-muted" style={{ lineHeight: 2 }}>
                    <li>
                      En la pantalla azul de SmartScreen, haz clic en el enlace{" "}
                      <strong>Más información</strong> (texto pequeño debajo del mensaje).
                    </li>
                    <li>
                      Aparecerá información adicional y debajo el botón{" "}
                      <strong>Ejecutar de todas formas</strong>.
                    </li>
                    <li>
                      Si sigues sin verlo, verifica que descargaste el instalador desde{" "}
                      <strong>www.proventa.app</strong> (nuestro único sitio oficial).
                    </li>
                  </ol>
                  <a
                    href={WHATSAPP_INSTALL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 py-2"
                    style={{ borderRadius: 10 }}
                  >
                    <i className="bi bi-whatsapp me-2" />
                    Pedir ayuda por WhatsApp
                  </a>
                </div>

                {/* ── Edge section ───────────────────────────────────── */}
                <div
                  className="rounded-4 p-4 p-md-5 mb-5"
                  style={{ background: "#f0f4ff", border: "1px solid #c7d7ff" }}
                >
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bx bxl-edge text-primary me-2 fs-4" />
                    Si usas Microsoft Edge
                  </h2>
                  <p className="text-muted mb-4">
                    Edge puede mostrar una advertencia adicional durante la descarga. Sigue
                    estos pasos adicionales antes de ejecutar el instalador:
                  </p>
                  <div className="row g-3">
                    {[
                      {
                        img: "/assets/microsoft_edge_confirmar_descarga.png",
                        text: (
                          <>
                            Haz clic en los <strong>tres puntos (···)</strong> junto al
                            archivo descargado y elige <strong>"Conservar"</strong>.
                          </>
                        ),
                      },
                      {
                        img: "/assets/windows_defender_aceptar_archivo.png",
                        text: (
                          <>
                            Selecciona <strong>"Mostrar más"</strong> y luego{" "}
                            <strong>"Mantener de todos modos"</strong>.
                          </>
                        ),
                      },
                      {
                        img: "/assets/instalacion_proventa.png",
                        text: "Haz clic en el archivo descargado para iniciar la instalación.",
                      },
                    ].map(({ img, text }, i) => (
                      <div className="col-md-4" key={i}>
                        <div className="card h-100 border-0 shadow-sm">
                          <img
                            src={img}
                            className="card-img-top p-2"
                            alt={`Microsoft Edge paso ${i + 1}`}
                          />
                          <div className="card-body">
                            <p className="small mb-0 text-center">{text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CTA inferior ───────────────────────────────────── */}
                <div
                  className="rounded-4 p-4 p-md-5 text-center"
                  style={{
                    background: "linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)",
                  }}
                >
                  <h2 className="h3 fw-bold text-white mb-3">
                    ¿Ya instalaste ProVenta?
                  </h2>
                  <p className="text-light opacity-75 mb-4">
                    Crea tu cuenta gratis y empieza a facturar hoy mismo. 15 días de
                    prueba sin costo.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                    <Link
                      to="/registro/"
                      className="btn btn-primary btn-lg px-5 py-3"
                      style={{ borderRadius: 12 }}
                    >
                      Crear cuenta gratis{" "}
                      <i className="bx bx-right-arrow-alt ms-2 fs-5" />
                    </Link>
                    <a
                      href={WHATSAPP_INSTALL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg px-5 py-3"
                      style={{ borderRadius: 12 }}
                    >
                      <i className="bi bi-whatsapp me-2" />
                      Necesito ayuda
                    </a>
                  </div>

                  {/* Future: try online */}
                  <p className="mt-4 mb-0 small text-light opacity-50">
                    <i className="bx bx-laptop me-1" />
                    Próximamente: prueba ProVenta en línea sin instalar nada.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </main>

        <Footer />

        {/* ── Floating WhatsApp (mensaje específico de instalación) ────── */}
        <a
          href={WHATSAPP_INSTALL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          title="¿Necesitas ayuda con la instalación?"
          className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            zIndex: 9999,
            boxShadow: "0 4px 12px rgba(0,0,0,.3)",
          }}
        >
          <i className="bi bi-whatsapp fs-3" />
        </a>
      </div>
    </HelmetProvider>
  );
};

export default Install;
