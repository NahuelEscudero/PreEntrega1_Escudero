//HOOKS
import { useParams } from "react-router-dom"

//COMPONENTES
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"


const DetailProduct = () => {
  let { id } = useParams();
  const ident = parseInt(id);

  return (
    <div>
      <ItemDetailContainer ident={ident}/>
    </div>
  )
}

export default DetailProduct