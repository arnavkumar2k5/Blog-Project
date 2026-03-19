import React, {useCallback, useEffect, useState} from 'react'
import {Container, PostCard} from '../Components/index'
import appwriteService from '../appwrite/Config'

function AllPost() {
    const [posts, setPosts] = useState([])

    const fetchPosts = useCallback(async () => {
        const posts = await appwriteService.getPosts()
        if(posts){
            setPosts(posts.documents)
        }
    }, [])

    useEffect(() => {
        fetchPosts()

        const handlePostsChanged = () => fetchPosts()
        window.addEventListener("posts:changed", handlePostsChanged)

        return () => {
            window.removeEventListener("posts:changed", handlePostsChanged)
        }
    }, [fetchPosts])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-col md:flex-row md:flex-wrap items-center bg-[#F6F6F2]'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-72 md:w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
