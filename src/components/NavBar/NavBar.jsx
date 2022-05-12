import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/PrimeraReact">
                <h1 className='header__nav-h1'><a href="index.html"><span>Ayur</span>veda</a></h1>
                </Link>
                <div className='header__nav-cartul'>
                    <ul className="header__nav-ul">
                        <Link to="/PrimeraReact">
                            <li><a href="#" className='enlaces'>Inicio</a></li>
                        </Link>
                        <Link to="/PrimeraReact">
                            <li><a href="#" className='enlaces'>Contacto</a></li>
                        </Link>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;