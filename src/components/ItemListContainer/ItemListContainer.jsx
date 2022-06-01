import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import filter from '../../assets/images/filter.png';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (id) {
            setLoading(true);
            const db = getFirestore();
            const queryCollection = collection(db, 'items');
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', id))
            getDocs(queryCollectionFilter)
                .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .finally(() => setLoading(false))
        } else {
            setLoading(true);
            const db = getFirestore();
            const queryCollection = collection(db, 'items');
            getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .finally(() => setLoading(false))
        }
    }, [id])

    function filtrado() {
        const div = document.querySelector('.categorias');
        div.classList.toggle('oculto');
    }



    return (
        <>
            <button className='btnFilter' onClick={filtrado}><img src={filter} alt="Filtro" className='filtro' /></button>
            <div className='categorias oculto'>
                <NavLink to='/PrimeraReact'
                >Todos
                </NavLink>

                <NavLink to='/PrimeraReact/Categorias/Yoga'
                >Yoga
                </NavLink>

                <NavLink to='/PrimeraReact/Categorias/CuidadoPersonal'
                >Cuidado Personal
                </NavLink>

                <NavLink to='/PrimeraReact/Categorias/Suplementos'
                >Suplementos
                </NavLink>
            </div>

            <h2>Nuestro catálogo</h2>
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer;