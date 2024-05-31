import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const PublishService: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, author: username }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Service published successfully');
        navigate('/services');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while publishing the service');
    }
  };

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
        <h2>Publicar Servicio</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input
            type="text"
            placeholder="Nombre del servicio"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción del servicio"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
          />
          <button type="button" className="secondary">
            Agregar Imagen del Servicio
          </button>
          <button type="submit" className="primary">
            Publicar
          </button>
        </form>
      </main>
      <footer className="footer">
        <p>© 2024 Chambalancer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PublishService;
