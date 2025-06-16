import React from 'react'
import appwriteService from '../Appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id,title,feturedImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div>
                <img src={appwriteService.getFilePreview(feturedImage)} alt={title} />
            </div>
            <h2>{title}</h2>
        </div>

    </Link>
  )
}

export default PostCard
