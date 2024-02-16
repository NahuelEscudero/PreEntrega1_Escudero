//HOOKS
import useProduct from "../../../asyncMockProduct";

//ESTILOS
import "./DetailCount.css"

//COMPONENTES
import ItemCount from "../ItemCount/ItemCount";

const DetailCount = () => {
    const prod = useProduct();

  return (
    <div className="counter-section">  
        {prod && <ItemCount product={prod} />}
    </div>
  )
}

export default DetailCount;