/* eslint-disable react/prop-types */
import "./Item.css";


const valorDolar = 1025;

const Item = ( {id, nombre, imagen, precio} ) => {
  return (
    <div key={id} className="product-card">
      <h4 className="product-card__title">{nombre}</h4>
      <img src={imagen} alt={`${nombre}`} className="product-card__img" />
      <div className="product-card-add">
          <p className="product-card-add__precio">${precio * valorDolar}</p>
          <button id={id} className="product-card-add__button">
            <img src="./src/assets/images/emojis/ADD CARRITO W.png" alt="Agregar al carrito" className="product-card-add__button-img-white"/>
            <img src="./src/assets/images/emojis/ADD CARRITO B.png" alt="Agregar al carrito" className="product-card-add__button-img-black"/>
          </button>
      </div>
    </div>  
  );
};

export default Item;