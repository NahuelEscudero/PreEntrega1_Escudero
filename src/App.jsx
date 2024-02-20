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
import { ProductsCartProvider } from "./context/CartContext.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

const App = () => {

  return (
    <ProductsCartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <HomePage /> }></Route>
            <Route path="/category-page/:category" element={ <CategoryPage/> } ></Route>
            <Route path="/detailproduct/:id" element={ <DetailProduct /> }></Route>
            <Route path="/cart-page" element={ <CartPage /> }></Route>
          </Routes>
        </div>
      </Router>
    </ProductsCartProvider>
    
  );
  
}

export default App;