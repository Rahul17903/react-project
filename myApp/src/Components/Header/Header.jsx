import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex justify-around sticky top-0  text-white p-3 border-b '>
      <div className='font-bold text-orange-700 text-[2rem] '>
          Portfolio
      </div>
      <div >
          <li className='list-none flex flex-row gap-3 pt-3 text-[1.2rem] '>
            
              <NavLink to="" className={({isActive})=>`hover:underline text-gray-700 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                Home
              </NavLink>
              <NavLink to="/About" className={({isActive})=>`hover:underline text-gray-700 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                About
              </NavLink>
              <NavLink to="/Skill" className={({isActive})=>`hover:underline text-gray-700 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                Skill
              </NavLink>
              <NavLink to="/ContactUs" className={({isActive})=>`hover:underline text-gray-700 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                Contact Us
              </NavLink>
              <NavLink to="/Github" className={({isActive})=>`hover:underline text-gray-700 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                GitHub
              </NavLink>
            
          </li>
      </div>
      <div className='space-x-5 pt-2'>
            <button className='border outline-none p-1 px-3 bg-blue-400 hover:bg-blue-500 rounded-lg'>Login</button>
            <button className='border outline-none p-1 px-3 bg-blue-400 hover:bg-blue-500 rounded-lg'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
