import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import AdminForm from "../AdminForm/AdminForm";
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
            {login ?
                <>
                    <AdminForm addNewProduct={addNewProduct} setProductName={setProductName} setPluralName={setPluralName} setCategory={setCategory} setPrice={setPrice} setStock={setStock} setImage={setImage} />
                    <h3>Agregar productos</h3>
                    <h4>Categorías disponibles:</h4>
                    <ul className="adminList">
                        <li>CuidadoPersonal</li>
                        <li>Suplementos</li>
                        <li>Yoga</li>
                    </ul>
                </>

                :

                <form onSubmit={(e) => signIn(e)}>
                    <div>
                        <label htmlFor="name">Usuario</label>
                        <input type="text" placeholder="Usuario" htmlFor="name" onChange={ev => setName(ev.target.value)} /></div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder="Contraseña" htmlFor="password" onChange={ev => setPassword(ev.target.value)} />
                    </div>
                    <button type="submit" className="btnAdmin">Ingresar</button>
                </form>
            }
        </>
    )
}

export default Admin;