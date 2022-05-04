import './ItemCount.css';
import React, { useState } from 'react';

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(parseFloat(initial));

    // Sumar
    function sumar() {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    
    // Restar
    function restar() {
        if(count <= stock && count > initial) {
            setCount(count - 1);
        }
    }

    // Agregar
    function onAdd() {
        console.log(count);
    }
    return(
        <div className='contenedor'>
            <p className='nombre'>Mat de Yoga</p>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className='agregar' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;