import { useParams } from "react-router-dom"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

const DetailProduct = () => {
  let { id } = useParams();

  console.log(id);

  return (
    <div>
      <h3>Hola Mundo</h3>
      <ItemDetailContainer />
    </div>
  )
}

export default DetailProduct