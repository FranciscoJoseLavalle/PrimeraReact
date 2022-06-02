import Intercambiar from '../Intercambiar/Intercambiar';

import './ItemDetail.css';

function ItemDetail({productos}) {

    return (
        <div className='detalleContenedor'>
            <div className='detalleImgContenedor'>
                <img className="detalleImg" src={productos.imagen} alt="Imagen" />
            </div>
            <div className='detallesProducto'>
                <h4>El producto es {productos.nombre}</h4>
                <p>${productos.precio}</p>
                <p>Stock disponible: {productos.stock}</p>
                <Intercambiar productos={productos} />
            </div>
        </div>
    )
}

export default ItemDetail;