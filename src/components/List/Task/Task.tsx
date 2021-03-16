import React, { useState } from 'react'
import './Task.css'

const ESC_KEY = 27
const INIT_TASK = "Original Task"

const Task = (props: any) => {
  const [task, setTask] = useState("")
  const [toggle, setToggle] = useState(true)

  const placeholder = (task.length) ? task : INIT_TASK
  const toggleTask = (e: any) => setToggle(!toggle)
  const handleChange = (e: any) => setTask(e.target.value)
  const handleSave = (e: any) => {
    const key = e.which || e.keyCode || e.charCode
    if (e.type === 'keyup' && key !== ESC_KEY) return
    (task.length) ? setTask(task) : setTask(INIT_TASK)
    setToggle(!toggle)
  }

  return (
    <div className="task">
      {
        (toggle) 
        ? (<p onClick={ toggleTask }>{ placeholder }</p>)
        : (<input 
          type="text" 
          name="task"
          autoFocus
          placeholder="Enter Task"
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
