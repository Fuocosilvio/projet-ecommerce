import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProduitPage } from "./pages/ProduitPage";
import { CategoriePage } from "./pages/CategoriePage";
import { DetailProduit } from "./pages/DetailProduitPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit" element={<ProduitPage />} />
        <Route path="/categorie" element={<CategoriePage />} />
        <Route path="/detail" element={<DetailProduit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
