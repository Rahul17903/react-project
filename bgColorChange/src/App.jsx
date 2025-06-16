import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("skyblue")
  return (
    <div className='h-[100vh] w-full' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='bg-red-700 rounded-3xl px-3 py-1 outline-none' onClick={()=>setColor("red")}>Red</button>
          <button className='bg-green-800 rounded-3xl px-3 py-1 outline-none' onClick={()=>setColor("green")}>Green</button>
          <button className='bg-blue-800 rounded-3xl px-3 py-1 outline-none' onClick={()=>setColor("blue")}>Blue</button>
          <button className=' rounded-3xl px-3 py-1 outline-none' style={{backgroundColor:'olive'}} onClick={()=>setColor("olive")}>Olive</button>
          <button className='bg-yellow-400 rounded-3xl px-3 py-1 outline-none' onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='bg-pink-600 rounded-3xl px-3 py-1 outline-none' onClick={()=>setColor("pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
