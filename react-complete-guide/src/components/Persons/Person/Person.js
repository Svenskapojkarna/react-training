import React from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxiliary'

class Person extends React.Component{
    render(){
        console.log('[Person.js] rendering...')
        const style = {
            '@media (minwidth: 500px)': {
                width: '450px'
            }
        }

        return (
            <Aux classes={style}>
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old. {this.props.children}</p>,
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

export default Person;