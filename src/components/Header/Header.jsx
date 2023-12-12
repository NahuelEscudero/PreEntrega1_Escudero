/* eslint-disable react/prop-types */
import "./Header.css";

//IMAGENES
import img from "../../assets/logo.png";

const Header = (props) => {
  return (
    <div 
      className="Header" 
      style={{
        backgroundColor: props.bgColor,
        border: `10px solid ${props.borderColor}`
      }}>
      <img src={img} alt="logo" />
      <h1>{props.title}</h1>
      <h2>Subtitulo</h2>
    </div>
  );
};

export default Header;