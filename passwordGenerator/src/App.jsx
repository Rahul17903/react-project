import { useState,useCallback,useEffect} from "react"


function App() {
  const [count, setCount] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false)
  const [specialCharacter, setSpecialCharacter] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(specialCharacter) str +="!@#$%^&*()~`"

    for (let i = 1; i <= count; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    



  },[count,numberAllow,specialCharacter,setPassword])

  useEffect(()=> {passwordGenerator()},[count,numberAllow,specialCharacter,passwordGenerator])

  return (
    <div className="bg-[#212121] h-screen w-full flex justify-center text-white">
      <h1 className="text-4xl text-center p-4">Password Generator</h1>
      <div className="bg-[#444444]  fixed top-20 p-3 rounded-lg">
        <div>
          <input type="text" readOnly className="px-10 py-2 rounded-l-xl outline-none w-[400px] text-blue-900 font-semibold text-xl" value={password}/>
          <button className="outline-none bg-blue-600 p-[0.71rem] mb-[px] rounded-e-lg">Copy</button>
        </div>
        <div className="flex  gap-3">
          <input type="range" className=" cursor-pointer" min={6} max={100} value={count} onChange={(e)=>{setCount(e.target.value)}}/>
          <p>Length {count}</p>
          <input type="checkbox" Checked={numberAllow} id="numberInput" onChange={()=>{
            setNumberAllow((prev)=> !prev)
          }} />
         <p>Numbers</p>
         <input type="checkbox" Checked={specialCharacter}   id="numberInput" onChange={()=>{
            setSpecialCharacter((prev)=> !prev)
          }} />
         <p>Characters</p>
          
        </div>
      </div>
    </div>
  )
}

export default App
