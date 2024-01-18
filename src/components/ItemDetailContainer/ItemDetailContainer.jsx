/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//COMPONENTES
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

//OBTENGO PRODUCTOS
import getProducts from "../../../asyncMock.jsx"

//HOOKS
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = (ident) => {
  let { id } = useParams();

  const products = getProducts();
  const findProduct = products.find((item) => item.id === id);

  return (
    findProduct && <ItemDetail product={findProduct} />
  );
}

export default ItemDetailContainer;