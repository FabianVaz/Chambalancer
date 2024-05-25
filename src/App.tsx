import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Asegúrate de importar el CSS

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Chambalancer</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/contact">Contacto</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Chambalancer. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
