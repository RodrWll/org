import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";
const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>
            Rellena el formulario para crear el colaborador.
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            </h2>
        </form>
    </section>
}
export default Formulario;