//ESTILOS
import "./DetailProduct.css"

//COMPONENTES
import DetailCount from "../../components/DetailCount/DetailCount";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

const DetailProduct = () => {

  return (
    <div className="section-detail">
      <ItemDetailContainer />
      <DetailCount />
    </div>

  )
}

export default DetailProduct; 