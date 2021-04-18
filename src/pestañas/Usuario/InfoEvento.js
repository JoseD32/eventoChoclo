import React from 'react';
import './InfoEvento.css'

function InfoEvento(props){
    return(
        <div className="containerInfoEvento">
            <div className="barraInfoInfoEvento">
            </div>
            <div className="caracteristicasInfoEvento">
                <div className="imagenCabecera"></div>
                <div className="imagenAsientos"></div><br></br>
                <div>
                    <fieldset className="fieldInfoEvento">
                    <label class="labelNuevo">Nombre y descripcion del Evento </label>
                    <br></br><br></br>
                    <label class="labelNuevo">Fecha </label>
                    <br></br><br></br>
                    <label class="labelNuevo">Direccion </label>
                    <br></br><br></br>
                    <button id="btnRegistrarse"> comprar
                    </button> 
                    </fieldset>

                </div>
            </div>
        </div>

    );
}

export default InfoEvento;