import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Services: React.FC = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('http://localhost:3000/services');
      const data = await response.json();
      setServices(data);
    };
    fetchServices();
  }, []);

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
        <h2>Servicios</h2>
        <ul>
          {services.map(service => (
            <li key={service._id} className="service-container">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Precio: {service.price}</p>
              <p>Publicado por: {service.author}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="footer">
        <p>© 2024 Chambalancer. All rights reserved. <a href="/about">About</a> | <a href="/contact">Contact</a></p>
      </footer>
    </div>
  );
};

export default Services;
