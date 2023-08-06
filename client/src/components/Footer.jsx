import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='p-5 bg-lightGreen mt-40 flex items-center justify-between text-sm'>
        <img src={Logo} alt='logo' className='h-[50px]'/>
        <span>All Rights Reserved ®2023</span>
    </footer>
  )
}

export default Footer
