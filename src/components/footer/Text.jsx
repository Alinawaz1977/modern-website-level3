import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Text = () => {
  let text="significo"

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    let ftw=document.querySelectorAll(".ft")
    console.log(ftw);
    
    gsap.from(ftw,{
      y:150,
      stagger:0.1,
      scrollTrigger:{
        trigger:".footer",
        // markers:true,
        scrub:2,
        end:"top 70%",
        start:"top 25%"
      }
      
    })
  })
  return (
    <div className='text-white text-[20vw]  font-[satoshi] font-bold text-center' >
      {text.split("").map((item,index)=>(
        <span className='ft inline-block' key={index} >{item}</span>
      ))}
    </div>
  )
}

export default Text
