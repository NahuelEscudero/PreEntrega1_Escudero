/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//COMPONENTES
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

//OBTENGO PRODUCTOS
import products from "../../../productos.json";

//HOOKS
import { useState, useEffect } from "react";

const ItemDetailContainer = ( {ident} ) => {
  const [ prod, setProd ] = useState({});
  
  useEffect(() => {
    setProd(products.find((item) => {
      return item.id === ident;
    }));
  }, []); 
  
  return (
    <div>
      <ItemDetail product={prod} />
    </div>
  );
}

export default ItemDetailContainer;