import Cart from '../../assets/images/cart.png';
import './CartWidget.css';

function CartWidget() {
    return(
        <img className='carritoImg' src={Cart} alt="Carrito" />
    )
}
export default CartWidget;