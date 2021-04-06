import React from 'react';
import './Inicio.css'


function Inicio(props){
    return(
        <div className="containerInicio">
            <div className="ingreso">
                <label className="label1" id="label1"> INGRESE SUS DATOS</label>
                <input type="text" className="texto1" id="txt1" />
                <input type="text" className="texto2" id="txt2"/>
                <button className="button1" id="btn1"> INGRESAR
                </button> 
                <button className="button2" id="btn1"> REGISTRARSE
                </button> 
            </div>
            <div className="fondo">
            </div>
        </div>

    );
}

export default Inicio;