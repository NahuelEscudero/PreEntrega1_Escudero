import React from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header 
          title="Soy un title desde una prop" 
          bgColor="orange"
          borderColor="black"
        />
        <div className="UserSection">
          <UserCard 
            img="https://w7.pngwing.com/pngs/275/775/png-transparent-businessperson-woman-business-man-child-face-hand-thumbnail.png" 
            name="Nahuel Escudero"
            born="10/09/2000"
          />
          <UserCard 
            img="https://w7.pngwing.com/pngs/732/7/png-transparent-happy-woman-love-miscellaneous-child-thumbnail.png" 
            name="Pilar Sendra"
            born="13/01/2001"
          />
        </div>
      </div>
    )
  }
}

export default App;