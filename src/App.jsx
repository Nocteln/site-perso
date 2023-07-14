import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./screens/Acceuil";
import Erreur from "./screens/Erreur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
