import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';
function App() {
  const [showForm, setShowForm] = useState(true);
  //Ternario --> condicion ? true : false
  const changeForm = () => {
    setShowForm(!showForm);
  }
  return (
    <div>
      <Header />
      {showForm ? <Formulario /> : null}
      <MiOrg changeForm= {changeForm} />
    </div>
  );
}

export default App;
