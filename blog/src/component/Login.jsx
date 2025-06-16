import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../Appwrite/auth'
import { login as authLogin} from '../store/authSlice'
import {Button,Logo,Input} from './index'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error,setError] = useState("")
    const {register,handleSubmit} = useForm()
    const login = async(data)=>{setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate('/')
                
            }
            
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>
      <div>
        <div>
            <span>
                <Logo width='100px'></Logo>
            </span>
        </div>
        <h2>Sign in to Your Account</h2>
        <p>Don&apos;t have any account 
            <Link to="/signup">Sign Up</Link>
        </p>
        {error && <p>{error}</p> }

        <form onSubmit={handleSubmit(login)}>
            <div>
                <Input label="Email : " placeholder="Enter your Email"  type="email" {...register("email",{
                    required:true,
                    validate:{
                        matchPattern:(value)=>/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/.test(value) || "Email Address must be validate"
                    }
                })} />
                <Input label="password" placeholder="password" type="password" {...register("password",{
                    required:true
                })}
                />
                <Button type='submit'>Sign in</Button>
                
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
