import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './components/Layout/Layout'
import Contact from './components/ContactUS/ContactUs'
import User from './components/User/User'
import Github from './components/GitHub/Github'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"ContactUs",
        element:<Contact/>
      },
      {
        path:"Github",
        element:<Github/>
      },
      {
        path:"User/:userid",
        element:<User/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
