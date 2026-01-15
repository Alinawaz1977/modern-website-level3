import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Second = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(".secondHeading", {
            opacity:0,
            duration:2,
            scrollTrigger: {
                trigger: ".secondHeading",
                markers:true,
                start:"top 50%",
                scrub: 2,
            }
        })
    })
    return (
        <div className='h-screen w-screen flex overflow-hidden justify-center flex-col items-center text-white bg-black' >
            <div className=' overflow-hidden  font-[ppink] text-white  text-5xl md:text-[5vw] leading-17 md:leading-[4vw] gap-25 flex  flex-col items-center justify-center' >
                <div className='pt-10 md:p-0' >
                    <p id='' className='secondHeading text-lg md:text-2xl font-bold font-[satoshi]' >Crafting a new paradigm of</p>
                    <p className='secondHeading text-lg md:text-2xl font-bold font-[satoshi]' >healthcare, one that is</p>
                </div>
                <div>
                    <div className='flex items-center gap-5  ' >
                        <div className='flex items-center gap-5'>
                            <p className=''> inclusive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 transform -translate-x-[10vw]' >
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-5' >
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-5' >
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > thoughtful</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='     ' > intuitive</p>
                            <div className='w-7 h-7 rounded-full bg-amber-300' ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-base  w-40 pt-10' >et nihil labore, odio eum ratione amet velit ipsa?</div>
        </div>
    )
}

export default Second