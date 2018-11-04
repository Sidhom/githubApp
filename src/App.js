import React, { Component } from 'react'

import Main from './components/Main/Main'
import Aux from './hoc/Aux'
import './App.css';



class App extends Component {
  render() {
    return (
      <Aux>
          <Main />
    </Aux>
    );
  }
}

export default App;
