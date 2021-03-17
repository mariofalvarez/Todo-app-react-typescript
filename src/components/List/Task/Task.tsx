import React, { useState } from 'react'
import './Task.css'

const ESC_KEY = 27

const Task = (props: any) => {
  const [task, setTask] = useState(props.task.note)
  const [toggle, setToggle] = useState(true)

  const placeholder = (task.length) ? task : props.task.note
  const toggleTask = (e: any) => setToggle(!toggle)
  const handleChange = (e: any) => setTask(e.target.value)
  
  const handleSave = (e: any) => {
    const key = e.which || e.keyCode || e.charCode
    if (e.type === 'keyup' && key !== ESC_KEY) return
    (task.length) ? setTask(task) : setTask(props.task.note)
    setToggle(!toggle)
    if (task.length) saveData(e)
  }

  const saveData = (e: any) => {
    const newData = [...props.data]
    const taskItem = {...props.task, note:task }
    newData[props.id] = taskItem
    props.setData(newData)
  }

  return (
    <div className="task-text">
      {
        (toggle) 
        ? (<p 
          onClick={ toggleTask }
        >{ placeholder }</p>)
        : (<input 
          type="text" 
          name="task"
          placeholder="Enter Task"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          autoFocus
          value={ task }
          onChange={ handleChange }
          onKeyUp={ handleSave }
          onBlur={ handleSave }
        />)
      }
    </div>
  )
}

export default Task
