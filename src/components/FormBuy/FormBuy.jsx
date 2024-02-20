//HOOKS
import { useState } from "react"; 

//ESTILOS
import "./FormBuy.css"

//COMPONENTES
import { TextField } from "@mui/material";


const initialState = {
  name: "",
  lastName: "",
  direction: "",
}

const FormBuy = () => {
  const [ values, setValues ] = useState(initialState);
  //const { register, formState: { errors }, handleSubmit } = useForm();
 
  /*const onSubmit = (data) => {
    console.log(data);
  }*/

  return (
    <>
      {/*<div className="cont-form">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h1 className="form-title">Continua tu compra</h1>
          <div className="form-group">
            <label className="form-group__title">Nombre</label>
            <input className="form-group__input" type="text" placeholder="Ingrese su nombre" {...register('nombre', {
              required: true
            })}/>
            {errors.nombre?.type === 'required' && <p>Ingrese su nombre</p>}
          </div>
          <div className="form-group">
            <label className="form-group__title">Apellido</label>
            <input className="form-group__input" type="text" placeholder="Ingrese su apellido" {...register('apellido', {
              required: true
            })}/>
            {errors.apellido?.type === 'required' && <p>Ingrese su apellido</p>}
          </div>
          <div className="form-group">
            <label className="form-group__title">Direccion</label>
            <input className="form-group__input" type="text" placeholder="Ingrese su direccion" {...register('direccion')}/>
          </div>
          <div className="form-cont__country">
            <label className="form-cont__country-title">Pais: </label>
            <select className="form-cont__country-select" {...register('pais')}>
              <option className="form-cont__country-option" value="Ar">Argentina</option>
              <option className="form-cont__country-option" value="Uy">Uruguay</option>
              <option className="form-cont__country-option" value="Ch">Chile</option>
            </select>
          </div>
          <input className="form-submit" type="submit" value="Enviar"/>
        </form>
          </div>*/}
      <div className="cont-form">
        <h2 className="form-title">Continua tu compra</h2>
        <form className="form">
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" />
          <TextField id="outlined-basic" label="Direccion" variant="outlined" />
        </form>
      </div>
    </>
  )
};

export default FormBuy;