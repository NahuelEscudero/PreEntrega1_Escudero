//ESTILOS
import "./App.css";

//NAVEGABILIDAD
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header/Header";

//PAGINAS
import HomePage from "./pages/HomePage/HomePage.jsx"
import DetailProduct from "./pages/DetailProduct/DetailProduct.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> }></Route>
          <Route path="/category-page/:category" element={ <CategoryPage/> } ></Route>
          <Route path="/detailproduct/:id" element={ <DetailProduct /> }></Route>
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;