/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import axios from "axios";

const getProducts = () => {
    const [ productos, setProductos ] = useState([])

    
    useEffect(() => {
        axios(
            "./productos.json"
        ).then((res) => setProductos(res.data));
    }, [])
    

    return productos;
}

export default getProducts;