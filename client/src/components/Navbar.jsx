import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className=''>
            <div className='px-4 flex justify-between items-center'>
                <div>
                    <img src={Logo} alt='logo' width={120} />
                </div>
                <div className='flex gap-4 items-center'>
                    {navLinks.map((item) => (
                        <>
                            <Link key={item.id} to={item.linkTo}>
                                <h6 className='text-lg font-light'>{item.name}</h6>
                            </Link>
                        </>
                    ))}
                    <span className='cursor-pointer'>{currentUser?.username}</span>
                    {currentUser ?
                        <span className='cursor-pointer' onClick={logout}>Logout</span>
                        :
                        <Link to="/login">Login</Link>
                    }
                    <span className='bg-lightGreen rounded-full w-[55px] h-[55px] flex items-center justify-center hover:text-teal-600 hover:bg-white border'>
                        <Link to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
