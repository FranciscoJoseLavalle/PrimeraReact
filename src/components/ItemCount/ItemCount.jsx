import './ItemCount.css';
import React, { useState } from 'react';

function ItemCount({productos, countModified}) {
    const [count, setCount] = useState(parseFloat(1));

    console.log(productos)

    // Sumar
    function sumar() {
        if(count < productos.cantidad) {
            setCount(count + 1);
        }
    }
    
    // Restar
    function restar() {
        if(count <= productos.cantidad && count > 1) {
            setCount(count - 1);
        }
    }

    // Agregar
    function onAdd() {
        if (count === 1) {
            alert(`Agregaste ${count} ${productos.nombre}`)
        } else {
            alert(`Agregaste ${count} ${productos.nombrePlural}`)
        }
        countModified();
    }
    return(
        <div className='contenedor'>
            <div className='contenedorContador'>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className='agregar btn' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;