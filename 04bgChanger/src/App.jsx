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
  // console.log(mainCOntainer);

  const changeColor=function(color){
  body.style.backgroundColor=color;
  
  };
///////////////
// const btnBgColor=()=>{
//   const btns=mainCOntainer?.querySelectorAll('.btn');
//   console.log(...btns,mainCOntainer.querySelectorAll('.btn'));
  
//   [...btns].map(btn=>{
//     const value=btn.textContent.toLowerCase();
//     btn.style.backgroundColor=value;
//     console.log('hello');

//   });
// };
// btnBgColor();
(()=>{
  const btns=mainCOntainer.querySelectorAll('.btn');
  console.log(...btns,mainCOntainer.querySelectorAll('.btn'));
  
  [...btns].map(btn=>{
    const value=btn.textContent.toLowerCase();
    btn.style.backgroundColor=value;
    console.log('hello');

  });
}
)();
// console.log(mainCOntainer.querySelectorAll('.btn')[1].textContent.toLowerCase());
// mainCOntainer.querySelectorAll('.btn')[1].style.textTransform = "capitalize";

  return (
    <>
      
      <div className='btnsContainer flex border-4 p-3 rounded-xl relative  bottom--20  justify-center'>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={(e)=>changeColor('red')}>RED</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>{changeColor('yellow')}}>YELLOW</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('pink')}>PINK</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('green')}>GREEN</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('gray')}>GRAY</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('orange')}>ORANGE</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('blue')}>BLUE</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('brown')}>BROWN</button>
        <button className='btn mr-3 font-bold bg-gray-500' onClick={()=>changeColor('white')}>WHITE</button>
      </div>
    
      
    </>
  )
}

export default App
