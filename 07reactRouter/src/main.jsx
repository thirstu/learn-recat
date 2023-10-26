import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import AboutUs from './components/aboutUs/AboutUs.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>,
//     },
//     {
//       path:"/about",
//       element:<AboutUs/>,
//     },
//     {
//       path:"/contactUs",
//       element:<ContactUs/>,
//     }
//     ]

//   }
// ]);

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
