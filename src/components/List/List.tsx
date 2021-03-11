import './List.css';
import React from 'react';
import data from './temp.json';

const List = () => {
  return (
    <section className="todo-list">
      {
        data.length && data.map((task,idx) => (
          <div key={idx} data-id={idx}>
            <input type="checkbox" checked={ task.completed } />
            <p>{ task.note }</p>
            <div className="btn-opts">
              <button className="save-btn">+</button>
              <button className="delete-btn">x</button>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default List
// import List from './components/List/List';