import React from 'react'

import './Todo.css'

const Todo = (props: any) => {

    return (
        <form className="todo">
            <input placeholder="Task" />
            <button type="submit" onClick={props.setData} > Create Todo </button>
        </form>
    )
}

export default Todo
