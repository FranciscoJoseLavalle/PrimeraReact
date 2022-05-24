import Item from "../Item/Item";

function ItemList({productos}) {
    return (
        <div className="catalogo">
            {productos.map(productos => (<Item productos={productos}/>))}
        </div>
    )
}

export default ItemList;