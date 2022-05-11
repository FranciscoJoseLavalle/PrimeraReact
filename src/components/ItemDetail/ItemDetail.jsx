import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(productoDetail) {
    let producto = productoDetail.children;

    return (
        <div className='detalleContenedor'>
            <div className='detalleImgContenedor'>
                <img className="detalleImg" src={producto.imagen} alt="Imagen" />
            </div>
            <div className='detallesProducto'>
                <h4>El producto es {producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Stock disponible: {producto.cantidad}</p>
                <ItemCount>{producto}</ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail;