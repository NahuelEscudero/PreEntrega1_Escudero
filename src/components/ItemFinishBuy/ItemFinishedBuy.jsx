/* eslint-disable react/prop-types */
//ESTILOS
import "./ItemFinishedBuy.css"


const ItemFinishedBuy = ( {product} ) => {
    const { nombre, imagen } = product;

  return (
    <div className="product-buyed">
        <img src={imagen} alt={nombre} className="product-buyed__img"/>
        <h4 className="product-buyed__name">{nombre}</h4>
    </div>
  )
}

export default ItemFinishedBuy;