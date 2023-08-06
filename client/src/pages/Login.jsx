import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleChange = async(e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await login(input);
      navigate("/");
    }catch(error){
      setError(error.response.data);
    }
  }

  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw] bg-lightGreen flex-col'>
        <h1 className='text-teal-600 text-lg font-medium mb-5'>Login</h1>
        <form className='flex flex-col p-5 bg-white gap-5' onSubmit={handleSubmit}>
            <input type='text' placeholder='username' className='p-3 border-b-2 focus:outline-none' onChange={handleChange} name='username' required/>
            <input type='password' placeholder='password' className='p-3 border-b-2 focus:outline-none' onChange={handleChange} name='password' required/>
            <button type='submit' className='p-3 border-none bg-teal-600 text-white cursor-pointer'>Login</button>
            {error && <p className='text-sm text-red-500 text-center'>{error}</p>}
            <span className='text-sm text-center'>Don't Have An Account? <Link to={'/register'}>Register</Link></span>
        </form>
    </div>
  )
}

export default Login
