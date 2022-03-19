import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row p-4 justify-around m-4 opacity-50'>
      <span className='pt-6 text-gray-200 font-mono ml-4 '> Innovating one project at a time </span>
      <div className='flex flex-row gap-8 mt-4'>
        <button className='text-gray-200 hover:scale-110 hover:text-blue-200'>
          <a target="_blank" href="https://github.com/victoriaycode/">
            <i className="fa-brands fa-github ">
            </i></a>

        </button>
        <button className='text-gray-200 hover:scale-110 hover:text-blue-200'>
          <a target="_blank" class="fcc-btn" href="https://www.linkedin.com/in/victoria-yuan-c/">
            <i class="fa-brands fa-linkedin "></i>
          </a>

        </button>
        <button className='text-gray-200 hover:scale-110 hover:text-blue-200'>
          <a target="_blank" href="mailto:yc.victoria1@gmail.com">
            <i className="fa-solid fa-envelope "></i></a>

        </button>
      </div>
    </div>
  )
}

export default Footer