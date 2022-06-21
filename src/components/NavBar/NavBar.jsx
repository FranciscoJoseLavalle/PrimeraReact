import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css';

function NavBar() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/PrimeraReact">
                    <h1 className='header__nav-h1'><span>Ayur</span>veda</h1>
                </Link>
                <div className='header__nav-cartul'>
                    <ul className="header__nav-ul">
                        <Link to="/PrimeraReact">
                            <li className='enlaces'>Inicio</li>
                        </Link>
                        <Link to="/PrimeraReact/Admin">
                            <li className='enlaces'>Admin</li>
                        </Link>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;