import React, { useEffect, useState } from 'react'

import List from '../List/List'

import './Todo.css'

function Todo() {
    const [todo, setTodo] = useState('')

    const handleClick = (e: any) => {
        setTodo(e.target.value)
        console.log(e)
    }
    // const handleTodo = (e: any) => {
        
    // }

    return (
        <div className="todo">
            {
                <input 
                className="todo-box"
                type="input" 
                name="todo"
                placeholder="Type here..."
                value={ todo }
                onClick={ handleClick }
              />
            }
        </div>
    )
}

export default Todo
