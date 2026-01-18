import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
//   import { useEffect } from 'react'

const ThirdLeft = () => {
  const firstHeadingRef = useRef(null)
  const secondHeadingRef = useRef(null)
  const thirdHeadingRef = useRef(null)
  const thirdParagraph = useRef(null)


  // gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let spans1 = firstHeadingRef.current.querySelectorAll("span")
    let spans2 = secondHeadingRef.current.querySelectorAll("span")
    let spans3 = thirdHeadingRef.current.querySelectorAll("span")
    // console.log(spans);
    // const gsap=gsap.timeline()
    gsap.from(thirdParagraph.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: thirdParagraph.current,
        // markers:true,
        start: 'top 90%'
      }
    })
    gsap.from(spans1, {
      y: 50,
      // delay:1,
      stagger: .05,
      duration: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: firstHeadingRef.current,
        start: 'top 60%',
        // markers: true,
        // scrub:2
      }


    },)
    gsap.from(spans2, {
      y: 50,
      // delay:1,
      duration: 0.2,
      stagger: .05,
      opacity: 0,
      scrollTrigger: {
        trigger: firstHeadingRef.current,
        start: 'top 60%',
        // markers: true,
        // scrub:2
      }

    },)
    gsap.from(spans3, {
      y: 70,
      opacity: 0,
      stagger: .05,
      duration: .5,
      scrollTrigger: {
        trigger: firstHeadingRef.current,
        start: 'top 60%',
        // markers: true,
        // scrub:2
      }

    })

  })

  let text1 = "We Crafted"
  let text2 = "Human-Centric"
  let text3 = "Health Software"

  return (
    <div className='ppneue' >
      <p ref={thirdParagraph} className='w-120 font-[satoshi] ' >Significo is a leading health software creator founded on the belief
        that technology can transform healthcare to put people first.
        Whether they are employees, members, customers, or clients, we
        never forget the real people we’re designing for.

      </p>
      <div className='mt-5 font-[ppneue]'>
        <p ref={firstHeadingRef} className='text-[4vw] first leading-[4.5vw] text-black' >
          {text1.split("").map((item, index) => (

            <span className='inline-block' key={index} >
              {/* {item===''?"\u00A0":
     item}   */}
              {item}
            </span>
          ))}
        </p>
        <p ref={secondHeadingRef} className='text-[4vw] first leading-[4.5vw] text-black' >
          {text2.split("").map((item, index) => (

            <span className='inline-block' key={index} >
              {/* {item===''?"\u00A0":
     item}   */}
              {item}
            </span>
          ))}
        </p>
        <p ref={thirdHeadingRef} className='text-[4vw] first leading-[4.5vw] text-black' >
          {text3.split("").map((item, index) => (

            <span className='inline-block' key={index} >
              {/* {item===''?"\u00A0":
     item}   */}
              {item}
            </span>
          ))}
        </p>

      </div>
      <button className='px-4 py-2.5 mt-7 border' >our solution</button>
    </div>
  )
}

export default ThirdLeft
