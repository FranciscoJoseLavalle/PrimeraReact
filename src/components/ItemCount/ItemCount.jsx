import { documentId } from 'firebase/firestore';
import React, { useState, useContext, useEffect } from 'react';

import { CartContext } from '../../context/CartContext';

import './ItemCount.css';

function ItemCount({ productos, countModified }) {
    const [count, setCount] = useState(parseFloat(1));
    const [stockActual, setStockActual] = useState(false);
    const { addToCart, cartList } = useContext(CartContext);

    useEffect(() => {
        if (newCartList.length !== 0) {
            if (newCartList[0].cantidad === productos.stock || productos.stock === 0) {
                setStockActual(true);
            }  else {
                setStockActual(false);
            }
        }
        if (productos.stock === 0) {
            setStockActual(true)
        }
    }, [])

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
            { 
            stockActual ? 
            <button className='agregar btn'>Sin stock</button> 
            : 
            <button className='agregar btn' onClick={() => onAdd()}>Agregar al carrito</button>
            }
            
        </div>
    )
}

export default ItemCount;