import React from 'react';
import store from './store';

class List extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
          { id: 1, name: "Sacar la ropa", done: false },
          { id: 2, name: "Hacer la cama", done: true },
      { id: 3, name: "Leer un rato", done: false }]
    }

    store.subscribe(() => {
      this.setState({
        tasks: store.getState().tasks
      });
    })
  }

  render() {
    return (
    <ul className="todo">
        {this.state.tasks.map((task, index) => <li className={task.done ? 'done' : ""} onClick={this.checkTask.bind(this)} key={index}>{task.name}</li>)}
    </ul>
    );
  }
    
  checkTask(e){
    const index = this.state.tasks.findIndex(task => 
      task.name === e.target.innerHTML
    );
    store.dispatch({
      type: 'TOGGLE_DONE',
      index
    });
  }

}

export default List;

