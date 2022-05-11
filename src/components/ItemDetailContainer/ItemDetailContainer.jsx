import './ItemDetailContainer.css';
import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

let productoDetail = { nombre: 'Mat de Yoga', nombrePlural: 'Mats de Yoga',id: '0', cantidad: 23, categoria: 'Yoga', precio: '1400', imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/966/664/products/fb15rosa11-e841c85fef47c111ab16058932419549-1024-1024.jpg' };

const tomarProductos = new Promise((resolve) => {
    setTimeout( () => {
        resolve(productoDetail);
    }, 2000)
})

function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        tomarProductos
        .then(respuesta => setProductos(respuesta))
        .finally(() => setLoading(false))
    },[])

    // console.log(productos)

    return (
        <>
            <h2>Detalles del producto {productoDetail.nombre}</h2>
            { loading ? <Loader /> : <ItemDetail>{productoDetail}</ItemDetail>}
        </>
    )
}

export default ItemDetailContainer;