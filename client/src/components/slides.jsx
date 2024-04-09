import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight, BsHeartFill, BsHeart} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
function Slides()  {
    const slides =[
        {
            url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1461604516355-61bd391c793f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbCUyMHBpY3R1cmVzfGVufDB8fDB8fHww'
        },
        {
            url: 'https://images.unsplash.com/photo-1530250418330-cb2c35da5277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbCUyMHBpY3R1cmVzfGVufDB8fDB8fHww'
        },
        {
            url: 'https://images.unsplash.com/photo-1528578976328-4bc1ea9fad47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyYXZlbCUyMHBpY3R1cmVzfGVufDB8fDB8fHww'
        },
        {
            url: 'https://images.unsplash.com/photo-1593693699808-495ddd95f31f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbCUyMHBpY3R1cmVzfGVufDB8fDB8fHww'
       },    
    ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ?  slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length -1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

  return(
   <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
{/* left arrow */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
<BsChevronCompactLeft onClick={prevSlide} size={30} />
</div>
{/* right arrow */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
<BsChevronCompactRight onClick={nextSlide} size={30} />
</div>
<form className='flex justify-center top-4 py-2'>
    
    {/* <button className='border px-8 py-2 rounded-xl hover:bg-red-700 text-5xl'>Like</button> */}
    {slides.map((slide, slideIndex) => (
    <div key={slideIndex} 
    onClick={() =>goToSlide(slideIndex)} 
    className='text-2xl cursor-pointer'>
        <RxDotFilled />
        </div>
    ))}
</form>
  </div>
  
  );
}

export default Slides