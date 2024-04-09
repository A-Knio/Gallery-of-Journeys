import React from 'react'
import { Link } from 'react-router-dom'

const HomeGallery = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
          <Link to='/explore'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold'>Maldives</h3>
            </Link>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1583835401881-69a874a3b342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="maldives" />
        </div>
        <div className='relative p-4'>
        <Link to='/explore'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold'>Iceland</h3>
            </Link>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iceland" />
        </div>
        <div className='relative p-4'>
        <Link to='/explore'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold'>Mexico</h3>
            </Link>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1582554457597-e07633fba044?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mexico" />
        </div>
    </div>
    
  )
}

export default HomeGallery