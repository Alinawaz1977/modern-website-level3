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
    // gsap.to(containerRef.current, {
    //   yPercent: -200,
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top 80%",
    //     end: "+=200%",
    //     scrub: 2,
    //     invalidateOnRefresh: true,
    //     onUpdate: (self) => {
    //       const progress = self.progress * 10
    //       boxesRef.current.forEach(box => {
    //         if (progress > 0.8) {
    //           box.style.backgroundColor = "black"
    //           box.style.color = "white"
    //           box.style.transform = "scaleX(1.07)"
    //         } else {
    //           box.style.backgroundColor = "white"
    //           box.style.color = "black"
    //           box.style.transform = "scaleX(1)"
    //         }
    //       })
    //     }
    //   }
    // })

    // ScrollTrigger.refresh()
    boxesRef.current.forEach((box, i) => {
      gsap.to(box, {
        backgroundColor: "black",
        color: "white",
        scaleX: 1.05,
        scrollTrigger: {
          trigger: box,
          start: "top center",
          end: "top 50%",
          scrub: true,
          // markers: true,
        }
      })
    })
  })

  return (
    <div className="relative min-h-screen ">
      <div ref={containerRef} className="boxContainer mt-[50vh]">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            ref={el => boxesRef.current[i] = el}
            className="box mt-5 duration-300"
          >
            <Box />
          </div>
        ))}
      </div>
    </div>
  )
}


export default ThirdRight
