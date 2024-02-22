/* eslint-disable react/prop-types */
//ESTILOS
import "./FinishedBuy.css";

//CONTEXT
import { CartContext } from "../../context/CartContext";

//HOOKS
import { useContext } from "react";

//COMPONENTES
import ItemFinishedBuy from "../ItemFinishBuy/ItemFinishedBuy";

const FinishedBuy = ({ purchaseID, person }) => {
  const { prods } = useContext(CartContext);
  const { name, lastName, direction } = person;
  //console.log(prods);

  return (
    <div className="cont-datafinished">
      <div className="datafinished">
        <div className="datafinished">
          <h5 className="datafinished-text">Nombre y Apellido:</h5>
          <p className="datafinished-content">{name + " " + lastName}</p>
        </div>
        <div className="datafinished">
          <h5 className="datafinished-text">Su pedido se enviará a:</h5>
          <p className="datafinished-content">{direction}</p>
        </div>
        <div className="datafinished">
          <h5 className="datafinished-text">Numero de transacción</h5>
          <p className="datafinished-content">{purchaseID}</p>
        </div>
      </div>
      <div className="product-datafinished">
        { prods.map((prod) => {
          <ItemFinishedBuy product={prod} />
        }) }; 
      </div>
    </div>
  );
};

export default FinishedBuy;
