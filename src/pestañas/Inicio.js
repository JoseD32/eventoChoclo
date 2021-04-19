import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css'


function Inicio(props){
    return(
        <div className="containerInicio">
            <div className="ingreso">
                <label className="label1" id="label1"> INGRESE SUS DATOS</label>
                <input type="text" className="texto1" id="txt1" />
                <input type="text" className="texto2" id="txt2"/>
                <Link to="/Admin">
                    <button className="button1" id="btn1"> INGRESAR</button> 
                </Link>
                <Link to="NuevoUsuario">
                    <button className="button2" id="btn1"> REGISTRARSE</button> 
                </Link>
            </div>
            <div className="fondo">
            </div>
        </div>

    );
}

export default Inicio;