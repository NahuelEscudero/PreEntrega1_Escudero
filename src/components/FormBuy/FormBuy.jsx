//HOOKS
import { useState, useEffect } from "react";

//ESTILOS
import "./FormBuy.css";

//COMPONENTES
import { TextField, Button } from "@mui/material";
import FinishedBuy from "../FinishedBuy/FinishedBuy.jsx";

//FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";


const initialState = {
  name: "",
  lastName: "",
  direction: "",
};

const FormBuy = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);


  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values
    });

    setPurchaseID(docRef.id);
  };

  return (
    <>
      <div className="cont-form">
        <h2 className="form-title">Continua tu compra</h2>
        <form className="form" onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={onChange}
            required
          />
          <TextField
            id="outlined-basic"
            label="Apellido"
            name="lastName"
            variant="outlined"
            value={values.lastName}
            onChange={onChange}
            required
          />
          <TextField
            id="outlined-basic"
            label="Direccion"
            name="direction"
            variant="outlined"
            value={values.direction}
            onChange={onChange}
            required
          />
          <Button type="submit" variant="contained">
            Finalizar Compra
          </Button>
          <FinishedBuy purchaseID={purchaseID} person={values}/>
        </form>
      </div>
    </>
  );
};

export default FormBuy;
