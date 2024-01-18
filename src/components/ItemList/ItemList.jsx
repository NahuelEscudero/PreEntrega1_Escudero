/* eslint-disable react/prop-types */
import Item from "../Item/Item.jsx";
import "./ItemList.css"

const ItemList = ( {items} ) => {
  return (
    <div className="cards-container">
      {items.map(item => (
        <div key={item.id}>
          <Item product={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;