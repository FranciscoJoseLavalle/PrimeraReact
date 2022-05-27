import './Cart.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {
    const { cartList, vaciarCarrito, disminuirCantidad, aumentarCantidad } = useContext(CartContext);
    


    return (
        <div className='carrito'>
            <h2>Carrito</h2>
            <div className='productosCont'>
                {cartList.map(producto => <div key={producto.id} className="cartContainer">
                    <p>{producto.nombre}</p>
                    <p>${producto.precio}</p>
                    <img src={producto.imagen} alt="" />
                    <div className='removeBtn'>
                        <button onClick={() => disminuirCantidad(producto)}>-</button>
                        <p>Cantidad: {producto.cantidad}</p>
                        <button onClick={() => aumentarCantidad(producto)}>+</button>
                    </div>
                </div>)}
            </div>

            <button className='vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;