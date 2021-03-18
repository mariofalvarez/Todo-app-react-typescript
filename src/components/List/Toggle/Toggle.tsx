import React, { useState } from 'react'

import './Toggle.css'

const Toggle = (props: any) => {
  const [isCompleted,setIsCompleted] = useState(props.task.completed)
  
  const handleToggleChange = (e: any) => {
    setIsCompleted(!isCompleted)
    saveData()
  }

  const saveData = () => {
    const newData = [...props.data]
    const taskItem = {...props.task , completed:!isCompleted }
    newData[props.id] = taskItem
    props.setData(newData)
  }

  return (
    <div>
      <input 
        type="checkbox" 
        name="complete" 
        id={ `complete_${props.id}` } 
        className="complete"
        checked={ isCompleted }
        onChange={ handleToggleChange }
      />
      <label 
        htmlFor={ `complete_${props.id}` } 
        className="task-check"
      ></label>
    </div>
  )
}

export default Toggle
