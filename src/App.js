import './App.css';
import Inicio from './pestañas/Inicio'
import Admin from './pestañas/Administrador/Admin'
import EditarEvento from './pestañas/Administrador/EditarEvento';
import InfoEventoGrafico from './pestañas/Administrador/InfoEventoGrafico';
import SeleccionarEvento from './pestañas/Administrador/SeleccionarEvento';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NuevoUsuario from './pestañas/Usuario/NuevoUsuario';
import Usuario from './pestañas/Usuario/Usuario';
import InfoEvento from './pestañas/Usuario/InfoEvento';


function App() {
  return (
      <div className="app">
        <InfoEvento tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
      </div>
  );
}

export default App;
