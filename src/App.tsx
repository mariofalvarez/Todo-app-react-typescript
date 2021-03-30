import React, { useEffect, useState } from 'react'

import List from './components/List/List'
import Todo from './components/Todo/Todo'
import TempData from './temp.json'

import './assets/style.css'
import './assets/test.css'
import 'normalize-css'

function App () {
  const [data, setData] = useState<any[]>([])

  useEffect(() => { setData(TempData) },[])
  
  return (
    <div className="App">
      <header>
        <h1>Todo List!</h1>
      </header>
      <Todo data={data} setData={setData} onChange={(value: any) => setData(value)} />
    <br></br>
      { data.length && <List data={data} setData={setData} /> }
    </div>
  );
}

export default App
