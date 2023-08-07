import React, { useContext, useEffect, useState } from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from "moment";
import { AuthContext } from '../context/authContext';


const Single = () => {
    const [post, setPost] = useState([]);
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`http://localhost:8181/api/posts/${postId}`);
                setPost(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [postId]);

    const navigate = useNavigate();
    const handleDelete = async() => {
        try {
            const res = await axios.delete(`http://localhost:8181/api/posts/${postId}`);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex gap-12'>
            <div className='flex-[5] flex flex-col gap-7'>
                <img src={post.img} className='w-[100%] h-[300px] object-cover' />
                <div className='flex items-center gap-3'>
                    <img src='https://images.pexels.com/photos/4668509/pexels-photo-4668509.jpeg' className='w-[50px] h-[50px] object-cover rounded-full' />
                    <div className='text-sm'>
                        <span className='font-bold'>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && <div className='flex gap-1'>
                        <Link to={`/write?edit=2`} state={post}>
                            <img src={Edit} className='h-[25px] w-[25px] cursor-pointer' />
                        </Link>
                        <img src={Delete} onClick={handleDelete} className='h-[25px] w-[25px] cursor-pointer' />
                    </div>}
                </div>
                <h1 className='text-5xl text-[#333]'>{post.title}</h1>
                {post.desc}
            </div>
            <Menu />
        </div>
    )
}

export default Single
