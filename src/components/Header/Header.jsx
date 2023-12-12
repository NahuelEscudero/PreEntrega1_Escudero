/* eslint-disable react/prop-types */

//ESTILOS
import "./Header.css";

//COMPONENTES
import NavBar from "../NavBar/NavBar.jsx";

//IMAGENES
import img from "../../assets/images/logotipos/LOGO NEGRO.png";

const Header = (props) => {
  return (
    <div className="Header" style={{
        backgroundColor: props.bgColor,
        border: `10px solid ${props.borderColor}`
      }}>
      <img className="logotype-princ" src={img} alt="logo" />
      <NavBar />
    </div>
  );
};

export default Header;