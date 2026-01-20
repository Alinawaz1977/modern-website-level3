import React from 'react'
import Links from '../footer/Links'
import NewsLetter from '../footer/NewsLetter'
import Text from '../footer/Text'
import FootFooter from '../footer/FootFooter'

const Footer = () => {
  return (
    <div className='w-screen footer font-[satoshi] h-[95vh] 2  2xl:h-[75vh] overflow-hidden relative text-white px-10 pt-19 mt-20 bg-black' >
      <div className='flex justify-between items-center' >
        <div className='font-[ppneue] text-xl' >
      <Links/>
        </div>
      <NewsLetter/>
      <Links/>
      </div>
      <div className='2xl:pt-10 ' >
      <Text/>
      </div>
      <div className='absolute bottom-0  w-[90vw]' >
      <FootFooter/>
      </div>
    </div>
  )
}

export default Footer
