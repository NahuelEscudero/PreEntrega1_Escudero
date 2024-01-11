/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import Swal from 'sweetalert2'

const ItemDetail = ( {product} ) => {
    return(
        Swal.fire({
            title: `Desea agregar ${product.nombre} al carrito?`,
            text: `Total: ${product.precio}`,
            imageUrl: `${product.imagen}`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Agregar al carrito"
          })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Agregado exitosamente!",
                text: `${product.nombre} agregado exitosamente al carrito`,
                icon: "success"
              });
            }
          })
    );
}

export default ItemDetail;