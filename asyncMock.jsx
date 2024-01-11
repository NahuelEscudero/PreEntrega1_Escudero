/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const getProducts = () => {
    const [ productos, setProductos ] = useState([])

    useEffect(() => {
        fetch("./productos.json")
        .then(response => response.json())
        .then(data => {
            setProductos(data)
        }) 
    }, [])

    return productos;
}

export default getProducts;