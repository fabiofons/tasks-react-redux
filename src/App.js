import React, { Component } from 'react';
import List from './List';
import Form from './Form';
/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     tasks: [
  //       // { id: 1, name: "Sacar la ropa", done: false },
  //       // { id: 2, name: "Hacer la cama", done: true },
  //       // { id: 3, name: "Leer un rato", done: false }
  //     ],
  //     newTask: '',
  //     error : false
  //   }

  //   store.subscribe(() => {
  //     this.setState({
  //       tasks: store.getState().tasks,
  //       newTask: store.getState().newTask
  //     })
  //   })    
  // } 

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          < List />
          < Form />
        </div>
      </div>
    )
  }
}

export default App;
