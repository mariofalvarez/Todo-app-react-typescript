import React from 'react';

import Delete from './Delete/Delete'
import Task from './Task/Task'
import Toggle from './Toggle/Toggle'

import './List.css'

const List = (props: any) => {
  return (
    <section className="todo-list">
      {
        props.data.map((task: any, idx: any) => (
          <div key={ task.id } className="task-item">
            <Toggle id={ idx } task={ task } {...props} />
            <Task id={ idx } task={ task } {...props} />
            <Delete id={ idx } task={ task } {...props} />
          </div>
        ))
      }
    </section>
  )
}

export default List