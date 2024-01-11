import { useState } from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const App = () => {
  
  const [ counter, setCounter ] = useState(0); 

  const handlerCounterUp = () => {
    setCounter( counter + 1 );
  };

  const handlerCounterDown = () => {
    setCounter( counter - 1 );
  };

  
  return (
    <>
     <div className="App">
       <Header />
       <ItemListContainer saludo="BIENVENIDOS A INSIDIA INDUMENTARIA"/>
       {/*<ItemDetailContainer />*/}
       <div className="CounterSection">
         <div className="btn-section">
           <button className="btn" onClick={handlerCounterDown}>Restar</button>
         </div>
         Counter: {counter}
         <div className="btn-section">
           <button className="btn" onClick={handlerCounterUp}>Sumar</button>
         </div>
       </div>
     </div>
    </>
  );
  
}

export default App;