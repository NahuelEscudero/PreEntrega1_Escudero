/* eslint-disable react/prop-types */
import Item from "../Item/Item.jsx";
import "./ItemList.css"

const ItemList = ( {items} ) => {
  return (
    <div className="cards-container">
      {items.map(item => {
        return <Item product={item} key={item.id}/>;
      })}
    </div>
  );
};

export default ItemList;