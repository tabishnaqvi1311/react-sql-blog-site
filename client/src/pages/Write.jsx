import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { navLinks } from '../constants'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import moment from 'moment'

const Write = () => {

  const state = useLocation().state
  const navigate = useNavigate();

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);

      const res = await axios.post(`http://localhost:8181/api/upload`, formData);
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload()
    try {
      state ? await axios.put(`http"//localhost:8181/api/posts/${state.id}`, {title, desc:value, cat, img:file? imgUrl : ""})
      :
      await axios.post(`http:/localhost:8181/api/posts/`, {title, desc:value, cat, img:file ? imgUrl : "", date: moment(Date.now().format("YYYY-MM-DD HH:mm:ss"))})
      navigate("/")

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mt-5 flex gap-5'>
      <div className='flex-[5] flex flex-col gap-5'>
        <input placeholder='Title' value={title} className='p-3 border' onChange={e => setTitle(e.target.value)} />
        <div className='h-[300px] overflow-scroll border'>
          <ReactQuill theme='snow' value={value} onChange={setValue} className='h-[100%] border-none' />
        </div>
      </div>
      <div className='flex-[2] flex flex-col gap-5'>
        <div className='border p-2 flex-1 flex flex-col justify-between text-base text-[#555] gap-3'>
          <h1 className='text-xl'>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input type='file' id='file' className='hidden' onChange={e => setImg(e.target.files)} />
          <label htmlFor='file' className='underline cursor-pointer'>Upload File</label>
          <div className='flex justify-between'>
            <button className='cursor-pointer text-teal-600 bg-white border-teal-600 border p-1'>Save as Draft</button>
            <button className='cursor-pointer text-white bg-teal-600 border-teal-600 border p-1' onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className='border p-2 flex-1 flex flex-col justify-between text-base text-[#555]'>
          <h1 className='text-xl'>Category</h1>
          {navLinks.map(item => (
            <div className='flex items-center gap-2 text-teal-600 my-1'>
              <input type='radio' checked={cat === item.name} name='cat' id={item.name} value={item.name} key={item.id} onChange={e => setCat(e.target.value)} />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Write
