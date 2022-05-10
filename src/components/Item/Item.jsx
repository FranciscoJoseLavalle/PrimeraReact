import './Item.css';

function Item(productosArr) {

    let productos = productosArr.children.children;

    return (
        <div className="catalogo">
            {productos.map(producto => (
                <div key={producto.id} className="producto">
                    <div className='imgCont'>
                    <img src={producto.imagen} alt="Imagen del producto" />
                    </div>
                    <div className='producto__informacion'>
                        <h4>{producto.nombre}</h4>
                        <p>${producto.precio}</p>
                    </div>
                    <button>Ver más detalles</button>
                </div>
            ))}
        </div>
    )
}

export default Item;