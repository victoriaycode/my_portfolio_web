import React from 'react'

const About = () => {
  return (
    <div className='h-screen p-4 pt-20 bg-primary' id="about" >

      <h3 className='text-3xl font-fancy font-bold text-gray-300 '><i class="fa-solid fa-face-smile fa-fade"></i> About Me </h3>

      <span className='text-xl text-ellipsis text-gray-400'> I'm a very curious and self-study person. <br></br>Right now in a journey to learn new technologies and create amazing websites and apps.</span>

      <div className="container font-fancy">
        <div
          className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 mr-20"
        >
          <div className="flex flex-row-reverse md:contents">
            <div
              className="bg-background2 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-1">2015 - Universidad ICESI</h3>
              <p className="leading-tight text-justify">
                Software engineering - 4 semesters
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-700 pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
              ></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-background2 shadow"
              ></div>
            </div>
            <div
              className="bg-background2 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-1">MisiónTIC 2022 - Universidad de Antioquia</h3>
              <p className="leading-tight text-justify mb-2">
                800 hours of programming abilities with web development focus.
              </p>
              <a target="_blank" href="https://drive.google.com/file/d/1zhExIa2SH67RUede3qBPwWMLQsuApyab/view?usp=sharing">
                <span className="text-cyan-400 hover:text-blue-500 ">View certificates</span></a>
            </div>
          </div>



        </div>
      </div>
    </div>

  )
}

export default About