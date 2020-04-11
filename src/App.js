import React from 'react';
import Pregunta from './componentes/Pregunta'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gatos semanales</h1>

        <div className="contemido-principal contenido">
          <Pregunta/>
        </div>
      </header>
    </div>
  );
}

export default App;
