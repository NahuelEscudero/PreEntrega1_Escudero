/* eslint-disable react/prop-types */
//ESTILOS
import "./ItemCount.css"

//HOOKS
import { useState } from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCount = ({product}) => {
    const [ counter, setCounter ] = useState(1);
    const { precio } = product;
    const valorDolar = 1200;

    const handleCounter = (operacion) => {
        if (operacion === 'sumar') {
            setCounter(counter + 1);
        } else if (operacion === 'restar') {
            if (counter > 1) {
                setCounter(counter - 1);
            }
        } else if (operacion === 'reset') {
            setCounter(1);
        }
    }

    const precioTotal = (precio * valorDolar) * counter;

  return (
    <div className="container-detail-addcarrito">
        <div className="detail-prod-counter">
            <small className="cant-text">Cantidad:</small>
            <div className="suma-resta-prod">
                <button className="counter-restar__button" onClick={() => handleCounter("restar")}>
                    <img  className="counter-restar__img" src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FMENOS.png?alt=media&token=6f6127a0-c50f-452f-86f8-e7d9a300b5d5" alt="Restar 1 unidad" />
                </button>
                <div className="cont-counter">
                    <p className="counter-detail">{counter}</p>
                </div>
                <button className="counter-sumar__button" onClick={() => handleCounter("sumar")}>
                    <img className="counter-sumar__img" src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FMAS.png?alt=media&token=f805442b-ac04-49a7-b818-73bc139a5112" alt="Sumar 1 unidad" />
                </button>
                <Link className="counter-delete__button" to={"/"}>
                    <img className="counter-delete__img" src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FELIMINAR.png?alt=media&token=30506e1b-44c3-416e-876c-153aaa07f97a" />
                </Link>
            </div>
        </div>
        <div className="detail-prod-total">
            <small className="total-text">Total:</small>
            <h5 className="total-price">${precioTotal}</h5>
        </div>
        <div className="add-prod-carrito">
            <Button variant="contained">AGREGAR AL CARRITO</Button>
        </div>
    </div>
  )
}

export default ItemCount;