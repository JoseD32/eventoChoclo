import React from 'react';
import './Admin.css'
import EditarEvento from './EditarEvento';
import { Link } from 'react-router-dom';


class Admin extends React.Component{

    constructor(props){
        super(props);

    }

    aEditarEvento() {
        this.props.history.push({to: 'EditarEvento'});

    }

    render(){
        return(
                <div className="containerAdmin">
                <div className="barraInfo">
                <label className="labelTitulo"> {this.props.tittle} </label>
                <label className="labelName"> {this.props.cargo} {this.props.name} </label>
                </div>
                <div className="opcionesAdmin">

                    <li><Link to={"/EditarEvento"}>Editar Evento</Link></li>
                    <button className="buttonNuevoEvento" id="btnNuevoEvento"> NUEVO</button>
                    <button className="buttonEditarEvento" id="btnEditarEvento"> EDITAR
                    </button>
                    <button className="buttonEliminarEvento" id="btnEliminarEvento"> ELIMINAR
                    </button>
                </div>
                <div className="eventos">
                    Eventos
                </div>
            </div>

    
            );
    }
}


export default Admin;