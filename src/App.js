import React, {useState} from 'react';
import Pregunta from './componentes/Pregunta'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'

function App() {
  //Definir el statue
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([])

  //Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto =>{
    guardarGastos([
      ...gastos,
      gasto
    ]);
  }

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
                    <Formulario
                      agregarNuevoGasto={agregarNuevoGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos}
                    />
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
