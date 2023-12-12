import React from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        counter: 0,
    };
  }

  handlerCounterUp = () => {
    this.setState({ counter: this.state.counter + 1});
  }

  handlerCounterDown = () => {
    this.setState({ counter: this.state.counter - 1});
  }

  render() {
    return (
      <div className="App">
        <Header 
          title="Soy un title desde una prop" 
          bgColor="white"
          borderColor="black"
        />
        <ItemListContainer />
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
        <div className="CounterSection">
          <div className="btn-section">
            <button className="btn" onClick={this.handlerCounterDown}>Restar</button>
          </div>
          Counter: {this.state.counter}
          <div className="btn-section">
            <button className="btn" onClick={this.handlerCounterUp}>Sumar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;