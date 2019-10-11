import React from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      persons: [
        {id: 'al', name: 'Aleksi', age: 23},
        {id: 'ar', name: 'Arttu', age: 23},
        {id: 'ma', name: 'Matias', age: 23}
      ],
      showPersons: false
    }
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
    console.log(this.state.showPersons)
  }
  render(){
    let persons = null
    let btnClass = ''

    let classes = []

    if(this.state.persons.length <= 2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}><Person 
                  name={person.name} 
                  age={person.age} 
                  click={() => this.deletePersonHandler(index)} 
                  changed={event => this.nameChangeHandler(event, person.id)}/></ErrorBoundary>
          })}
        </div>
      )
      btnClass = 'red'
    }

    return(
      <div className="App">
        <h1>Hello, I'm react app.</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    )
  }
}

export default App;
