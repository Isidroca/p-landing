// src/components/WhatsAppButton.jsx

const WhatsAppButton = () => {
  const phoneNumber = "18097874963"; // Cambia por tu número
  const message = "Hola, estoy interesado en ProVenta. ¿Me puedes dar más información?";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title="Hola, estoy interesado en ProVenta. ¿Me puedes dar más información?"
      className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        zIndex: 9999,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <i className="bi bi-whatsapp fs-3"></i>
    </a>
  );
};

export default WhatsAppButton;
