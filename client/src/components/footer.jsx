import React from 'react'
import Logo from "../images/gjlogo.svg";

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className=' flex items-center m-auto justify-center'>
        <img className=" size-30 " src={Logo} alt="Logo" />
        </div>
        <div className='flex justify-center '>
            <p className=' mt-6 font-bold text-gray-500/80'>Created for Creators by Creators.</p>
            </div>
            <div className=' flex justify-center'>
            <button className='border rounded-lg mt-6 px-4 text-xl bg-gradient-to-t from-slate-500 to-slate-100 hover:bg-slate-500 text-white'> 
            Our GitHub</button>
            </div>
    </div>
  )
}

export default Footer