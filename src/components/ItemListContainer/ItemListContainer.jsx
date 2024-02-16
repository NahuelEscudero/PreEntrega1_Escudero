/* eslint-disable react/prop-types */
//ESTILOS
import "./ItemListContainer.css"

//HOOKS
import { useEffect, useState } from "react";

//COMPONENTES
import ItemList from "../ItemList/ItemList.jsx";

//PRODUCTOS
import getProducts from "../../../asyncMock.jsx";


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="greeting">{saludo}</div>
      <ItemList items={products} />
    </>
  );
};

export default ItemListContainer;
