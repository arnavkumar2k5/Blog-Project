import React from 'react'
import appwriteService from '../appwrite/Config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='md:h-72 bg-[#e0cb93] rounded-md p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-md h-40 m-auto w-72'/>
                </div>
                <h2 className='text-l md:text-xl font-bold text-center mt-12 p-1 overflow-hidden'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
