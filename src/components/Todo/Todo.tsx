import React from 'react'

import './Todo.css'

const Todo = (props: any) => {    
    return (
        <form className="todo">
            <input type="text" placeholder="Task" onChange={(event) => {props.onChange(event.target.value)}} />
        </form>
    )
}

export default Todo
