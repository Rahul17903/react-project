import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../component'
import appwriteService from '../Appwrite/config'
const Allpost = () => {
    const [posts,setPost] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((post)=>{
        if(post){
            setPost(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id}>
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default Allpost
