import React, { useEffect, useState } from 'react'


const BackTopButton = () => {
    const [backtoTop, setBackTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {

                setBackTop(true);
            } else setBackTop(false);
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className=' fixed bottom-5 right-5 z-30 text-center' >

            {backtoTop && (
                <div className='flex flex-col gap-1'><button className=' h-14 w-14 rounded-full bg-cyan-300 hover:bg-blue-500  cursor:pointer hover:text-gray-200 hover:scale-105' onClick={scrollUp}><i className="fa-solid fa-arrow-up fa-2x "></i></button>
                    <span className='text-xs font-semibold text-cyan-300'>Scroll up</span>
                </div>

            )}

            {/**{backtoTop &&(
            <button onClick={scrollUp}><i className="fa-solid fa-arrow-up">Scroll Up</i></button>
        )} */}
        </div>
    )
}

export default BackTopButton