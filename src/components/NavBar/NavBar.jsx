//ESTILOS
import "./NavBar.css";

//COMPONENTES
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="NavBar">
        <ul>
            <li><a href="#">COLECCION</a></li>
            <li><a href="#">NOSOTROS</a></li>
            <li><a href="#">LOCALES</a></li>
            <li>
              <CartWidget />
            </li>
        </ul>
    </nav>
  )
}

export default NavBar