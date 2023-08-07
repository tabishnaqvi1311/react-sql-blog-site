import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({ cat }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://localhost:8181/api/posts${cat}`);
            }catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='flex-[2] flex flex-col gap-7'>
            <h1 className='text-2xl font-bold text-[#555]'>Other posts you may like</h1>
            {posts.map(post => (
                <div key={post.id} className='flex flex-col gap-3'>
                    <img src={post.img} className='h-[100%] w-[100%] object-cover' />
                    <h2 className='font-semibold text-2xl text-[#555]'>{post.title}</h2>
                    <button className='border-2 border-lightGreen p-3 cursor-pointer text-teal-600 hover:bg-lightGreen hover:text-white w-1/2'>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
