//NAVEGABILIDAD
import { Link } from "react-router-dom"

//ESTILOS
import "./NavBar.css";

//COMPONENTES
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="NavBar">
        <ul>
          <Link to="/coleccion" className="navbar-links">COLECCION</Link>
          <Link to="/nosotros" className="navbar-links">NOSOTROS</Link>
          <Link to="/locales" className="navbar-links">LOCALES</Link>
          <li>
            <CartWidget />
          </li>
        </ul>
    </nav>
  )
}

export default NavBar