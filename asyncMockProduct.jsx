//HOOKS
import { useState, useEffect } from "react";

//FIREBASE
import { db } from "./src/firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { useParams } from "react-router-dom";


const useProduct = () => {
    const [productData, setProductData] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    let {id} = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const q = query(collection(db, "productos"), where(documentId(), "==", id));
                const product = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    product.push({ ...doc.data(), id: doc.id });
                });
                const objetProd = product.length === 1 ? product[0] : null;
                setProductData(objetProd);
                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        
        fetchProduct();
    }, [id])
    

    
    return dataLoaded ? productData : null;
};

export default useProduct;