import React, { useRef, useState } from 'react'
import assets from '../../assets/images/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Part2 = () => {
    const Part2Ref = useRef(null)
    const [count, setCount] = useState(0)
    const [secondNo, setsecondNo] = useState(0)
    const increaseCount = () => {
        console.log("chal giya");

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 20) {
                    clearInterval(interval)
                    return prev
                }
                return prev + 1
            })
        }, 50);
    }
    const increaseSecondNo = () => {
        console.log("chal giya");

        const interval = setInterval(() => {
            setsecondNo(prev => {
                if (prev >= 4) {
                    clearInterval(interval)
                    return prev
                }
                return prev + 1
            })
        }, 200);
    }



    return (
        <div onMouseEnter={() => {
            increaseSecondNo();
            increaseCount();
        }} ref={Part2Ref} className='h-screen w-screen relative ' >
            <p className='w-60 absolute top-[10vw] left-[16vw] font-[satoshi] font-bold' >
                We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.</p>
            <div className='font-[ppneue] h-full flex flex-col justify-center items-center text-[8.5vw]' >
                <p className='text-white' >{count}.{secondNo}M</p>
                <div className='flex flex-col text-[3vw] font-bold' >
                    <p>Real people — real lives — we have</p>
                    <p>built products and solutions for.</p>
                </div>
            </div>
            <img className=' w-[18vw] h-[18vw] rounded-full absolute top-[15vw] -left-[4vw] ' src={assets.horizontalImg01} alt="" />
            <img className=' w-50 h-50 rounded-full absolute -top-[6vw] left-[45vw] ' src={assets.horizontalImg02} alt="" />
            <img className=' w-[10vw] h-[10vw] rounded-full absolute bottom-[6vw] left-[30vw] ' src={assets.horizontalImg03} alt="" />
            <img className=' w-[20vw] h-[20vw] rounded-full absolute -bottom-[8vw] left-[45vw] ' src={assets.horizontalImg04} alt="" />
            <img className=' w-[20vw] h-[20vw] z-30 rounded-full absolute top-[7vw] -right-[12vw]' src={assets.horizontalImg05} alt="" />
        </div>
    )
}

export default Part2