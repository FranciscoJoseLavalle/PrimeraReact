import './ItemListContainer.css';
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';


let productosArr = [
    { nombre: 'Mat de Yoga', id: '0', cantidad: 11, categoria: 'Yoga', precio: '1400', imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/966/664/products/fb15rosa11-e841c85fef47c111ab16058932419549-1024-1024.jpg' },
    { nombre: 'Taco de Yoga', id: '1', cantidad: 11, categoria: 'Yoga', precio: '1150', imagen: 'https://www.servicegym.com.ar/wp-content/uploads/2019/07/taco-yoga-eva.jpg' },
    { nombre: 'Separador para dedos de los pies', id: '2', cantidad: 11, categoria: 'Yoga', precio: '750', imagen: 'https://ae01.alicdn.com/kf/H6071e3cab4074007b524eae75e3a4c73G/1-Juego-de-separador-de-dedos-y-estiradores-de-silicona-para-pies-de-Yoga-Corrector-de.jpg_Q90.jpg_.webp' },
    { nombre: 'Limpiador de lengua', id: '3', cantidad: 11, categoria: 'Yoga', precio: '670', imagen: 'https://m.media-amazon.com/images/I/6173l0Gm2kL._SX522_.jpg' },
    { nombre: 'Vitamina B12 Natier', id: '4', cantidad: 11, categoria: 'Yoga', precio: '1740', imagen: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/b121-585b63ed3a420e877615909505304071-640-0.jpg' },
    { nombre: 'Spirulina en polvo', id: '5', cantidad: 11, categoria: 'Yoga', precio: '690', imagen: 'https://www.almacencamposverdes.com.ar/wp-content/uploads/2019/08/spirulina-en-polvo.jpg' },
    { nombre: 'Pelota', id: '6', cantidad: 11, categoria: 'Yoga', precio: '620', imagen: 'https://m.media-amazon.com/images/I/61pxb9poQnL._AC_SX425_.jpg' },
    { nombre: 'Banco de Yoga', id: '7', cantidad: 11, categoria: 'Yoga', precio: '12400', imagen: 'https://m.media-amazon.com/images/I/71V-J7lB3FL._AC_SX425_.jpg' }
];

const tomarProductos = new Promise((resolve) => {
    setTimeout( () => {
        resolve(productosArr);
    }, 2000)
})

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        tomarProductos
        .then(respuesta => setProductos(respuesta))
        .finally(() => setLoading(false))
    },[])

    console.log(productos)

    return (
        <>
            <h2>Nuestro catálogo</h2>
            { loading ? <Loader /> : <ItemList>{productosArr}</ItemList>}
        </>
    )
}

export default ItemListContainer;