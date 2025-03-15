import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="../../images/logo1.jpg" loading="lazy" alt="Logo del Sitio" />
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={handleMenuItemClick}>Inicio</Link></li>
          <li><Link to="/sobre-mi" onClick={handleMenuItemClick}>Sobre Mí</Link></li>
          <li className="dropdown">
            <span>Servicios</span> 
            <ul className="dropdown-content">
              <li><Link to="/traumatologia" onClick={handleMenuItemClick}>Traumatología</Link></li>
              <li><Link to="/ortopedia" onClick={handleMenuItemClick}>Ortopedia</Link></li>
              <li><Link to="/cirugia-artroscopica" onClick={handleMenuItemClick}>Cirugía Artroscópica</Link></li>
            </ul>
          </li>
          <li><Link to="/contacto" onClick={handleMenuItemClick}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
