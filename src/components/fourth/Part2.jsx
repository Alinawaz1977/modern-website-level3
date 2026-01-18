import React from 'react'

const Part2 = () => {
    return (
        <div className='h-screen w-screen relative bg-[#ef9d71] ' >
            <p className='w-60 absolute top-[10vw] left-[16vw] font-[satoshi] font-bold' >
                We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.</p>
            <div className='font-[ppneue] h-full flex flex-col justify-center items-center text-[8.5vw]' >
                <p>20.24M</p>
                <div className='flex flex-col text-[3vw] font-bold' >
                    <p>Real people — real lives — we have</p>
                    <p>built products and solutions for.</p>
                </div>
            </div>
            <img className='bg-red-800 w-50 h-50 rounded-full absolute top-[15vw] -left-[4vw] '  src="" alt="" />
            <img className='bg-red-800 w-20 h-20 rounded-full absolute top-[10vw] left-[37vw] '  src="" alt="" />
        </div>
    )
}

export default Part2