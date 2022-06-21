import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where, addDoc, writeBatch, documentId } from 'firebase/firestore';

import { CartContext } from '../../context/CartContext';
import Loader from '../Loader/Loader';
import CartItem from '../CartItem/CartItem';
import OrderForm from '../OrderForm/OrderForm';

import './Cart.css';

function Cart() {
    const { cartList, vaciarCarrito, disminuirCantidad, aumentarCantidad, precioTotal, productosTotales, borrar, cartStatus, setCartStatus } = useContext(CartContext);

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false)

    function handleInputChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    async function sendOrder(e) {
        setLoading(true)
        e.preventDefault();
        let order = {};

        order.buyer = data;
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.nombre;
            const price = cartItem.precio;
            const quantity = cartItem.cantidad;

            return { id, name, price, quantity }
        })
        order.total = precioTotal;

        const db = getFirestore();
        const queryCollectionStock = collection(db, 'items');
        const queryUpdateStock = query(
            queryCollectionStock,
            where(documentId(), 'in', cartList.map(it => it.id)))

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })))

        batch.commit();


        const queryCollectionOrders = collection(db, 'orders')
        await addDoc(queryCollectionOrders, order)
            .then(resp => setUserId(resp.id))
            .catch(err => console.log(err))
            .finally(vaciarCarrito(), setCartStatus(false), setLoading(false))
    }

    if (!productosTotales) {
        return (
            <div className='carrito'>
                <h2>Carrito</h2>
                {cartStatus ?
                    <p>Carrito vacío... ¿Deseas volver al inicio?</p>
                    :

                    loading ?
                        <Loader />
                        :
                        <div>
                            <p>¡Compra finalizada!</p>
                            <p>Tu ID de compra es: {userId}</p>
                            <p>¿Deseas volver al inicio?</p>
                        </div>

                }
                <Link className='inicioBtn' to="/PrimeraReact/">
                    <button className='inicio'>Volver al inicio</button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='carrito'>
                <h2>Carrito</h2>
                <OrderForm handleInputChange={handleInputChange} sendOrder={sendOrder}/>
                <div className='productosCont'>
                    {cartList.map(producto => <CartItem
                        key={producto.id}
                        producto={producto}
                        aumentarCantidad={aumentarCantidad}
                        disminuirCantidad={disminuirCantidad}
                        borrar={borrar}
                        sendOrder={sendOrder} />)}
                </div>
                <p>Precio final: ${precioTotal}</p>

                <button className='vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        )
    }
}

export default Cart;