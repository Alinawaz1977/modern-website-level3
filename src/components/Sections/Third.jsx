import React, { useRef } from 'react'
import ThirdLeft from '../third/ThirdLeft'
import Box from '../Box'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Third = () => {
    const thirdRef = useRef(null)
    const thirdRight = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to(".box", {
            top: -200,
            stagger:.4,
            scrollTrigger: {
                markers: true,
                trigger: thirdRef.current,
                pin: thirdRef.current,
                scrub:2,
                // start:"top 100%"
            }
        })
    })
    return (
        <div ref={thirdRef} className='flex gap-30 p-10 relative' >
            <ThirdLeft />
            <div className='flex flex-col gap-50' >
                <div className='box absolute' >
                    <Box />
                </div>
                <div className='box absolute' >
                    <Box />
                </div>
                <div className='box absolute' >
                    <Box />
                </div>
                <div className='box absolute' >
                    <Box />
                </div>
            </div>
        </div>
    )
}

export default Third
