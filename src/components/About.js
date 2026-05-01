import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>¿Quién soy?</h3>
            <p>
              Soy un desarrollador apasionado por crear soluciones digitales 
              que marquen la diferencia. Con experiencia en desarrollo web 
              full stack, me especializo en crear aplicaciones modernas, 
              escalables y centradas en el usuario.
            </p>
            
            <h3>Mi Experiencia</h3>
            <p>
              He trabajado en diversos proyectos que van desde aplicaciones 
              web hasta sistemas complejos de gestión. Mi enfoque se centra 
              en escribir código limpio, mantenible y eficiente.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat">
                <h4>8+</h4>
                <p>Tecnologías Dominadas</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
