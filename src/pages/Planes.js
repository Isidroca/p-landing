import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const Planes = () => {
    const helmetContext = {};
    const [version, setVersion] = useState("");
    const [appUrl, setAppUrl] = useState(
        `https://s3.us-east-1.amazonaws.com/proventa.do/app/ProVenta.setup.${version}.exe`
    );

    useEffect(() => {
        const fetchVersion = async () => {
            try {
                const response = await fetch("https://core.proventa.do/api/version");
                if (!response.ok) {
                    throw new Error("Error al obtener la versión");
                }
                const data = await response.json();
                setAppUrl(data.url_down);
                setVersion(obtenerVersion(data.url_down));
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchVersion();
    }, []);

    function obtenerVersion(url) {
        const regex = /ProVenta\.setup\.(\d+\.\d+\.\d+)\.exe/;
        const coincidencia = url.match(regex);
        return coincidencia ? coincidencia[1] : null;
    }

    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = appUrl;
        link.download = `ProVenta.setup.${version}.exe`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>Planes y Precios - ProVenta POS</title>
                <meta
                    name="description"
                    content="Conoce nuestros planes de facturación e inventario. Precios transparentes y sin sorpresas para negocios en República Dominicana."
                />
            </Helmet>

            <div className="bg-dark text-light min-vh-100 d-flex flex-column">
                <Header />

                {/* Hero Section for Planes */}
                <section className="pt-5 pb-4 pb-lg-5 overflow-hidden" style={{ marginTop: "80px" }}>
                    <div className="container text-center pt-2 pt-md-4">
                        <h2 className="display-3 text-white mb-3">Planes y Precios</h2>
                        <h1 className="h4 text-light opacity-75 mb-5 mx-auto fw-normal" style={{ maxWidth: "700px" }}>
                            Nuestros planes - ¡Precios transparentes para ti!
                        </h1>
                    </div>
                </section>

                {/* Pricing Table Section */}
                <section className="position-relative dark-mode bg-dark py-5">
                    <div className="container">
                        <div className="row g-0 align-items-center justify-content-center">

                            {/* Personal Plan */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="card bg-light border-0 rounded-3 rounded-lg-end-0 shadow-sm py-4">
                                    <div className="card-body text-center">
                                        <h3 className="h4 mb-2 text-dark">Personal</h3>
                                        <p className="fs-sm pb-3 mb-3 text-muted">
                                            Ideal para uso personal o si inicias un negocio
                                        </p>
                                        <div className="mb-4">
                                            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 border border-primary border-opacity-25">
                                                <i className="bx bx-mobile-alt me-1"></i> Versión
                                                Android Incluida
                                            </span>
                                        </div>
                                        <div className="display-5 text-dark mb-1">
                                            RD$1,000
                                        </div>
                                        <div className="text-muted mb-4">por mes</div>
                                        <button
                                            onClick={handleDownload}
                                            className="btn btn-outline-primary btn-lg w-75"
                                        >
                                            <i className="bx bx-cloud-download fs-5 lh-1 me-1"></i>
                                            Descargar
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Emprendedor Plan (Highlighted) */}
                            <div className="col-lg-4 col-md-8 mb-4 mb-lg-0 position-relative zindex-2">
                                <div className="card bg-primary border-0 rounded-4 shadow-primary py-5">
                                    <div className="card-body text-center text-white">
                                        <span className="badge bg-success position-absolute top-0 start-50 translate-middle rounded-pill px-3 py-2">
                                            MÁS POPULAR
                                        </span>
                                        <h3 className="h3 mb-2 text-white">Emprendedor</h3>
                                        <p className="fs-sm pb-3 mb-3 opacity-80">
                                            La mejor opción para pequeños negocios
                                        </p>
                                        <div className="mb-4">
                                            <span className="badge bg-opacity-20 text-white rounded-pill px-3 py-2 border border-white border-opacity-25">
                                                <i className="bx bx-mobile-alt me-1"></i> Versión
                                                Android Incluida
                                            </span>
                                        </div>
                                        <div className="display-4 text-white mb-1">
                                            RD$1,800
                                        </div>
                                        <div className="opacity-70 mb-4">por mes</div>
                                        <button
                                            onClick={handleDownload}
                                            className="btn btn-light btn-lg w-75 shadow-sm"
                                        >
                                            <i className="bx bx-cloud-download fs-5 lh-1 me-1"></i>
                                            Descargar Gratis
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Profesional Plan */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="card bg-light border-0 rounded-3 rounded-lg-start-0 shadow-sm py-4">
                                    <div className="card-body text-center">
                                        <h3 className="h4 mb-2 text-dark">Profesional</h3>
                                        <p className="fs-sm pb-3 mb-3 text-muted">
                                            Ideal para PYMEs en pleno crecimiento
                                        </p>
                                        <div className="mb-4">
                                            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 border border-primary border-opacity-25">
                                                <i className="bx bx-mobile-alt me-1"></i> Versión
                                                Android Incluida
                                            </span>
                                        </div>
                                        <div className="display-5 text-dark mb-1">
                                            RD$2,300
                                        </div>
                                        <div className="text-muted mb-4">por mes</div>
                                        <button
                                            onClick={handleDownload}
                                            className="btn btn-outline-primary btn-lg w-75"
                                        >
                                            <i className="bx bx-cloud-download fs-5 lh-1 me-1"></i>
                                            Descargar
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Feature Comparison Section (Brief) */}
                <section className="bg-white text-dark py-5 mt-auto">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h2 className="h1 mb-5">Todo lo que necesitas para tu negocio</h2>
                                <div className="row row-cols-1 row-cols-md-2 g-5 text-start mt-4">
                                    <div className="col">
                                        <div className="d-flex align-items-start">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                <i className="bx bx-check text-primary fs-4"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5 mb-2">Facturación Ilimitada</h4>
                                                <p className="text-muted mb-0">No ponemos límites a tu crecimiento. Emite todas las facturas que tu negocio necesite sin cargos extra.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-start">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                <i className="bx bx-check text-primary fs-4"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5 mb-2">NCF Dominicanos</h4>
                                                <p className="text-muted mb-0">Totalmente adaptado a las normativas de la DGII. Maneja comprobantes fiscales de forma automática y sin errores.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-start">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                <i className="bx bx-check text-primary fs-4"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5 mb-2">Control de Inventario</h4>
                                                <p className="text-muted mb-0">Gestión de stock en tiempo real. Recibe notificaciones cuando tus productos estrella se estén agotando.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-start">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                                <i className="bx bx-check text-primary fs-4"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5 mb-2">Soporte 24/7</h4>
                                                <p className="text-muted mb-0">Acompañamiento constante por WhatsApp y soporte remoto para asegurar que tu facturación nunca se detenga.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
            <WhatsAppButton />
        </HelmetProvider>
    );
};

export default Planes;
