import { db } from "./src/firebase/firebaseConfig";
import { collection, query, getDocs} from "firebase/firestore";

const getProducts = async () => {
  const products = [];
  const q = query(collection(db, "productos"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  return products;
};

export default getProducts;