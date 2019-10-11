import React from 'react';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    const rnd = Math.random();

    if (rnd > 0.7){
        throw new Error('Something went wrong')
    }

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;