import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
        {name: 'Aleksi', age: 23},
        {name: 'Arttu', age: 23},
        {name: 'Matias', age: 23}
      ]
    }
  );
  const nameChangeHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 23},
        {name: 'Arttuboy', age: 23},
        {name: 'Matiasboy', age: 23}
      ]
    })
  }

  const switchNameHandler = (event) => {
    setPersonsState({
      persons: [
        {name: event.target.value, age: 23},
        {name: 'Arttu', age: 23},
        {name: 'Matias', age: 23}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello, I'm react app.</h1>
      <p>This is really working.</p>
      <button className="Switchbutton" onClick={nameChangeHandler.bind(this, 'Albertintti')}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changed={switchNameHandler}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={nameChangeHandler.bind(this, 'Albertti')}>My hobbies: Trains</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
