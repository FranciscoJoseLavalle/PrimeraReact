import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState({});

    const { detalleId } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', detalleId);
        getDoc(dbQuery)
            .then(respuesta => setProductos( { id: respuesta.id, ...respuesta.data() } ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <h2>Detalles del producto</h2>
            {loading ? <Loader /> : <ItemDetail productos={productos}/>}
        </>
    )
}

export default ItemDetailContainer;