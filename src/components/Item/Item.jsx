/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//ESTILOS
import "./Item.css";

//NAVEGABILIDAD
import { Link } from "react-router-dom";



const Item = ( {product} ) => {
  
  const { id, nombre, precio, imagen } = product;
  const valorDolar = 1200;

  return (
    <div className="product-card" id={id}>
      <h4 className="product-card__title">{nombre}</h4>
      <img src={imagen} alt={`${nombre}`} className="product-card__img" />
      <div className="product-card-add">
          <p className="product-card-add__precio">${precio * valorDolar}</p>
          <Link to={`/detailproduct/${id}`} className="product-card-add__button">
              <img src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FADD%20CARRITO%20W.png?alt=media&token=07d91412-5dbc-4905-850a-61679a3cb62a" alt="Agregar al carrito" className="product-card-add__button-img-white"/>
              <img src="https://firebasestorage.googleapis.com/v0/b/insidia-ind.appspot.com/o/simbolos%2FADD%20CARRITO%20B.png?alt=media&token=562c9301-4c6e-4203-998b-21ffca2cb9e7" alt="Agregar al carrito" className="product-card-add__button-img-black"/>
          </Link>
      </div>
    </div>  
  );
};

export default Item;