//ESTILOS
import "./HomePage.css"

//HOOKS
import { useState, useEffect } from "react";

//COMPONENTES
import Spinner from "../../components/Spinner/Spinner.jsx"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";

//PRODUCTOS
import getProducts from "../../../asyncMock.jsx";


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getProducts();
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (isLoading ? <div className="cont-spinner"><Spinner /></div> : <ItemListContainer saludo="BIENVENIDOS A INSIDIA INDUMENTARIA" />);
};

export default HomePage;