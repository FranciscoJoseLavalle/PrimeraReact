import './Cart.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

function Cart() {
    const { cartList, vaciarCarrito, disminuirCantidad, aumentarCantidad, precioTotal, setPrecioTotal, setProductosTotales, productosTotales, borrar, cartStatus, setCartStatus, actualizarCarrito } = useContext(CartContext);

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    function handleInputChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    function sendOrder(e) {
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
        const queryCollectionOrders = collection(db, 'orders')
        addDoc(queryCollectionOrders, order)
            .catch(err => console.log(err))
            .finally(vaciarCarrito(),setCartStatus(false))
    }

    if (!productosTotales) {
        return (
            <div className='carrito'>
                <h2>Carrito</h2>
                {cartStatus ?
                <p>Carrito vacío... ¿Deseas volver al inicio?</p>
                :
                <p>¡Compra finalizada! ¿Deseas volver al inicio?</p>}
                <Link className='inicioBtn' to="/PrimeraReact/">
                    <button className='inicio'>Volver al inicio</button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='carrito'>
                <h2>Carrito</h2>
                <form onSubmit={(e) => sendOrder(e)}>
                    <div className='inputDiv'>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" htmlFor="name" id='name' placeholder='Nombre*' name='name' onChange={handleInputChange} required />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="email">Email</label>
                        <input type="email" htmlFor="email" id='email' placeholder='Email*' name='email' onChange={handleInputChange} required />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="phone">Teléfono</label>
                        <input type="number" htmlFor="phone" id='phone' placeholder='Teléfono*' name='phone' onChange={handleInputChange} required />
                    </div>
                    <button type='submit' className='comprar'>Comprar</button>
                </form>
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