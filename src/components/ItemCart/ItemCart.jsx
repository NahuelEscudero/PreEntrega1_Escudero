/* eslint-disable react/prop-types */
//ESTILOS
import "./ItemCart.css";

//HOOKS
import { useContext, useState } from "react";

//CONTEXT
import { CartContext } from "../../context/CartContext";



const ItemCart = ({ product }) => {
  //Desestructuro producto
  const { id, nombre, imagen, cantidad, precio, precioTotal } = product;
  //Contador del producto
  const [counter, setCounter] = useState(cantidad);
  //Valor actualizado del precio
  const [nuevoPrecioTotal, setNuevoPrecioTotal] = useState(precioTotal);
  //Productos del carrito
  const { prods, removeProd } = useContext(CartContext);
  //Valor del dolar
  const valorDolar = 1200;

  
  //Manejo del counter
  const handleCounter = (operacion) => {
    if (operacion === "sumar") {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        const newPrecioTotal = newCounter * (precio * valorDolar);
        setNuevoPrecioTotal(newPrecioTotal);
        return newCounter;
      });
    } else if (operacion === "restar") {
      if (counter > 1) {
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;
          const newPrecioTotal = newCounter * (precio * valorDolar);
          setNuevoPrecioTotal(newPrecioTotal);
          return newCounter;
        });
      }
    } else if (operacion === "reset") {
      setCounter(1);
      setNuevoPrecioTotal(precio * valorDolar);
    }
  };

  return (
    <div className="product-cart">
      <img src={imagen} alt={nombre} className="product-cart__img" />
      <h4 className="product-cart__name">{nombre}</h4>
      <div className="product-cart__cant">
        <small className="product-cart__cant-title">Cant:</small>
        <button
          className="product-cart__cant-menos"
          onClick={() => handleCounter("restar")}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FMENOS.png?alt=media&token=6f6127a0-c50f-452f-86f8-e7d9a300b5d5"
            alt="Descontar producto del carrito"
            className="product-cart__cant-menos-img"
          />
        </button>
        <p id="cantSeleccionada" className="product-cart__cant-number">
          {counter}
        </p>
        <button
          className="product-cart__cant-mas"
          onClick={() => handleCounter("sumar")}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FMAS.png?alt=media&token=f805442b-ac04-49a7-b818-73bc139a5112"
            alt="Agregar producto al carrito"
            className="product-cart__cant-mas-img"
          />
        </button>
      </div>
      <div className="product-cart__total">
        <small className="product-cart__total-title">Total:</small>
        <p className="product-cart__number">
          <b>$ {nuevoPrecioTotal}</b>
        </p>
      </div>
      <div className="product-cart__delete">
        <button
          className="product-cart__delete-button"
          onClick={() => removeProd(id)}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FELIMINAR.png?alt=media&token=30506e1b-44c3-416e-876c-153aaa07f97a"
            alt="Eliminar del carrito"
            className="product-cart__delete-button-img"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
