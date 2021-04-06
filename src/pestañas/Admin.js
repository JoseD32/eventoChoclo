import React from 'react';
import BarraInfo from '../compartidos/BarraInfo'
import './Admin.css'

function Admin(props){
    return(
        <div className="containerAdmin">
            <div className="barraInfo">
            <label className="labelTitulo"> {props.tittle} </label>
            <label className="labelName"> {props.cargo} {props.name} </label>
            </div>
            <div className="opcionesAdmin">
                <button className="buttonNuevoEvento" id="btnNuevoEvento"> NUEVO
                </button> 
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

export default Admin;