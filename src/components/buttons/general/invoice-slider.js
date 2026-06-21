// InvoiceSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const images = [
  "/assets/modelos-facturas/modelo_de_factura_cotizacion_profesional_avanzado.png",
  "/assets/modelos-facturas/modelo_de_factura_cotizacion_clasico.png",
  "/assets/modelos-facturas/modelo_de_factura_cotizacion_moderno.png",
  "/assets/modelos-facturas/modelo_de_factura_cotizacion_profesional.png",
  "/assets/modelos-facturas/estado_de_cuenta_cliente_modelo.png",
  "/assets/modelos-facturas/punto_de_venta.png",
  "/assets/dashboard-ventas/comparacion_ventas_del_dia_vs_ventas_ayer.png",
  "/assets/dashboard-ventas/dashboard_ventas.png",
];

export default function InvoiceSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      loop={true}
      speed={1000}
      grabCursor={true}
      slidesPerView="auto"
      className="invoice-slider"
      centeredSlides={true}
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "100%", // que no se limite a un tamaño fijo
            maxWidth: "600px",
          }}
        >
          <div className="rounded shadow bg-white p-2">
            <img
              src={src}
              alt={`Documento ${index + 1}`}
              className="img-fluid w-100"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}