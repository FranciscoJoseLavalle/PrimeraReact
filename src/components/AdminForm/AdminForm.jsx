function AdminForm({ addNewProduct, setProductName, setPluralName, setCategory, setPrice, setStock, setImage }) {
    return (
        <form onSubmit={(e) => addNewProduct(e)} className="form">
            <div>
                <label htmlFor="productName">Nombre</label>
                <input type="text" placeholder="Nombre" htmlFor="productName" onChange={ev => setProductName(ev.target.value)} required />
            </div>

            <div>
                <label htmlFor="productNameInPlural">Nombre en plural</label>
                <input type="text" placeholder="Nombre Plural" htmlFor="productNameInPlural" onChange={ev => setPluralName(ev.target.value)} required />
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <input type="text" placeholder="Categoría" htmlFor="category" onChange={ev => setCategory(ev.target.value)} required />
            </div>
            <div>
                <label htmlFor="price">Precio</label>
                <input type="number" placeholder="Precio" htmlFor="price" onChange={ev => setPrice(ev.target.value)} required />
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                <input type="text" placeholder="Stock" htmlFor="stock" onChange={ev => setStock(ev.target.value)} required />
            </div>
            <div>
                <label htmlFor="image">Imagen URL</label>
                <input type="text" placeholder="Imagen URL" htmlFor="image" onChange={ev => setImage(ev.target.value)} required />
            </div>

            <button type="submit" className="btnAdmin">Agregar</button>
        </form>
    )
}

export default AdminForm;