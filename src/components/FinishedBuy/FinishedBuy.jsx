/* eslint-disable react/prop-types */
//ESTILOS
import "./FinishedBuy.css";

//CONTEXT
import { CartContext } from "../../context/CartContext";

//HOOKS
import { useState, useContext } from "react";

//COMPONENTES
import ItemFinishedBuy from "../ItemFinishBuy/ItemFinishedBuy";

const FinishedBuy = ({ purchaseID, person, button }) => {
  const { prods } = useContext(CartContext);
  const { name, lastName, direction } = person;
  //console.log(prods);

  return button ? (
    <div className="cont-datafinished">
      <h2 className="datafinished-title">¡SU COMPRA SE REALIZÓ CON ÉXITO!</h2>
      <div className="datafinished">
        <p className="datafinished-text">Nombre y Apellido:</p>
        <h5 className="datafinished-content">{name + " " + lastName}</h5>
      </div>
      <div className="datafinished">
        <p className="datafinished-text">Su pedido se enviará a:</p>
        <h5 className="datafinished-content">{direction}</h5>
      </div>
      <div className="datafinished">
        <p className="datafinished-text">Numero de transacción</p>
        <h5 className="datafinished-content">{purchaseID}</h5>
      </div>
    </div>
  ) : null;
};

export default FinishedBuy;
