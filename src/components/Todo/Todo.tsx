import React, { useEffect, useState } from 'react'

import List from '../List/List'

import './Todo.css'

const Todo = (props: any) => {
    const [todo, setTodo] = useState('')
    // const [] = useState()

    const handleClick = (e: any) => {
        setTodo(e.target.value)
        console.log(e)
    }
    
    // const handleTodo = (e: any) => {}
    // useEffect = () => {}

    return (
        <form className="todo-form">
            <input type="text" placeholder="Type here" />
            <input type="submit" value={ todo } onClick= { handleClick } />
        </form>
    )
}

export default Todo
