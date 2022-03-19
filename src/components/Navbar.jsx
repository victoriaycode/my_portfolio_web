import React from 'react'

const Navbar = () => {

  return (
    
   
    <nav className='h-16  w-5/6  flex flex-row  justify-around bg-primary border-t-2  border-b-2 border-violet-500 font-mono fixed top-0 left-0 ml-48 z-20  '>

      <ul className="flex flex-row justify-around flex-auto items-center text-cyan-500 font-semibold">


        <li className=' text-lg hover:text-violet-400    p-2 hover:border-violet-500 rounded-lg hover:cursor-pointer hover:scale-105 hover:border-b-2 '><a href="#technologies">Technologies</a></li>

        <li className=' text-lg hover:text-violet-400  p-2 hover:border-violet-500 rounded-lg hover:cursor-pointer hover:scale-105 hover:border-b-2'>
          <a href="#about">About me</a> </li>
        <li className=' text-lg hover:text-violet-400   p-2 hover:border-violet-500 rounded-lg hover:cursor-pointer hover:scale-105 hover:border-b-2'><a href="#projects">Projects</a> </li>
        <li className=' text-lg hover:text-violet-400  p-2 hover:border-violet-500 rounded-lg hover:cursor-pointer hover:scale-105 hover:border-b-2'><a href="#contact">Contact me</a></li>
      </ul>

    </nav>

  )
}

export default Navbar