import { useState } from 'react'
import Card from './Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const[nombre, setNombre] = useState("");
  const[banda, setBanda] = useState("");
  const [datosForm, setDatosForm]=useState([]);

  const agregarDatos = (dato)=>{
    setDatosForm([...datosForm,dato]);
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      if(nombre.length < 3 || banda.length < 6 || /^\s/.test(nombre)){
        document.getElementsByClassName("cajaErrores")[0].style.display = "block";
        return;
      }
      if(nombre && banda){
        agregarDatos({nombre,banda});
          setNombre("");
          setBanda("");
          document.getElementsByClassName("cajaErrores")[0].style.display = "none";
      }
  }

  

  return (
    <>
    <div className="App">
      <h1>Elige una banda</h1>
      <form onSubmit={handleSubmit}>
        <div className="caja">
          <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div className="caja">
          <input type="text" placeholder="Ingrese su banda favorita" value={banda} onChange={(e)=>setBanda(e.target.value)}/>
        </div>
        
        <button type="submit">Enviar</button>    
      </form>
      <div className='cajaErrores'>
        <p id="error">Uno de los campos no cumple con los requisitos</p>
        <p className='requisito'>*El nombre deberá ser de al menos 3 caracteres y no deberá contener espacios en blanco al comienzo</p>
        <p className='requisito'>*La Banda debe contener al menos al menos 6 caracteres</p>
      </div>
      <Card datos={datosForm}/>
    </div>
    </>
  );
}

export default App;
