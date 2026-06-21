import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer py-5 bg-light">
            <div className="container pt-2 pt-sm-4 text-dark">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-xl-4 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
                        <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
                            <img
                                src="/assets/img/logo-bg-white-removebg-preview.png"
                                alt="gestiona tu negocio de una forma fácil y de bajo costo"
                                width="47"
                            />
                            ProVenta
                        </div>
                        <p className="mb-0">
                            "Tu solución integral para facturación e inventario.
                            Simplifica tu negocio, optimiza tus procesos y aumenta tu
                            productividad con nuestra plataforma confiable. Descubre una
                            gestión eficiente y potencia tu crecimiento."
                            <span className="small text-muted mx-2">
                                <i className="bi bi-heart-fill text-danger fs-6"></i>&nbsp;
                                <img
                                    src="/assets/img/bandera_republica_dominicana.png"
                                    alt="hecho en republica dominica"
                                    title="Hecho en República Dominicana"
                                    width={25}
                                />
                                &nbsp;<i className="bi bi-heart-fill text-danger fs-6"></i>
                            </span>
                        </p>
                    </div>
                    <div className="col-md-6 col-xxl-5 offset-lg-1 offset-xl-2 offset-xxl-3">
                        <div className="row row-cols-1 row-cols-sm-2">
                            <div className="col pb-2 pb-sm-0 mb-4 mb-sm-0">
                                <h3 className="h5 pb-1 pb-sm-2 pb-lg-3">Contáctenos</h3>
                                <ul className="nav flex-column mb-3">
                                    <li>
                                        <a
                                            href="tel:8097874963"
                                            className="nav-link fs-lg fw-normal px-0 py-1"
                                        >
                                            <i className="bx bx-phone-call fs-4 me-2"></i>
                                            (809) 787-4963
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="tel:8098830911"
                                            className="nav-link fs-lg fw-normal px-0 py-1"
                                        >
                                            <i className="bx bx-phone-call fs-4 me-2"></i>
                                            (809) 883-0911
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://wa.me/18097874963"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="nav-link fs-lg fw-normal px-0 py-1"
                                        >
                                            <i className="bx bxl-whatsapp fs-4 me-2"></i> WhatsApp
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:ayuda.proventa@gmail.com"
                                            className="nav-link fs-lg fw-normal px-0 py-1"
                                        >
                                            <i className="bx bx-envelope fs-4 me-2"></i>
                                            ayuda.proventa@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="lahmedominicana@gmail.com "
                                            className="nav-link fs-lg fw-normal px-0 py-1"
                                        >
                                            <i className="bx bx-envelope fs-4 me-2"></i>
                                            lahmedominicana@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to="/privacidad"
                                            className="nav-link fs-lg fw-normal px-0 py-1"
                                        >
                                            <i className="bx bx-shield-quarter fs-4 me-2"></i>
                                            Privacidad
                                        </Link>
                                    </li>
                                </ul>
                                <div className="d-flex pt-2 pt-sm-3 pt-md-4">
                                    <a
                                        href="https://www.facebook.com/sistemaproventa"
                                        target="blank"
                                        className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3"
                                    >
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/sistemaproventa/"
                                        target="blank"
                                        className="btn btn-icon btn-sm btn-secondary btn-telegram rounded-circle me-3"
                                    >
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/isidro-calderon-abreu/"
                                        className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle me-3"
                                        target="blank"
                                    >
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="nav d-block fs-sm pt-5 mb-0">
                    <span className="opacity-60">
                        © {new Date().getFullYear()} All rights reserved. Made by{" "}
                    </span>
                    <a
                        className="nav-link d-inline-block p-0"
                        href="https://www.linkedin.com/in/isidro-calderon-abreu/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Isidro Calderon A.
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
