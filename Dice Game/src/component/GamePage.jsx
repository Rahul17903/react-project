import React, { useState, useEffect } from 'react'
import dice1 from '../assets/1.png'
import dice2 from '../assets/2.png'
import dice3 from '../assets/3.png'
import dice4 from '../assets/4.png'
import dice5 from '../assets/5.png'
import dice6 from '../assets/6.png'

const GamePage = () => {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
  const [currentDice, setCurrentDice] = useState(dice1)
  const [rolledNumber, setRolledNumber] = useState(null)
  const [score, setScore] = useState(0)
  const [chooseNumber, setChooseNumber] = useState(null)
  const [showRules, setShowRules] = useState(false)
  
  useEffect(() => {
    if (rolledNumber !== null && chooseNumber !== null) {
      if (rolledNumber === chooseNumber) {
        setScore(prev => prev + rolledNumber)
      } else {
        setScore(prev => prev - 2)
      }
    }
  }, [rolledNumber]) 

  const rollDice = () => {
    if (chooseNumber === null) {
      alert("Please select a number first!")
      return
    }

    const randomIndex = Math.floor(Math.random() * diceArr.length)
    const newNumber = randomIndex + 1

    setCurrentDice(diceArr[randomIndex])
    setRolledNumber(newNumber)
  }

  const handleNumber = (num) => {
    setChooseNumber(num)
  }

  return (
    <div className='flex flex-col items-center'>
       
      <nav className='w-[90%] h-[100px] relative top-[20px] flex flex-row justify-between '>
        <div className='w-[150px] h-[80px] flex flex-col items-center justify-center '>
          <h1 className='text-[3rem] font-semibold'>{score}</h1>
          <div className='text-[1rem] font-semibold'>Total Score</div>
        </div>
        <div>
          <div className='flex gap-3'>
            <div className={`text-red-600 ${chooseNumber === null ? "" : "invisible"}`}>
              You have not selected any number
            </div>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <button
                key={num}
                onClick={() => handleNumber(num)}
                className={`h-10 px-4 py-2 border border-black hover:bg-[#212121] hover:text-white ${chooseNumber === num ? "bg-[#212121] text-white" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>
          <div className='text-right pt-3 font-semibold'>Select Number</div>
        </div>
      </nav>

      <div className='w-[150px]'>
        <img src={currentDice} alt="dice" className='w-full rounded-lg' onClick={rollDice} />
        <p className='py-3 font-semibold text-center'>Click on Dice to roll</p>
        <button
          onClick={() => {
            setScore(0)
            setChooseNumber(null)
            setRolledNumber(null)
          }}
          className='my-5 py-2 w-full font-[500] border border-black'
        >
          Restore Score
        </button>
        <button className='my-3 py-2 w-full font-[500] bg-[#212121] text-white' onClick={() => setShowRules(!showRules)}>Show Rule</button>
      </div>

      <div className={`flex flex-col gap-1 bg-orange-50 rounded-md p-4 ${showRules === false ? "invisible" : ""}`} >
        <h2 className='font-semibold'>How to play dice Game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking the dice, if selected number is equal to dice number, you get same points</p>
        <p>If the guess is wrong, 2 points will be deducted</p>
      </div>
    </div>
  )
}

export default GamePage
