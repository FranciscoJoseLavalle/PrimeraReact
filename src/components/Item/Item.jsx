import ItemCount from '../ItemCount/ItemCount';
import Intercambiar from '../Intercambiar/Intercambiar';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({productos}) {
    
    return (
        <div>
            <div className="producto">
                <div className='imgCont'>
                    <img src={productos.imagen} alt="Imagen del producto" />
                </div>
                <div className='producto__informacion'>
                    <h4>{productos.nombre}</h4>
                    <p>${productos.precio}</p>
                    <Intercambiar productos={productos} />
                </div>
                <Link to={`/PrimeraReact/Detalle/${productos.id}`}>
                <button className="btnDetalles btn">Ver más detalles</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;