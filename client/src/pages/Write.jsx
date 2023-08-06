import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { navLinks } from '../constants'

const Write = () => {
  const [value, setValue] = useState();

  return (
    <div className='mt-5 flex gap-5'>
      <div className='flex-[5] flex flex-col gap-5'>
        <input placeholder='Title' className='p-3 border' />
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
          <input type='file' id='file' className='hidden' />
          <label htmlFor='file' className='underline cursor-pointer'>Upload File</label>
          <div className='flex justify-between'>
            <button className='cursor-pointer text-teal-600 bg-white border-teal-600 border p-1'>Save as Draft</button>
            <button className='cursor-pointer text-white bg-teal-600 border-teal-600 border p-1'>Update</button>
          </div>
        </div>
        <div className='border p-2 flex-1 flex flex-col justify-between text-base text-[#555]'>
          <h1 className='text-xl'>Category</h1>
          {navLinks.map(item => (
            <div className='flex items-center gap-2 text-teal-600 my-1'>
              <input type='radio' name='cat' id={item.name} value={item.name} key={item.id} />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Write
