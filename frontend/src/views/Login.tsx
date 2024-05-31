import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        // Guardar el nombre del usuario en el almacenamiento local para usarlo en otras vistas
        localStorage.setItem('username', data.user.firstName);
        navigate('/services');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Chambalancer</h1>
      </header>
      <main>
        <h2 style={{ color: 'var(--primary-color)' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="primary">
            Login
          </button>
          <button type="button" className="secondary" onClick={() => navigate('/register')}>
            Registrarme
          </button>
        </form>
      </main>
      <footer className="footer">
        <p>© 2024 Chambalancer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
