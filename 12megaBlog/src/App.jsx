/////we get two times when consoling because its in strict mode in production it does not happen

import { useState,useEffect } from 'react';
import {useDispatch} from "react-redux"
import './App.css'
import './index.css'
import AuthService from "./appwrite/auth.js";
import {login,logout} from "./store/authSlice.js"
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet } from 'react-router-dom';
import  authService  from './appwrite/auth.js';
import authSlice from "./store/authSlice.js";
import { useNavigate } from 'react-router-dom';

function App() {
  // console.log(authService);
  const navigate = useNavigate();
const [loading,setLoading]=useState(true);
const dispatch=useDispatch();
useEffect(()=>{
  // const auth=
  authService.getCurrentUser(navigate)
  .then(res=>{
    console.log("app-res",res);
    if(res){
      console.log("app-if");
      dispatch(login({userData:res}))
    }else{
      console.log("app-else");
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false));
  // console.log("app-auth",auth);
},[])


  return !loading?(
<div>
  <div>
    <Header />
    <main>
      {
        /**
         * 
<Outlet /> is a component from React Router used in nested routes. It acts as a placeholder where the child routes will be rendered. When you define a parent route with child routes, <Outlet /> specifies where the child components should be rendered within the parent component's layout.
         */
        ////Todo
       <Outlet /> }
    </main>
    <Footer />
  </div>
</div>
  ):null;
}

export default App
