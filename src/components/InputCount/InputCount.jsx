import { Link } from 'react-router-dom';

import './InputCount.css';

function InputCount() {
    return (
        <div className='inputContainer'>
            <Link to="/PrimeraReact">
                <button>Seguir comprando</button>
            </Link>

            <Link to="/PrimeraReact/Cart">
                <button>Finalizar compra</button>
            </Link>
        </div>
    )
}
export default InputCount;