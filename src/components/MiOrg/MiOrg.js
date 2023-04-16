import { useState } from "react";
import "./MiOrg.css"
const MiOrg= (props)=>{
    //state - hooks
    //useState()
    //const [nombre, setNombre] = useState("valor inicial");

    return <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.changeForm}/>
        </section>
}
export default MiOrg;