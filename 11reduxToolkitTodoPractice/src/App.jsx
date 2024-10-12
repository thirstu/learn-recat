import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo';
import Todo from './components/todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>hello practice
 </div>
 <AddTodo/>
 <Todo/>
    </>
  )
}

export default App
