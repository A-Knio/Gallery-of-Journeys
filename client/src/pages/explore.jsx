import React from 'react'
import { useState } from 'react';
import Topbar from '../components/topbar';
import Navbar from '../components/navbar';
import Slides from '../components/slides';
import { Outlet } from 'react-router-dom';
const Explore = () => {
  return (
    
        <div className='container'>
<Topbar />
<Navbar />
<Slides />
<Outlet />
</div>

  )
}

export default Explore