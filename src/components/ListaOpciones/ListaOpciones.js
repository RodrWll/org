import "./ListaOpciones.css"
const ListaOpciones =()=>{
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
        <select>
            {equipos.map((equipo,index) => {
                return <option key={index}>{equipo}</option>//agregar key para que react no se confunda 
            })}
        </select>
    </div>
}
export default ListaOpciones;