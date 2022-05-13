import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(producto) {

    let prod = producto.children;

    return (
        <div>
            <div key={prod.id}   className="producto">
                <div className='imgCont'>
                    <img src={prod.imagen} alt="Imagen del producto" />
                </div>
                <div className='producto__informacion'>
                    <h4>{prod.nombre}</h4>
                    <p>${prod.precio}</p>
                    <ItemCount>{prod}</ItemCount>
                </div>
                <Link to={`/PrimeraReact/Detalle/${prod.id}`}>
                <button className="btnDetalles btn">Ver más detalles</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;