import React from 'react'
import { Link } from 'react-router-dom'
import diceImage from '../src/assets/dice.png'
const App = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <div className='h-[500px] w-[80%] flex flex-row justify-between items-center relative'>
        <img src={diceImage} alt="error" className='h-full w-[50%] ' />
        <div>
          <h1 className='text-[5rem] font-bold '>Dice Game</h1>
          <Link to='/game' className='h-4 px-6 py-2 bg-[#212121] text-white text-center rounded-md'> Play now</Link>
        </div>
      </div>
    </div>
  )
}

export default App
