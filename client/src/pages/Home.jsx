import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";


const Home = () => {

    const [posts, setPosts] = useState([]);

    const cat = useLocation().search



    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`http://localhost:8181/api/posts${cat}`);
                setPosts(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [cat]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent
    }
    
    return (
        <div className='flex justify-center'>
            <div className='mt-12 flex flex-col gap-40 w-2/3'>
                {posts.map(post => (
                    <div className='flex gap-20' key={post.id}>
                        <div className='flex-2 shadow-[15px_13px_0px_0px_rgba(0,0,0,0.3)] shadow-lightGreen h-[100%] w-[100%]'>
                            <img src={post.img} alt='' className='w-[100%] max-h-[400px] object-cover' />
                        </div>
                        <div className='flex-3 flex justify-between flex-col'>
                            <Link to={`/post/${post.id}`}>
                                <h1 className='font-bold text-4xl'>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <button className='border-2 border-lightGreen p-3 cursor-pointer text-teal-600 hover:bg-lightGreen hover:text-white w-1/2'>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
