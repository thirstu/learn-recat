import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card"

function App() {
  const [count, setCount] = useState(0);
  const con=50;




  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
 
<Card hello='kaise ho' btnText='visit me'/>
<Card hello='bolo ho' />
    </>
  )
}

export default App
