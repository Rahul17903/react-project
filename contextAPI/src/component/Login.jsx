import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const {setUser}  = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
      <h2>LogIn</h2>
      <input type="text" placeholder='User Name' value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder='PassWord' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
