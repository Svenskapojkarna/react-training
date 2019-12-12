import React, { useEffect } from 'react'
import './Cockpit.css'

const Cockpit = (props) => {

    let assignedClasses = []
    let btnClass = ''
    
    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      const timer = setTimeout(() => {
        alert('Data saved to cloud')
      }, 1000)
      return () => {
        clearTimeout(timer)
        console.log('[Cockpit.js] cleanup work in useEffect')
      }
    }, [])

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect')
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      }
    })

    if(props.showPersons){
        btnClass = 'red'
    }

    if(props.personsLength <= 2){
      assignedClasses.push('red')
    }

    if(props.personsLength <= 1){
      assignedClasses.push('bold')
    }

    return (
        <div className='Cockpit'>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button className={btnClass} onClick={props.clicked}>Switch name</button>
        </div>
    )
}

export default React.memo(Cockpit)