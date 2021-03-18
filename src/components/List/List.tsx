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
        props.data.map((task: any, idx: any) => (
          <div key={ task.id } className="task-item">
            <Toggle id={ idx } task={ task } data={ props.data } setData={ props.setData } />
            <Task id={ idx } task={ task } data={ props.data } setData={ props.setData } />
            <Edit />
            <Delete id={ idx } task={ task } data={ props.data } setData={ props.setData } />
          </div>
        ))
      }
    </section>
  )
}

export default List