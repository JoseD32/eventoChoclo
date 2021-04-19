import React from 'react';
import { Link } from 'react-router-dom';

import './SeleccionarEvento.css'

function SeleccionarEvento(props){
    return(
        <div className="containerSeleccionarEvento">
            <div className="barraInfoSeleccionarEvento">
            <label className="labelTitulo"></label>
                <label className="labelName"></label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
            </div>
            <div className="caracteristicasSeleccionarEvento">
            <input type="text"></input><br></br><br></br>
                <Link to="/Admin">                
                    <div className="divImagenSeleccionar">
                        <image src={'imagenes\ComicCon2.jpg'} width="100%"></image>
                    </div>
                </Link>
                <Link to="/Admin">                
                    <div className="divImagenSeleccionar"></div>
                </Link>
                <Link to="/Admin">                
                    <div className="divImagenSeleccionar"></div>
                </Link>
                
            </div>
        </div>

    );
}

export default SeleccionarEvento;