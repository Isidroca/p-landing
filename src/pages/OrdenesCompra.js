import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const features = [
  ["bx-edit", "#818cf8", "Borradores que puedes retomar", "Crea, revisa y guarda borradores. Reabre una orden pendiente cuando quieras para corregirla, completarla o continuar el proceso."],
  ["bx-money", "#22c55e", "Multimoneda: peso, dólar y yuan", "Registra compras en pesos dominicanos (DOP), dólares estadounidenses (USD) o yuanes chinos (CNY), según la moneda de cada proveedor."],
  ["bx-file", "#38bdf8", "Orden de compra en PDF", "Genera un PDF profesional con productos, cantidades, precios y condiciones para guardar, imprimir o enviar al proveedor."],
  ["bx-package", "#f59e0b", "Recepciones parciales y completas", "Recibe una orden completa o registra entregas parciales. ProVenta mantiene visible qué llegó y qué continúa pendiente."],
  ["bx-refresh", "#f472b6", "Inventario y costos actualizados", "Al recibir la mercancía, actualiza las existencias y los costos de los productos para mantener información precisa."],
  ["bx-receipt", "#a78bfa", "Creación de cuentas por pagar", "Convierte la compra recibida en una cuenta por pagar (CxP) para controlar el compromiso con el proveedor y su vencimiento."],
  ["bx-wallet", "#2dd4bf", "Pagos y abonos parciales", "Registra el pago completo de la cuenta o realiza abonos parciales hasta saldarla, conservando el balance pendiente."],
];

const steps = [
  ["01", "bx-edit", "Crea o guarda un borrador", "Prepara la orden en pesos, dólares o yuanes y guárdala para revisarla o continuar más adelante."],
  ["02", "bx-file", "Genera y envía el PDF", "Confirma la orden y genera un PDF claro para compartir con el proveedor."],
  ["03", "bx-package", "Registra la recepción", "Recibe todos los artículos o procesa entregas parciales mientras actualizas inventario y costos."],
  ["04", "bx-wallet", "Controla la cuenta por pagar", "Crea la CxP correspondiente y registra el pago completo o los abonos parciales."],
];

const faqs = [
  ["¿Qué es una orden de compra?", "Es un documento que detalla los productos, cantidades, precios y condiciones solicitados a un proveedor. Formaliza la compra y sirve como referencia al recibir la mercancía."],
  ["¿La orden actualiza el inventario inmediatamente?", "La orden representa una solicitud, no una recepción. Esto permite verificar la mercancía antes de registrar la entrada correspondiente en el inventario."],
  ["¿Qué monedas admite una orden de compra?", "Puedes crear órdenes en pesos dominicanos (DOP), dólares estadounidenses (USD) y yuanes chinos (CNY), una función especialmente útil para compras locales e importaciones."],
  ["¿Puedo guardar y reabrir un borrador?", "Sí. Puedes crear, revisar y guardar la orden como borrador. También puedes reabrir borradores y órdenes pendientes para continuar trabajando en ellas."],
  ["¿Puedo registrar entregas parciales?", "Sí. Puedes recibir una orden completa o registrar varias recepciones parciales. El sistema conserva las cantidades recibidas y las que todavía están pendientes."],
  ["¿Qué sucede con el inventario al recibir la mercancía?", "La recepción actualiza las existencias y los costos de los productos, ayudando a mantener el inventario y la rentabilidad con valores correctos."],
  ["¿La compra genera una cuenta por pagar?", "Sí. Puedes crear la cuenta por pagar del proveedor y luego registrar un pago completo o varios abonos parciales hasta saldar el balance."],
  ["¿Puedo generar la orden en PDF?", "Sí. ProVenta genera un PDF profesional que puedes guardar, imprimir o enviar directamente al proveedor."],
];

const OrdenesCompra = () => (
  <React.Fragment>
    <Helmet>
      <title>Órdenes de Compra y Control de Proveedores | ProVenta</title>
      <meta name="description" content="Crea y administra órdenes de compra en ProVenta. Controla proveedores, productos solicitados, entregas parciales, recepción, costos e inventario desde un solo sistema." />
      <meta name="keywords" content="órdenes de compra, software órdenes de compra, control de proveedores, gestión de compras, recepción de mercancía, inventario República Dominicana" />
      <link rel="canonical" href="https://www.proventa.app/funcionalidades/ordenes-de-compra" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Módulo de Órdenes de Compra de ProVenta", applicationCategory: "BusinessApplication", operatingSystem: "Windows", description: "Software para crear, administrar y dar seguimiento a órdenes de compra, proveedores, recepción de mercancía e inventario." })}</script>
    </Helmet>
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Header />
      <main>
        <section className="position-relative overflow-hidden py-5" style={{ marginTop: 80, background: "radial-gradient(ellipse at 18% 45%,rgba(16,185,129,.18),transparent 58%),radial-gradient(ellipse at 85% 10%,rgba(59,130,246,.16),transparent 55%),#0b0f19" }}>
          <div className="container py-lg-5"><div className="row align-items-center gy-5">
            <div className="col-lg-6 text-center text-lg-start">
              <span className="badge rounded-pill px-3 py-2 mb-4" style={{ color: "#6ee7b7", background: "rgba(16,185,129,.13)", border: "1px solid rgba(16,185,129,.28)" }}>GESTIÓN DE COMPRAS</span>
              <h1 className="display-4 fw-bold text-white mb-4">Órdenes de compra <span style={{ background: "linear-gradient(135deg,#34d399,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>claras y bajo control</span></h1>
              <p className="fs-lg text-light opacity-75 mb-4">Planifica lo que necesitas comprar, envía solicitudes profesionales a tus proveedores y verifica cada entrega. ProVenta conecta las órdenes de compra con productos, proveedores e inventario para reducir errores y mejorar el abastecimiento.</p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4"><Link to="/como-instalar-proventa" className="btn btn-lg px-5 py-3 fw-bold rounded-pill text-dark" style={{ background: "linear-gradient(135deg,#34d399,#22d3ee)" }}><i className="bx bx-download me-2" />Descargar ProVenta</Link><a href="https://wa.me/18097874963" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-outline-light border-opacity-25 px-4 py-3 rounded-pill"><i className="bx bxl-whatsapp me-2 text-success" />Solicitar información</a></div>
              <p className="small opacity-50"><i className="bx bx-check-circle text-success me-2" />Prueba gratis por 15 días · Sin tarjeta de crédito</p>
            </div>
            <div className="col-lg-6"><div className="rounded-4 p-4 mx-auto" style={{ maxWidth: 500, background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 30px 80px rgba(0,0,0,.3)" }}>
              <div className="d-flex justify-content-between mb-4"><div><strong className="text-white">Orden #OC-00128</strong><br /><small className="opacity-50">Distribuidora Central, SRL</small></div><span className="badge rounded-pill align-self-start px-3 py-2" style={{ color: "#fbbf24", background: "rgba(245,158,11,.13)" }}>Pendiente</span></div>
              <div className="rounded-3 p-3 mb-3" style={{ background: "rgba(0,0,0,.2)" }}>{[["Café molido 1 lb", "24", "RD$ 6,840"], ["Leche entera 1 L", "48", "RD$ 3,840"], ["Azúcar crema 5 lb", "12", "RD$ 2,760"]].map(r => <div className="row py-2 border-bottom border-light border-opacity-10 small" key={r[0]}><div className="col-7">{r[0]}</div><div className="col-2 opacity-50">x{r[1]}</div><div className="col-3 text-end">{r[2]}</div></div>)}</div>
              <div className="d-flex justify-content-between"><small className="opacity-50">Entrega esperada<br /><span className="text-light">12 de agosto, 2026</span></small><div className="text-end"><small className="opacity-50">Total</small><h4 className="text-white">RD$ 13,440</h4></div></div>
            </div></div>
          </div></div>
        </section>

        <section className="py-4" style={{ background: "linear-gradient(90deg,rgba(16,185,129,.1),rgba(14,165,233,.1))", borderBlock: "1px solid rgba(255,255,255,.07)" }}>
          <div className="container">
            <div className="row g-3 text-center">
              {[["bx-money", "Multimoneda", "PESO · DÓLAR · YUAN"], ["bx-file", "Orden en PDF", "Lista para enviar"], ["bx-package", "Recepciones", "Parciales o completas"], ["bx-wallet", "Cuentas por pagar", "Pagos y abonos"]].map(item => <div className="col-6 col-lg-3" key={item[1]}><div className="h-100 p-3"><i className={`bx ${item[0]} fs-2 text-success mb-2`} /><div className="text-white fw-bold">{item[1]}</div><small className="opacity-60">{item[2]}</small></div></div>)}
            </div>
          </div>
        </section>

        <section className="container py-5 my-lg-4"><div className="text-center mb-5"><span className="badge bg-primary bg-opacity-10 text-info rounded-pill px-3 py-2 mb-3">TODO EN UN SOLO LUGAR</span><h2 className="display-5 text-white">Funciones para comprar mejor</h2><p className="fs-lg opacity-60">Desde la solicitud hasta la recepción, cada paso queda registrado para tu equipo.</p></div><div className="row g-4">{features.map(f => <div className="col-md-6 col-lg-4" key={f[2]}><article className="h-100 p-4 rounded-4" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.075)" }}><div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 52, height: 52, background: `${f[1]}1f` }}><i className={`bx ${f[0]} fs-3`} style={{ color: f[1] }} /></div><h3 className="h5 text-white">{f[2]}</h3><p className="opacity-60 mb-0">{f[3]}</p></article></div>)}</div></section>

        <section className="py-5" style={{ background: "rgba(255,255,255,.02)", borderBlock: "1px solid rgba(255,255,255,.06)" }}><div className="container py-lg-4"><div className="row align-items-center gy-5"><div className="col-lg-6"><span className="badge rounded-pill px-3 py-2 mb-3" style={{ color: "#6ee7b7", background: "rgba(16,185,129,.12)" }}>CONTROL Y TRAZABILIDAD</span><h2 className="display-5 text-white mb-4">Menos compras improvisadas, más información para decidir</h2><p className="opacity-65">Cuando las solicitudes se manejan por mensajes, llamadas o papeles sueltos, es fácil duplicar pedidos, olvidar productos o aceptar cantidades incorrectas. ProVenta crea un proceso uniforme para saber qué se pidió, a quién, cuándo y por cuánto.</p><p className="opacity-65">Al recibir la mercancía puedes contrastarla con la orden original. Así identificas faltantes, cambios de costo y entregas parciales, mientras conservas un historial útil para futuras reposiciones y negociaciones.</p></div><div className="col-lg-5 offset-lg-1">{["Evita pedidos duplicados", "Controla fechas de entrega", "Revisa costos y descuentos", "Identifica entregas parciales", "Repón productos a tiempo"].map(x => <div className="p-3 rounded-3 mb-3 d-flex gap-3" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }} key={x}><i className="bx bx-check-circle fs-4 text-success" /><strong>{x}</strong></div>)}</div></div></div></section>

        <section className="container py-5 my-lg-4"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3 text-info bg-info bg-opacity-10">FLUJO COMPLETO</span><h2 className="display-5 text-white">De la orden al pago del proveedor</h2><p className="fs-lg opacity-60">Todo el ciclo de compra conectado, sin perder el control entre una etapa y la siguiente.</p></div><div className="row g-4">{steps.map(s => <div className="col-md-6 col-lg-3" key={s[0]}><div className="h-100 p-4 rounded-4 position-relative" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}><span className="position-absolute end-0 top-0 p-3 opacity-25 fw-bold">{s[0]}</span><i className={`bx ${s[1]} fs-1 text-info mb-3`} /><h3 className="h5 text-white">{s[2]}</h3><p className="small opacity-60">{s[3]}</p></div></div>)}</div></section>

        <section className="py-5" style={{ background: "rgba(255,255,255,.02)" }}><div className="container"><div className="row justify-content-center"><div className="col-lg-8"><div className="text-center mb-5"><span className="badge rounded-pill px-3 py-2 mb-3" style={{ color: "#c4b5fd", background: "rgba(139,92,246,.13)" }}>PREGUNTAS FRECUENTES</span><h2 className="display-5 text-white">Todo sobre las órdenes de compra</h2></div><div className="accordion" id="faqOrdenes">{faqs.map((f, i) => <div className="accordion-item border-0 rounded-4 mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,.04)" }} key={f[0]}><h3 className="accordion-header"><button className="accordion-button collapsed shadow-none text-white fw-semibold" style={{ background: "transparent" }} type="button" data-bs-toggle="collapse" data-bs-target={`#oc-faq-${i}`}>{f[0]}</button></h3><div id={`oc-faq-${i}`} className="accordion-collapse collapse" data-bs-parent="#faqOrdenes"><div className="accordion-body opacity-70 pt-0">{f[1]}</div></div></div>)}</div></div></div></div></section>

        <section className="py-5" style={{ background: "linear-gradient(135deg,#047857,#0369a1)" }}><div className="container text-center py-4"><i className="bx bx-cart-add text-white mb-3" style={{ fontSize: 60 }} /><h2 className="display-5 fw-bold text-white">Organiza tus próximas compras con ProVenta</h2><p className="fs-lg text-white opacity-75 mx-auto mb-4" style={{ maxWidth: 620 }}>Descarga ProVenta, prueba el sistema gratis durante 15 días y lleva proveedores, compras e inventario en un solo lugar.</p><Link to="/como-instalar-proventa" className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill text-success"><i className="bx bx-download me-2" />Descargar gratis</Link></div></section>
      </main>
      <Footer />
    </div>
    <WhatsAppButton />
  </React.Fragment>
);

export default OrdenesCompra;
