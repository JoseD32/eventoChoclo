import React from 'react';
import './NuevoUsuario.css'

function NuevoUsuario(props){
    return(
        <div className="containerNuevoUsuario">
            <div className="caracteristicasNuevoUsuario">

                <fieldset class="fieldNuevo">
                    <legend class="legendNuevo">Registro</legend>
                <p>
                    <label class="labelNuevo">Nombre : </label>
                    <input type="text"/>
                </p>

                <p>
                    <label class="labelNuevo">Apellido : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelNuevo">Cedula : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelNuevo">Edad : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelNuevo">Correo Electronico : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelNuevo">Nick : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelNuevo">Contraseña : </label>
                    <input type="text" />
                </p>
                <br></br>
                <p>
                    <button id="btnRegistrarse"> Registrarse
                    </button> 
                </p>
                </fieldset>

            </div>
        </div>

    );
}

export default NuevoUsuario;