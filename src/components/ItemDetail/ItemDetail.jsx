import './ItemDetail.css';
import Intercambiar from '../Intercambiar/Intercambiar';

function ItemDetail(productoDetail) {
    let productos = productoDetail.children;

    return (
        <div className='detalleContenedor'>
            <div className='detalleImgContenedor'>
                <img className="detalleImg" src={productos.imagen} alt="Imagen" />
            </div>
            <div className='detallesProducto'>
                <h4>El productos es {productos.nombre}</h4>
                <p>${productos.precio}</p>
                <p>Stock disponible: {productos.cantidad}</p>
                <Intercambiar productos={productos} />
            </div>
        </div>
    )
}

export default ItemDetail;