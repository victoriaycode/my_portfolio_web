import React from 'react'

const Technologies = () => {

    return (
        <div className='h-screen w-full p-4 pt-20 font-fancy bg-primary' id="technologies">
            <h3 className='text-3xl font-fancy font-bold text-gray-300 my-8'>              <i class="fa-solid fa-cog fa-spin" ></i>  Technologies </h3>


            <div className='grid grid-rows-2'>

                <div className='flex flex-row justify-around gap-6'>
                    <div className='text-gray-200  font-mono font-bold  '>
                        <span className=' text-2xl '>Front end</span>
                        <ul className='grid grid-cols-3 my-4 '>
                            <li className='text-orange-400 text-xl font-mono font-bold flex flex-col'><i className="fa-brands fa-html5 fa-2x"></i>HTML</li>
                            <li className='text-yellow-300 text-xl font-mono font-bold flex flex-col'><i className="fa-brands fa-css3-alt fa-2x"></i>CSS</li>
                            <li className='text-cyan-400 text-xl font-mono font-bold flex flex-col '><i className="fa-brands fa-react fa-2x"></i><span>React.js</span></li>
                        </ul>
                    </div>
                    <div className='text-gray-200  font-mono font-bold '>
                        <span className=' text-2xl '>Backend end</span>
                        <ul className='grid grid-cols-3 my-4 gap-8'>
                            <li className='text-green-300 text-xl font-mono font-bold '><i className="fa-brands fa-node fa-3x"></i></li>
                            <li className='text-green-400 text-xl font-mono font-bold '><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /></li>

                            <li className='text-pink-600 text-xl font-mono font-bold flex flex-col '><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" /></li>
                        </ul>
                    </div>
                </div>
                <div className='text-gray-200  font-mono font-bold p-4 '>
                    <span className=' text-2xl '></span>
                    <ul className='grid grid-cols-4 my-4 justify-items-center gap-2'>
                        <li className='text-gray-200 text-md font-mono font-bold flex flex-col mr-2'><i class="fa-brands fa-js fa-2x"></i>Javascript</li>
                        <li className='text-gray-200  text-md font-mono font-bold flex flex-col '><i class="fa-brands fa-java fa-2x"></i><span>Java</span></li>
                        <li className='text-gray-200 text-md font-mono font-bold flex flex-col '><i class="fa-brands fa-python fa-2x"></i><span>Python</span></li>
                        <li className='text-gray-200 text-md font-mono font-bold flex flex-col'><i class="fa-brands fa-github fa-2x"></i>Github</li>

                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Technologies