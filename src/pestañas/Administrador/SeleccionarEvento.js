import React from 'react';
import './SeleccionarEvento.css'

function SeleccionarEvento(props){
    return(
        <div className="containerSeleccionarEvento">
            <div className="barraInfoSeleccionarEvento">
            </div>
            <div className="caracteristicasSeleccionarEvento">
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

export default SeleccionarEvento;