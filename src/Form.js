import React from 'react';
import store from './store';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = { newTask: "", error: false };
 
    this.trackInput = this.trackInput.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input type="text" id="new-task" className={this.state.error ? 'error' : ''} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.trackInput}/>
      </form>
    );
  }

  trackInput(e){
    this.setState({
      newTask : e.target.value,
      error : false
    });
  }

  addTask(event){
    event.preventDefault();
    if(this.state.newTask.length > 1){
      const task = { name : this.state.newTask, done : false };
      store.dispatch({
        type:'NEW_TASK',
        task,
      });
      this.setState({
        newTask: ''
      })
    } else {
      this.setState({
        error : true
      })
    }    
  }  
}

export default Form;