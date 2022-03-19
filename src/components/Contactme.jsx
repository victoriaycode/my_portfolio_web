import React from 'react'
import Footer from './Footer'

const Contactme = () => {
  return (

    <div className="  w-full flex flex-col  pt-20 pl-2 bg-primary" id="contact" >
      <h3 className='text-3xl font-fancy font-bold text-gray-300 mb-10'><i className="fa-solid fa-address-book fa-fade"></i> Contact Me </h3>
      <div className='flex flex-rows-2 gap-8 mx-8 mb-20'>
        <div className='flex flex-col bg-cyan-200 rounded-md p-4 text-primary hover:scale-105'>
          <span className='font-bold uppercase font-mono '> Send me a message  </span>
          <a target="_blank" className="font-bold font-fancy hover:text-cyan-800 text-center" href="https://www.linkedin.com/in/victoria-yuan-c/"> <i className="fa-brands fa-linkedin fa-2x "></i> </a>
        </div>
        <div className='flex flex-col bg-cyan-200 rounded-md p-4 text-primary hover:scale-105'>
          <span className='font-bold uppercase font-mono '><i className="fa-solid fa-envelope "></i> Send me a email</span>
          <a target="_blank" className="font-bold font-fancy hover:text-cyan-800 " href="mailto:yc.victoria1@gmail.com">yc.victoria1@gmail.com </a>
        </div>

      </div>
    </div>)


}

export default Contactme