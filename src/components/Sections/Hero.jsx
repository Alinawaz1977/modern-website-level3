import React, { useRef } from 'react'
import Video from '../hero/Video'
import Second from '../Second/Second'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Hero = () => {
    const videoRef = useRef(null)
    const secondRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to(videoRef.current, {
            clipPath: "circle(0%)",
            scrollTrigger: {
                trigger: videoRef.current,
                // markers:true,
                scrub: 2,
                // end:"top 150%",
                // pin:videoRef.current,
                pin: secondRef.current
            }
        })
        gsap.from(secondRef.current, {
            scale: 100,
            scrollTrigger: {
                trigger: videoRef.current,
                // markers:true,
                scrub: 2,
            }
        })
    })
    return (
        <div className='relative   ' >
            <div ref={videoRef} className='fixed  [clip-path:circle(75%_at_50%_50%)] top-0 z-20 ' >
                <Video />
            </div>
            <div ref={secondRef} className='absolute overflow-hidden top-0' >
                <Second />
            </div>
        </div>
    )
}

export default Hero
