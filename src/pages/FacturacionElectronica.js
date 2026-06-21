import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/buttons/whats-app-button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FacturacionElectronica = () => {
  const tiposEcf = [
    { codigo: "31", nombre: "Factura de Crédito Fiscal", descripcion: "Para ventas a empresas con RNC. Permite crédito fiscal al comprador.", icon: "bx-buildings", color: "primary", textColor: "text-white" },
    { codigo: "32", nombre: "Factura de Consumo", descripcion: "Para ventas al consumidor final. La más común en colmados y retail.", icon: "bx-user", color: "success", textColor: "text-white" },
    { codigo: "33", nombre: "Nota de Débito", descripcion: "Ajuste de facturas emitidas por cargos adicionales no facturados.", icon: "bx-up-arrow-alt", color: "warning", textColor: "text-dark" },
    { codigo: "34", nombre: "Nota de Crédito", descripcion: "Devoluciones, descuentos o correcciones de facturas anteriores.", icon: "bx-down-arrow-alt", color: "info", textColor: "text-dark" },
    { codigo: "41", nombre: "Compras", descripcion: "Respaldo de compras a proveedores informales para deducción fiscal.", icon: "bx-cart", color: "danger", textColor: "text-white" },
    { codigo: "43", nombre: "Gastos Menores", descripcion: "Para egresos de caja chica por montos menores.", icon: "bx-receipt", color: "secondary", textColor: "text-white-dark" },
    { codigo: "44", nombre: "Regímenes Especiales Electrónico", descripcion: "Comprobante utilizado en transacciones bajo regímenes especiales con fines de deducción, acreditamiento o crédito fiscal.", icon: "bx-receipt", color: "primary", textColor: "text-white-dark" },
    { codigo: "45", nombre: "Gubernamental Electrónico", descripcion: "Comprobante utilizado en transacciones realizadas por entidades gubernamentales.", icon: "bx-buildings", color: "light", textColor: "text-dark" },
    { codigo: "46", nombre: "Exportación", descripcion: "Comprobante utilizado en transacciones de exportación.", icon: "bx-receipt", color: "success", textColor: "text-white-dark" },
  ];

  const pasos = [
    {
      num: "01",
      icon: "bx-id-card",
      titulo: "Solicita tu firma digital",
      desc: "Obtén tu certificado digital ante la DGII. ProVenta te guía en todo el proceso de registro.",
    },
    {
      num: "02",
      icon: "bx-cog",
      titulo: "Configura en ProVenta",
      desc: "Activa el módulo e-CF desde los ajustes de tu empresa en ProVenta con un solo clic.",
    },
    {
      num: "03",
      icon: "bx-file",
      titulo: "Factura normalmente",
      desc: "El sistema firma y envía el comprobante a la DGII de forma automática en tiempo real.",
    },
    {
      num: "04",
      icon: "bx-check-shield",
      titulo: "La DGII confirma",
      desc: "Recibes la aprobación instantánea. Tu cliente obtiene su e-CF válido por correo o WhatsApp.",
    },
  ];

  const faqs = [
    {
      q: "¿Qué es la Facturación Electrónica (e-CF)?",
      a: "Es el sistema de comprobantes fiscales electrónicos implementado por la DGII en República Dominicana. Reemplaza los NCF físicos por documentos digitales firmados electrónicamente, con mayor seguridad y trazabilidad.",
    },
    {
      q: "¿Cuándo es obligatorio?",
      a: "La DGII ha establecido plazos por categorías de contribuyentes. Las empresas del Régimen Ordinario ya deben cumplir. Verifica tu categoría en el portal de la DGII para conocer tu fecha límite.",
    },
    {
      q: "¿Tiene costo adicional para clientes de ProVenta?",
      a: "No. La Facturación Electrónica está incluida sin costo adicional para todos los suscriptores activos de ProVenta. Solo necesitas tu firma digital de la DGII.",
    },
    {
      q: "¿Necesito internet para facturar?",
      a: "Sí, para el envío del e-CF a la DGII se requiere conexión a internet. Sin embargo, ProVenta puede facturar offline y sincronizar los comprobantes en cuanto se restablezca la conexión.",
    },
    {
      q: "¿Qué pasa con mis NCF físicos actuales?",
      a: "Durante la transición puedes usar NCF físicos y e-CF simultáneamente. ProVenta administra ambos tipos sin complicaciones hasta que completes la migración total.",
    },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Facturación Electrónica e-CF con la DGII | ProVenta República Dominicana</title>
        <meta
          name="description"
          content="ProVenta integra Facturación Electrónica (e-CF) con la DGII. Emite comprobantes fiscales electrónicos automáticamente, sin costo adicional para suscriptores. Cumple la ley fácilmente."
        />
        <meta
          name="keywords"
          content="facturación electrónica República Dominicana, e-CF DGII, comprobantes fiscales electrónicos, NCF electrónico, software facturación electrónica RD"
        />
        <link rel="canonical" href="https://www.proventa.app/facturacion-electronica" />
      </Helmet>

      <div className="bg-dark text-light min-vh-100 d-flex flex-column">
        <Header />

        {/* ── HERO ── */}
        <section
          className="position-relative overflow-hidden py-5"
          style={{
            marginTop: "80px",
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 55%), #0b0f19",
          }}
        >
          {/* Blobs */}
          <div
            className="position-absolute rounded-circle"
            style={{ width: 400, height: 400, top: -120, right: -80, background: "rgba(99,102,241,0.12)", filter: "blur(90px)", zIndex: 0 }}
          />
          <div
            className="position-absolute rounded-circle"
            style={{ width: 260, height: 260, bottom: -60, left: "10%", background: "rgba(139,92,246,0.1)", filter: "blur(70px)", zIndex: 0 }}
          />

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center gy-5">
              {/* Left */}
              <div className="col-lg-6 text-center text-lg-start">
                <div className="d-inline-flex align-items-center gap-2 mb-4">
                  <span
                    className="badge px-3 py-2 rounded-pill fw-bold text-uppercase"
                    style={{ background: "linear-gradient(135deg,#ffd600,#ff9800)", color: "#1a1a1a", fontSize: "0.7rem", letterSpacing: "0.08em" }}
                  >
                    ¡Incluido Gratis!
                  </span>
                  <span className="text-light opacity-60 fs-sm">Para todos los suscriptores activos</span>
                </div>

                <h1 className="display-4 text-white fw-bold mb-4" style={{ lineHeight: 1.15 }}>
                  Facturación Electrónica{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg,#818cf8,#a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    (e‑CF)
                  </span>{" "}
                  integrada con la DGII
                </h1>

                <p className="fs-lg text-light opacity-75 mb-5" style={{ maxWidth: 520 }}>
                  Emite comprobantes fiscales electrónicos directamente desde ProVenta. El sistema firma, envía y registra cada factura ante la DGII de forma automática — sin complicaciones, sin costo adicional.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <a
                    href="/"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-lg px-5 py-3 fw-bold rounded-pill text-white"
                    style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow: "0 8px 30px rgba(99,102,241,0.4)" }}
                  >
                    <i className="bx bx-download me-2 fs-5" />
                    Activar en mi cuenta
                  </a>
                  <a
                    href="https://wa.me/18097874963"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-outline-light border-opacity-25 px-4 py-3 rounded-pill"
                  >
                    <i className="bx bxl-whatsapp me-2 fs-5 text-success" />
                    Hablar con soporte
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-lg-start gap-4">
                  {[
                    { icon: "bx-check-shield", label: "Certificado DGII" },
                    { icon: "bx-lock-alt", label: "Firma Digital" },
                    { icon: "bx-time", label: "Envío en tiempo real" },
                  ].map((b) => (
                    <div key={b.label} className="d-flex align-items-center gap-2 opacity-70">
                      <i className={`bx ${b.icon} text-primary fs-5`} />
                      <span className="fs-sm text-light">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — visual */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div
                  className="rounded-4 p-4 position-relative"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    maxWidth: 460,
                    width: "100%",
                  }}
                >
                  {/* Mock e-CF card */}
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{ width: 48, height: 48, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
                      >
                        <i className="bx bx-receipt text-white fs-4" />
                      </div>
                      <div>
                        <div className="text-white fw-bold">e-CF Generado</div>
                        <div className="fs-xs opacity-50">Comprobante Electrónico</div>
                      </div>
                    </div>
                    <span
                      className="badge px-3 py-2 rounded-pill fw-bold"
                      style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)", fontSize: "0.7rem" }}
                    >
                      ✓ DGII Aprobado
                    </span>
                  </div>

                  <div className="mb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 16 }}>
                    {[
                      ["Tipo", "Factura de Crédito Fiscal (31)"],
                      ["RNC Emisor", "1-32-12345-6"],
                      ["Secuencia", "E310000000001"],
                      ["Monto", "RD$ 12,500.00"],
                      ["ITBIS (18%)", "RD$ 2,250.00"],
                    ].map(([k, v]) => (
                      <div key={k} className="d-flex justify-content-between py-1">
                        <span className="fs-sm opacity-50">{k}</span>
                        <span className="fs-sm text-light fw-medium">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-sm flex-fill rounded-pill" style={{ background: "rgba(99,102,241,0.2)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)", fontSize: "0.8rem" }}>
                      <i className="bx bx-envelope me-1" /> Enviar por email
                    </button>
                    <button className="btn btn-sm flex-fill rounded-pill" style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)", fontSize: "0.8rem" }}>
                      <i className="bx bxl-whatsapp me-1" /> WhatsApp
                    </button>
                  </div>

                  {/* Floating pulse indicator */}
                  <div
                    className="position-absolute d-flex align-items-center gap-2"
                    style={{ bottom: -16, right: 20, background: "#0b0f19", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "6px 14px" }}
                  >
                    <span
                      style={{
                        width: 8, height: 8, borderRadius: "50%",
                        background: "#4ade80",
                        boxShadow: "0 0 8px #4ade80",
                        animation: "pulseDotEcf 1.5s infinite",
                        display: "inline-block",
                      }}
                    />
                    <span className="fs-xs text-light opacity-60">Conectado a la DGII</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes pulseDotEcf {
              0%,100% { opacity:1; transform:scale(1); }
              50%      { opacity:.4; transform:scale(1.5); }
            }
          `}</style>
        </section>

        {/* ── BENEFICIOS ── */}
        <section className="container py-5 my-lg-3">
          <div className="text-center mb-5">
            <span className="badge bg-primary bg-opacity-15 text-white border border-primary border-opacity-20 px-3 py-2 rounded-pill mb-3 fw-bold" style={{ fontSize: "0.75rem" }}>
              VENTAJAS
            </span>
            <h2 className="display-5 text-white mb-3">¿Por qué usar e‑CF con ProVenta?</h2>
            <p className="fs-lg text-light opacity-60" style={{ maxWidth: 520, margin: "0 auto" }}>
              Más seguridad, menos papeleo y total cumplimiento fiscal desde el primer día.
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: "bx-check-shield", color: "#6366f1", title: "100% cumplimiento DGII", desc: "Tu empresa siempre al día con la normativa fiscal vigente. Evita multas y sanciones." },
              { icon: "bx-time-five", color: "#f59e0b", title: "Automático y en tiempo real", desc: "Cada factura se firma y envía a la DGII en segundos. Sin pasos manuales ni intermediarios." },
              { icon: "bx-dollar-circle", color: "#10b981", title: "Sin costo adicional", desc: "Incluido en todos los planes activos de ProVenta. No pagas extra por la funcionalidad." },
              { icon: "bx-history", color: "#8b5cf6", title: "Historial centralizado", desc: "Consulta todos tus e-CF emitidos, anulados y pendientes desde un solo panel." },
              { icon: "bx-paper-plane", color: "#0ea5e9", title: "Entrega instantánea", desc: "Tu cliente recibe el e-CF por email o WhatsApp al instante, con PDF adjunto." },
              { icon: "bx-transfer", color: "#f43f5e", title: "NCF y e-CF simultáneos", desc: "Usa ambos formatos durante la transición sin perder ninguna venta ni historial." },
            ].map((b) => (
              <div key={b.title} className="col-md-6 col-lg-4">
                <div
                  className="h-100 p-4 rounded-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "border-color 0.25s" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 52, height: 52, background: `${b.color}22` }}
                  >
                    <i className={`bx ${b.icon} fs-3`} style={{ color: b.color }} />
                  </div>
                  <h3 className="h5 text-white mb-2">{b.title}</h3>
                  <p className="fs-sm text-light opacity-60 mb-0">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPOS DE e-CF ── */}
        <section className="py-5" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="badge bg-success bg-opacity-15 text-dark border border-success border-opacity-20 px-3 py-2 rounded-pill mb-3 fw-bold" style={{ fontSize: "0.75rem" }}>
                TIPOS DE COMPROBANTE
              </span>
              <h2 className="display-5 text-white mb-3">Todos los e‑CF soportados</h2>
              <p className="text-light opacity-60 fs-lg" style={{ maxWidth: 480, margin: "0 auto" }}>
                ProVenta maneja todos los tipos de comprobantes fiscales electrónicos definidos por la DGII.
              </p>
            </div>

            <div className="row g-3">
              {tiposEcf.map((t) => (
                <div key={t.codigo} className="col-md-6 col-lg-4">
                  <div
                    className="p-3 rounded-4 d-flex gap-3 align-items-start h-100"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className={`d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 bg-opacity-15`}
                      style={{ width: 44, height: 44 }}
                    >
                      <i className={`bx ${t.icon} text-${t.color} fs-4`} />
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span
                          className={`badge bg-${t.color} bg-opacity-20 ${t.textColor}`}
                          style={{ fontSize: "0.65rem", fontWeight: 700 }}
                        >
                          Tipo {t.codigo}
                        </span>
                      </div>
                      <h4 className="h6 text-white mb-1">{t.nombre}</h4>
                      <p className="fs-xs text-light opacity-55 mb-0">{t.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="container py-5 my-lg-3">
          <div className="text-center mb-5">
            <span
              className="badge px-3 py-2 rounded-pill mb-3 fw-bold"
              style={{ fontSize: "0.75rem", background: "rgba(245,158,11,0.15)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.25)" }}
            >
              PROCESO
            </span>
            <h2 className="display-5 text-white mb-3">¿Cómo empezar?</h2>
            <p className="text-light opacity-60 fs-lg" style={{ maxWidth: 480, margin: "0 auto" }}>
              En 4 simples pasos tu empresa empieza a emitir e-CF de forma legal y automática.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {pasos.map((p, idx) => (
              <div key={p.num} className="col-md-6 col-lg-3">
                <div className="text-center position-relative">
                  {/* Connector line (desktop) */}
                  {idx < pasos.length - 1 && (
                    <div
                      className="d-none d-lg-block position-absolute"
                      style={{
                        top: 28, left: "calc(50% + 36px)", width: "calc(100% - 36px)",
                        height: 2,
                        background: "linear-gradient(90deg,rgba(99,102,241,0.5),rgba(139,92,246,0.2))",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 position-relative"
                    style={{
                      width: 58, height: 58,
                      background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                      boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
                      zIndex: 1,
                    }}
                  >
                    <i className={`bx ${p.icon} text-white fs-3`} />
                  </div>
                  <div
                    className="position-absolute text-white fw-black"
                    style={{ top: -8, left: "50%", transform: "translateX(-60%) translateY(-50%)", fontSize: "3.5rem", opacity: 0.04, fontWeight: 900, lineHeight: 1, userSelect: "none" }}
                  >
                    {p.num}
                  </div>
                  <h3 className="h5 text-white mb-2">{p.titulo}</h3>
                  <p className="fs-sm text-light opacity-60 mb-0">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-5" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <span
                    className="badge px-3 py-2 rounded-pill mb-3 fw-bold"
                    style={{ fontSize: "0.75rem", background: "rgba(14,165,233,0.15)", color: "#38bdf8", border: "1px solid rgba(14,165,233,0.25)" }}
                  >
                    PREGUNTAS FRECUENTES
                  </span>
                  <h2 className="display-5 text-white mb-2">¿Tienes dudas?</h2>
                  <p className="text-light opacity-60">Todo lo que necesitas saber sobre e-CF y ProVenta.</p>
                </div>

                <div className="accordion" id="faqEcf">
                  {faqs.map((f, i) => (
                    <div key={i} className="accordion-item border-0 rounded-4 mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <h3 className="accordion-header" id={`faq-h-${i}`}>
                        <button
                          className="accordion-button shadow-none text-white fw-semibold collapsed"
                          style={{ background: "transparent" }}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq-b-${i}`}
                          aria-expanded="false"
                          aria-controls={`faq-b-${i}`}
                        >
                          {f.q}
                        </button>
                      </h3>
                      <div id={`faq-b-${i}`} className="accordion-collapse collapse" aria-labelledby={`faq-h-${i}`} data-bs-parent="#faqEcf">
                        <div className="accordion-body text-light opacity-70 pt-0">{f.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section
          className="py-5 mt-auto"
          style={{ background: "linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%)" }}
        >
          <div className="container text-center py-3">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
              style={{ width: 72, height: 72, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
            >
              <i className="bx bx-receipt text-white" style={{ fontSize: "2rem" }} />
            </div>
            <h2 className="display-5 text-white mb-3 fw-bold">
              ¿Listo para cumplir con la DGII?
            </h2>
            <p className="fs-lg text-white opacity-80 mb-5" style={{ maxWidth: 520, margin: "0 auto" }}>
              Activa la Facturación Electrónica hoy mismo. Incluida en tu plan, sin costos extra, sin trámites complejos.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow"
                style={{ color: "#4f46e5" }}
              >
                <i className="bx bx-rocket me-2 fs-5" />
                Activar e-CF en mi cuenta
              </a>
              <a
                href="https://wa.me/18097874963"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-outline-light border-opacity-40 px-4 py-3 rounded-pill"
              >
                <i className="bx bxl-whatsapp me-2 fs-5" />
                Hablar con soporte
              </a>
            </div>
            <p className="text-white opacity-60 mt-4 mb-0 small">
              ¿No tienes ProVenta aún?{" "}
              <Link to="/" className="text-white fw-bold text-decoration-underline">
                Prueba gratis 15 días →
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </div>
      <WhatsAppButton />
    </React.Fragment>
  );
};

export default FacturacionElectronica;
