import React from 'react'
import Second from './components/Second/Second'
import Hero from './components/Sections/Hero'
import Third from './components/Sections/Third'

const App = () => {
  return (
    <div  >
      <div className='h-[200vh]' >
      <Hero />
      </div>
      <div>

      <Third/>
      </div>
    </div>
  )
}

export default App