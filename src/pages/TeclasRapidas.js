import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/buttons/whats-app-button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TeclasRapidas = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Facturación con Teclas Rápidas - ProVenta POS</title>
                <meta
                    name="description"
                    content="Optimiza tu punto de venta con la facturación de teclas rápidas de ProVenta. Ideal para colmados, cafeterías y negocios de alta rotación en República Dominicana."
                />
                <meta
                    name="keywords"
                    content="Teclas rápidas POS, Facturación rápida RD, Software para colmados, Punto de venta touch, ProVenta funcionalidades"
                />
            </Helmet>

            <div className="bg-dark text-light min-vh-100 d-flex flex-column">
                <Header />

                {/* Hero Section */}
                <section
                    className="position-relative pt-5 pb-4 pb-lg-5 overflow-hidden"
                    style={{ marginTop: "80px" }}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                                <h1 className="display-4 text-white mb-3">
                                    Facturación Ultra Rápida con Teclas Rápidas ⚡
                                </h1>
                                <p className="lead text-light opacity-75 mb-4">
                                    Vende más en menos tiempo. Configura tus productos más populares y factúralos con un solo clic. Ideal para negocios con alta afluencia de clientes.
                                </p>
                                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                                    <a
                                        href="/"
                                        className="btn btn-primary btn-lg rounded-pill"
                                    >
                                        <i className="bx bx-download fs-4 me-2"></i>
                                        Descargar ProVenta
                                    </a>
                                    <Link
                                        to="/android"
                                        className="btn btn-outline-light btn-lg rounded-pill"
                                    >
                                        Ver versión Móvil
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative text-center">
                                <div
                                    className="position-absolute top-50 start-50 translate-middle rounded-circle bg-primary opacity-25 blur-3xl"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        filter: "blur(60px)",
                                        zIndex: 0,
                                    }}
                                ></div>
                                <img
                                    src="/assets/img/facturacion_teclas_rapidas_pos.png"
                                    alt="Facturación Teclas Rápidas ProVenta"
                                    className="img-fluid rounded-3 shadow-lg border border-secondary position-relative zindex-2"
                                    style={{ maxHeight: "500px" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-white text-dark py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="h1">¿Por qué usar Teclas Rápidas?</h2>
                            <p className="text-muted">Diseñado para la eficiencia y comodidad del cajero.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="p-4 border rounded-4 h-100 text-center shadow-sm">
                                    <i className="bx bx-bolt-circle text-primary display-4 mb-3"></i>
                                    <h3 className="h5">Velocidad Increíble</h3>
                                    <p className="text-muted small">Reduce el tiempo de espera en fila hasta en un 60%. Un clic es todo lo que necesitas para agregar un producto.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-4 border rounded-4 h-100 text-center shadow-sm">
                                    <i className="bx bx-mouse-alt text-primary display-4 mb-3"></i>
                                    <h3 className="h5">Interfaz Táctil</h3>
                                    <p className="text-muted small">Optimizado para monitores touch. Botones grandes y legibles con imágenes integradas para una fácil identificación.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-4 border rounded-4 h-100 text-center shadow-sm">
                                    <i className="bx bx-customize text-primary display-4 mb-3"></i>
                                    <h3 className="h5">Totalmente Personalizable</h3>
                                    <p className="text-muted small">Organiza tus productos por categorías y colores. Prioriza los artículos que más vendes cada día.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-5">
                    <div className="container text-center text-white">
                        <h2 className="mb-4">¿Listo para modernizar tu punto de venta?</h2>
                        <p className="lead opacity-90 mb-5">Únete a cientos de negocios que ya están facturando con ProVenta.</p>
                        <a href="https://wa.me/18097874963" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg rounded-pill px-5">
                            Consultar Precio
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
            <WhatsAppButton />
        </React.Fragment>
    );
};

export default TeclasRapidas;
