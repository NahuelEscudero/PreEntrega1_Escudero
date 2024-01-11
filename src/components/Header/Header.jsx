/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//ESTILOS
import "./Header.css";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx";

//IMAGENES
import img from "../../assets/images/logotipos/LOGO BLANCO.png";

const Header = (props) => {
  return (
    <div className="Header">
      <img className="logotype-princ" src={img} alt="logo" />
      <NavBar />
    </div>
  );
};

export default Header;