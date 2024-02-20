/* eslint-disable react/prop-types */
//HOOKS
import { createContext, useState } from "react";

export const CartContext = createContext({
  prods: [],
  addToCart: () => {},
  removeProd: () => {},
  getTotalPrice: () => {},
});

export const ProductsCartProvider = ({ children }) => {
  const [ prods, setProds ] = useState([]);
  const [ totalCartPrice, setTotalCartPrice ] = useState(0);

  const addToCart = (product) => {
    // Verifico si el producto existe en el carrito
    const existingProductIndex = prods.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualizo la cantidad
      const updatedProducts = [...prods];
      updatedProducts[existingProductIndex].cantidad += product.cantidad;
      updatedProducts[existingProductIndex].precioTotal += product.precioTotal;
      setProds(updatedProducts);
    } else {
      // Si el producto no está en el carrito, lo agrego
      setProds([...prods, product]);
    }
    setTotalCartPrice(product.precioTotal + totalCartPrice);
  };
  console.log(totalCartPrice);

  const removeProd = (productId) => {
    const existingProductIndex = prods.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      //Si el producto esta en el carrito, lo elimino
      const updatedProducts = [...prods];
      updatedProducts.splice(existingProductIndex, 1);
      setProds(updatedProducts);
    }
  };


  return (
    <CartContext.Provider value={{ prods, totalCartPrice,  addToCart, removeProd}}>
      {children}
    </CartContext.Provider>
  );
};
