import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("");
    const [searchParam,setSerchParam] = useSearchParams()
    const pasteId = searchParam.get("pasteId")
    const dispatch = useDispatch()
    function createPaste(){
        const paste = {
            title : title,
            content : value,
            _id : pasteId || Date.now().toString(36),
            createAt : new Date().toISOString(),
        }
        if(pasteId){
            //update
            dispatch(updateToPastes(paste))
        }
        else{
            //create 
            dispatch(addToPastes(paste))
        }
        // after creation or updation 
        setTitle('')
        setValue('')
        setSerchParam({})
    }



  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
            <input className='p-1 rounded-3xl  mt-2 w-[69%] pl-4' type="text" placeholder='enter title here' value={title} onChange={(e)=> setTitle(e.target.value)}/>

            <button onClick={createPaste} className='rounded-3xl p-2 mt-2'>
                {
                    pasteId ? "Update My Paste" : "Create My  Paste"
            }
            </button>
        </div>
        <div>
            <textarea className='rounded-2xl mt-4 min-w-[500px] p-4'  value={value} placeholder='enter contact here ' onChange={(e)=> setValue(e.target.value)} rows={20}/>
        </div>
    </div>
  )
}

export default Home
