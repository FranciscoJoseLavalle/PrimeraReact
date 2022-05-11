import './ItemDetailContainer.css';
import Loader from '../Loader/Loader';

const tomarProductos = new Promise((resolve) => {
    setTimeout( () => {
        resolve(productosArr);
    }, 2000)
})

function ItemDetailContainer() {
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
            { loading ? <Loader /> : <ItemDetail>{productosArr}</ItemDetail>}
        </>
    )
}

export default ItemDetailContainer;