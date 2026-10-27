import React from "react";
import { Link } from "react-router-dom";

const Header = ({ dark = true }) => {
    return (
        <header className={`header navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} position-absolute w-100 navbar-sticky`}>
            <div className="container px-3">
                <Link to="/" className="navbar-brand pe-3">
                    <img
                        src="/assets/img/logo-bg-black.png"
                        width="47"
                        alt="ProVenta"
                    />
                    ProVenta
                </Link>

                {/* Desktop Menu */}
                <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
                    <div className="offcanvas-header border-bottom border-light">
                        <h5 className="offcanvas-title text-white">Menu</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pos/" className="nav-link">POS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/proventa-kiosko/" className="nav-link">Kiosko</Link>
                            </li>
                            <li className="nav-item dropdown proventa-func-nav">
                                {/* Desktop dropdown toggle */}
                                <button
                                    className="nav-link dropdown-toggle bg-transparent border-0 d-none d-lg-inline-block"
                                    id="navbarDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Funcionalidades
                                </button>

                                {/* Mobile section title (always open) */}
                                <div className="d-lg-none pt-2 pb-1 px-1">
                                    <span className="text-uppercase fw-bold text-light opacity-50" style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                                        Funcionalidades
                                    </span>
                                </div>

                                <ul className="dropdown-menu dropdown-menu-dark show-on-mobile" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/pos/">Punto de Venta (POS)</Link></li>
                                    <li><Link className="dropdown-item" to="/funcionalidades/teclas-rapidas/">Teclas Rápidas (POS)</Link></li>
                                    <li><Link className="dropdown-item" to="/android/">Versión Android</Link></li>
                                    <li><Link className="dropdown-item" to="/funcionalidades/facturacion-electronica/">Facturación Electrónica</Link></li>
                                    <li><Link className="dropdown-item" to="/funcionalidades/ordenes-de-compra/">Órdenes de Compra</Link></li>
                                    <li><Link className="dropdown-item" to="/fuerza-de-venta/">Fuerza de Ventas</Link></li>
                                    <li><Link className="dropdown-item" to="/proventa-auto/">ProVenta Auto</Link></li>
                                    <li><Link className="dropdown-item" to="/proventa-reparaciones/">ProVenta Reparaciones</Link></li>
                                    <li><Link className="dropdown-item" to="/proventa-kiosko/">ProVenta Kiosko</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#modulos">Todos los módulos</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/planes/">Planes</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog/">Blog</Link>
                            </li>
                        </ul>

                        <div className="d-lg-none mt-3">
                            <a href="https://wa.me/18097874963" className="btn btn-primary w-100 mb-2">
                                <i className="bx bxl-whatsapp fs-4 me-2"></i> (809) 787-4963
                            </a>
                            <Link to="/como-instalar-proventa/" className="btn btn-outline-light w-100">
                                ¿Cómo instalar?
                            </Link>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Desktop Buttons */}
                <div className="d-none d-lg-flex align-items-center gap-2">
                    <Link
                        to="/como-instalar-proventa/"
                        className="btn btn-outline-light btn-sm fs-sm rounded"
                    >
                        ¿Cómo instalar?
                    </Link>
                    <a
                        href="https://wa.me/18097874963"
                        className="btn btn-primary btn-sm fs-sm rounded"
                    >
                        <i className="bx bxl-whatsapp fs-5 me-1"></i>
                        (809) 787-4963 / (809) 883-0911
                    </a>
                </div>
            </div>
        
            {/* Estilo para mantener desplegado el menú de funcionalidades en móviles */}
            <style>{`
                @media (max-width: 991.98px) {
                    .proventa-func-nav .show-on-mobile {
                        display: block !important;
                        position: static !important;
                        background: rgba(255, 255, 255, 0.03) !important;
                        border: 1px solid rgba(255, 255, 255, 0.08) !important;
                        border-radius: 12px !important;
                        padding: 8px 6px !important;
                        margin: 4px 0 12px 0 !important;
                        box-shadow: none !important;
                    }
                    .proventa-func-nav .show-on-mobile .dropdown-item {
                        padding: 7px 12px !important;
                        border-radius: 6px !important;
                        font-size: 0.92rem !important;
                    }
                    .proventa-func-nav .show-on-mobile .dropdown-item:active,
                    .proventa-func-nav .show-on-mobile .dropdown-item:hover {
                        background: rgba(99, 102, 241, 0.15) !important;
                        color: #fff !important;
                    }
                }
            `}</style>

        </header>
    );
};

export default Header;
