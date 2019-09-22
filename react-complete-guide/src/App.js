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
  const nameChangeHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Aleksiboy', age: 23},
        {name: 'Arttuboy', age: 23},
        {name: 'Matiasboy', age: 23}
      ]
    })
  }
  return (
    <div className="App">
      <h1>Hello, I'm react app.</h1>
      <p>This is really working.</p>
      <button onClick={nameChangeHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[0].age}>My hobbies: Trains</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[0].age}/>
    </div>
  );
}

export default app;
