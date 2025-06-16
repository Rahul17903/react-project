import { useState } from 'react'
import authService from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import { login,logout } from './store/authSlice'

const App = () => {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  },[])
  return !loading ? (
    <div>
      <div>
        <Header />
        <main>
          Todo : 
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
