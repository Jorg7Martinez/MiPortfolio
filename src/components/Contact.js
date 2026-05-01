import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_f7j1o8p', 'template_9rojlu4', e.target, 'SAdTFTY3wbPGv4SB8')
      .then((result) => {
        alert('Gracias por enviar tu correo!', {
          autoClose: 5000,
        });
      })
      .catch((error) => {
        alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', {
          autoClose: 5000,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contacto</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>¡Hablemos!</h3>
            <p>
              ¿Tienes un proyecto en mente? ¿Quieres colaborar?
              ¡Me encantaría escuchar sobre tu idea!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div>
                  <h4>Email</h4>
                  <p>jorgemf196@gmail.com</p>
                </div>
              </div>


              <div className="contact-item">
                <div>
                  <h4>Ubicación</h4>
                  <p>Encarnación, Paraguay</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/jorge-martinez-67480924b/" className="social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Jorg7Martinez" className="social-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.instagram.com/jorg7_martinez/" className="social-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="hidden"
                  name="to_email"
                  value="jorgemf195@gmail.com"
                />
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
