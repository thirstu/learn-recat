import React from 'react'
import  Login from '../components/Login.jsx'
import '../App.css'
import '../index.css'
function LoginPage() {
  console.log("LoginPage");
  return (
    <div className='py-8'>
        <Login/>
    </div>
  )
}

export default LoginPage