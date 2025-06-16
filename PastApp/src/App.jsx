
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar'
import Home from './component/Home'
import Paste from './component/Paste'
import ViewPaste from './component/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div><NavBar /><Home/>  </div>
    },
    {
      path : "/pastes",
      element : <div><NavBar/> <Paste />  </div>
    },
    {
      path : "/pastes/:id",
      element : <div><NavBar/> <ViewPaste />  </div>
    }
  ]
)
function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
