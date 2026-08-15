import { useState } from "react";

const areas = [
  ["Ventas", "bx-receipt", ["Facturas y cotizaciones", "Pedidos y conduces", "Ventas a crédito", "Notas de crédito y devoluciones"]],
  ["Inventario", "bx-package", ["Kardex y stock mínimo", "Variantes e imágenes", "Costos y movimientos", "Control por sucursal"]],
  ["Compras", "bx-cart-alt", ["Proveedores y órdenes", "Recepción total o parcial", "Compras multimoneda", "Cuentas por pagar y abonos"]],
  ["Caja", "bx-wallet", ["Apertura y cierre", "Movimientos de caja", "Métodos de pago", "Control por cajero y turno"]],
  ["Clientes", "bx-user-circle", ["Historial de compras", "Estados de cuenta", "Créditos y pagos", "Documentos por WhatsApp"]],
  ["Administración", "bx-group", ["Usuarios, roles y permisos", "Comisiones", "Auditoría de operaciones", "Control por sucursal"]],
  ["Reportes", "bx-line-chart", ["Ventas y ganancias", "Gastos y rentabilidad", "Inventario sin stock", "Rendimiento del negocio"]],
];

function BusinessControl() {
  const [active, setActive] = useState(0);
  const [title, icon, items] = areas[active];

  return (
    <div className="pv-control-shell">
      <div className="pv-control-nav" role="tablist" aria-label="Áreas de ProVenta">
        {areas.map(([name, areaIcon], index) => (
          <button key={name} type="button" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
            <i className={`bx ${areaIcon}`}></i><span>{name}</span><i className="bx bx-chevron-right"></i>
          </button>
        ))}
      </div>
      <article className="pv-control-panel" role="tabpanel">
        <div className="pv-control-copy"><span>ÁREA DE {title.toUpperCase()}</span><h3>{title} conectado con todo</h3><p>Cada operación actualiza automáticamente la información relacionada para que tu equipo trabaje con datos consistentes.</p><div className="pv-control-items">{items.map(item => <div key={item}><i className="bx bx-check"></i>{item}</div>)}</div></div>
        <div className="pv-control-visual"><div className="pv-mini-window"><div><span></span><span></span><span></span></div><i className={`bx ${icon}`}></i><strong>{title}</strong><small>Información actualizada</small><div className="pv-mini-bars"><span></span><span></span><span></span><span></span></div></div></div>
      </article>
    </div>
  );
}

export default BusinessControl;
