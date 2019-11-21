import React from 'react';
import './Person.css';

class Person extends React.Component{
    render(){
        console.log('[Person.js] rendering...')
        const style = {
            '@media (minwidth: 500px)': {
                width: '450px'
            }
        }

        return (
            <div className='Person' style={style}>
                <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old. {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;