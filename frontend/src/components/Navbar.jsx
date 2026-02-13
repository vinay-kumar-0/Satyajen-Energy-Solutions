import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span>⚡</span>
          <span>GreenPower Tech</span>
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
