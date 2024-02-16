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
          <Link to="/category-page/medias" className="navbar-links">MEDIAS</Link>
          <Link to="/category-page/bermudas" className="navbar-links">BERMUDAS</Link>
          <Link to="/category-page/remeras" className="navbar-links">REMERAS</Link>
          <li>
            <CartWidget />
          </li>
        </ul>
    </nav>
  )
}

export default NavBar