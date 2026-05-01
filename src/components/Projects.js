import React from 'react';
import './Projects.css';
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FigmaCarousel from './Carousel/ProjectCarousel';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Agenda de Citas",
      description: "Creación de un plugin para agendar citas, diseño de interfaces (Inicio de Sesión, Registro, Agenda) y desarrollo de notificaciones automáticas por correo electrónico.",
      technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      image: "./trabajo1.gif",
      liveUrl: "https://appsol.com.py/psicologos/cristina-espinol/",
      githubUrl: "",
      featured: true
    },
    {
      id: 2,
      title: "PetFriends",
      description: "Pagina web administrativa para agendamientos y adopción de mascotas.",
      technologies: ["MERN"],
      image: "./trabajo2.gif",
      liveUrl: "",
      githubUrl: "https://github.com/Jorg7Martinez/PetFriend",
      featured: true
    },
    {
      id: 3,
      title: "Pet Servicios",
      description: "También cuenta con un área para agendar los servicios que ofrece la empresa, tales como lavado, secado y masajes para mascotas.",
      technologies: ["MERN"],
      image: "./petServicio.png",
      githubUrl: "https://github.com/Jorg7Martinez/PetFriend",
      featured: false
    },
    {
      id: 4,
      title: "Readme",
      description: "El proyecto tiene como objetivo facilitar la creación de libros desde cero, brindando a escritores y amantes de la literatura un espacio donde puedan plasmar su imaginación, compartir sus ideas y colaborar con otros apasionados por las letras.",
      technologies: ["Next", "Ruby on Rails", "Tailwind"],
      image: "./trabajo3.png",
      liveUrl: "",
      githubUrl: "https://github.com/eemilianomiranda/readme-frontend?tab=readme-ov-file",
      featured: true
    },
    {
      id: 5,
      title: "Gluttiny",
      description: "El proyecto tiene como objetivo crear un espacio inclusivo y accesible para personas con dificultades alimentarias, como la celiaquía, intolerancia a la lactosa o que siguen dietas veganas. Este espacio les permitirá encontrar recursos, recetas y productos.",
      technologies: ["React"],
      image: "./trabajo4.png",
      liveUrl: "https://llamaz01.github.io/PortafolioGlutinny/",
      githubUrl: "https://github.com/EnriqueRiosUniversidad/Glutiny",
      featured: true
    },
    {
      id: 6,
      title: "Happy Work",
      description: "Los usuarios pueden comentar y puntuar su experiencia laboral en diferentes empresas. Su objetivo es ofrecer una visión general y transparente sobre el ambiente de trabajo de una empresa a quienes desean postularse a un empleo en ella.",
      technologies: ["MERN"],
      image: "./trabajo5.gif",
      liveUrl: "https://happy-work.vercel.app/home",
      githubUrl: "https://github.com/llamaz01/Happy-Work",
      featured: true
    }
  ];

  const gluttinyFigma = [
    {
      id: 1,
      title: "Gluttiny",
      description: "Aplicación enfocada en personas con necesidades alimentarias específicas, como intolerancia a la lactosa, celiaquía o dietas veganas, ofreciendo alternativas accesibles y variadas",
      images: [
        { id: 1, src: "./gluttinyfotos/1.png" },
        { id: 2, src: "./gluttinyfotos/2.png" },
        { id: 3, src: "./gluttinyfotos/3.png" },
        { id: 4, src: "./gluttinyfotos/4.png" },
      ]
    }
  ];

  const eurosurFigma = [
    {
      id: 1,
      title: "Eurosur",
      description: "Aplicación web orientada a la gestión y búsqueda de alumnos, optimizada mediante sistemas de filtrado y consultas eficientes para mejorar el rendimiento y la experiencia del usuario",
      images: [
        { id: 1, src: "./eurosurfotos/1.png" },
        { id: 2, src: "./eurosurfotos/2.png" },
        { id: 3, src: "./eurosurfotos/3.png" },
        { id: 4, src: "./eurosurfotos/4.png" },
        { id: 5, src: "./eurosurfotos/5.png" },
        { id: 6, src: "./eurosurfotos/6.png" },
      ]
    }
  ];

  const logiRouteFigma = [
    {
      id: 1,
      title: "LogiRoute",
      description: "Aplicación móvil para gestionar entregas, optimizando rutas para ahorrar tiempo y recursos",
      images: [
        { id: 1, src: "./logifotos/1.png" },
        { id: 2, src: "./logifotos/1.2.png" },
        { id: 3, src: "./logifotos/2.png" },
        { id: 4, src: "./logifotos/2.1.png" },
        { id: 5, src: "./logifotos/3.png" },
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="section-divider"></div>

          <p>Algunos proyectos cuentan con videos que muestran un resumen de su diseño y desarrollo.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className='project-image-content' />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>🌐</span> Ver Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>📁</span> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>¿Te gusta lo que ves? ¡Trabajemos juntos!</p>
          <a href="#contact" className="btn btn-primary">Contactar</a>
        </div>

        <div className="section-header">
          <h2 className="section-title">Diseños en Figma</h2>
          <div className="section-divider"></div>
        </div>
        <div>
          <FigmaCarousel
            title={gluttinyFigma[0].title}
            description={gluttinyFigma[0].description}
            images={gluttinyFigma[0].images}
          />

          <FigmaCarousel
            title={eurosurFigma[0].title}
            description={eurosurFigma[0].description}
            images={eurosurFigma[0].images}
          />

          <FigmaCarousel
            title={logiRouteFigma[0].title}
            description={logiRouteFigma[0].description}
            images={logiRouteFigma[0].images}
          />
        </div>

      </div>



    </section>
  );
};

export default Projects;
