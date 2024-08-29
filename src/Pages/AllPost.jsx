import React, {useEffect, useState} from 'react'
import {Container, PostCard} from '../Components/index'
import appwriteService from '../appwrite/Config'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap bg-[#F6F6F2]'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
