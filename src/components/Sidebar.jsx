import React from 'react'

const Sidebar = () => {
  return (
    <div className=' w-48 h-screen  bg-background2  font-fancy flex flex-col items-center  fixed'>
      <div className='flex flex-col'>
        <div className='border-t-4   border-violet-500 p-2 '>

          <h2 className='text-2xl font-fancy font-semibold text-cyan-400  '>Victoria Yuan</h2>
        </div>
        <div className='p-4 w-full  flex flex-col'>

          <img className="rounded-full mt-4" src="https://res.cloudinary.com/dwjdp1hgt/image/upload/v1647634656/photo_ky7jij.jpg"></img>
          <span className='mt-10 text-gray-300'>On journey to become a full stack web developer.</span>
        </div>
      </div>




      <div className='flex flex-row gap-6 mt-14'>
        <button className='text-gray-200 hover:scale-110 hover:text-blue-400'>
          <a target="_blank" href="https://github.com/victoriaycode/">
            <i className="fa-brands fa-github fa-2x">
            </i></a>

        </button>
        <button className='text-gray-200 hover:scale-110 hover:text-blue-400'>
          <a target="_blank" href="https://www.linkedin.com/in/victoria-yuan-c/">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>

        </button>
        <button className='text-gray-200 hover:scale-110 hover:text-blue-400'>
          <a target="_blank" href="mailto:yc.victoria1@gmail.com">
            <i className="fa-solid fa-envelope fa-2x"></i></a>

        </button>
      </div>
      <div className='flex flex-row text-gray-200 text-sm mt-16'>
        <i className="fa-solid fa-location-dot"></i><span className='ml-2'>From Colombia</span> </div>
    </div>
  )
}

export default Sidebar