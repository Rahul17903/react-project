import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'
import Github from './Components/Github/Github'
import ContactUs from './Components/Contact/Contact'
import Skill from './Components/Skill/Skill'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path: "",
        element:<Home/>
      },
      
      {
        path: "About",
        element:<About/>
      },
      {
        path:"Skill",
        element:<Skill/>
      },
      {
        path: "ContactUs",
        element:<ContactUs/>
      },
      {
        path: "GitHub",
        element:<Github/>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
