import React from 'react';
import {Link} from 'react-router-dom';
import './Usuario.css'

function Usuario(props){
    return(
        <div className="containerUsuario">
            <div className="barraUsuario">
            <label className="labelTitulo"></label>
                <label className="labelName"></label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
            </div>
            <div className="caracteristicasUsuario">
                <input type="text"></input><br></br><br></br>
                <Link to="InfoEvento">
                    <div className="divImagen">
                        <image src={'imagenes\ComicCon2.jpg'} width="100%"></image>
                    </div>
                </Link>

                <div className="divImagen"></div>

                <div className="divImagen"></div>
                
                <div className="divImagen"></div>    
            </div>
        </div>
    );
}

export default Usuario;