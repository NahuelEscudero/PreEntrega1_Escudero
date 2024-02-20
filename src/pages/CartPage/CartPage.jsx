//ESTILOS
import "./CartPage.css";

//COMPONENTES
import ItemCart from "../../components/ItemCart/ItemCart.jsx";
import FormBuy from "../../components/FormBuy/FormBuy.jsx";

//CONTEXT
import { CartContext  } from "../../context/CartContext";

//HOOKS
import { useContext } from "react"; 

const CartPage = () => {
  const { prods, totalCartPrice } = useContext(CartContext);

  return (
    <div className="container-products">
      <h2 className="cart-title">Carrito de compras</h2>
      <div className="container-products-cart">
        {prods.map((prod) => {
          return (
            <div key={prod.id} className="container-products-cart__product">
              <ItemCart product={prod} />
            </div>
          );
        })}
        {prods.length > 0 ? (
          <div className="total-buy">
            <p className="total-buy__title">Total:</p>
            <h4 className="total-buy__number">$ {totalCartPrice}</h4>
          </div>
        ) : null}
      </div>

      {prods.length === 0 ? (
        <div className="no-products-cart">
          ¡Aun no tenés productos agregados al carrito!
        </div>
      ) : null}

      {/*prods.length > 0 ? <FormBuy /> : null*/}
      <FormBuy />
    </div>
  );
};

export default CartPage;
