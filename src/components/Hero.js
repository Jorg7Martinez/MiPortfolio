import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Jorge Martinez</span>
          </h1>
          <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
          <p className="hero-description">
            Creo experiencias digitales únicas y soluciones innovadoras 
            que conectan ideas con realidad.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn btn-secondary">Contactar</a>
          </div>
        </div>
        
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
