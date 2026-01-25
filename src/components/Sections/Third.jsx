import React, { useRef } from 'react'
import ThirdLeft from '../third/ThirdLeft'
import Box from '../Box'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ThirdRight from '../third/ThirdRight'

const Third = () => {
    const thirdRef = useRef(null)
    const thirdRight = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    return (
        <div id='third' ref={thirdRef} className='md:flex-row flex-col flex items-start gap-30 min-h-screen w-screen p-10 relative' >
            <div className='sticky top-10   ' >
                <ThirdLeft />
            </div>
            <ThirdRight />
        </div>
    )
}

export default Third
