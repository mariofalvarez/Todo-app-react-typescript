import React from 'react';

import Delete from './Delete/Delete'
import Edit from './Edit/Edit'
import Task from './Task/Task'
import data from './temp.json'
import Toggle from './Toggle/Toggle'
import './List.css'

const List = () => {
  return (
    <section className="todo-list">
      {
        data.length && data.map((task,idx) => (
          <div key={idx} data-id={idx}>
            <Delete />
            <Edit />
            <Task />
            <Toggle />
          </div>
        ))
      }
    </section>
  )
}

export default List