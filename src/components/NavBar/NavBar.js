import './NavBar.css';

function NavBar() {
    return(
        <header className="header">
            <nav className="header__nav">
                <h1 className='header__nav-h1'><a href="index.html"><span>Ayur</span>veda</a></h1>
                <ul className="header__nav-ul">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;