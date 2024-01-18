/* eslint-disable react/prop-types */
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx"
import getProducts from "../../../asyncMock.jsx"

const ItemListContainer = ( {saludo} ) => {
  return (
    <>
      <div className="greeting">{saludo}</div>
      <ItemList items={getProducts()}/>
    </>
  );
};
  
export default ItemListContainer;