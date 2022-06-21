function AdminForm({ addNewProduct, setProductName, setPluralName, setCategory, setPrice, setStock, setImage }) {
    return (
        <form onSubmit={(e) => addNewProduct(e)} className="form">
            <label htmlFor="productName">Nombre</label>
            <input type="text" htmlFor="productName" onChange={ev => setProductName(ev.target.value)} required />

            <label htmlFor="productNameInPlural">Nombre en plural</label>
            <input type="text" htmlFor="productNameInPlural" onChange={ev => setPluralName(ev.target.value)} required />

            <label htmlFor="category">Categoría</label>
            <input type="text" htmlFor="category" onChange={ev => setCategory(ev.target.value)} required />

            <label htmlFor="price">Precio</label>
            <input type="text" htmlFor="price" onChange={ev => setPrice(ev.target.value)} required />

            <label htmlFor="stock">Stock</label>
            <input type="text" htmlFor="stock" onChange={ev => setStock(ev.target.value)} required />

            <label htmlFor="image">Imagen URL</label>
            <input type="text" htmlFor="image" onChange={ev => setImage(ev.target.value)} required />

            <button type="submit" className="btnAdmin">Agregar</button>
        </form>
    )
}

export default AdminForm;