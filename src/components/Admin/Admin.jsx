import { useState } from "react";
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore';

import './Admin.css';


function Admin() {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [productName, setProductName] = useState('');
    const [pluralName, setPluralName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState('');

    function signIn(e) {
        e.preventDefault();
        if (name === 'admin' && password === 'ayurveda') {
            setLogin(true);
        }
    }

    function addNewProduct(e) {
        e.preventDefault();
        const form = document.querySelector('.form')

        let newProduct = {};

        newProduct.nombre = productName;
        newProduct.nombrePlural = pluralName;
        newProduct.categoria = category;
        newProduct.precio = price;
        newProduct.stock = stock;
        newProduct.imagen = image;

        const db = getFirestore();
        const queryCollectionProducts = collection(db, 'items')
        addDoc(queryCollectionProducts, newProduct)
            .catch(err => console.log(err))
            .finally(form.reset())
    }
    return (

        <>
            <h2>Admin</h2>
            { login ?
                <>
                    <h3>Agregar productos</h3>
                    <form onSubmit={(e) => addNewProduct(e)} className="form">
                        <label htmlFor="productName">Nombre</label>
                        <input type="text" htmlFor="productName" onChange={ev => setProductName(ev.target.value)}/>

                        <label htmlFor="productNameInPlural">Nombre en plural</label>
                        <input type="text" htmlFor="productNameInPlural" onChange={ev => setPluralName(ev.target.value)}/>

                        <label htmlFor="category">Categoría</label>
                        <input type="text" htmlFor="category" onChange={ev => setCategory(ev.target.value)}/>

                        <label htmlFor="price">Precio</label>
                        <input type="text" htmlFor="price" onChange={ev => setPrice(ev.target.value)}/>
                        
                        <label htmlFor="stock">Stock</label>
                        <input type="text" htmlFor="stock" onChange={ev => setStock(ev.target.value)}/>
                        
                        <label htmlFor="image">Imagen URL</label>
                        <input type="text" htmlFor="image" onChange={ev => setImage(ev.target.value)}/>

                        <button type="submit" className="btn">Agregar</button>
                    </form>
                    <h4>Categorías disponibles:</h4>
                    <ul>
                        <li>CuidadoPersonal</li>
                        <li>Suplementos</li>
                        <li>Yoga</li>
                    </ul>
                </>

                :

                <form onSubmit={(e) => signIn(e)}>
                    <label htmlFor="name">Usuario</label>
                    <input type="text" htmlFor="name" onChange={ev => setName(ev.target.value)} />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" htmlFor="password" onChange={ev => setPassword(ev.target.value)} />
                    <button type="submit" className="btn">Ingresar</button>
                </form>
                }
        </>
    )
}

export default Admin;