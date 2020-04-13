import React, {useState} from 'react';
import Pregunta from './componentes/Pregunta'
import Formulario from './componentes/Formulario'

function App() {
  //Definir el statue
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gatos semanales</h1>

        <div className="contenido-principal contenido">
          {
            mostrarpregunta
            ? (
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              )
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario/>
                  </div>
                  <div className="one-half column">
                    2
                  </div>
                </div>
              )
          }
          

          
        </div>
      </header>
    </div>
  );
}

export default App;
