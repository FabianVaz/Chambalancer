import React from 'react';
import BarraDeBusqueda from '../components/BarraBusqueda';
import CategoriasDeServicios from '../components/CategoriaServicios';
import ServiciosDestacados from '../components/ServiciosDestacados';
import MenuDeNavegacion from '../components/Menu';
import IconoDePerfilDeUsuario from '../components/IconoPerfil';

const PaginaPrincipal: React.FC = () => {
  return (
    <div>
      <header>
        <MenuDeNavegacion />
        <IconoDePerfilDeUsuario />
      </header>
      <main>
        <BarraDeBusqueda />
        <CategoriasDeServicios />
        <ServiciosDestacados />
      </main>
      <footer>
        <div>Enlaces del Pie de Página</div>
        <div>Política de Privacidad</div>
        <div>Términos de Servicio</div>
      </footer>
    </div>
  );
};

export default PaginaPrincipal;
