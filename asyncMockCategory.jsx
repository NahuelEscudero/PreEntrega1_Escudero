//HOOKS
import { useState, useEffect } from "react";

//FIREBASE
import { db } from "./src/firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";


const useProductsPage = () => {
    const [productsData, setProductsData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    let {category} = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const q = query(collection(db, "productos"), where("categoria", "==", category));
                const products = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    products.push({ ...doc.data(), id: doc.id });
                });
                setProductsData(products);
                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        
        fetchProducts();
    }, [category])
    
    return dataLoaded ? productsData : null;
};

export default useProductsPage;