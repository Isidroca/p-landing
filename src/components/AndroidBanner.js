import React from 'react';
import { Link } from 'react-router-dom';

const AndroidBanner = () => {
    return (
        <section
            className="position-relative overflow-hidden py-4"
            style={{
                background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #7b1fa2 100%)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* Shimmer / shine effect */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)',
                    animation: 'shimmerBanner 3s infinite',
                    zIndex: 1,
                }}
            />

            {/* Decorative blobs */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: '200px', height: '200px',
                    top: '-80px', right: '10%',
                    background: 'rgba(255,255,255,0.06)',
                    filter: 'blur(30px)',
                    zIndex: 1,
                }}
            />
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: '140px', height: '140px',
                    bottom: '-60px', left: '5%',
                    background: 'rgba(255,255,255,0.05)',
                    filter: 'blur(20px)',
                    zIndex: 1,
                }}
            />

            <style>{`
                @keyframes shimmerBanner {
                    0%   { transform: translateX(-100%); }
                    60%  { transform: translateX(100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.5; transform: scale(1.4); }
                }
                .ecf-gratis-badge {
                    background: linear-gradient(135deg, #ffd600, #ff9800);
                    color: #1a1a1a;
                    font-weight: 800;
                    font-size: 0.7rem;
                    letter-spacing: 0.08em;
                    padding: 3px 10px;
                    border-radius: 999px;
                    box-shadow: 0 2px 10px rgba(255, 152, 0, 0.5);
                    display: inline-block;
                }
                .ecf-new-dot {
                    width: 8px; height: 8px;
                    background: #69ff47;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 6px;
                    animation: pulseDot 1.6s ease-in-out infinite;
                    box-shadow: 0 0 6px #69ff47;
                }
                .ecf-cta-btn {
                    background: rgba(255,255,255,0.15) !important;
                    border: 1.5px solid rgba(255,255,255,0.4) !important;
                    color: #fff !important;
                    font-weight: 700;
                    border-radius: 999px !important;
                    padding: 6px 20px !important;
                    font-size: 0.85rem;
                    backdrop-filter: blur(8px);
                    transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
                    white-space: nowrap;
                }
                .ecf-cta-btn:hover {
                    background: rgba(255,255,255,0.28) !important;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.25) !important;
                }
            `}</style>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <Link to="/funcionalidades/facturacion-electronica">
                    <div className="row align-items-center justify-content-center gy-2 text-center text-lg-start">

                        {/* Icon + labels */}
                        <div className="col-lg-auto d-flex align-items-center justify-content-center gap-3 flex-wrap">
                            {/* Receipt icon circle */}
                            <div
                                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                style={{
                                    width: '46px', height: '46px',
                                    background: 'rgba(255,255,255,0.12)',
                                    border: '1px solid rgba(255,255,255,0.25)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <i className="bx bx-receipt text-white fs-4" />
                            </div>

                            <div className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <span className="ecf-new-dot" />
                                    <span className="text-white fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', opacity: 0.8 }}>DISPONIBLE AHORA</span>
                                    <span className="ecf-gratis-badge">GRATIS</span>
                                </div>
                                <span className="text-white fw-bold" style={{ fontSize: '1.05rem', lineHeight: 1.2 }}>
                                    Facturación Electrónica&nbsp;
                                    <span style={{ opacity: 0.85 }}>(e‑CF)</span>
                                    &nbsp;integrada con la DGII&nbsp;🧾
                                </span>
                            </div>
                        </div>

                        {/* Divider (desktop only) */}
                        <div className="col-lg-auto d-none d-lg-block">
                            <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.2)' }} />
                        </div>

                        {/* Description + CTA */}
                        <div className="col-lg-auto d-flex align-items-center justify-content-center gap-3 flex-wrap">
                            <p className="mb-0 text-white" style={{ opacity: 0.82, fontSize: '0.88rem', maxWidth: '340px' }}>
                                Emite comprobantes fiscales electrónicos&nbsp;
                                <strong className="text-white">sin costos adicionales</strong> para suscriptores activos.
                            </p>
                            <Link to="/facturacion-electronica" className="ecf-cta-btn btn">
                                Ver detalles&nbsp;<i className="bx bx-right-arrow-alt align-middle" />
                            </Link>
                        </div>

                    </div>
                </Link>
            </div>
        </section>
    );
};

export default AndroidBanner;