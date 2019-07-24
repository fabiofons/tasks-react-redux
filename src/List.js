import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

  render() {
    return (
    <ul className="todo">
        {this.props.tasks.map((task, index) => <li className={task.done ? 'done' : ""} onClick={this.props.checkTask.bind(this)} key={index}>{task.name}</li>)}
    </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkTask(e){
      const index = this.props.tasks.findIndex(task => 
        task.name === e.target.innerHTML
      );
      dispatch({
        type: 'TOGGLE_DONE',
        index
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

