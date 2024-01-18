/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//NAVEGABILIDAD
import { Link } from "react-router-dom"

//ESTILOS
import "./Header.css";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx";

//IMAGENES
import img from "../../assets/images/logotipos/LOGO BLANCO.png";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/"><img className="logotype-princ" src={img} alt="Logo Principal Insidia" /></Link>
      <NavBar />
    </div>
  );
};

export default Header;