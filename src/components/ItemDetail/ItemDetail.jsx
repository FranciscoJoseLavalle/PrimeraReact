import './ItemDetail.css';
import Intercambiar from '../Intercambiar/Intercambiar';

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
                <Intercambiar>{producto}</Intercambiar>
            </div>
        </div>
    )
}

export default ItemDetail;