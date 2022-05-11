import './ItemCount.css';
import React, { useState } from 'react';

function ItemCount(prod) {
    const [count, setCount] = useState(parseFloat(1));

    // Sumar
    function sumar() {
        if(count < prod.children.cantidad) {
            setCount(count + 1);
        }
    }
    
    // Restar
    function restar() {
        if(count <= prod.children.cantidad && count > 1) {
            setCount(count - 1);
        }
    }

    // Agregar
    function onAdd() {
        console.log(count);
        if (count === 1) {
            alert(`Agregaste ${count} ${prod.children.nombre}`)
        } else {
            alert(`Agregaste ${count} ${prod.children.nombrePlural}`)
        }
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