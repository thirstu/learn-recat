import React from 'react';
import {useDispatch} from "react-redux";
import authService from "../../appwrite/auth.js";
import {logout }from "../../store/authSlice.js";
import Button from '../Button.jsx';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
 try {
  const {register,handleSubmit}=useForm();
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const logoutHandler =()=>{
    console.log("authService",authService);
    authService.logout().then((res)=>{
      console.log("logged out",res);
      dispatch(logout());
      navigate("/login")
    })
  }
  return (
    <form onClick={handleSubmit(logoutHandler)}
    className='mt-8'>
        <div className="space-y-5">
  
            <Button
    type="submit"
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            >
                LogoutBtn
            </Button>
        </div>

    </form>
     // <button
     // type="submit"
     // className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogoutBtn</button>
   )
 } catch (err) {
  console.error("LogoutBtn", err);
 }
}

export default LogoutBtn