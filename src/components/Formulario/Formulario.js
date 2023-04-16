import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";
const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [team, setTeam] = useState("");

    const manejarSubmit = (event) => {
        event.preventDefault();
        let colaborador = {
            nombre,
            puesto,
            foto,
            team
        }
        console.log("Colaborador: ", colaborador);
    }
    return <section className="formulario">
        <form onSubmit={manejarSubmit}>
            <h2>
                Rellena el formulario para crear el colaborador.
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    setValue={setNombre}
                />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    setValue={setPuesto}
                />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    setValue={setFoto}
                />
                <ListaOpciones
                    valor={team}
                    setValue={setTeam}
                />
                <Boton>
                    Crear
                </Boton>
            </h2>
        </form>
    </section>
}
export default Formulario;