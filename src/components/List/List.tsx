import React from 'react';

import Delete from './Delete/Delete'
import Edit from './Edit/Edit'
import Task from './Task/Task'
import Toggle from './Toggle/Toggle'

import './List.css'

const List = (props: any) => {
  return (
    <section className="todo-list">
      {
        props.data.length && props.data.map((task: any,idx: any) => (
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