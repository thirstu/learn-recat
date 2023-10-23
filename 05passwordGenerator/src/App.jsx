import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [sCharacterAllowed, setSCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("xvzxvcv");

  // useRef hook
  const passwordRef=useRef(null)
const passwordGenerator=useCallback(()=>{
  let pass="";
  let strData="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed)strData += "0123456789";
  if(sCharacterAllowed)strData += "@~$-+*#";

  for(let i=1; i<=length; i++){
    let char=Math.floor(Math.random()*strData.length+1);
    pass += strData.charAt(char);


  }
  (()=>setPassword(pass))();

},[length,numberAllowed,sCharacterAllowed,setPassword]);

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>passwordGenerator(),[numberAllowed,sCharacterAllowed,length,passwordGenerator])
  return (
    <>
    <div className="container">
      <div className="inputCopyContainer">
        <input 
        className='' 
        type="text" 
        value={password}
        placeholder='Password'
         readOnly
         ref={passwordRef} 
         
         />
        <button
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className="btnsContainer">
        <input   
        type="range" 
        min={0} 
        max={100} 
        value={length} 
        onChange={(e)=>{
        setLength(e.target.value);
          
          
        }}/>
        <label className='pr-3'  htmlFor="range">length:{length}</label>
        <input   
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        
        />
        <label className='pr-3'>Numbers</label>

        <input    
        type="checkbox" 
        defaultChecked={sCharacterAllowed}
        onChange={()=>{
          setSCharacterAllowed((prev)=>!prev)
        }}
        
        />
        <label >Characters</label>

      </div>
    </div>
   
    </>
  )
}

export default App
