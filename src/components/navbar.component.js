import { NavLink as Link } from 'react-router-dom'

// Import assets
import { Logo } from 'assets'

export default function Navbar() {
    return (
        <section className='Navbar'>
            <img className='Navbar-logo' src={Logo} alt='app-logo' />

            <nav className='Navbar-nav'>
                <Link
                    className='nav__item'
                    activeClassName='active'
                    exact
                    to='/'
                >
                    Inicio
                </Link>
                <Link
                    className='nav__item'
                    activeClassName='active'
                    to='/history'
                >
                    Historial
                </Link>
            </nav>
        </section>
    )
}
