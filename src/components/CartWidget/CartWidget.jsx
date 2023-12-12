//ESTILOS
import "./CartWidget.css"


//IMG
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <button className='button-carrito'>
        <ShoppingCartIcon />
        <span>0</span>
    </button>
  );
};

export default CartWidget;