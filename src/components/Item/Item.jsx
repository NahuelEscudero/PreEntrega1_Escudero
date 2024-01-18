/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//ESTILOS
import "./Item.css";

//NAVEGABILIDAD
import { Link } from "react-router-dom";


const valorDolar = 1025;

const Item = ( {product} ) => {
  const { id, nombre, precio, imagen } = product;

  return (
    <div className="product-card" key={id}>
      <h4 className="product-card__title">{nombre}</h4>
      <img src={imagen} alt={`${nombre}`} className="product-card__img" />
      <div className="product-card-add">
          <p className="product-card-add__precio">${precio * valorDolar}</p>
          <Link to={`/detailproduct/${id}`} className="product-card-add__button">
              <img src="./src/assets/images/emojis/ADD CARRITO W.png" alt="Agregar al carrito" className="product-card-add__button-img-white"/>
              <img src="./src/assets/images/emojis/ADD CARRITO B.png" alt="Agregar al carrito" className="product-card-add__button-img-black"/>
          </Link>
      </div>
    </div>  
  );
};

export default Item;