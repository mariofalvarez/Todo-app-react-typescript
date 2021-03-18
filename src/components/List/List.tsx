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
          <div key={ idx } className="task-item">
            <Toggle id={ idx } task={ task } data={ props.data } setData={ props.setData } />
            <Task id={ idx } task={ task } data={ props.data } setData={ props.setData } />
            <Edit />
            <Delete />
          </div>
        ))
      }
    </section>
  )
}

export default List