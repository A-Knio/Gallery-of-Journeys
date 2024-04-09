import React from 'react'
import { Link } from "react-router-dom";
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
// import {BsChatSquareDots} from 'react-icons/bs';
import Logo from "../images/gjlogo.svg";


const Topbar = () => {
  return (
    <div className='flex max-h-14 justify-between items-center px-4'>
        <div className='flex items-center'>
            <div className='ml-5'>
                <img className="size-28 mr-2" src={Logo} alt="Logo" />
            </div>
            {/* <h1 className='text-xl font-bold text-black hover:text-sky-300'>Gallery of Journeys</h1> */}
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
                <p className='text-sm text-gray-700'>9AM - 5AM</p>
            </div >
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
                <p className='text-sm text-gray-700'>561-147-8567</p>
            </div>
            <Link to='/signupform'>
            <button className='border rounded-md b bg-gray-700/80 text-white px-4 py-1'>Subscribe</button>
            </Link>
        </div>
    </div>
  )
}

export default Topbar;