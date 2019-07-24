import { createStore } from 'redux';

const reducer = (state, action) => {
  if(action.type === "NEW_TASK") {
    return { 
      ...state,
      tasks: state.tasks.concat(action.task),
      newTask: action.newTask,
      error: action.error 
    };
  }
  return state;
}

export default createStore(reducer,  { tasks: [] });