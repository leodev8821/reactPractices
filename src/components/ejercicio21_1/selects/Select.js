import React from "react";
import MyLabel from "../label/Label"

const MySelect = ({type}) => {
    switch(type){
        case "checkbox":
            return(
                <div>
                    <input type={type} value="check1"/>
                    <MyLabel tag="label" text="Deseo recibir información sobre novedades y ofertas" /><br/>
                    <input type={type} value="check2"/>
                    <MyLabel tag="label" text="Declaro haber leído y aceptar las condiciones generales del programa y la normativa sobre protección de datos" /><br/>
                </div>
            )
        case "radio":
            return(
                <div>
                    <input type={type} id='Hombre' name='gender' value="Hombre"/>
                    <label for="Hombre">Hombre</label>
                    <input type={type} id='Mujer' name='gender' value="Mujer"/>
                    <label for="Mujer">Mujer</label>
                </div>
            )
        case "select":
            return(
                <div>
                    <select>
                        <option value="Alicante">Alicante</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Valladolid">Valadolid</option>
                    </select>
                </div>
            )
        default:
            return(
                <div>
                    <h3>No hay elemento select</h3>
                </div>
            )
    }
}

export default MySelect;