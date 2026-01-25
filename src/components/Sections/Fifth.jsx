import React from 'react'
import LeftSide from '../five/LeftSide'
import RightSide from '../five/RightSide'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Fifth = () => {

  return (
    <div className='h- w-screen overflow-x-hidden p-10 mt-50 ' >
      <div  >
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}

export default Fifth
