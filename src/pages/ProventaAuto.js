import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const whatsappUrl = "https://wa.me/18097874963?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20ProVenta%20Auto";

const features = [
  ["bx-car", "Vehículos y clientes conectados", "Guarda los datos del vehículo junto a su propietario para encontrar cada expediente y atender más rápido."],
  ["bx-wrench", "Órdenes de servicio", "Organiza diagnósticos, trabajos, repuestos, responsables y estados desde la recepción hasta la entrega."],
  ["bx-history", "Historial de mantenimiento", "Consulta servicios anteriores y conserva una trazabilidad clara de lo realizado a cada vehículo."],
  ["bx-package", "Repuestos e inventario", "Controla existencias, costos y movimientos de las piezas utilizadas durante cada reparación."],
  ["bx-receipt", "Cotización y facturación", "Prepara presupuestos claros y conecta el servicio aprobado con la facturación del negocio."],
  ["bx-bell", "Seguimiento al cliente", "Mantén visibles los trabajos pendientes y mejora la comunicación durante todo el servicio."],
];

const steps = [
  ["01", "Recibe", "Registra al cliente y su vehículo."],
  ["02", "Diagnostica", "Documenta hallazgos y prepara la cotización."],
  ["03", "Repara", "Controla tareas, repuestos y avance del trabajo."],
  ["04", "Entrega", "Factura y conserva el historial del vehículo."],
];

const faqs = [
  ["¿Qué es ProVenta Auto?", "Es la experiencia de ProVenta diseñada para organizar la operación de talleres mecánicos y negocios de servicios automotrices."],
  ["¿Para qué tipos de negocios está pensado?", "Está pensado para talleres de mecánica general, centros de servicio, negocios de reparación y otras operaciones automotrices que necesitan controlar vehículos, trabajos, piezas y clientes."],
  ["¿Puedo guardar el historial de cada vehículo?", "Sí. La propuesta conecta cada vehículo con su cliente y con las órdenes de servicio realizadas, facilitando la consulta de trabajos anteriores."],
  ["¿ProVenta Auto ya está disponible?", "ProVenta Auto se encuentra en preparación. Puedes solicitar información por WhatsApp para conocer novedades y disponibilidad."],
];

const ProventaAuto = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProVenta Auto",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    description: "Software para talleres mecánicos que conecta clientes, vehículos, órdenes de servicio, historial, repuestos, inventario y facturación.",
    url: "https://www.proventa.app/proventa-auto/",
    brand: { "@type": "Brand", name: "ProVenta" },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Software para Talleres Mecánicos | ProVenta Auto</title>
        <meta name="description" content="ProVenta Auto organiza clientes, vehículos, órdenes de servicio, historial, inventario y facturación para talleres mecánicos y negocios automotrices." />
        <meta name="keywords" content="software para talleres mecánicos, sistema para taller automotriz, órdenes de servicio, historial de vehículos, inventario de repuestos, República Dominicana" />
        <link rel="canonical" href="https://www.proventa.app/proventa-auto/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software para Talleres Mecánicos | ProVenta Auto" />
        <meta property="og:description" content="Organiza vehículos, clientes, servicios, repuestos y facturación en una sola experiencia." />
        <meta property="og:url" content="https://www.proventa.app/proventa-auto/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="bg-dark text-light min-vh-100 d-flex flex-column">
        <Header />
        <main>
          <section className="position-relative overflow-hidden py-5" style={{ marginTop: 80, background: "radial-gradient(ellipse at 15% 35%,rgba(245,158,11,.2),transparent 55%),radial-gradient(ellipse at 88% 15%,rgba(249,115,22,.13),transparent 52%),#0b0f19" }}>
            <div className="container py-lg-5">
              <div className="row align-items-center gy-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <span className="badge rounded-pill px-3 py-2 mb-4 text-dark" style={{ background: "#fbbf24" }}>PRÓXIMAMENTE</span>
                  <h1 className="display-3 fw-bold text-white mb-4">El software para talleres que <span style={{ background: "linear-gradient(135deg,#fbbf24,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>conecta todo</span></h1>
                  <p className="fs-lg text-light opacity-75 mb-4">ProVenta Auto reúne clientes, vehículos, órdenes de servicio, historial, repuestos y facturación para que tu taller trabaje con más orden y entregue una mejor experiencia.</p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg px-5 py-3 fw-bold rounded-pill text-dark" style={{ background: "linear-gradient(135deg,#fbbf24,#fb923c)" }}><i className="bx bxl-whatsapp me-2" />Quiero recibir novedades</a>
                    <Link to="/" className="btn btn-lg btn-outline-light border-opacity-25 px-4 py-3 rounded-pill">Conocer ProVenta</Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="rounded-4 p-4 p-lg-5 mx-auto" style={{ maxWidth: 520, background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 30px 80px rgba(0,0,0,.35)" }}>
                    <div className="d-flex justify-content-between align-items-start mb-4"><div><small className="text-warning fw-bold">ORDEN DE SERVICIO</small><h2 className="h4 text-white mt-1 mb-0">Toyota Corolla 2021</h2><small className="opacity-50">A123456 · Carlos Martínez</small></div><span className="badge bg-warning text-dark rounded-pill">En proceso</span></div>
                    {["Diagnóstico general", "Cambio de aceite y filtro", "Revisión del sistema de frenos"].map((item, index) => <div className="d-flex align-items-center gap-3 rounded-3 p-3 mb-2" style={{ background: "rgba(0,0,0,.2)" }} key={item}><i className={`bx ${index === 2 ? "bx-time-five text-warning" : "bx-check-circle text-success"} fs-4`} /><span>{item}</span></div>)}
                    <div className="d-flex justify-content-between mt-4 pt-3 border-top border-light border-opacity-10"><small className="opacity-50">Próximo paso</small><strong className="text-white">Notificar al cliente</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container py-5 my-lg-4"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3 text-warning bg-warning bg-opacity-10">TU TALLER, EN UN SOLO LUGAR</span><h2 className="display-5 text-white">Control desde que llega el vehículo hasta que lo entregas</h2><p className="fs-lg opacity-60 mx-auto" style={{ maxWidth: 720 }}>Menos información dispersa y más claridad para el equipo y para tus clientes.</p></div><div className="row g-4">{features.map(([icon, title, text]) => <div className="col-md-6 col-lg-4" key={title}><article className="h-100 p-4 rounded-4" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.075)" }}><div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3 text-warning bg-warning bg-opacity-10" style={{ width: 52, height: 52 }}><i className={`bx ${icon} fs-3`} /></div><h3 className="h5 text-white">{title}</h3><p className="opacity-60 mb-0">{text}</p></article></div>)}</div></section>

          <section className="py-5" style={{ background: "rgba(255,255,255,.025)", borderBlock: "1px solid rgba(255,255,255,.06)" }}><div className="container py-lg-4"><div className="text-center mb-5"><h2 className="display-5 text-white">Un flujo simple para cada servicio</h2><p className="opacity-60">Cuatro etapas conectadas, sin perder información entre el taller y la oficina.</p></div><div className="row g-4">{steps.map(([number, title, text]) => <div className="col-sm-6 col-lg-3" key={number}><div className="h-100 p-4 rounded-4" style={{ background: "rgba(255,255,255,.035)", border: "1px solid rgba(255,255,255,.07)" }}><span className="text-warning fw-bold">{number}</span><h3 className="h4 text-white mt-3">{title}</h3><p className="opacity-60 mb-0">{text}</p></div></div>)}</div></div></section>

          <section className="container py-5 my-lg-4"><div className="row justify-content-center"><div className="col-lg-8"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3 text-warning bg-warning bg-opacity-10">PREGUNTAS FRECUENTES</span><h2 className="display-5 text-white">Conoce ProVenta Auto</h2></div><div className="accordion" id="faqAuto">{faqs.map(([question, answer], index) => <div className="accordion-item border-0 rounded-4 mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,.04)" }} key={question}><h3 className="accordion-header"><button className="accordion-button collapsed shadow-none text-white fw-semibold" style={{ background: "transparent" }} type="button" data-bs-toggle="collapse" data-bs-target={`#auto-faq-${index}`}>{question}</button></h3><div id={`auto-faq-${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAuto"><div className="accordion-body opacity-70 pt-0">{answer}</div></div></div>)}</div></div></div></section>

          <section className="py-5" style={{ background: "linear-gradient(135deg,#92400e,#c2410c)" }}><div className="container text-center py-4"><i className="bx bx-car text-white mb-3" style={{ fontSize: 60 }} /><h2 className="display-5 fw-bold text-white">Sé de los primeros en conocer ProVenta Auto</h2><p className="fs-lg text-white opacity-75 mx-auto mb-4" style={{ maxWidth: 650 }}>Escríbenos y recibe información sobre esta nueva experiencia para talleres y negocios automotrices.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill text-warning"><i className="bx bxl-whatsapp me-2" />Solicitar información</a></div></section>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </React.Fragment>
  );
};

export default ProventaAuto;
