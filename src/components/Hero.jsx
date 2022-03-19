import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'


const Hero = () => {
  return (
    <div className='  h-screen bg-primary font-fancy scroll-smooth'>

      <div className='grid grid-cols-2  px-8 py-2'>
        <div className='flex flex-col flex-auto justify-center '>

          <span className='text-5xl font-fancy font-bold text-gray-300 '>Welcome To My  </span>
          <span className='text-5xl font-fancy font-bold text-gray-300  '>Personal Portfolio  </span>


          <div className='text-gray-300 flex flex-row gap-4 mt-4 mb-8' >
            <i class="fa-solid fa-face-grin-beam fa-fade fa-2x"></i>
            <span className='text-2xl font-fancy font-semibold text-gray-200  '>I'm <span className='text-cyan-400'>Victoria Yuan. </span>
            </span>
            <span className='font-italic font-mono text-2xl'>Web developer  </span>
          </div>
          <button className="bg-cyan-500 shadow-md shadow-cyan-500/50 rounded-lg w-40 h-10 align-center font-mono font-bold hover:bg-cyan-600 hover:scale-110 p-2"><a href="#projects"><i className="fa-solid fa-desktop fa-beat "></i> View Projects</a></button>


        </div>
        <BackgroundAnimation></BackgroundAnimation>
      </div>


    </div>
  )
}

export default Hero