import React, { useEffect } from 'react'
import { info } from "../info/info.js"
const Projects = () => {

    const Card = ({ project }) => {

        const Badge = (tecno) => {
            return (
                <div className='rounded-xl bg-cyan-200 font-bold text-slate-600  w-16 px-2 text-center'>
                    <span>{tecno}</span></div>
            )
        }

        return (
            <div className='h-auto w-10/||12 m-2 bg-background2   rounded-lg hover:bg-slate-800 p-4 hover:scale-105 shadow-md align-center transition-transform scroll-smooth'>

                <div className='flex flex-row gap-4 p-2 text-justify'>

                <div className='justify-center flex flex-col '>
                        <img className=" w-96 object-cover  mt-2" src={project.img}></img></div>
                   
                    <div className='flex flex-col  gap-2 w-3/4 '>
                        <span className='text-2xl text-cyan-400 font-mono font-bold uppercase'>{project.title}</span>
                        
                   
                        <div className='rounded-xl bg-primary bg-opacity-60 hover:bg-background2 font-semibold text-gray-200  w-48 px-2  text-sm'>
                            <span>{project.where}</span></div>
                        
                        <div className=' h-auto font-fancy text-md text-gray-200 p-2'><span>{project.description}</span>
                        </div>

                        <ul className='mb-2'>
                            {project.tasks.map((element, i) => {
                                return (
                                    <li className='rounded-xlfont-semibold text-gray-200   px-2 text-center text-sm'>
                                        <span key={i}>{element}</span></li>)
                            })}</ul>

                        <div className='flex flex-row gap-2 mb-2 '>
                            {project.technologies.map((element, i) => {
                                return (
                                    <div className='rounded-xl bg-primary bg-opacity-60 font-semibold text-gray-200  w-24 px-2 text-center text-sm'>
                                        <span key={i}>{element}</span></div>)
                            })}

                        </div>
                        <div className='flex flex-row gap-8 justify-center'>
                            {project.link!=="" && <>
                           
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-purple-800 transition duration-300">
                                <a target="_blank" href={project.link}>
                                    View Demo</a></button></>}
                            <button className="bg-blue-800 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-900 transition duration-300">
                                <a target="_blank" href={project.sourcecode}>
                                    View Github</a>
                            </button> 


                        </div>

                    </div>
                </div>
            </div>)


    }
    return (
        <div className='  pt-20 p-4 m-0 justify-around bg-primary scroll-smooth' id="projects">
            <h3 className='text-3xl font-fancy font-bold text-gray-300 '><i className="fa-solid fa-briefcase fa-beat"></i>  Projects </h3>
            <div className='grid grid-rows-1 p-12  gap-y-8'>


                {info.map((p, i) => {
                    return (
                        <Card key={i} project={p} />
                    );
                })}


            </div>

        </div>
    )
}

export default Projects