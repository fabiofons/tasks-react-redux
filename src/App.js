import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class App extends Component {

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
