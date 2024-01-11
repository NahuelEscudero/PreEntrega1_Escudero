/* eslint-disable react/prop-types */
import Item from "../Item/Item.jsx";
import "./ItemList.css"

const ItemList = ( {items} ) => {
  return (
    <div className="cards-container">
      {items.map(item => (
        <Item key={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
      ))}
    </div>
  );
};

export default ItemList;