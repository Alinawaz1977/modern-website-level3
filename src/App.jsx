import React from 'react'
import Second from './components/Second/Second'
import Hero from './components/Sections/Hero'
import Third from './components/Sections/Third'
import Part1 from './components/fourth/Part1'
import Part2 from './components/fourth/Part2'
import Part3 from './components/fourth/Part3'
import Fourth from './components/Sections/Fourth'

const App = () => {
  return (
    <div className='relative' >
      {/* <div className='h-[200vh]' >
      <Hero />
      </div>
      <div className='' >
      <Third/>
      </div> */}
      <Fourth/>
    </div>
  )
}

export default App