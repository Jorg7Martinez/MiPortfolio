import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jorge Martinez</h3>
            <p>
              Desarrollador Full Stack apasionado por crear 
              experiencias digitales únicas y soluciones innovadoras.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>jorgemf196@gmail.com</li>
              <li>Encarnación, Paraguay</li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Jorge Martinez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
