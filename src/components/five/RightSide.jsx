import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { useRef } from 'react'
import assets from '../../assets/images/assets'

const RightSide = () => {
    const rightRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        let secondWord = document.querySelectorAll(".secondWord")
        console.log(secondWord);
        gsap.from(secondWord, {
            color: "gray",
            // duration:5,
            stagger: 0.007,
            scrollTrigger: {
                trigger: rightRef.current,
                // markers:true,
                start: "top 70%",
                end: "top -20%",
                scrub: 2
            }
        })
    })

    let secondParagraphText = "Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all of the areas we lack internally.I would personally be lost without this team, their ability to problem solve, their openness to feedback and desire to build the product like it is their own."

    return (
        <div ref={rightRef} className='flex justify-center items-end w-fit  h-full flex-col' >
            <div className=' w-full text-xl text-gray-700 font-[satoshi] font-medium md:w-1/3 text-center' >
                <p  >
                    {
                        secondParagraphText.split("").map((item, index) => (
                            <span className='secondWord text-[#3c58ef]' >{item}</span>
                        ))
                    }
                </p>
            </div>
            <div className='flex flex-col w-full  md:w-1/3 mt-10 justify-center items-center' >
                <img className='w-20 h-20 rounded-full ' src={assets.profile2} alt="" />
                <h3 className='font-bold uppercase mt-5 ' >ali nawaz</h3>
                <h3 className=' text-gray-700  mt-5' >Product Manager @health360</h3>
            </div>
        </div>
    )
}

export default RightSide
