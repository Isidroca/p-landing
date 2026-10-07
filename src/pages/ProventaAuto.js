import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";
import ShareButton from "../components/buttons/share-button";
import "./ProventaAuto.css";

const whatsappUrl = "https://wa.me/18097874963?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20ProVenta%20Auto";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.proventa.app";

const benefits = [
  ["bx-mobile-alt", "Recepción y órdenes móviles", "Recibe vehículos, consulta órdenes y registra el trabajo desde el celular, justo donde ocurre."],
  ["bx-scan", "Inspección 360°", "Revisa 18 puntos clave del vehículo y registra qué está bien, qué requiere atención y qué queda pendiente."],
  ["bx-camera", "Hasta 15 fotos por orden", "Documenta golpes, rayones, piezas y avances con la cámara del celular, sin transferir archivos."],
  ["bx-wrench", "Trabajo y técnicos", "Asigna mano de obra, repuestos y responsables; conoce el estado y costo estimado de cada orden."],
  ["bx-history", "Historial del vehículo", "Consulta visitas, kilometraje, reparaciones, facturas y mantenimientos en una sola cronología."],
  ["bx-calendar-check", "Seguimiento que genera retorno", "Identifica mantenimientos próximos o vencidos y contacta al cliente a tiempo."],
];

const flow = [
  ["01", "Recibe junto al vehículo", "Selecciona el cliente y el vehículo, registra kilometraje, combustible, solicitud y observaciones."],
  ["02", "Documenta con fotos", "Abre la cámara del celular y agrega hasta 15 imágenes directamente a la recepción o la orden."],
  ["03", "Inspecciona y trabaja", "Completa la inspección 360°, asigna técnicos, agrega mano de obra y reserva los repuestos."],
  ["04", "Factura y da seguimiento", "Convierte el trabajo en factura y programa el próximo mantenimiento para que el cliente vuelva."],
];

const faqs = [
  ["¿Qué es ProVenta Auto?", "Es la solución de ProVenta para administrar talleres y negocios automotrices: recepción de vehículos, órdenes, inspección 360°, técnicos, repuestos, historial, seguimiento y facturación."],
  ["¿Puedo trabajar la recepción y las órdenes desde el celular?", "Sí. Puedes recibir el vehículo, consultar y trabajar órdenes, tomar fotografías y revisar el historial desde el celular."],
  ["¿Cuántas fotografías puedo agregar?", "Puedes agregar hasta 15 imágenes por recepción u orden de trabajo, tomadas en el momento con la cámara del celular o seleccionadas desde el dispositivo."],
  ["¿Qué incluye la inspección 360°?", "Permite revisar 18 puntos del vehículo y clasificarlos como buenos, pendientes o que requieren revisión, dejando un registro claro dentro de la orden."],
  ["¿Puedo dar seguimiento a próximos mantenimientos?", "Sí. ProVenta Auto reúne los mantenimientos próximos, urgentes y vencidos para que puedas contactar al cliente por teléfono o WhatsApp."],
  ["¿Incluye facturación electrónica?", "Sí. La orden se conecta con la facturación de ProVenta, incluyendo comprobantes fiscales NCF y facturación electrónica e-CF."],
];

const Screenshot = ({ src, alt, className = "" }) => <img src={`/assets/img/auto/${src}`} alt={alt} className={`auto-shot ${className}`} loading="lazy" />;

const ProventaAuto = () => {
  const structuredData = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "ProVenta Auto", applicationCategory: "BusinessApplication", operatingSystem: "Windows, Android, iOS", description: "Software para talleres con recepción móvil, inspección 360, fotografías, órdenes de trabajo, historial del vehículo, seguimiento y facturación electrónica.", url: "https://www.proventa.app/proventa-auto/", brand: { "@type": "Brand", name: "ProVenta" }, offers: { "@type": "Offer", price: "1800", priceCurrency: "DOP", description: "Planes de ProVenta Auto desde RD$1,800 al mes." } };
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <>
    <Helmet>
      <title>Software para Talleres con Inspección 360° | ProVenta Auto</title>
      <meta name="description" content="Recibe vehículos y trabaja órdenes desde el celular. Realiza inspecciones 360°, toma hasta 15 fotos y controla técnicos, repuestos, historial y facturación." />
      <meta name="keywords" content="software para talleres mecánicos, inspección 360 vehículo, recepción móvil taller, orden de trabajo taller, fotos recepción vehículo, República Dominicana" />
      <link rel="canonical" href="https://www.proventa.app/proventa-auto/" />
      <meta property="og:type" content="website" /><meta property="og:title" content="ProVenta Auto | Tu taller en el celular" />
      <meta property="og:description" content="Inspección 360°, recepción móvil y hasta 15 fotos por orden de trabajo." />
      <meta property="og:url" content="https://www.proventa.app/proventa-auto/" /><meta property="og:image" content="https://www.proventa.app/assets/img/auto/inspeccion_360.png" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script><script type="application/ld+json">{JSON.stringify(faqData)}</script>
    </Helmet>
    <div className="auto-page min-vh-100 d-flex flex-column"><Header /><main>
      <section className="auto-hero"><div className="auto-glow auto-glow-one" /><div className="auto-glow auto-glow-two" /><div className="container position-relative"><div className="row align-items-center gy-5">
        <div className="col-lg-6 auto-hero-copy text-center text-lg-start"><div className="auto-eyebrow"><i className="bx bx-car" /> PROVENTA AUTO</div><h1>Tu taller completo.<br /><span>También en tu celular.</span></h1><p className="auto-lead">Recibe vehículos, documenta su estado, trabaja cada orden y da seguimiento al próximo mantenimiento desde un solo sistema.</p><div className="auto-hero-points"><span><i className="bx bx-scan" /> Inspección 360°</span><span><i className="bx bx-camera" /> Hasta 15 fotos</span><span><i className="bx bx-mobile-alt" /> Recepción móvil</span></div><div className="auto-actions"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="auto-btn auto-btn-primary"><i className="bx bxl-whatsapp" /> Solicitar información</a><a href="#como-funciona" className="auto-btn auto-btn-ghost">Ver cómo funciona <i className="bx bx-down-arrow-alt" /></a></div><p className="auto-price"><span>Planes desde</span> RD$1,800 <span>al mes</span></p></div>
        <div className="col-lg-6"><div className="auto-hero-visual" aria-label="ProVenta Auto en computadora y celular"><div className="auto-desktop-frame"><div className="auto-window-bar"><span /><span /><span /></div><Screenshot src="ordenes_de_trabajo.png" alt="Órdenes de trabajo de ProVenta Auto en computadora" /></div><div className="auto-phone-frame auto-hero-phone"><div className="auto-phone-speaker" /><Screenshot src="proventa_auto_dashboard_celular.jpeg" alt="Panel de ProVenta Auto en el celular" /></div><div className="auto-floating-note"><i className="bx bx-check-circle" /><div><strong>Orden actualizada</strong><small>Todo el equipo sincronizado</small></div></div></div></div>
      </div></div></section>

      <section className="auto-trust-strip"><div className="container"><div className="row g-3 text-center"><div className="col-6 col-lg-3"><strong>18</strong><span>puntos de inspección</span></div><div className="col-6 col-lg-3"><strong>15</strong><span>fotos por recepción</span></div><div className="col-6 col-lg-3"><strong>1</strong><span>historial por vehículo</span></div><div className="col-6 col-lg-3"><strong>100%</strong><span>móvil y escritorio</span></div></div></div></section>

      <section className="auto-section" id="como-funciona"><div className="container"><div className="auto-section-heading text-center"><div className="auto-kicker">DE LA RECEPCIÓN A LA ENTREGA</div><h2>Un flujo conectado para cada vehículo</h2><p>La información se captura una sola vez y acompaña al vehículo durante todo el servicio.</p></div><div className="row g-4">{flow.map(([number, title, text]) => <div className="col-sm-6 col-lg-3" key={number}><article className="auto-flow-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article></div>)}</div></div></section>

      <section className="auto-section auto-section-deep overflow-hidden"><div className="container"><div className="row align-items-center gy-5"><div className="col-lg-5"><div className="auto-kicker">RECEPCIÓN MÓVIL</div><h2>Recibe el vehículo junto al cliente</h2><p className="auto-section-copy">No necesitas volver a la oficina para completar la recepción. Selecciona el cliente y su vehículo, registra la solicitud, el kilometraje, el combustible y cualquier observación desde el celular.</p><ul className="auto-check-list"><li><i className="bx bx-check" /> Datos del cliente y del vehículo en el momento</li><li><i className="bx bx-check" /> Condición exterior y objetos recibidos</li><li><i className="bx bx-check" /> Orden creada sin volver a digitar información</li></ul></div><div className="col-lg-7"><div className="auto-mobile-showcase"><div className="auto-phone-frame auto-phone-back"><Screenshot src="recibir_vehiculo_celular.jpeg" alt="Selección del vehículo durante la recepción móvil" /></div><div className="auto-phone-frame auto-phone-front"><Screenshot src="recibir_vehiculo_tomar_foto_celular.jpeg" alt="Captura de fotos durante la recepción desde el celular" /></div><div className="auto-photo-badge"><span>0/15</span><strong>Fotos de recepción</strong><small>Máximo 5 MB por imagen</small></div></div></div></div></div></section>

      <section className="auto-section auto-inspection-section"><div className="container"><div className="row align-items-center gy-5"><div className="col-lg-7 order-2 order-lg-1"><div className="auto-product-window"><div className="auto-product-label"><i className="bx bx-scan" /> Inspección 360° · Orden OT-2026-000002</div><Screenshot src="inspeccion_360.png" alt="Inspección 360 grados de 18 puntos de un vehículo" /></div></div><div className="col-lg-5 order-1 order-lg-2"><div className="auto-kicker">INSPECCIÓN 360°</div><h2>Revisa cada punto. Deja evidencia clara.</h2><p className="auto-section-copy">La inspección visual guía al técnico por 18 puntos del vehículo. Cada revisión queda identificada y clasificada para que el equipo y el cliente sepan exactamente qué necesita atención.</p><div className="auto-status-list"><div><span className="is-good" /><strong>Bueno</strong><small>Componente revisado y en condición correcta.</small></div><div><span className="is-review" /><strong>Requiere revisión</strong><small>Un punto que merece atención del técnico.</small></div><div><span className="is-pending" /><strong>Pendiente</strong><small>La aplicación muestra qué falta por completar.</small></div></div></div></div></div></section>

      <section className="auto-section auto-section-deep"><div className="container"><div className="auto-section-heading text-center"><div className="auto-kicker">CONTROL DE LA OPERACIÓN</div><h2>La orden reúne todo el trabajo</h2><p>Diagnóstico, técnicos, mano de obra, repuestos, fotos, inspección y total estimado en un mismo lugar.</p></div><div className="auto-order-stage"><div className="auto-product-window auto-order-window"><Screenshot src="orden_de_trabajo_detalle.png" alt="Detalle de una orden de trabajo en ProVenta Auto" /></div><div className="auto-phone-frame auto-order-phone"><Screenshot src="ordenes_celular.jpeg" alt="Listado de órdenes de trabajo desde el celular" /></div></div><div className="row g-4 auto-benefit-grid">{benefits.map(([icon, title, text]) => <div className="col-md-6 col-lg-4" key={title}><article className="auto-benefit-card"><i className={`bx ${icon}`} /><div><h3>{title}</h3><p>{text}</p></div></article></div>)}</div></div></section>

      <section className="auto-section overflow-hidden"><div className="container"><div className="row align-items-center gy-5"><div className="col-lg-5"><div className="auto-kicker">HISTORIAL Y SEGUIMIENTO</div><h2>Convierte cada visita en la próxima oportunidad</h2><p className="auto-section-copy">Consulta el historial completo del vehículo y organiza mantenimientos próximos, urgentes o vencidos. Cuando llega el momento, contacta al cliente con toda la información a mano.</p><div className="auto-metric-row"><div><strong>Historial</strong><span>por vehículo</span></div><div><strong>Alertas</strong><span>por fecha o kilometraje</span></div></div></div><div className="col-lg-7"><div className="auto-history-collage"><div className="auto-product-window auto-history-desktop"><Screenshot src="historial_vehiculo_mantenimientos_reparaciones.png" alt="Historial completo de mantenimientos y reparaciones" /></div><div className="auto-phone-frame auto-history-phone"><Screenshot src="historial_vehiculo_celular.jpeg" alt="Historial del vehículo en el celular" /></div></div></div></div><div className="auto-followup-window auto-product-window"><Screenshot src="seguimiento_mantenimientos.png" alt="Seguimiento de mantenimientos próximos y vencidos" /></div></div></section>

      <section className="auto-section auto-faq-section"><div className="container"><div className="row justify-content-center"><div className="col-lg-9"><div className="auto-section-heading text-center"><div className="auto-kicker">PREGUNTAS FRECUENTES</div><h2>Conoce ProVenta Auto</h2></div><div className="accordion auto-accordion" id="faqAuto">{faqs.map(([question, answer], index) => <div className="accordion-item" key={question}><h3 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#auto-faq-${index}`} aria-expanded="false" aria-controls={`auto-faq-${index}`}>{question}</button></h3><div id={`auto-faq-${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAuto"><div className="accordion-body">{answer}</div></div></div>)}</div></div></div></div></section>

      <section className="auto-cta"><div className="container"><div className="auto-cta-card text-center"><div className="auto-cta-icon"><i className="bx bx-car" /></div><h2>Recibe tu próximo vehículo con ProVenta Auto</h2><p>Organiza el taller, documenta cada detalle y mantén a tu equipo conectado desde cualquier dispositivo.</p><div className="auto-actions justify-content-center"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="auto-btn auto-btn-primary"><i className="bx bxl-whatsapp" /> Hablar con un asesor</a><a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="auto-btn auto-btn-ghost"><i className="bx bxl-play-store" /> Descargar aplicación</a></div></div></div></section>
    </main><Footer /></div><WhatsAppButton /><ShareButton />
  </>;
};

export default ProventaAuto;
