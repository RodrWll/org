import "./ListaOpciones.css"
const ListaOpciones =(props)=>{
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    //metodo map array.map((elemento, indice, array) => { ... } )
    return <div className="lista-opciones">
        <label> Equipos </label>
        <select
            value={props.valor}
            onChange={(e)=>{props.setValue(e.target.value)}}
        >
                <option value="" disabled defaultValue="" hidden>
                    Seleccionar equipo
                </option>
                {equipos.map((equipo,index) => {
                    return<option key={index} value={equipo}>
                            {equipo}
                        </option>//agregar key para que react no se confunda 
                })}
        </select>
    </div>
}
export default ListaOpciones;