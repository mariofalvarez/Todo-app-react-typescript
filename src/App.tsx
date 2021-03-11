import 'normalize-css'
import './assets/style.css'
import React from 'react'
import List from './components/List/List'
import Todo from './components/Todo/Todo'

function App () {
  return (
    <div className="App">
      <List />
      <Todo />
    </div>
  );
}

export default App;
