import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw] bg-lightGreen flex-col'>
        <h1 className='text-teal-600 text-lg font-medium mb-5'>Login</h1>
        <form className='flex flex-col p-5 bg-white gap-5'>
            <input type='text' placeholder='username' className='p-3 border-b-2 focus:outline-none' required/>
            <input type='email' placeholder='email' className='p-3 border-b-2 focus:outline-none' required/>
            <input type='password' placeholder='password' className='p-3 border-b-2 focus:outline-none' required/>
            <button type='submit' className='p-3 border-none bg-teal-600 text-white cursor-pointer'>Register</button>
            <p className='text-sm text-red-500 text-center'>This is an error</p>
            <span className='text-sm text-center'>Have An Account? <Link to={'/login'}>Login</Link></span>
        </form>
    </div>
  )
}

export default Login
