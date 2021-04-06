import logo from './logo.svg';
import BarraInfo from './compartidos/BarraInfo'
import './App.css';
import Inicio from './pestañas/Inicio'
import Admin from './pestañas/Admin'

function App() {
  return (
    <div className="app">
      <Admin tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
    </div>
  );
}

export default App;
