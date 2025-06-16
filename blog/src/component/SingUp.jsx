import React from 'react'
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../Appwrite/auth'
import {login} from '../store/authSlice'
import {Button,Logo,Input} from './index'

const SingUp = () => {
    const navigate = useNavigate()
    const dispatch  = useDispatch()
    const [error,setError] = useState()
    const {register,handleSubmit} = useForm()
    const signUp = async(data) =>{
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userdata))
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
                <Logo width='100px' />
            </span>
            <h2>Sign up to create Accout</h2>
            <p>Already Have an account 
                <Link to='/login'>Log In</Link>
            </p>
            {error && <p>{error}</p> }

            <form onSubmit={handleSubmit(SingUp)}>
                <div>
                    <Input label=" Full Name"  placeholder="enter your name" {...register("name",{
                        required:true
                    })} />
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
                    <Button type='submit' className='w-full'>Create Account</Button>
                </div>
            </form>

        </div>
      </div>
    </div>
  )
}

export default SingUp
