import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";
const Formulario = () => {
    const manejarSubmit = (event) => {
        console.log("Formulario enviado",event);
        event.preventDefault();
    }
    return <section className="formulario">
        <form onSubmit={manejarSubmit}>
            <h2>
            Rellena el formulario para crear el colaborador.
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
            </h2>
        </form>
    </section>
}
export default Formulario;