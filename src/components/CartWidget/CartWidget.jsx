//ESTILOS
import "./CartWidget.css"

//HOOKS
import { useContext } from "react"; 

//CONTEXT
import { CartContext } from "../../context/CartContext"; 

//IMG
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//NAVEGABILIDAD
import { Link } from "react-router-dom";



const CartWidget = () => {
  const { prods } = useContext(CartContext);

  return (
    <Link className='button-carrito' to={"/cart-page"}>
        <ShoppingCartIcon sx={{ color: `#FFFFFF` }}/>
        <span className="cart-length">{prods.length}</span>
    </Link>
  );
};

export default CartWidget;