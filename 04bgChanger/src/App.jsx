import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const mainCOntainer=document.querySelector('#root');
  const body=document.querySelector('body');
  const button=document.querySelector('button');
  // mainCOntainer.style.backgroundColor='#FFFFFF';
  // body.style.backgroundColor='#FFFFFF';
  console.log(mainCOntainer);

  const changeColor=function(color){
  body.style.backgroundColor=color;
  const [a,b]=useState()
  console.log(event.target);
  }

//   useEffect(()=>{
//     const buttons=document.querySelectorAll('button');
// console.log(button);

//   },[]);

console.log(button);
  return (
    <>
      
      <div className='flex border-4 p-3 rounded-xl relative  bottom--20  justify-center'>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('red')}>RED</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('yellow')}>YELLOW</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('pink')}>PINK</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('green')}>GREEN</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('gray')}>GRAY</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('orange')}>ORANGE</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('blue')}>BLUE</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('brown')}>BROWN</button>
        <button className='mr-3 font-bold bg-gray-500' onClick={()=>changeColor('white')}>WHITE</button>
      </div>
    
      
    </>
  )
}

export default App
