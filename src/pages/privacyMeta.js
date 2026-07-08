import React from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/buttons/whats-app-button";

const PrivacyMeta = () => {
  const helmetContext = {};
  const lastUpdate = "08 de julio de 2026";

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Política de Privacidad | ProVenta | Meta</title>
        <meta
          name="description"
          content="Conoce cómo ProVenta protege tus datos. Información detallada sobre el tratamiento de datos sensibles y privacidad para usuarios en República Dominicana."
        />
        <meta name="author" content="Isidro Calderon Abreu" />
        <link rel="canonical" href="https://proventa.app/privacidad-meta" />
      </Helmet>

      <div className="container">
        <header>
          <h1>Política de Privacidad de ProVenta</h1>
          <p>Última actualización: {lastUpdate}</p>
        </header>

        <p>
          Esta Política de Privacidad describe cómo <strong>ProVenta</strong>
          ("nosotros", "nuestro" o "la plataforma") recopila, usa, almacena y
          protege la información de sus usuarios, incluyendo el uso que hacemos
          de la <strong>API de WhatsApp Business de Meta</strong> para el envío
          de notificaciones, recordatorios y comunicaciones transaccionales
          relacionadas con los servicios contratados.
        </p>

        <h2>1. Quiénes somos</h2>
        <p>
          ProVenta es una plataforma de gestión empresarial y facturación
          electrónica (e-CF) dirigida a negocios en República Dominicana.
          Ofrecemos módulos de facturación, ventas, clientes, productos e
          inventario, entre otros, a nuestros usuarios y clientes empresariales.
        </p>

        <h2>2. Información que recopilamos</h2>
        <ul>
          <li><strong>Datos de cuenta:</strong> nombre, correo electrónico, número de teléfono y datos de la empresa (RNC, razón social) proporcionados al registrarse.</li>
          <li><strong>Número de WhatsApp:</strong> el número de teléfono asociado a la cuenta o al negocio, utilizado exclusivamente para el envío de notificaciones a través de la API de WhatsApp Business.</li>
          <li><strong>Datos de uso:</strong> información sobre facturas, suscripciones y transacciones generadas dentro de la plataforma, necesarias para determinar el contenido de las notificaciones enviadas.</li>
          <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador y registros de actividad, con fines de seguridad y soporte técnico.</li>
        </ul>

        <h2>3. Uso de la API de WhatsApp Business (Meta)</h2>
        <p>
          Utilizamos la API de WhatsApp Business para enviar mensajes
          transaccionales y de utilidad a nuestros usuarios, tales como:
        </p>
        <ul>
          <li>Recordatorios de vencimiento de suscripción.</li>
          <li>Notificaciones relacionadas con facturas o comprobantes fiscales electrónicos (e-CF).</li>
          <li>Avisos de estado de cuenta o acceso al servicio.</li>
        </ul>
        <div className="highlight">
          No utilizamos WhatsApp para enviar mensajes de marketing no
          solicitados. Todos los mensajes se envían únicamente a números que
          han sido registrados por el propio usuario o su negocio dentro de la
          plataforma, y utilizando plantillas previamente aprobadas por Meta.
        </div>

        <h2>4. Cómo compartimos la información</h2>
        <p>
          No vendemos ni alquilamos la información personal de nuestros
          usuarios a terceros. La información se comparte únicamente con:
        </p>
        <ul>
          <li><strong>Meta Platforms, Inc.</strong>, en su calidad de proveedor de la API de WhatsApp Business, exclusivamente para la entrega de los mensajes descritos en esta política.</li>
          <li>Proveedores de infraestructura y almacenamiento (bases de datos, hosting) necesarios para operar la plataforma, bajo acuerdos de confidencialidad.</li>
          <li>Autoridades competentes, cuando así lo exija la ley, incluyendo obligaciones ante la Dirección General de Impuestos Internos (DGII) en materia de facturación electrónica.</li>
        </ul>

        <h2>5. Almacenamiento y seguridad</h2>
        <p>
          Los datos se almacenan en bases de datos protegidas con controles de
          acceso y buenas prácticas de seguridad. Conservamos la información
          únicamente durante el tiempo necesario para prestar el servicio o
          cumplir con obligaciones legales y fiscales aplicables.
        </p>

        <h2>6. Derechos del usuario</h2>
        <p>
          El usuario puede solicitar en cualquier momento:
        </p>
        <ul>
          <li>Acceso, corrección o eliminación de sus datos personales.</li>
          <li>Dejar de recibir notificaciones vía WhatsApp, sin que esto afecte otros medios de comunicación del servicio.</li>
          <li>Información sobre el tratamiento de sus datos.</li>
        </ul>
        <p>
          Para ejercer estos derechos, puede escribirnos a través del correo
          indicado en la sección de contacto.
        </p>

        <h2>7. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad periódicamente. Los
          cambios serán publicados en esta misma página con la fecha de
          actualización correspondiente.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Si tiene preguntas sobre esta Política de Privacidad, puede
          contactarnos a través de:
          <br />
          Correo: <a href="mailto:soporte@proventa.app">soporte@proventa.app</a>
          <br />
          Sitio web: <a href="https://proventa.app">proventa.app</a>
        </p>

        <footer>
          © 2026 ProVenta. Todos los derechos reservados.
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default PrivacyMeta;
