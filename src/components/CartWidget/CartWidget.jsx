import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import Cart from '../../assets/images/cart.png';

import './CartWidget.css';

function CartWidget() {
    const { cartList, productosTotales, actualizarCarrito } = useContext(CartContext);

    useEffect(() => {
        actualizarCarrito();
    },[cartList])

    return (
        <>  

            <Link className='carritoWidget' to="/PrimeraReact/Cart">
            <p className='productosTotales'>{productosTotales}</p>
            <img className='carritoImg' src={Cart} alt="Carrito" />
            </Link>
        </>
    )
}
export default CartWidget;