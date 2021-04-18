import React from 'react';
import './Usuario.css'

function Usuario(props){
    return(
        <div className="containerUsuario">
            <div className="barraUsuario">
            </div>
            <div className="caracteristicasUsuario">
                <input type="text"></input><br></br><br></br>
                <div className="divImagen">
                    <image src={'imagenes\ComicCon2.jpg'} width="100%"></image>
                </div>

                <div className="divImagen"></div>

                <div className="divImagen"></div>
                
                <div className="divImagen"></div>    
            </div>
        </div>
    );
}

export default Usuario;