import React, { useRef } from 'react'
import Part1 from '../fourth/Part1'
import Part2 from '../fourth/Part2'
import Part3 from '../fourth/Part3'
import Part4 from '../fourth/Part4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Fourth = () => {
    gsap.registerPlugin(ScrollTrigger)
    const fourContainer = useRef(null)
    useGSAP(() => {
        gsap.to(fourContainer.current, {
            x: "-300%",
            scrollTrigger: {
                trigger: fourContainer.current,
                // markers: true,
                scrub: 1,
                pin: fourContainer.current,
                onEnter:()=>{
                    document.body.classList.add("theme-purple")
                },
                onLeave:()=>{
                    document.body.classList.remove("theme-purple")
                    document.body.classList.remove("theme-blue")
                    document.body.classList.add("theme-light")
                }
            }
        })
    })
    return (
        <div className='' >
            <div className='flex flex-row' ref={fourContainer} >
                <div className='shrink-0' >
                    <Part1 />
                </div>
                <div className='shrink-0' >
                    <Part2 />
                </div>
                <div className='shrink-0' >
                    <Part3 />
                </div>
                <div className='shrink-0' >
                    <Part4 />
                </div>
            </div>
        </div>
    )
}

export default Fourth