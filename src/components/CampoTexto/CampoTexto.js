import { useState } from "react";
import "./CampoTexto.css"
const CampoTexto =(props)=>{
    
    //console.log("Datos: ",props);


    const placeholderModificado = `${props.placeholder}...`;
    return(
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input 
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={(event)=>props.setValue(event.target.value)}
            />
        </div>
    )
}
export default CampoTexto