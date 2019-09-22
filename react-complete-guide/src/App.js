import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I'm react app.</h1>
        <p>This is really working.</p>
        <Person name="Aleksi" age="23"/>
        <Person name="Arttu" age="23">My hobbies: Trains</Person>
        <Person name="Matias" age="23"/>
      </div>
    );
  }
}

export default App;
