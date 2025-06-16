import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between items-center p-4 px-10 text-white text-[1.2rem] bg-slate-500'>
      <div >
          Copyright © 2024 By @rahul | All Right Reserved.
      </div>
      <button className=' w-[35px] h-[35px] rounded-md bg-orange-700 hover:bg-orange-800 ' >^</button>
    </div>
  )
}

export default Footer
