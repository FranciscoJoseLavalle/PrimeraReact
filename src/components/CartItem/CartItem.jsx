import './CartItem.css';

function CartItem({producto, disminuirCantidad, aumentarCantidad, borrar}) {
    return (
        <>
            <div className="cartContainer">
                <h4>{producto.nombre}</h4>
                <p>${producto.precio * producto.cantidad}</p>
                <img src={producto.imagen} alt="" />
                <div className='removeItems'>
                    <div className='contenedorContador'>
                        <button onClick={() => disminuirCantidad(producto)}>-</button>
                        <p>Cantidad: {producto.cantidad}</p>
                        <button onClick={() => aumentarCantidad(producto)}>+</button>
                    </div>
                    <button className='btnBorrar' onClick={() => borrar(producto)}>X</button>
                </div>
            </div>
        </>
    )
}

export default CartItem;