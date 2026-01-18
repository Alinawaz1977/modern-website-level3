import React, { useRef } from 'react'
import Box from '../Box'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ThirdRight = () => {
  const containerRef = useRef(null)
  const boxesRef = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        end:"top 150%",
        // end: "+=1500",   // 🔥 gives scroll space
        scrub: 1,
        pin: "#third",
        markers: true,
      }
    })

    boxesRef.current.forEach((box, i) => {
      tl.to(box, {
        top: "-25%",
        backgroundColor: "black",
        color: "white",
        duration: 1,
      })
    })
  })

  return (
    <div ref={containerRef} className="container relative h-screen">
      {[1,2,3,4].map((_, i) => (
        <div
          key={i}
          ref={el => boxesRef.current[i] = el}
          className="box absolute bottom-[-25%]"
        >
            <div className='h-fit' >
          <Box />
            </div>
        </div>
      ))}
    </div>
  )
}

export default ThirdRight
