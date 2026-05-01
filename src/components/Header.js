import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img alt="logo" src="./logo.png" height={40} width={40}/>
          <h2>Mi Portafolio</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Inicio</a></li>
            <li><a href="#about" className="nav-link">Sobre mí</a></li>
            <li><a href="#skills" className="nav-link">Habilidades</a></li>
            <li><a href="#projects" className="nav-link">Proyectos</a></li>
            <li><a href="#contact" className="nav-link">Contacto</a></li>
          </ul>
        </nav>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
