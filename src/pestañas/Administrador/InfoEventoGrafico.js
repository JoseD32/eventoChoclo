import React from 'react';
import { Link } from 'react-router-dom';

import './InfoEventoGrafico.css'

function InfoEventoGrafico(props){
    return(
        <div className="containerInfoEventoGrafico">
            <div className="barraInfoEventoGrafico">
            <label className="labelTitulo">  </label>
                <label className="labelName">  </label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
            </div>
            <div className="caracteristicasInfoEventoGrafico">
                <div className="divImagenGrafico"></div>
            </div>
        </div>

    );
}

export default InfoEventoGrafico;