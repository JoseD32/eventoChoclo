import React from 'react';
import './Admin.css'
import EditarEvento from './EditarEvento';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor: 'green'
    },
    fondoPresentacion: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imagenes/volley.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

function Admin(props){
    const classes = useStyles();
        return(
                <div className="containerAdmin">
                    <AppBar>
                    </AppBar>
                <div className="barraInfo">
                <label className="labelTitulo"> </label>
                <label className="labelName">   </label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
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


export default Admin;