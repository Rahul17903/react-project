import React from 'react'
import {Container,Logo,LogoutBtn} from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const navItem = [
        {
        name: 'Home',
        slug:'/',
        active : true
        },
        {
        name: 'Login',
        slug:'/login',
        active : !authStatus
        },
        {
        name: 'Signup',
        slug:'/signup',
        active : !authStatus
        },
        {
        name: 'All Post',
        slug:'/all-post',
        active : authStatus
        },
        {
        name: 'Add Post',
        slug:'/add-post',
        active : authStatus
        },
    ]
  return (
    <header>
        <Container>
            <nav>
                <div>
                    <Link to='/'>
                    <Logo width='100px'/>
                    </Link>
                </div>
                <ul>
                    {navItem.map((item)=>item.active ? (
                        <li key={item.name}>
                            <button onClick={()=>navigate(item.slug)}>{item.name}</button>
                        </li>
                    ) : null)}
                    {authStatus && (<li><LogoutBtn/></li>)}
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header
