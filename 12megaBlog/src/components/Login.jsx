import React ,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {login as authLogin} from '../store/authSlice.js';
import {
    // Button, 
    Input,
    Logo
} from'./index.js';
import Button from './Button.jsx';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth.js';
import {useForm} from 'react-hook-form';

export default function Login() {
try {
        console.log("Login-comp-fn");
        const navigate=useNavigate();
        const dispatch=useDispatch();
        const {register,handleSubmit,formState: { errors }}=useForm();
        const [error,setError]=useState("");
    
        const login=async(data)=>{
            setError("")
            try {
                const session=await authService.login(data);
                if(session){
                    const userData=await authService.getCurrentUser(session,navigate);
                    if(userData)dispatch(authLogin(userData));
                    ////navigate will redirect users to ("/") route automatically ,in Link we have to click to get to that route 
                    navigate("/")
                }
            } catch (err) {
                console.error(err);
                setError(err.message)
            }
        }
        return (
        <div
        className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
            Dont&apos;t have any account?&nbsp;
            <Link 
            to="/signup"
            className='font-medium text-primary transition-all duration-200 hover:underline'
            >
                Sign Up
            
            </Link>
            </p>
            {
                error&& <p className="text-red-500 text-center">
                    {error}
                </p>
            }
            <form onSubmit={handleSubmit(login)}
            className='mt-8'>
                <div className="space-y-5">
                    <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {
                        ...register("email",{
                            required: true,
                            validate:{
                                matchPattern:(value)=>/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)||"Email address must be a valid email address"
                            }
                        })
                    }
                    />
                    <Input
                    label="Password: "
                    placeholder="Enter your password"
                    type="password"
                    {
                        ...register("password", {
                            required: true,
                            // validate:{
                            //     matchPattern:(value)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)||"Password must contain at least 8 characters, including a number, an uppercase letter, and a lowercase letter"
                            // }
    
                        })
                    }
                    />
                    <Button
                    type="submit"
                    className="w-full"
                    >
                        Log in
                    </Button>
                </div>
    
            </form>
            </div>
        </div>
      )
} catch (err) {
    console.log("Login",err);
    throw new Error("Login",err);
    
}
}

// export default Login