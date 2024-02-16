/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//ESTILOS
import "./ItemDetailContainer.css"

//COMPONENTES
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

//HOOKS
import useProduct from "../../../asyncMockProduct.jsx";

const ItemDetailContainer = () => {
  const prod = useProduct();
  
  return (
    <div className="detail-product-container">
      {prod && <ItemDetail product={prod} />}
    </div>    
  );
}

export default ItemDetailContainer;