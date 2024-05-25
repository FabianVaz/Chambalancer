import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importa el CSS global
import './App.css'; // Importa el CSS específico de App

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
