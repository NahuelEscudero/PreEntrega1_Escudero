//HOOKS
import { useState } from "react";
import { useParams } from "react-router-dom"; 

//COMPONENTES
import Spinner from "../../components/Spinner/Spinner.jsx"
import ItemList from "../../components/ItemList/ItemList.jsx";

//OBTENGO PRODUCTOS
import useProductsPage from "../../../asyncMockCategory.jsx";

//

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const category = useParams();
  const categoryProducts = useProductsPage(category);
  

  const handleLoadComplete = () => setIsLoading(false)

  if (categoryProducts) {
    return <ItemList items={categoryProducts} onLoadComplete={handleLoadComplete} />;
  }

  // Mientras se cargan los productos, mostramos un spinner
  return (
    <div className="cont-spinner">
      {isLoading && <Spinner />}
    </div>
  );
};

export default CategoryPage; 