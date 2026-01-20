import React from 'react'
import Links from './Links'

const NewsLetter = () => {
  return (
    <div>
      <p className='text-xl w-70 font-[ppneue] ' >Join our mailing list for
the latest updates.</p>
<div className='flex items-center gap-6 pt-5' >
<input type="text" placeholder='enter your email address' className='bg-white w-70 text-black px-3 py-2' />
<button className='uppercase text-black bg-amber-200 px-5 py-2' >subcribe</button>
    </div>
</div>
  )
}

export default NewsLetter
