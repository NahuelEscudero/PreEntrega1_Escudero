//ESTILOS
import "./CartWidget.css"


//IMG
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <button className='button-carrito'>
        <ShoppingCartIcon sx={{ color: `#FFFFFF` }}/>
        <span style={{ color: '#FFFFFF' }}>0</span>
    </button>
  );
};

export default CartWidget;