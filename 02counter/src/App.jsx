import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [counter,setCounter]=useState(5);
  // let counter=15;
  const AddValue=function(){
    if(counter<20){
      counter++;

    }

    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
    console.log(counter);
    // return counter;
  }
  const removeValue=function(){
    if(counter>0){
      counter--;

    }

    setCounter(counter)
    console.log(counter);
    // return counter;
  }
  return (
    <>
      
      <h1>Hello + Hello</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={AddValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      
    </>
  )
}

export default App
