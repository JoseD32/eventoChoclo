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
                    <Link to="/EditarEvento">
                        <button className="buttonNuevoEvento" id="btnNuevoEvento"> NUEVO</button>
                    </Link>
                    <Link to="EditarEvento">
                        <button className="buttonEditarEvento" id="btnEditarEvento"> EDITAR</button>
                    </Link>
                    <Link to="SeleccionarEvento">
                        <button className="buttonEliminarEvento" id="btnEliminarEvento"> ELIMINAR</button>
                    </Link>
                </div>
                <div className="eventos">
                        <input type="text"></input><br></br><br></br>
                        <div className="divImagenAdmin"></div>
                        <div className="divImagenAdmin"></div>
                </div>
            </div>

    
            );
    }
}


export default Admin;