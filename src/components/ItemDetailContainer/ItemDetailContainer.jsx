/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import getProducts from "../../../asyncMock.jsx";

const ItemDetailContainer = ( {id} ) => {
  /*const [ button, setButton ] = useState(false);*/
  const products = getProducts;   
  const product = products.find((product) => product.id === id);
  
  return (
    <div>
        <ItemDetail product/>
    </div>
  )
}

export default ItemDetailContainer;