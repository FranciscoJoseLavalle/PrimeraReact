import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item(producto) {

    let prod = producto.children;

    function detail(prod) {
        console.log(prod)
    }

    return (
        <div>
            <div key={prod.id} className="producto">
                <div className='imgCont'>
                    <img src={prod.imagen} alt="Imagen del producto" />
                </div>
                <div className='producto__informacion'>
                    <h4>{prod.nombre}</h4>
                    <p>${prod.precio}</p>
                    <ItemCount>{prod}</ItemCount>
                </div>
                <button className="btnDetalles btn" onClick={(() => detail(prod))}>Ver más detalles</button>
            </div>
        </div>
    )
}

export default Item;