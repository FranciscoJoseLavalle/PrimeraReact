import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

import ItemList from '../ItemList/ItemList';
import { CartContext } from '../../context/CartContext';
import Loader from '../Loader/Loader';
import filter from '../../assets/images/filter.png';

import './ItemListContainer.css';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setCartStatus } = useContext(CartContext);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        const queryCollectionFilter = id ? query(queryCollection, where('categoria', '==', id)) : queryCollection
        getDocs(queryCollectionFilter)
            .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .finally(() => setLoading(false), setCartStatus(true))
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