import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import { Provider } from 'react-redux';
import store from "./store/store.js";
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import AuthLayoutProtected from './components/AuthLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AddPostPage from './pages/AddPostPage.jsx';
import AllPostsPage from './pages/AllPostsPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PostPage from './pages/PostPage.jsx';
import SignupPage from './pages/SignupPage.jsx';


const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:"/login",
        element:(
          <AuthLayoutProtected authentication={false}>
            <LoginPage/>
          </AuthLayoutProtected>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayoutProtected authentication={false}>
            <SignupPage/>
          </AuthLayoutProtected>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayoutProtected authentication>
            {" "}
            <AllPostsPage/>
          </AuthLayoutProtected>
        )
      },
      {
        path:"/add-post",
        element:(
          <AuthLayoutProtected authentication>
            {" "}
            <AddPostPage/>
          </AuthLayoutProtected>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <AuthLayoutProtected authentication>
            {" "}
            <EditPostPage/>
          </AuthLayoutProtected>
        )
      },
      {
        path:"/post/:slug",
        element:<PostPage/>
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
