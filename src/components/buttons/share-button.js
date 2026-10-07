import { RWebShare } from "react-web-share";
import "./share-button.css";

const ShareButton = ({ title, text, url, floating = true }) => {
  const pageTitle = title || (typeof document !== "undefined" ? document.title : "ProVenta");
  const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "https://www.proventa.app");
  const shareText = text || `${pageTitle} — Conoce más sobre ProVenta.`;

  return (
    <RWebShare data={{ title: pageTitle, text: shareText, url: pageUrl }}>
      <button
        type="button"
        className={`pv-share-button${floating ? " pv-share-button-floating" : ""}`}
        title="Compartir esta página"
        aria-label="Compartir esta página"
      >
        <i className="bx bx-share-alt" aria-hidden="true"></i>
      </button>
    </RWebShare>
  );
};

export default ShareButton;
