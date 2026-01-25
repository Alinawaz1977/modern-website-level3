import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Part1 = () => {
    const part1ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    let text = "Real Talk "
    let text2 = "Real Impact"

    useGSAP(() => {
        let text1 = document.querySelectorAll(".fourText")
        let text2 = document.querySelectorAll(".fourText2")
        gsap.from(text1, {
            y: 80,
            stagger: .04,
            duration: .3,
            scrollTrigger: {
                trigger: part1ref.current,
                // markers:true,
                // scrub:2,
                 start:"top 60%"
            }
        })
        gsap.from(text2, {
            y: 80,
            stagger: .04,
            duration: .3,
            scrollTrigger: {
                trigger: part1ref.current,
                start:"top 60%"
            }
        })
    })


    return (
        <div ref={part1ref} className='font-[ppneue] relative h-screen w-screen ' >
            <div className='flex-col items-center flex justify-center h-full ' >
                <div className=' text-[6vw]  ' >
                    {
                        text.split("").map((item, index) => (
                            <span className='fourText inline-block' >{item}</span>
                        ))
                    }
                </div>
                <div className='text-[6vw]' >
                    {
                        text2.split("").map((item, index) => (
                            <span className='fourText2 inline-block' >{item === '' ? " " : item}</span>
                        ))
                    }
                </div>
                {/* <button className='uppercase px-5 font-[satoshi] py-2 text-black absolute left-10 bottom-10 bg-amber-400' >partener with us</button> */}
            </div>
        </div>
    )
}

export default Part1