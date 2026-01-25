import React from 'react'
import Second from './components/Second/Second'
import Hero from './components/Sections/Hero'
import Third from './components/Sections/Third'
import Part1 from './components/fourth/Part1'
import Part2 from './components/fourth/Part2'
import Part3 from './components/fourth/Part3'
import Fourth from './components/Sections/Fourth'
import Fifth from './components/Sections/Fifth'
import Six from './components/Sections/Six'
import Footer from './components/Sections/Footer'
import Lenis from 'lenis'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    // console.log(e);
  });
  return (
    <div className='relative ' >
      <div className='h-[200vh]' >
      <Hero />
      </div>
      <div className='' >
      <Third/>
      </div>
      <Fourth/>
      <Fifth/> 
       <Six/>
      <Footer/>
    </div>
  )
}

export default App