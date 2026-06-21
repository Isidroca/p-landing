import React from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const Register = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>Cómo Registrar tu Empresa en ProVenta | Guía de Configuración</title>
                <meta
                    name="description"
                    content="Aprende a registrar tu empresa y configurar tu cuenta en ProVenta. Guía paso a paso para comenzar a facturar y gestionar tu inventario."
                />
                <meta name="author" content="Isidro Calderon Abreu" />
                <link rel="canonical" href="https://proventa.app/registro" />
            </Helmet>

            <div className="bg-dark text-light min-vh-100 d-flex flex-column">
                <Header />

                {/* Hero Section */}
                <section className="pt-5 pb-4 pb-lg-5" style={{ marginTop: "80px" }}>
                    <div className="container text-center pt-2 pt-md-4">
                        <h1 className="display-3 text-white mb-3">Registro de Empresa</h1>
                        <p className="lead text-light opacity-75 mb-0 mx-auto" style={{ maxWidth: "700px" }}>
                            Ya instalaste ProVenta, ahora es momento de configurar tu negocio para comenzar a operar.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <main className="flex-grow-1 py-5 bg-white text-dark">
                    <div className="container py-lg-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">

                                <h2 className="h1 text-center mb-5 fw-bold">Pasos para el Registro</h2>

                                <div className="steps py-4">
                                    {/* Step 1 */}
                                    <div className="row mb-5 align-items-center">
                                        <div className="col-md-6 order-md-2">
                                            <div className="position-relative">
                                                <img
                                                    src="/assets/img/inicio-login-registro.png"
                                                    className="img-fluid rounded-3 shadow-lg border"
                                                    alt="Pantalla de inicio sesión y registro ProVenta"
                                                />
                                                <div className="position-absolute top-100 start-50 translate-middle mt-2 d-none d-md-block">
                                                    <span className="badge bg-primary rounded-pill px-3 py-2">Paso 1: Seleccionar Registro</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 order-md-1 pe-lg-5">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>1</span>
                                                <h3 className="h4 mb-0 fw-bold">Inicia el Registro</h3>
                                            </div>
                                            <p className="text-muted lead fs-6">
                                                Al abrir ProVenta por primera vez, verás la pantalla de Bienvenida. Haz clic en la pestaña <strong>"REGÍSTRATE"</strong> en la parte superior derecha para comenzar a crear tu cuenta de administrador.
                                            </p>
                                            <ul className="list-unstyled small text-muted">
                                                <li><i className="bx bx-check text-success me-2"></i> Crea tu usuario de acceso</li>
                                                <li><i className="bx bx-check text-success me-2"></i> Define tu contraseña segura</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="row mb-5 align-items-center">
                                        <div className="col-md-6">
                                            <div className="position-relative">
                                                <img
                                                    src="/assets/img/registro-empesa-proventa.png"
                                                    className="img-fluid rounded-3 shadow-lg border"
                                                    alt="Formulario de registro de datos de empresa"
                                                />
                                                <div className="position-absolute top-100 start-50 translate-middle mt-2 d-none d-md-block">
                                                    <span className="badge bg-primary rounded-pill px-3 py-2">Paso 2: Datos del Negocio</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 ps-lg-5 mt-5 mt-md-0">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>2</span>
                                                <h3 className="h4 mb-0 fw-bold">Configura tu Empresa</h3>
                                            </div>
                                            <p className="text-muted">
                                                Una vez creado tu usuario, se abrirá la ventana de <strong>"Datos de la Empresa"</strong>. Aquí es donde personalizas el sistema con la información de tu negocio que aparecerá en tus facturas.
                                            </p>
                                            <div className="bg-light p-3 rounded-3 border-start border-primary border-4 mb-3">
                                                <h5 className="h6 fw-bold mb-2">Información Requerida:</h5>
                                                <ul className="list-unstyled small mb-0">
                                                    <li><strong>Nombre de la Empresa:</strong> Como quieres que te identifiquen.</li>
                                                    <li><strong>Tu Email:</strong> Importante para gentionar tu cuenta.</li>
                                                    <li><strong>Elije un plan:</strong> Elige el que mejor se adapte a tus necesidades.</li>
                                                    <li><strong>Contraseña:</strong> Crea una contraseña segura para acceder.</li>
                                                    <li><strong>Confirma tu contraseña:</strong> Confirma la contraseña.</li>
                                                </ul>
                                            </div>
                                            <p className="small text-muted italic">
                                                * Puedes cambiar estos datos más adelante desde la configuración del sistema.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="row mb-5 align-items-center">
                                        <div className="col-md-5 text-center order-md-2">
                                            <div className="p-4 bg-primary-subtle rounded-4 mb-4 mb-md-0 shadow-sm border border-primary-subtle">
                                                <i className="bx bx-check-double display-1 text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-7 order-md-1 pe-lg-5">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="badge bg-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>3</span>
                                                <h3 className="h4 mb-0 fw-bold">¡Listo para Vender!</h3>
                                            </div>
                                            <p className="text-muted">
                                                Al completar los datos de tu empresa, el sistema te llevará directamente al <strong>Tablero Principal (Dashboard)</strong>. Desde aquí podrás comenzar a registrar tus productos, gestionar tus inventarios y realizar tu primera venta.
                                            </p>
                                            <div className="alert alert-success border-0 small">
                                                <i className="bx bx-bulb me-2"></i>
                                                <strong>Consejo:</strong> Lo primero que te recomendamos es ir al módulo de <strong>Productos</strong> para cargar tu inventario inicial.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                {/* Support Section */}
                                <section className="bg-light p-4 p-md-5 rounded-4 border text-center">
                                    <h2 className="h3 fw-bold mb-3">¿Necesitas ayuda con el registro?</h2>
                                    <p className="text-muted mb-4">
                                        Si tienes alguna duda durante el proceso de configuración, nuestro equipo técnico está listo para asistirte de manera remota.
                                    </p>
                                    <div className="d-flex flex-wrap justify-content-center gap-3">
                                        <a href="https://wa.me/18097874963" className="btn btn-outline-primary px-4">
                                            <i className="bx bxl-whatsapp me-2"></i> WhatsApp Soporte
                                        </a>
                                        <a href="mailto:ayuda.proventa@gmail.com" className="btn btn-outline-secondary px-4">
                                            <i className="bx bx-envelope me-2"></i> correo soporte
                                        </a>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
                <WhatsAppButton />
            </div>
        </HelmetProvider>
    );
};

export default Register;
