import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";
import { posts } from "../data/posts";

const Blog = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>Blog - Consejos para tu Negocio | ProVenta</title>
                <meta
                    name="description"
                    content="Aprende sobre facturación, inventario y cómo hacer crecer tu negocio con los consejos de expertos en el Blog de ProVenta."
                />
            </Helmet>

            <div className="bg-dark text-light min-vh-100 d-flex flex-column">
                <Header />

                {/* Hero section */}
                <section className="pt-5 pb-4 pb-lg-5" style={{ marginTop: "80px" }}>
                    <div className="container text-center pt-2 pt-md-4">
                        <h1 className="display-3 text-white mb-3">Blog de ProVenta</h1>
                        <p className="lead text-light opacity-75 mb-5 mx-auto" style={{ maxWidth: "700px" }}>
                            Consejos, guías y novedades para llevar la gestión de tu negocio al siguiente nivel.
                        </p>
                    </div>
                </section>

                {/* Blog list */}
                <section className="pb-5 mb-lg-5">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            {posts.map((post) => (
                                <div key={post.slug} className="col-lg-4 col-md-6">
                                    <article className="card h-100 bg-white border-0 shadow-sm overflow-hidden hover-lift d-flex flex-column">
                                        <Link to={`/blog/${post.slug}`} className="text-decoration-none h-100 d-flex flex-column">

                                            {/* Contenedor de Imagen con Ratio Controlado */}
                                            <div className="position-relative overflow-hidden" style={{ minHeight: "220px", maxHeight: "220px" }}>
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="card-img-top h-100 w-100"
                                                    style={{
                                                        objectFit: "cover",
                                                        transition: "transform 0.3s ease"
                                                    }}
                                                />
                                                <div className="position-absolute top-0 start-0 m-3">
                                                    <span className="badge bg-primary rounded-pill">{post.category}</span>
                                                </div>
                                            </div>

                                            <div className="card-body p-4 d-flex flex-column">
                                                <div className="d-flex align-items-center mb-2">
                                                    <span className="small text-muted">
                                                        <i className="bx bx-calendar me-1"></i>
                                                        {post.date}
                                                    </span>
                                                </div>

                                                {/* Título con límite de 2 líneas */}
                                                <h3 className="h5 mb-3 text-dark fw-bold"
                                                    style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: "2",
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                        minHeight: "3rem"
                                                    }}>
                                                    {post.title}
                                                </h3>

                                                {/* Extracto con límite de 3 líneas */}
                                                <p className="card-text text-muted mb-0 small"
                                                    style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: "3",
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden"
                                                    }}>
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            {/* Footer siempre al final gracias al flex-grow del body */}
                                            <div className="card-footer bg-transparent border-0 px-4 pb-4 pt-0 text-primary fw-semibold mt-auto">
                                                Leer más <i className="bx bx-right-arrow-alt ms-1"></i>
                                            </div>
                                        </Link>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
            <WhatsAppButton />
        </HelmetProvider>
    );
};

export default Blog;
