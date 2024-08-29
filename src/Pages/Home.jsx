import React, { useEffect, useState } from 'react'
import {Container, PostCard} from '../Components/index'
import appwriteService from '../appwrite/Config'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])

    if(posts.length === 0){
        return(
            <div className="w-full bg-[#c7af6b] h-[70vh]">
                    <div className="flex flex-wrap">
                        <div className="w-full flex justify-between">
                            <div className='w-4/5 m-auto'>
                            <Link to="/login">
                                <h1 className='text-5xl text-center text-[#3B2F2F] font-semibold underline-offset-2'>Welcome to Your Blog </h1>
                                <h1 className='text-3xl text-center capitalize text-[#3B2F2F] font-semibold'>Where Every Post Speaks to You</h1>
                            </Link>
                            </div>
                            <div className='ml-10'>
                            <img src="./land.jpg" alt="" className='h-[70vh] w-[70vw] rounded-s-full' />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
    return (
        <div className='bg-[#f4f0ec]'>
        <div className='w-full py-8 bg-[#c7af6b]'>
            <Container>
                <div className='flex flex-row justify-between mb-10'>
                <div className=' w-4/5'>
                    <h1 className='text-7xl capitalize text-[#3B2F2F] font-semibold'>Unleash Your Creativity: Share Your Passion with the World</h1>
                </div>
                <div>
                    <img src="./home.jpg" alt="" />
                </div>
                </div>
                
            </Container>
        </div>
        <div>
            <Container>
            <div className='flex flex-wrap mt-5 mb-5'>
                <div className='w-full flex justify-center mt-10 mb-10'><h1 className='text-4xl capitalize text-[#3B2F2F] font-semibold w-2/3 p-2 text-center border-2 border-[#3B2F2F]'>Your Voice, Your Story, Your Blog.</h1></div>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                </Container>
        </div>
        </div>
    )
}

export default Home
