import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const whatsappUrl = "https://wa.me/18097874963?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20ProVenta%20Auto";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.proventa.app";

const features = [
  ["bx-devices", "Tu taller en cualquier dispositivo", "Trabaja desde móvil, PC o tablet con aplicaciones nativas y mantén la operación sincronizada estés donde estés."],
  ["bx-task", "Trabajos y mecánicos", "Asigna cada trabajo a un mecánico, consulta su avance y conoce quién es responsable de cada tarea."],
  ["bx-message-rounded-check", "Presupuestos aprobados sin fricción", "Envía el presupuesto al cliente, registra su aprobación y comienza el trabajo con alcance y costos claros."],
  ["bxl-whatsapp", "Recordatorios automáticos", "Avisa sobre próximos mantenimientos y vuelve a conectar con tus clientes por WhatsApp o correo electrónico."],
  ["bx-money", "Comisiones bajo control", "Calcula y registra el pago de comisiones por mecánico, servicio o período con información fácil de revisar."],
  ["bx-receipt", "NCF y facturación electrónica", "Convierte el servicio aprobado en factura y emite comprobantes fiscales NCF y electrónicos e-CF desde el mismo flujo."],
  ["bx-car", "Expediente completo del vehículo", "Conecta propietario, vehículo, kilometraje, diagnósticos, fotos, servicios e historial en una sola ficha."],
  ["bx-package", "Repuestos e inventario", "Reserva las piezas de cada orden, controla costos y existencias y registra lo utilizado en la reparación."],
];

const steps = [
  ["01", "Recibe", "Registra al cliente, el vehículo, kilometraje y motivo de visita."],
  ["02", "Cotiza y aprueba", "Documenta el diagnóstico y consigue la aprobación del presupuesto."],
  ["03", "Asigna y repara", "Distribuye tareas, repuestos y tiempos entre tus mecánicos."],
  ["04", "Factura y fideliza", "Emite la factura y programa el próximo recordatorio de mantenimiento."],
];

const highlights = [
  ["bx-mobile-alt", "Recepción desde el móvil", "Toma datos, fotos y observaciones junto al vehículo, sin volver a digitarlos en la oficina."],
  ["bx-line-chart", "Rentabilidad por servicio", "Relaciona mano de obra, repuestos y comisiones para entender mejor el resultado de cada orden."],
  ["bx-calendar-check", "Agenda que genera retorno", "Convierte el historial y el kilometraje en recordatorios oportunos para atraer al cliente de vuelta."],
];

const faqs = [
  ["¿Qué es ProVenta Auto?", "Es la solución de ProVenta para administrar talleres mecánicos y negocios automotrices: vehículos, órdenes, mecánicos, repuestos, presupuestos, comisiones, seguimiento y facturación."],
  ["¿En qué dispositivos puedo trabajar?", "Puedes trabajar desde móvil, PC o tablet mediante aplicaciones nativas, con la información del taller conectada para tu equipo."],
  ["¿Puedo enviar recordatorios a mis clientes?", "Sí. Puedes organizar próximos mantenimientos y contactar al cliente por WhatsApp o correo electrónico."],
  ["¿Permite controlar el trabajo y las comisiones de los mecánicos?", "Sí. Cada servicio puede asignarse a un mecánico y utilizarse como base para registrar y controlar sus comisiones."],
  ["¿Incluye comprobantes fiscales?", "Sí. ProVenta Auto conecta la orden y el presupuesto aprobado con la facturación, incluyendo NCF y facturación electrónica e-CF."],
];

const ProventaAuto = () => {
  const structuredData = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: "ProVenta Auto",
    applicationCategory: "BusinessApplication", operatingSystem: "Windows, Android, iOS",
    description: "Software multidispositivo para talleres mecánicos con órdenes de servicio, asignación de mecánicos, comisiones, recordatorios, presupuestos y facturación electrónica.",
    url: "https://www.proventa.app/proventa-auto/", brand: { "@type": "Brand", name: "ProVenta" },
    offers: { "@type": "Offer", price: "1800", priceCurrency: "DOP", description: "Planes de ProVenta Auto desde RD$1,800 al mes." },
  };
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <React.Fragment>
    <Helmet>
      <title>Software para Talleres Mecánicos | ProVenta Auto</title>
      <meta name="description" content="Administra tu taller desde móvil, PC o tablet. Controla órdenes, mecánicos, comisiones, recordatorios, presupuestos, inventario y facturación electrónica." />
      <meta name="keywords" content="software para talleres mecánicos, sistema para taller automotriz, órdenes de servicio, comisiones mecánicos, recordatorios mantenimiento, facturación electrónica, NCF, República Dominicana" />
      <link rel="canonical" href="https://www.proventa.app/proventa-auto/" />
      <meta property="og:type" content="website" /><meta property="og:title" content="Software para Talleres Mecánicos | ProVenta Auto" />
      <meta property="og:description" content="Controla todo tu taller desde móvil, PC o tablet: servicios, equipo, clientes y facturación." /><meta property="og:url" content="https://www.proventa.app/proventa-auto/" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>
    </Helmet>
    <div className="bg-dark text-light min-vh-100 d-flex flex-column"><Header /><main>
      <section className="position-relative overflow-hidden py-5" style={{ marginTop: 80, background: "radial-gradient(ellipse at 15% 35%,rgba(245,158,11,.2),transparent 55%),radial-gradient(ellipse at 88% 15%,rgba(249,115,22,.13),transparent 52%),#0b0f19" }}>
        <div className="container py-lg-5"><div className="row align-items-center gy-5"><div className="col-lg-6 text-center text-lg-start">
          <span className="badge rounded-pill px-3 py-2 mb-4 text-dark" style={{ background: "#fbbf24" }}>PROVENTA AUTO</span>
          <h1 className="display-3 fw-bold text-white mb-4">Tu taller completo, <span style={{ background: "linear-gradient(135deg,#fbbf24,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>siempre contigo</span></h1>
          <p className="fs-lg text-light opacity-75 mb-3">Administra clientes, vehículos, mecánicos, servicios, repuestos y facturación desde móvil, PC o tablet con aplicaciones nativas.</p>
          <p className="text-light opacity-60 mb-4">Un solo flujo desde la recepción y aprobación del presupuesto hasta la factura electrónica y el próximo mantenimiento.</p>
          <div className="d-inline-flex align-items-baseline gap-2 rounded-pill px-4 py-2 mb-4" style={{ background: "rgba(251,191,36,.1)", border: "1px solid rgba(251,191,36,.25)" }}><span className="small text-light opacity-60">Desde</span><strong className="h3 text-warning mb-0">RD$1,800</strong><span className="small text-light opacity-60">al mes</span></div>
          <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 justify-content-center justify-content-lg-start"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg px-5 py-3 fw-bold rounded-pill text-dark" style={{ background: "linear-gradient(135deg,#fbbf24,#fb923c)" }}><i className="bx bxl-whatsapp me-2" />Solicitar información</a><Link to="/" className="btn btn-lg btn-outline-light border-opacity-25 px-4 py-3 rounded-pill">Conocer ProVenta</Link></div>
          <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">{[["bx-mobile-alt","Móvil"],["bx-desktop","PC"],["bx-tab","Tablet"]].map(([icon,label]) => <span className="small fw-semibold text-light opacity-75" key={label}><i className={`bx ${icon} text-warning me-1`} />{label}</span>)}</div>
        </div><div className="col-lg-6"><div className="rounded-4 p-4 p-lg-5 mx-auto" style={{ maxWidth: 520, background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 30px 80px rgba(0,0,0,.35)" }}>
          <div className="d-flex justify-content-between align-items-start mb-4"><div><small className="text-warning fw-bold">ORDEN #1048</small><h2 className="h4 text-white mt-1 mb-0">Toyota Corolla 2021</h2><small className="opacity-50">A123456 · Carlos Martínez</small></div><span className="badge bg-success rounded-pill">Aprobada</span></div>
          {[['bx-user-check','Diagnóstico general','Luis · Mecánico'],['bx-package','Cambio de aceite y filtro','Repuestos reservados'],['bx-message-rounded-check','Presupuesto aprobado','Por WhatsApp']].map(([icon,item,detail]) => <div className="d-flex align-items-center gap-3 rounded-3 p-3 mb-2" style={{ background: "rgba(0,0,0,.2)" }} key={item}><i className={`bx ${icon} text-warning fs-4`} /><div><span className="d-block">{item}</span><small className="opacity-50">{detail}</small></div></div>)}
          <div className="d-flex justify-content-between mt-4 pt-3 border-top border-light border-opacity-10"><small className="opacity-50">Próximo mantenimiento</small><strong className="text-white">15 nov. · Recordatorio listo</strong></div>
        </div></div></div></div>
      </section>

      <section className="container py-5 my-lg-4"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3 text-warning bg-warning bg-opacity-10">TODO BAJO CONTROL</span><h2 className="display-5 text-white">Herramientas creadas para el ritmo de tu taller</h2><p className="fs-lg opacity-60 mx-auto" style={{ maxWidth: 760 }}>Menos mensajes dispersos, papeles y cálculos manuales. Más visibilidad para el equipo y una experiencia más profesional para cada cliente.</p></div><div className="row g-4">{features.map(([icon,title,text]) => <div className="col-md-6 col-lg-3" key={title}><article className="h-100 p-4 rounded-4 auto-feature-card"><div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3 text-warning bg-warning bg-opacity-10" style={{ width: 52, height: 52 }}><i className={`bx ${icon} fs-3`} /></div><h3 className="h5 text-white">{title}</h3><p className="opacity-60 mb-0">{text}</p></article></div>)}</div></section>

      <section className="py-5" style={{ background: "rgba(255,255,255,.025)", borderBlock: "1px solid rgba(255,255,255,.06)" }}><div className="container py-lg-4"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3 text-warning bg-warning bg-opacity-10">FUNCIONES ESPECIALES</span><h2 className="display-5 text-white">Más que administrar: haz crecer el taller</h2></div><div className="row g-4">{highlights.map(([icon,title,text]) => <div className="col-lg-4" key={title}><div className="h-100 p-4 p-xl-5 rounded-4" style={{ background: "linear-gradient(145deg,rgba(120,53,15,.28),rgba(255,255,255,.03))", border: "1px solid rgba(251,191,36,.14)" }}><i className={`bx ${icon} text-warning mb-4`} style={{ fontSize: 42 }} /><h3 className="h4 text-white">{title}</h3><p className="opacity-60 mb-0">{text}</p></div></div>)}</div></div></section>

      <section className="container py-5 my-lg-4"><div className="text-center mb-5"><h2 className="display-5 text-white">Un flujo conectado para cada servicio</h2><p className="opacity-60">Desde que llega el vehículo hasta que el cliente vuelve.</p></div><div className="row g-4">{steps.map(([number,title,text]) => <div className="col-sm-6 col-lg-3" key={number}><div className="h-100 p-4 rounded-4" style={{ background: "rgba(255,255,255,.035)", border: "1px solid rgba(255,255,255,.07)" }}><span className="text-warning fw-bold">{number}</span><h3 className="h4 text-white mt-3">{title}</h3><p className="opacity-60 mb-0">{text}</p></div></div>)}</div></section>

      <section className="container py-5"><div className="row justify-content-center"><div className="col-lg-8"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3 text-warning bg-warning bg-opacity-10">PREGUNTAS FRECUENTES</span><h2 className="display-5 text-white">Conoce ProVenta Auto</h2></div><div className="accordion" id="faqAuto">{faqs.map(([question,answer],index) => <div className="accordion-item border-0 rounded-4 mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,.04)" }} key={question}><h3 className="accordion-header"><button className="accordion-button collapsed shadow-none text-white fw-semibold" style={{ background: "transparent" }} type="button" data-bs-toggle="collapse" data-bs-target={`#auto-faq-${index}`} aria-expanded="false" aria-controls={`auto-faq-${index}`}>{question}</button></h3><div id={`auto-faq-${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAuto"><div className="accordion-body opacity-70 pt-0">{answer}</div></div></div>)}</div></div></div></section>

      <section className="py-5" style={{ background: "linear-gradient(135deg,#92400e,#c2410c)" }}><div className="container text-center py-4"><i className="bx bx-car text-white mb-3" style={{ fontSize: 60 }} /><h2 className="display-5 fw-bold text-white">Pon tu taller en modo ProVenta</h2><p className="fs-lg text-white opacity-75 mx-auto mb-4" style={{ maxWidth: 680 }}>Organiza el trabajo, mantén al cliente informado y factura con control desde cualquier dispositivo.</p><div className="d-flex flex-column flex-sm-row gap-3 justify-content-center"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill text-warning"><i className="bx bxl-whatsapp me-2" />Hablar con un asesor</a><a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill"><i className="bx bxl-play-store me-2" />Descargar en Google Play</a></div></div></section>
    </main><Footer /></div><WhatsAppButton />
    <style>{`.auto-feature-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.075);transition:transform .25s ease,border-color .25s ease}.auto-feature-card:hover{transform:translateY(-5px);border-color:rgba(251,191,36,.3)}`}</style>
  </React.Fragment>;
};

export default ProventaAuto;
