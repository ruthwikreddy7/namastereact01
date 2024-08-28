import { useState } from 'react'

import './App.css'
import Todocard from './Todocard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <h1>Todo App</h1>
    <Todocard/>
      
    </div>
  )
}

export default App
