import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import Install from "./pages/Install";
import Privacy from "./pages/privacy";
import Android from "./pages/Android";
import TeclasRapidas from "./pages/TeclasRapidas";
import Planes from "./pages/Planes";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Register from "./pages/Register";
import FacturacionElectronica from "./pages/FacturacionElectronica";
import ScrollToTop from "./hooks/ScrollToTop";
function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/inicio" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/como-instalar-proventa" element={<Install />} />
          <Route path="/android" element={<Android />} />
          <Route path="/funcionalidades/teclas-rapidas" element={<TeclasRapidas />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/funcionalidades/facturacion-electronica" element={<FacturacionElectronica />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
