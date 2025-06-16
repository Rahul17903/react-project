import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/rahul17903')
        .then(res=>res.json())
        .then(data => setData(data))
    },[])
  return (
    <div className='space-y-6'>
    
      <div className='bg-gray-700 text-center text-white font-semibold text-[2rem]'>
            GitHub followers :  {data.followers}
      </div>
      <div className='flex justify-center'>
        <img src={data.avatar_url} alt="" />
      </div>
    </div>
  )
}

export default Github
