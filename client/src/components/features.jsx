import React from 'react';
import { AiOutlineVideoCamera,  AiOutlineSearch, AiOutlineDollarCircle, AiOutlineSafetyCertificate, AiOutlineMan, AiOutlineHome } from 'react-icons/ai';

const Features = () => {
  return (
    <div className="ml-20 flex flex-wrap items-center justify-center mt-4">
      {/* Text Section */}
      <div className="w-full md:w-1/2 px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 ml-10">Our Features</h2>
        <p className="text-lg mb-4">
          Experience the unique stories and moments captured by travelers around the world. Discover breathtaking images and videos that inspire your wanderlust, all available at affordable prices.
        </p>
        <ul className="mb-1">
          <li className="flex items-start mb-2 ">
          <div className="flex items-start mr-2">
            <AiOutlineVideoCamera size={30} className="mr-2 text-gray-600/80" />
            </div>
            <div className='flex flex-col'>
            <h1 className=' text-2xl'>Real Immersive images</h1>
            <p>Immerse yourself in visuals you won't find elsewhere, curated by global artists who bring their experiences to life. </p>
          </div>
          </li>
          <li className="flex items-start mb-2">
         <div className="flex items-start mr-2">
            <AiOutlineHome size={30} className="mr-2 text-gray-600/80" />
            </div>
            <div className="flex flex-col">
            <h1 className='text-2xl'> Community</h1>
            <p>Connect with the creators behind the lens and discover the world through their eyes.</p>
           </div>  
          </li>
          <li className="flex items-start mb-2">
    <div className="flex items-start mr-2">
            {/* <AiOutlineDollarCircle size={30} className="mr-2 text-gray-600/80" /> */}
            </div>
            <div className="flex flex-col"></div>
            {/* <h1 className='text-2xl'>Affordable pricing</h1> */}
            <p></p>
          </li>
          <li className="flex items-start mb-2">
    <div className="flex items-start mr-2">
            {/* <AiOutlineSafetyCertificate size={30} className="mr-2 text-gray-600/80" /> */}
            </div>
            <div className="flex flex-col"></div>
            {/* <h1 className='text-2xl'>Worry-free licensing</h1> */}
            <p></p>
          </li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/2 px-4 py-8">
        <img className="max-w-[500px] rounded-md size-" src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery of Journeys" />
      </div>
    </div>
  );
};

export default Features;

