import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert('User registered successfully');
        navigate('/login');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Chambalancer</h1>
      </header>
      <main>
        <button
          onClick={() => navigate('/login')}
          className="tertiary back-button"
        >
          Regresar
        </button>
        <h2 style={{ color: 'var(--primary-color)' }}>Registro</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input
            type="text"
            placeholder="Nombre(s)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido(s)"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Número de Teléfono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="secondary">
            Subir Foto de Perfil
          </button>
          <button type="submit" className="primary">
            Registrarse
          </button>
        </form>
      </main>
      <footer className="footer">
        <p>© 2024 Chambalancer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
