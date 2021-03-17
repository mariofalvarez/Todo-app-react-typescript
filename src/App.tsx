import React, { useEffect, useState } from 'react'

import List from './components/List/List'
import Todo from './components/Todo/Todo'
import TempData from './temp.json'

import './assets/style.css'
import 'normalize-css'

function App () {
  const [data, setData] = useState<any[]>([])
  useEffect(() => { setData(TempData) },[])

  return (
    <div className="App">
      <List data={data} setData={setData} />
      <Todo />
    </div>
  );
}

export default App;
