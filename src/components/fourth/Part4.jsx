import React from 'react'
import assets from '../../assets/images/assets'

const Part4 = () => {
    return (
        <div className='h-screen w-screen flex justify-center font-[ppneue] relative items-center ' >
            <div className='flex flex-col' >
                <p className='text-[10vw] text-center leading-[10vw] uppercase text-white' >13</p>
                <p className='text-[3vw] w-180 text-center font-medium leading-[3vw] text-black ' >Nationalities Represented on Our Team.
                </p>
            </div>
            <img className='w-[13.5vw] h-[13.5vw] bg-blue-950 rounded-full object-cover absolute left-[20vw] top-0' src={assets.horizontalImg08} alt="" />
            <img className='w-[5vw] h-[5vw] bg-red-950 rounded-full object-cover absolute left-[70vw] bottom-[10vw]' src={assets.horizontalImg09} alt="" />
            <img className='w-[23vw] h-[23vw] bg-blue-950 rounded-full object-cover absolute -right-[10vw] top-0' src={assets.horizontalImg10} alt="" />
            <img className='w-[25vw] h-[25vw] bg-purple-950 rounded-full object-cover absolute left-[5vw] -bottom-[15vw]' src={assets.just} alt="" />
        </div>
    )
}

export default Part4