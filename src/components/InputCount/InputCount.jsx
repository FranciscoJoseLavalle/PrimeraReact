import './InputCount.css'
import { Link } from 'react-router-dom';

function InputCount() {
    return (
        <>
            <Link to="/PrimeraReact">
                <button>Seguir comprando</button>
            </Link>

            <Link to="/PrimeraReact/Cart">
                <button>Finalizar compra</button>
            </Link>
        </>
    )
}
export default InputCount;