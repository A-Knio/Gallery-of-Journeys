import React from 'react'
import Bg from '../images/lpbg.svg'
import Typewriter from "typewriter-effect";

const hero = () => {
  return (
    <div className='w-full h-[90vh]'>
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejd6NnNwdm0zOGhvZ3l2bm15bGs2dTY5dzI4a2Y4M2hmZXRobGl2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vQXKPdzpShJtTCE/giphy.gif" alt="Background" 
         className='w-full h-full object-cover'/>
    <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-bold text-6xl'>Gallery of Journeys</h1>
            <h2 className='text-3xl py-4 italic'><Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                    onInit={(typewriter) => {
                        typewriter 
                            .typeString("Capture life's adventures.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Share Live Moments With Users.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Unviel Your Visual Stories!")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                /></h2>
        </div>
    </div>
    </div>
  )
}

export default hero