import './Cart.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Cart() {
    const { cartList, vaciarCarrito, disminuirCantidad, aumentarCantidad, precioTotal, setPrecioTotal, setProductosTotales, productosTotales, borrar } = useContext(CartContext);



    setPrecioTotal(cartList.map(element => element.cantidad * element.precio).reduce((anterior, siguiente) => anterior + siguiente, 0))

    setProductosTotales(cartList.map(element => element.cantidad).reduce((anterior, siguiente) => anterior + siguiente, 0))

    if (!productosTotales) {
        return (
            <div className='carrito'>
                <h2>Carrito</h2>
                <p>Carrito vacío... ¿Deseas volver al inicio?</p>
                <Link className='inicioBtn' to="/PrimeraReact/">
                    <button className='inicio'>Volver al inicio</button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='carrito'>
                <h2>Carrito</h2>
                <div className='productosCont'>
                    {cartList.map(producto => <div key={producto.id} className="cartContainer">
                        <h4>{producto.nombre}</h4>
                        <p>${producto.precio * producto.cantidad}</p>
                        <img src={producto.imagen} alt="" />
                        <div className='removeItems'>
                            <div className='contenedorContador'>
                                <button onClick={() => disminuirCantidad(producto)}>-</button>
                                <p>Cantidad: {producto.cantidad}</p>
                                <button onClick={() => aumentarCantidad(producto)}>+</button>
                            </div>
                            <button className='btnBorrar' onClick={ () => borrar(producto) }>X</button>
                        </div>
                    </div>)}
                </div>
                <p>Precio final: ${precioTotal}</p>

                <button className='vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        )
    }
}

export default Cart;