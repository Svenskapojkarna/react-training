import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends React.Component {
  constructor(){
    super()
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id: 'al', name: 'Aleksi', age: 23},
      {id: 'ar', name: 'Arttu', age: 23},
      {id: 'ma', name: 'Matias', age: 23}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  /*UNSAFE_componentWillMount(){
    console.log('[App.js] componentWillMount')
  }*/

  componentDidMount(){
    console.log('[App.js] componentDidMount')
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
  }
  render(){
    console.log('[App.js] render')
    let persons = null

    if(this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
    }

    return(
      <div className="App">
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle}
        />
        {persons}
      </div>
    )
  }
}

export default App;
