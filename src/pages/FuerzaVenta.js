import "../App.css";
import "./FuerzaVenta.css";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const demoSteps = [
  ["bx-user-plus", "Crea tu vendedor", "Registra al miembro de tu equipo comercial."],
  ["bx-key", "Asigna su usuario", "Dale acceso seguro a ProVenta Móvil."],
  ["bx-mobile-alt", "Toma el pedido", "Visita al cliente y registra el pedido desde Android."],
  ["bx-cloud-upload", "Llega a ProVenta", "La oficina lo recibe sin volver a digitar."],
  ["bx-package", "Procesa y despacha", "Prepara la mercancía con toda la información."],
  ["bx-receipt", "Convierte en factura", "Continúa la operación en ProVenta Desktop."],
  ["bx-dollar-circle", "Calcula la comisión", "Aplica el porcentaje del vendedor automáticamente."],
  ["bx-line-chart", "Actualiza la meta", "Mide progreso, conversión y resultados al instante."],
];

const ecosystem = [
  ["bx-group", "Clientes"], ["bx-cube", "Productos e inventario"],
  ["bx-cart", "Pedidos"], ["bx-receipt", "Facturación / e-CF"],
  ["bx-money", "Comisiones"], ["bx-target-lock", "Metas"], ["bx-bar-chart-alt-2", "Reportes"],
];

const businessTypes = [
  ["bx-buildings", "Distribuidoras", "Toma pedidos durante las visitas y envíalos directamente a administración."],
  ["bx-store", "Surtidoras", "Controla la operación comercial de todo tu equipo mientras atiende clientes."],
  ["bx-package", "Importadoras y mayoristas", "Conecta tus vendedores con productos, inventario, pedidos y facturación."],
  ["bx-truck", "Suplidores", "Gestiona vendedores que atienden una cartera recurrente de clientes."],
  ["bx-walk", "Equipos de venta en campo", "Para empresas cuyos vendedores visitan clientes y toman pedidos fuera del establecimiento."],
];

const demoUrl = "https://wa.me/18097874963?text=Hola%2C%20quiero%20solicitar%20una%20demostraci%C3%B3n%20de%20Fuerza%20de%20Ventas%20con%20ProVenta.";

function ScreenFrame({ src, alt, className = "" }) {
  return <div className={`fv-screen ${className}`}><div className="fv-screen-bar"><i></i><i></i><i></i><span>ProVenta</span></div><img src={src} alt={alt} loading="lazy" /></div>;
}

export default function FuerzaVenta() {
  const helmetContext = {};
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Fuerza de Ventas con ProVenta", applicationCategory: "BusinessApplication", operatingSystem: "Windows, Android", url: "https://www.proventa.app/fuerza-de-venta/", description: "Sistema para vendedores de campo que conecta pedidos móviles, facturación, comisiones, metas y reportes en República Dominicana.", offers: { "@type": "Offer", category: "Software comercial" } };

  return <HelmetProvider context={helmetContext}>
    <Helmet>
      <title>Software para Fuerza de Ventas y Pedidos Móviles | ProVenta</title>
      <meta name="description" content="Tus vendedores toman pedidos desde el celular y ProVenta conecta facturación, comisiones, metas y reportes para distribuidoras y surtidoras en República Dominicana." />
      <link rel="canonical" href="https://www.proventa.app/fuerza-de-venta/" />
      <meta property="og:type" content="website" /><meta property="og:locale" content="es_DO" />
      <meta property="og:title" content="Fuerza de Ventas con ProVenta" />
      <meta property="og:description" content="Tu equipo vende. ProVenta conecta pedidos, despacho, facturas, comisiones, metas y reportes." />
      <meta property="og:url" content="https://www.proventa.app/fuerza-de-venta/" />
      <meta property="og:image" content="https://www.proventa.app/assets/img/fuerza-venta/dashboard-fuerza-venta.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    <div className="fv-page"><main className="page-wrapper" id="top">
      <Header />
      <section className="fv-hero">
        <div className="fv-orb fv-orb-a"></div><div className="fv-orb fv-orb-b"></div>
        <div className="container position-relative"><div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="fv-kicker"><i className="bx bx-check-circle"></i> Incluida con ProVenta</span>
            <h1>Fuerza de Ventas <span>con ProVenta</span></h1>
            <p className="fv-hero-line">Tu equipo vende. <strong>ProVenta conecta todo lo demás.</strong></p>
            <p className="fv-hero-copy">Tus vendedores toman pedidos desde el móvil; tú controlas sus metas, conviertes pedidos en facturas, calculas comisiones y analizas sus resultados.</p>
            <div className="fv-actions"><a className="btn btn-primary btn-lg" href={demoUrl} target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp"></i> Solicitar una demostración</a><Link className="btn btn-outline-light btn-lg" to="/android/">Conocer ProVenta Móvil</Link></div>
            <div className="fv-proof"><span><i className="bx bxl-android"></i> Android</span><span><i className="bx bx-buildings"></i> Operación conectada</span><span><i className="bx bx-map"></i> Hecho en RD</span></div>
          </div>
          <div className="col-lg-6"><div className="fv-hero-product"><ScreenFrame src="/assets/img/fuerza-venta/dashboard-fuerza-venta.png" alt="Dashboard real de Fuerza de Ventas de ProVenta con ventas, metas y comisiones" /><div className="fv-live-card"><i className="bx bx-radio-circle-marked"></i><span>OPERACIÓN EN VIVO<strong>95% de la meta</strong></span></div></div></div>
        </div></div>
      </section>

      <section className="fv-flow-section" aria-labelledby="flow-title"><div className="container">
        <div className="fv-heading"><span>EL PROCESO COMPLETO</span><h2 id="flow-title">De la visita al cliente hasta la comisión</h2><p>Un mismo recorrido, sin saltos ni doble digitación. Mira cómo cada acción alimenta la siguiente.</p></div>
        <div className="fv-flow">{demoSteps.map(([icon,title,text],i)=><article key={title}><div className="fv-step-number">{String(i+1).padStart(2,"0")}</div><i className={`bx ${icon}`}></i><h3>{title}</h3><p>{text}</p>{i<demoSteps.length-1 && <b className="bx bx-right-arrow-alt" aria-hidden="true"></b>}</article>)}</div>
        <div className="fv-flow-result"><i className="bx bx-check-shield"></i><strong>Resultado:</strong> sabes qué vendió cada persona, cuánto facturó, qué comisión le corresponde y cuánto le falta para llegar a su meta.</div>
      </div></section>

      <section className="fv-mobile-section"><div className="container"><div className="row align-items-center g-5">
        <div className="col-lg-5 order-2 order-lg-1"><div className="fv-phone-gallery"><img src="/assets/img/fuerza-venta/registro-pedido-movil.png" alt="Registro de un pedido con productos desde ProVenta Móvil" loading="lazy"/><img src="/assets/img/fuerza-venta/listado-pedidos-movil.png" alt="Listado de pedidos enviados desde ProVenta Móvil" loading="lazy"/></div></div>
        <div className="col-lg-6 offset-lg-1 order-1 order-lg-2"><span className="fv-label">PROVENTA MÓVIL</span><h2>El vendedor toma el pedido frente al cliente. La oficina lo recibe en ProVenta.</h2><p className="lead">Clientes, productos, precios y pedidos viajan con tu equipo comercial. El vendedor trabaja desde Android con la información que necesita para cerrar la venta.</p>
          <div className="fv-mini-features"><span><i className="bx bx-group"></i> Clientes</span><span><i className="bx bx-cube"></i> Productos</span><span><i className="bx bx-cart"></i> Pedidos</span><span><i className="bx bx-send"></i> Envío a oficina</span></div>
          <div className="fv-before-after"><div><small>ANTES</small><p>WhatsApp → recibir → volver a digitar → facturar</p></div><i className="bx bx-right-arrow-alt"></i><div><small>CON PROVENTA</small><p>Pedido móvil → flujo directo del sistema</p></div></div>
        </div>
      </div></div></section>

      <section className="fv-bluetooth"><div className="container"><div className="fv-bluetooth-card"><div className="fv-bluetooth-icon"><i className="bx bx-bluetooth"></i><span></span></div><div><span className="fv-label">MOVILIDAD EN CAMPO</span><h2>Imprime vía Bluetooth desde el celular</h2><p>Tu vendedor puede usar una impresora Bluetooth compatible para entregar el comprobante al cliente en el momento. Más autonomía, menos vueltas a la oficina.</p></div><div className="fv-ticket"><i className="bx bx-printer"></i><span>PEDIDO #97</span><strong>RD$44,067.80</strong><small>Impreso desde ProVenta Móvil</small></div></div></div></section>

      <section className="fv-desktop"><div className="container"><div className="fv-heading"><span>PEDIDO → FACTURA</span><h2>La venta continúa dentro del mismo ecosistema</h2><p>El pedido móvil llega a ProVenta Desktop listo para procesar, despachar y facturar. No tienes que registrar la venta otra vez.</p></div>
        <div className="fv-order-pipeline"><span><i className="bx bx-inbox"></i> Pedido recibido</span><b></b><span><i className="bx bx-cog"></i> Procesar</span><b></b><span><i className="bx bx-package"></i> Despachar</span><b></b><span><i className="bx bx-receipt"></i> Facturar / e-CF</span></div>
        <div className="fv-desktop-screens"><ScreenFrame src="/assets/img/fuerza-venta/lista-pedidos-desktop.png" alt="Pedidos móviles recibidos en la lista de ventas de ProVenta Desktop"/><ScreenFrame src="/assets/img/fuerza-venta/facturacion-pedido.png" alt="Pedido de un vendedor convertido en factura dentro de ProVenta"/></div>
      </div></section>

      <section className="fv-performance"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-5"><span className="fv-label">METAS Y COMISIONES</span><h2>Deja de calcular el rendimiento a mano</h2><p className="lead">ProVenta convierte cada factura válida en información útil para administrar a tu equipo.</p><ul className="fv-check-list"><li>Meta mensual general e individual</li><li>Ventas acumuladas y monto restante</li><li>Porcentaje alcanzado por vendedor</li><li>Comisión por vendedor y por producto</li><li>Conversión de pedidos en facturas</li></ul></div>
        <div className="col-lg-7"><div className="fv-goal-card"><div><span>Meta septiembre</span><strong>RD$185,000 <small>/ RD$200,000</small></strong></div><b>92.5%</b><div className="fv-progress"><i></i></div><p><i className="bx bx-trending-up"></i> A solo RD$15,000 de la meta</p></div><div className="fv-commission-flow"><div><i className="bx bx-receipt"></i><span>Factura</span></div><b className="bx bx-right-arrow-alt"></b><div><i className="bx bx-user-check"></i><span>Vendedor identificado</span></div><b className="bx bx-right-arrow-alt"></b><div><i className="bx bx-dollar-circle"></i><span>Comisión calculada</span></div></div></div>
      </div></div></section>

      <section className="fv-dashboard"><div className="container"><div className="fv-heading fv-heading-light"><span>CONTROL PARA ADMINISTRACIÓN</span><h2>Todo tu equipo, en una sola vista</h2><p>Ventas, metas, comisiones, pedidos y evolución diaria para tomar decisiones con datos reales.</p></div><ScreenFrame className="fv-dashboard-screen" src="/assets/img/fuerza-venta/dashboard-fuerza-venta.png" alt="Dashboard de Fuerza de Ventas con ventas del mes, meta mensual, comisiones y progreso por vendedor"/><div className="fv-dashboard-tags"><span>Ventas</span><span>Meta mensual</span><span>% cumplimiento</span><span>Comisiones</span><span>Pedidos</span><span>Conversión</span><span>Evolución</span></div></div></section>

      <section className="fv-ecosystem"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-5"><span className="fv-label">TODO CONECTADO</span><h2>No es una aplicación aislada para vendedores.</h2><p className="lead">La Fuerza de Ventas forma parte de ProVenta. La misma información que usa administración, inventario y facturación se conecta con el trabajo de cada vendedor.</p><blockquote>ProVenta conecta la operación que termina produciendo la factura.</blockquote></div><div className="col-lg-7"><div className="fv-ecosystem-flow">{ecosystem.map(([icon,label],i)=><div key={label}><span><i className={`bx ${icon}`}></i>{label}</span>{i<ecosystem.length-1&&<b className="bx bx-down-arrow-alt"></b>}</div>)}</div></div></div></div></section>

      <section className="fv-businesses" aria-labelledby="businesses-title"><div className="container">
        <div className="fv-heading"><span>HECHO PARA TU OPERACIÓN</span><h2 id="businesses-title">Hecho para empresas que venden fuera del mostrador</h2><p>Si tu equipo visita clientes, toma pedidos y necesita mantenerse conectado con administración, inventario y facturación, Fuerza de Ventas está hecha para tu operación.</p></div>
        <div className="fv-business-grid">{businessTypes.map(([icon,title,text])=><article key={title}><i className={`bx ${icon}`}></i><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div></section>

      <section className="fv-final"><div className="container"><div className="fv-final-shell"><span>FUERZA DE VENTAS INCLUIDA CON PROVENTA</span><h2>¿Tienes vendedores tomando pedidos en la calle?</h2><p>Conecta tu equipo comercial con clientes, productos, pedidos, facturación, comisiones y metas desde ProVenta.</p><div className="fv-actions justify-content-center"><a className="btn btn-primary btn-lg" href={demoUrl} target="_blank" rel="noreferrer"><i className="bx bxl-whatsapp"></i> Solicitar una demostración</a><Link className="btn btn-outline-light btn-lg" to="/android/">Ver ProVenta Móvil</Link></div></div></div></section>
      <Footer />
    </main></div>
  </HelmetProvider>;
}
