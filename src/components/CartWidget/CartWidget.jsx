import Cart from '../../assets/images/cart.png';
import { Link } from 'react-router-dom'
import './CartWidget.css';

function CartWidget() {
    return (
        <>
            <Link to="/PrimeraReact/Cart">
            <img className='carritoImg' src={Cart} alt="Carrito" />
            </Link>
        </>
    )
}
export default CartWidget;