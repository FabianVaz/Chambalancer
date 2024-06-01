import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="container">
      <header className="header">
        <h1 style={{ margin: '0' }}>Chambalancer</h1>
        <nav className="navbar">
          <button className="secondary" onClick={() => navigate('/services')}>Servicios</button>
          <button className="secondary" onClick={() => navigate('/publish')}>Publicar Servicio</button>
          <button className="secondary" onClick={handleLogout}>Cerrar Sesión</button>
          <span className="welcome">Hola, {username}</span>
        </nav>
      </header>
      <main>
        <h2>Contact</h2>
        <p>Ponte en contacto conmigo.</p>
        <p>Email: 20460323@colima.tecnm.mx</p>
        <h3>Name: Luis Fabián Vázquez Rodríguez || Número de control: 20460323</h3>
        <h4>Tecnológico Nacional de México - Colima</h4>
      </main>
      <footer className="footer">
        <p>© 2024 Chambalancer. All rights reserved. <a href="/about">About</a> | <a href="/contact">Contact</a></p>
      </footer>
    </div>
  );
};

export default Contact;

