import React from 'react'
import assets from '../../assets/images/assets'

const Part3 = () => {
  return (
    <div className='h-screen font-[ppneue] w-screen flex justify-center relative   items-center  ' >
      <div>
        <h1 className='text-[10vw] leading-[10vw] text-center text-white font-bold' >47%</h1>
        <h1 className='text-[3vw] leading-[5vw] font-bold' >Expert Women In Tech</h1>
      </div>
      <p className='w-70 absolute top-[10vw] left-[20vw]' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quis.</p>
      <img className='w-[10vw] bg-blue-800 absolute top-0 h-[10vw] rounded-full' src={assets.horizontalImg06} alt="" />
      <img className='w-[20vw] bg-blue-800 absolute -bottom-[4vw] left-[30vw] h-[20vw] rounded-full' src={assets.horizontalImg07} alt="" />
      <img className='w-[20vw] bg-blue-800 absolute -right-[10vw] top-[18vw] h-[20vw] z-30 rounded-full' src={assets.horizontalImg08} alt="" />
    </div>
  )
}

export default Part3