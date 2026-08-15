import { Link } from "react-router-dom";
import BusinessControl from "./BusinessControl";

const differences = [
  ["bx-bolt-circle", "Factura en segundos con Teclas Rápidas", "Convierte tus productos más vendidos en botones visuales y factura con un toque o mediante atajos de teclado."],
  ["bx-dollar-circle", "Facturación y cotizaciones multimoneda", "Crea cotizaciones y facturas en DOP, USD o EUR utilizando una tasa de cambio editable."],
  ["bx-package", "Compra en cualquier moneda sin perder el control", "Recibe mercancía completa o parcialmente y conecta inventario, costos, cuentas por pagar y abonos."],
  ["bx-file", "Documentos listos para compartir", "Facturas, cotizaciones, conduces, estados de cuenta, órdenes y tickets listos para PDF, impresión o WhatsApp."],
  ["bx-images", "Reconoce tus productos al instante", "Agrega varias imágenes para identificarlos en el POS, inventario y documentos; ideal para repuestos, ropa y ferreterías."],
  ["bxl-android", "Tu negocio también está en tu celular", "Factura, consulta ventas y revisa inventario desde la aplicación Android nativa creada para ProVenta."],
];

const billingModes = [
  ["01", "bx-file-blank", "Facturación estándar", "Para cotizaciones, descripciones detalladas y documentos formales.", ["Cotización a factura", "Productos y servicios", "Conduces y multimoneda"]],
  ["02", "bx-barcode-reader", "Punto de venta POS", "Para cajas que necesitan velocidad, precisión y control continuo.", ["Código de barras", "Cierre de caja", "Inventario en tiempo real"]],
  ["03", "bx-grid-alt", "Teclas rápidas", "Para vender productos frecuentes sin buscarlos uno por uno.", ["Botones visuales", "Atajos de teclado", "Operación táctil"]],
];

const sectors = [
  ["bx-store", "Supermercados y colmados", "Código de barras", "Cierre por cajero", "Teclas rápidas"],
  ["bx-wrench", "Ferreterías", "Venta por unidad o medida", "Cotizaciones", "Costos por sucursal"],
  ["bx-car", "Talleres y repuestos", "Recepción de vehículos", "Productos con fotos", "Historial y factura"],
  ["bx-book-open", "Librerías y papelerías", "Catálogo amplio", "Stock mínimo", "Ventas rápidas"],
  ["bx-cut", "Salones y barberías", "Productos y servicios", "Comisiones", "Clientes y créditos"],
  ["bx-buildings", "Tiendas y distribuidores", "Pedidos y cotizaciones", "Multimoneda", "Cuentas por cobrar"],
];

function LandingRedesign() {
  return (
    <div className="landing-redesign">
      <section className="pv-section pv-differences" aria-labelledby="differences-title">
        <div className="pv-orb pv-orb-one"></div><div className="pv-orb pv-orb-two"></div>
        <div className="container">
          <div className="pv-heading">
            <span className="pv-eyebrow">VENTAJAS DE PROVENTA</span>
            <h2 id="differences-title">Diseñado para trabajar como trabaja tu negocio</h2>
            <p>ProVenta combina velocidad en caja, documentos profesionales, control de compras y movilidad en una sola plataforma.</p>
          </div>
          <div className="pv-feature-grid">
            {differences.map(([icon, title, copy], index) => (
              <article className="pv-feature" key={title}>
                <span className="pv-feature-index">0{index + 1}</span>
                <i className={`bx ${icon}`}></i><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="pv-product-stage">
            <div className="pv-browser-bar"><span></span><span></span><span></span><small>ProVenta · Facturación</small></div>
            <img loading="lazy" width="1079" height="680" src="/assets/img/pantalla_facturacion_claro.png" alt="Pantalla del software de facturación ProVenta" />
            <div className="pv-floating-proof"><i className="bx bx-check-circle"></i><div><strong>Todo conectado</strong><small>Ventas · inventario · clientes</small></div></div>
          </div>
        </div>
      </section>

      <section className="pv-section pv-dark" id="pos-inteligente" aria-labelledby="billing-title">
        <div className="pv-dark-grid"></div>
        <div className="container">
          <div className="pv-heading pv-heading-light"><span className="pv-eyebrow">FACTURACIÓN PARA CADA OPERACIÓN</span><h2 id="billing-title">Una forma de facturar para cada tipo de negocio</h2><p>Desde una venta rápida en caja hasta una cotización detallada, utiliza el flujo adecuado para cada operación.</p></div>
          <div className="row g-4">
            {billingModes.map(([number, icon, title, copy, items]) => <div className="col-lg-4" key={title}><article className="pv-mode-card"><div className="pv-mode-top"><span>{number}</span><i className={`bx ${icon}`}></i></div><h3>{title}</h3><p>{copy}</p><ul>{items.map(item => <li key={item}><i className="bx bx-check"></i>{item}</li>)}</ul><div className="pv-mode-line"></div></article></div>)}
          </div>
        </div>
      </section>

      <section className="pv-section" id="modulos" aria-labelledby="control-title">
        <div className="container">
          <div className="pv-heading"><span className="pv-eyebrow">TODO CONECTADO</span><h2 id="control-title">Todo tu negocio en un solo lugar</h2><p>Cada venta, compra y movimiento actualiza la información que necesitas para tomar mejores decisiones.</p></div>
          <BusinessControl />
        </div>
      </section>

      <section className="pv-section pv-fiscal">
        <div className="container"><div className="pv-fiscal-shell"><div className="row align-items-center g-5"><div className="col-lg-6"><span className="pv-eyebrow">FACTURACIÓN ELECTRÓNICA</span><h2>Facturación electrónica integrada con la DGII</h2><p className="lead">Emite comprobantes fiscales electrónicos sin cambiar tu flujo de trabajo, desde el POS o la facturación estándar.</p><div className="pv-checks">{["Emisión y seguimiento de e-CF", "Código QR requerido", "NCF tradicionales y electrónicos", "Disponible para suscriptores activos"].map(x => <span key={x}><i className="bx bx-check-circle"></i>{x}</span>)}</div><Link to="/funcionalidades/facturacion-electronica" className="btn btn-light mt-4">Conocer facturación electrónica <i className="bx bx-right-arrow-alt ms-2"></i></Link></div><div className="col-lg-6"><div className="pv-fiscal-visual"><div className="pv-receipt-head"><i className="bx bx-receipt"></i><b>DGII</b></div><small>COMPROBANTE FISCAL ELECTRÓNICO</small><strong>e-CF recibido correctamente</strong><div className="pv-receipt-lines"><span></span><span></span><span></span></div><div className="pv-status"><i className="bx bx-check"></i> Validado y conectado a ProVenta</div></div></div></div></div></div>
      </section>

      <section className="pv-section pv-auto-detail">
        <div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><div className="pv-auto-visual"><img loading="lazy" width="640" height="480" src="/assets/img/autopartes_pos_high.png" alt="Sistema para talleres ProVenta Auto" /><div className="pv-auto-badge"><i className="bx bx-car"></i><span><small>VEHÍCULO RECIBIDO</small><strong>Historial actualizado</strong></span></div></div></div><div className="col-lg-6"><span className="pv-eyebrow">GESTIÓN PARA TALLERES</span><h2>ProVenta Auto: la historia clínica de cada vehículo</h2><p>Recibe vehículos desde el móvil, registra fotografías, servicios y seguimiento del trabajo realizado. Todo conectado con clientes, inventario y facturación.</p><div className="pv-tags">{["Placa y VIN", "Fotografías", "Órdenes de trabajo", "Diagnóstico", "Piezas y mano de obra", "Historial de servicios"].map(x => <span key={x}><i className="bx bx-check"></i>{x}</span>)}</div><Link to="/proventa-auto/" className="btn btn-outline-primary mt-4">Conocer ProVenta Auto <i className="bx bx-right-arrow-alt ms-2"></i></Link></div></div></div>
      </section>

      <section className="pv-section pv-sectors">
        <div className="container"><div className="pv-heading"><span className="pv-eyebrow">SE ADAPTA A TU SECTOR</span><h2>ProVenta se adapta a tu negocio, no al revés</h2><p>Utiliza las herramientas que necesita tu operación sin complicar el trabajo diario de tu equipo.</p></div><div className="row g-4">{sectors.map(([icon, title, ...items], index) => <div className="col-md-6 col-lg-4" key={title}><article><div className="pv-sector-top"><i className={`bx ${icon}`}></i><span>0{index + 1}</span></div><h3>{title}</h3><ul>{items.map(x => <li key={x}><i className="bx bx-check"></i>{x}</li>)}</ul></article></div>)}</div></div>
      </section>

      <section className="pv-section pv-mobile pv-dark">
        <div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><span className="pv-eyebrow">APLICACIÓN MÓVIL NATIVA</span><h2>Lleva ProVenta contigo</h2><p>Consulta tu negocio y continúa operando desde una aplicación Android creada especialmente para ProVenta.</p><div className="row g-3 mt-3"><div className="col-sm-6"><div className="pv-mobile-list"><h3>Para propietarios</h3><span>Dashboard y ventas</span><span>Inventario y kardex</span><span>Clientes y movimientos</span></div></div><div className="col-sm-6"><div className="pv-mobile-list"><h3>Para vendedores</h3><span>Facturas y cotizaciones</span><span>Registro de clientes</span><span>Compartir e imprimir</span></div></div></div><a href="https://play.google.com/store/apps/details?id=com.proventa.app" target="_blank" rel="noreferrer" className="btn btn-primary mt-4"><i className="bx bxl-play-store me-2"></i>Descargar para Android</a></div><div className="col-lg-6 pv-phone-stack"><img loading="lazy" width="220" height="470" src="/assets/img/android/pantalla_generar_nueva_factura_android.jpeg" alt="Crear factura desde la aplicación móvil de ProVenta"/><img loading="lazy" width="220" height="470" src="/assets/img/android/dashboard_android_kpis.jpeg" alt="Dashboard de ventas en ProVenta para Android"/></div></div></div>
      </section>
    </div>
  );
}

export default LandingRedesign;
