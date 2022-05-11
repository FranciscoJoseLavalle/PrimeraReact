import Item from "../Item/Item";

function ItemList(productosArr) {

    let productos = productosArr.children;

    return (
        <div className="catalogo">
            {productos.map(producto => (<Item>{producto}</Item>))}
        </div>
    )
}

export default ItemList;