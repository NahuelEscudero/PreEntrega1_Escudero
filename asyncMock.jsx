import { db } from "./src/firebase/firebaseConfig";
import { collection, query, getDocs} from "firebase/firestore";

const getProducts = async (database) => {
  const data = [];
  const q = query(collection(db, database));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return data;
};

export default getProducts;