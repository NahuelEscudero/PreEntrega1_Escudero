//ESTILOS
import "./App.css";

//NAVEGABILIDAD
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header/Header";

//PAGINAS
import HomePage from "./pages/HomePage/HomePage"
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Nosotros from "./pages/Nosotros/Nosotros";
import Coleccion from "./pages/Coleccion/Coleccion";
import LocalesMap from "./pages/LocalesMap/LocalesMap"

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> }></Route>
          <Route path="/coleccion" element={ <Coleccion /> }></Route>
          <Route path="/locales" element={ <LocalesMap /> }></Route>
          <Route path="/nosotros" element={ <Nosotros /> }></Route>
          <Route path="/detailproduct/:id" element={ <DetailProduct /> }></Route>
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;