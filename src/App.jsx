import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./screens/Acceuil"
import About from './screens/About';
import Erreur from "./screens/Erreur";
import Contact from "./screens/Contact";
import Skills from "./screens/Skills";
import Portfolio from "./screens/Portfolio";
import Dev from "./screens/Dev";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/dev" element={<Dev />} />
      <Route path="*" element={<Erreur />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
