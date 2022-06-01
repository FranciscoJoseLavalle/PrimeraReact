import './ItemCount.css';
import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartContextProvider from '../../context/CartContext';

function ItemCount({ productos, countModified }) {
    const [count, setCount] = useState(parseFloat(1));

    const { addToCart, cartList } = useContext(CartContext);

    // console.log(productos)

    let newCartList = cartList.filter(producto => producto.id === productos.id);
    // Sumar
    function sumar() {
        if (newCartList.length === 0) {
            if (count < productos.stock) {
                setCount(count + 1);
            }
        } else {
            if (count < productos.stock && (newCartList[0].cantidad + count) < productos.stock) {
                setCount(count + 1);
            }
        }
    }

    // Restar
    function restar() {
        if (count <= productos.stock && count > 1) {
            setCount(count - 1);
        }
    }

    // Agregar
    function onAdd() {
        addToCart({ ...productos, cantidad: count });
        countModified();
    }

    return (
        <div className='contenedor'>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className='agregar btn' onClick={() => onAdd()}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;