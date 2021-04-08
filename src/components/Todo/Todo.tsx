import React, { useState } from 'react'

import './Todo.css'

const Todo = (props: any) => {    
    const [text, setText] = useState("")
    const handleChange = (e: any) => {
        setText(e.target.value)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(text)
        const obj = {
                    "id": props.data.length + 1,
                    "note": text,
                    "completed": false // not dynamic
                }
        console.log(obj)
        console.log(props)
        const newData = [...props.data, obj] // pushing directly to the array itself in react
        console.log(newData)
        props.setData(newData)
        setText("")
    }

    return (
        <form className="todo" onSubmit={handleSubmit} >
            {/* <input type="text" placeholder="Task" onChange={(event) => {props.onChange(event.target.value)}} /> */}
            <input type="text" value={text} onChange={handleChange} />
        </form>
    )
}

export default Todo

// handleSubmit Checklist:
// 1. prevent default from page reloading
// 2. define obj to match array data
// 3. pushing the user data directly to the array
// 4. updated state of data through props - the spread operater
// 5. clear input text back to default blank

// handleChange Checklist:
// 1. Created the handleChange function
// 2. added function to onChange event
// 3. saved user input to state


// Todo Tasks
// 1. save input as a useState
// 2. click button event
// 3. add useState input to object has 3 keys to it (id, notes, completed)
//    {
//      "id": 1,
//      "note": "task uno 1",
//      "completed": false
//     }
// 4. create a new data instance
// 5. push new object into data
// 6. set data with new data