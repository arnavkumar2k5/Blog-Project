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
            <div className="w-full h-[30vh] bg-[#c7af6b] md:h-[70vh]">
                    <div className="flex flex-wrap">
                        <div className="relative md:static w-full flex flex-col-reverse md:flex-row justify-between">
                            <div className='absolute md:static top-[12.24vh] left-0 w-full md:m-auto md:border-none border-2 border-[#251717] rounded-3xl'> 
                            <Link to="/login">
                                <h1 className='text-sm font-bold md:text-5xl text-center text-[#251717] md:text-[#3B2F2F] md:font-semibold'>Welcome to Your Blog </h1>
                                <h1 className='text-sm font-bold md:text-3xl text-center capitalize text-[#251717] md:text-[#3B2F2F] md:font-semibold'>Where Every Post Speaks to You</h1>
                            </Link>
                            </div>
                            <div className='md:ml-10'>
                            <img src="./land.jpg" alt="" className='w-full md:h-[70vh] md:w-[70vw] md:rounded-s-full' />
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
                <div className='flex flex-col md:flex-row md:justify-between mb-10 items-center'>
                <div className=' md:w-4/5'>
                    <h1 className='text-xl md:text-7xl capitalize text-[#3B2F2F] font-semibold md:border-none border-2 border-[#3B2F2F] rounded-xl text-center md:text-left'>Unleash Your Creativity: Share Your Passion with the World</h1>
                </div>
                <div>
                    <img src="./home.jpg" alt="" className='mt-10 md:mt-0 rounded-full md:rounded-none'/>
                </div>
                </div>
                
            </Container>
        </div>
        <div>
            <Container>
            <div className='flex flex-col items-center md:flex-wrap md:flex-row mt-5 mb-5'>
                <div className='w-full flex justify-center mt-10 mb-10'><h1 className='text-xs md:text-4xl capitalize text-[#3B2F2F] font-semibold w-2/3 p-2 text-center border-2 border-[#3B2F2F]'>Your Voice, Your Story, Your Blog.</h1></div>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-72 md:w-1/4'>
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
