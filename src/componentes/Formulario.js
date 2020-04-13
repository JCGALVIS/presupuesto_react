import React, {useState} from 'react';

const Formulario = () => {
    //Definir state
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    //Cuando el usuario agrega un gasto
    const agregarGatos = e =>{
        e.preventDefault();

        //Validar


        //Construir gasto



        //Pasar el gasto al componente principal

        
        //Resetear el form
    }

    return ( 
        <form
            onSubmit={agregarGatos} 
        >
            <h2>Agregar gastos aquí</h2>

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={nombre} 
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300" 
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}
 
export default Formulario;