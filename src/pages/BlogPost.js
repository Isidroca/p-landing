import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";
import { posts } from "../data/posts";

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);
    const helmetContext = {};

    if (!post) {
        return <Navigate to="/blog" />;
    }

    const metaTitle = post.metaTitle || `${post.title} | Blog ProVenta`;
    const metaDescription = post.metaDescription || post.excerpt;
    const keywordsStr = Array.isArray(post.keywords) ? post.keywords.join(", ") : (post.keywords || "");
    const canonicalUrl = `https://www.proventa.app/blog/${post.slug}/`;
    const imageUrl = post.image && post.image.startsWith("http") ? post.image : `https://www.proventa.app${post.image}`;

    const schemaData = post.schemaJsonLd || {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "headline": post.title,
        "description": metaDescription,
        "image": [imageUrl],
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "Equipo ProVenta",
            "url": "https://www.proventa.app"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ProVenta",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.proventa.app/assets/img/logo-bg-black.png"
            }
        }
    };

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                {keywordsStr && <meta name="keywords" content={keywordsStr} />}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:site_name" content="ProVenta" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={imageUrl} />

                {/* Google Structured Data JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <div className="bg-dark text-light min-vh-100 d-flex flex-column">
                <Header />

                {/* Article Header */}
                <section className="pt-5 pb-4 pb-lg-5" style={{ marginTop: "80px" }}>
                    <div className="container pt-2 pt-md-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><Link to="/blog/" className="text-light opacity-50">Blog</Link></li>
                                <li className="breadcrumb-item active text-white" aria-current="page">{post.category}</li>
                            </ol>
                        </nav>
                        <h1 className="display-4 text-white mb-4">{post.title}</h1>
                        <div className="d-flex align-items-center mb-5 text-light opacity-75">
                            <span className="me-3">
                                <i className="bx bx-calendar me-1 text-primary"></i>
                                {post.date}
                            </span>
                            <span className="badge bg-primary rounded-pill">{post.category}</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="bg-white text-dark py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <img
                                    src={post.image}
                                    className="img-fluid rounded-4 shadow-sm mb-5"
                                    alt={post.title}
                                />
                                <div
                                    className="blog-content fs-lg lh-base pb-5"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                <hr className="my-5" />

                                {/* Post Footer */}
                                <div className="p-4 bg-secondary bg-opacity-10 border rounded-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-primary rounded-circle p-2 me-3">
                                            <img src="/assets/img/logo-bg-black.png" width="30" alt="ProVenta" />
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Equipo ProVenta</h5>
                                            <p className="small text-muted mb-0">Expertos en tecnología para negocios.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <a href="https://wa.me/18097874963" className="btn btn-outline-dark btn-sm rounded-pill">
                                            Compartir post
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <Footer />
            </div>
            <WhatsAppButton />
        </HelmetProvider>
    );
};

export default BlogPost;
