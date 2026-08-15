import InvoiceSlider from "./buttons/general/invoice-slider";

export const faqItems = [
  ["¿ProVenta permite facturación electrónica con la DGII?", "Sí. ProVenta integra la emisión y el seguimiento de comprobantes fiscales electrónicos e-CF dentro del flujo de facturación habitual."],
  ["¿Puedo usar lectores de código de barras?", "Sí. El punto de venta permite localizar y facturar productos utilizando lectores de código de barras."],
  ["¿Puedo importar mis productos desde Excel?", "Sí. Durante la configuración puedes importar tu inventario inicial desde un archivo de Excel."],
  ["¿ProVenta permite facturar en dólares?", "Sí. Puedes crear cotizaciones y facturas en DOP, USD y EUR utilizando la tasa de cambio correspondiente."],
  ["¿Puedo utilizar ProVenta desde el celular?", "Sí. ProVenta cuenta con una aplicación Android nativa para consultar el negocio y continuar operando desde el móvil."],
  ["¿Puedo enviar facturas y cotizaciones por WhatsApp?", "Sí. Los documentos pueden generarse en PDF y compartirse con tus clientes por WhatsApp."],
  ["¿ProVenta sirve para colmados, ferreterías y talleres?", "Sí. ProVenta adapta sus flujos de facturación, inventario y operación a negocios de distintos sectores."],
  ["¿Qué necesito para comenzar?", "Puedes descargar ProVenta, registrar tu negocio y configurar inventario y comprobantes. El equipo de ProVenta puede acompañarte durante la configuración inicial."],
  ["¿ProVenta incluye capacitación?", "Sí. Se ofrece capacitación práctica para ayudar a tu equipo a comenzar a facturar con confianza."],
  ["¿Existen contratos a largo plazo?", "Consulta las condiciones vigentes con el equipo de ProVenta antes de contratar un plan."],
  ["¿Cómo puedo cancelar mi suscripción?", "Puedes solicitar la cancelación de tu suscripción comunicándote con el equipo de ProVenta."],
];

function LandingConversion({ onDownload }) {
  return <>
    <section className="pv-section pv-documents">
      <div className="container"><div className="pv-heading"><span className="pv-eyebrow">IMAGEN PROFESIONAL</span><h2>Documentos que representan tu negocio</h2><p>Crea documentos claros y profesionales, listos para imprimir, convertir a PDF o compartir con tus clientes.</p></div><div className="pv-doc-shell"><div className="pv-doc-labels">{["Factura", "Cotización", "Conduce", "Estado de cuenta", "Ticket", "Orden de compra"].map((x,i)=><span className={i===0?"active":""} key={x}>{x}</span>)}</div><InvoiceSlider /></div><div className="pv-doc-benefits">{["PDF", "Impresión", "WhatsApp", "Firma y sello", "Imágenes de productos"].map(x=><span key={x}><i className="bx bx-check-circle"></i>{x}</span>)}</div></div>
    </section>
    <section className="pv-section pv-onboarding"><div className="container"><div className="row align-items-end mb-5"><div className="col-lg-7"><span className="pv-eyebrow">COMIENZA SIN COMPLICACIONES</span><h2>Te ayudamos a poner ProVenta en marcha</h2></div><div className="col-lg-5"><p>No tienes que hacerlo solo. Te acompañamos en la configuración inicial para que puedas comenzar a facturar con confianza.</p></div></div><div className="pv-steps">{[["01","Configuración del negocio"],["02","Importación desde Excel"],["03","Configuración fiscal"],["04","Capacitación del equipo"]].map(([n,t])=><article key={n}><span>{n}</span><h3>{t}</h3><i className="bx bx-right-arrow-alt"></i></article>)}</div><div className="pv-local-support"><i className="bx bx-headphone"></i><strong>Soporte local en español</strong><span>Personas reales para ayudarte a operar con confianza.</span></div></div></section>
    <section className="pv-section pv-faq"><div className="container"><div className="row g-5"><div className="col-lg-4"><span className="pv-eyebrow">PREGUNTAS FRECUENTES</span><h2>Todo claro antes de comenzar</h2><p>Respuestas breves sobre el software de facturación, POS, inventario y acompañamiento.</p><a href="https://wa.me/18097874963" target="_blank" rel="noreferrer" className="btn btn-outline-primary">Hacer otra pregunta</a></div><div className="col-lg-8"><div className="accordion pv-faq-list" id="pv-faq">{faqItems.map(([q,a],i)=><div className="accordion-item" key={q}><h3 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#pv-faq-${i}`} aria-expanded="false" aria-controls={`pv-faq-${i}`}>{q}</button></h3><div id={`pv-faq-${i}`} className="accordion-collapse collapse" data-bs-parent="#pv-faq"><div className="accordion-body">{a}</div></div></div>)}</div></div></div></div></section>
    <section className="pv-final-cta"><div className="container"><div className="pv-cta-shell"><span>15 DÍAS PARA DESCUBRIR PROVENTA</span><h2>Empieza a controlar tu negocio con ProVenta</h2><p>Prueba la facturación, el POS, el inventario y las herramientas que necesitas para operar con más rapidez.</p><div><a href="/" onClick={onDownload} className="btn btn-light btn-lg"><i className="bx bxl-windows me-2"></i>Probar gratis durante 15 días</a><a href="https://wa.me/18097874963" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg"><i className="bx bxl-whatsapp me-2"></i>Hablar por WhatsApp</a></div></div></div></section>
  </>;
}

export default LandingConversion;
