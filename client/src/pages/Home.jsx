import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];
    
    return (
        <div className='flex justify-center'>
            <div className='mt-12 flex flex-col gap-40 w-2/3'>
                {posts.map(post => (
                    <div className='flex gap-20'>
                        <div className='flex-2 shadow-[15px_13px_0px_0px_rgba(0,0,0,0.3)] shadow-lightGreen h-[100%] w-[100%]'>
                            <img src={post.img} alt='' className='w-[100%] max-h-[400px] object-cover' />
                        </div>
                        <div className='flex-3 flex justify-between flex-col'>
                            <Link>
                                <h1 className='font-bold text-4xl'>{post.title}</h1>
                            </Link>
                            <p>{post.title}</p>
                            <button className='border-2 border-lightGreen p-3 cursor-pointer text-teal-600 hover:bg-lightGreen hover:text-white w-1/2'>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
