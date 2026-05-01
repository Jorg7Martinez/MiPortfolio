import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "Herramientas",
      technologies: [
        { name: "Git", level: 85 },
        { name: "Figma", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades & Tecnologías</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="skills-content">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-grid">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{tech.name}</span>
                      <span className="skill-percentage">{tech.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <h3>¿Por qué estas tecnologías?</h3>
          <p>
            He elegido estas tecnologías por su robustez, comunidad activa 
            y capacidad para crear soluciones escalables. Me mantengo 
            actualizado con las últimas tendencias y mejores prácticas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
