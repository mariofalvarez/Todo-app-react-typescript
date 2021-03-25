import React, { useState } from 'react'
import './Task.css'
  
const [ESC_KEY,ENTER_KEY] = [27,13]

const Task = (props: any) => {
  const [task, setTask] = useState(props.data[props.id].note)
  const [isFocus, setIsFocus] = useState(false)

  const placeholder = (task.length) ? task : props.task.note
  const toggleTask = (e: any) => setIsFocus(!isFocus)
  const handleValueChange = (e: any) => setTask(e.target.value)

  const handleSave = (e: any) => {
    const key = e.which || e.keyCode || e.charCode
    if (e.type === 'keyup' && key !== ESC_KEY && key !== ENTER_KEY) return
    (task.length) ? setTask(task) : setTask(props.task.note)
    setIsFocus(!isFocus)
    if (task.length) saveData()
  }

  const saveData = () => {
    const newData = [...props.data]
    const taskItem = {...props.task , note:task }
    newData[props.id] = taskItem
    props.setData(newData)
  }

  return (
    <div className="task-note">
      {
        (!isFocus) 
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
          value={ task }
          onChange={ handleValueChange }
          onKeyUp={ handleSave }
          onBlur={ handleSave }
        />)
      }
    </div>
  )
}

export default Task
