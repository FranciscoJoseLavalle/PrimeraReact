import Cart from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
    const { cartList, setProductosTotales, productosTotales } = useContext(CartContext);
    
    setProductosTotales(cartList.map(element => element.cantidad).reduce((anterior, siguiente) => anterior + siguiente, 0))

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