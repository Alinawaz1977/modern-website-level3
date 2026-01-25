import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import assets from '../../assets/images/assets'

const Six = () => {


  useGSAP(() => {
    gsap.from(".team", {
      opacity: 0,
      width: 0,
      stagger: 0.4,
      duration: 1
    })
    gsap.from(".teamText", {
      opacity: 0,
      y: 100,
      duration: 1
    })
  })

  return (
    <div className='font-[ppneue]  px-20 mt-50' >
      <h1 className='text-[4vw]  text-center pb-15 teamText' >Our Team</h1>
      <div onMouseMove={(e)=>{
let teamContainer=document.querySelector(".teamContainer");
let teamContainerPosition=teamContainer.getBoundingClientRect();
console.log(teamContainerPosition.y);



        // console.log(e.clientX,e.clientY);
        gsap.to(".teamPic", {
          x: e.clientX - 120,
          // y: e.clientY - 350,
          duration: 0.5
        })
      }} className='teamContainer border-b group w-full relative team h-fit' >
        <div className='h-0 absolute top-0  group-hover:h-20  transition-all duration-120 w-full bg-blue-800' ></div>
        <div className='flex justify-between absolute z-10 pt-4 w-full  items-center ' >
          <h1 className='text-[3vw] flex gap-8 group-hover:text-white' ><span className=' group-hover:text-white text-gray-400' >01</span> Ali nawaz</h1>
          <h4 className='uppercase font-bold group-hover:text-white ' >ceo</h4>
          <img className='w-[10vw] h-[10vw] teamPic rounded-full top-0 hidden group-hover:block bg-green-900  absolute' src={assets.team} alt="" />
        </div>
      </div>
      <div onMouseMove={(e)=>{
        let teamContainer=document.querySelector(".teamContainer");
let teamContainerPosition=teamContainer.getBoundingClientRect();
console.log(teamContainerPosition.y);
        // console.log(e.clientX,e.clientY);
        gsap.to(".teamPic", {
          x: e.clientX - 120,
          // y: e.clientY - 250,
          duration: 0.5
        })
      }} className='teamContainer border-b group w-full mt-20 relative team h-fit' >
        <div className='h-0 absolute top-0  group-hover:h-20  transition-all duration-120 w-full bg-blue-800' ></div>
        <div className='flex justify-between absolute z-10 pt-4 w-full  items-center ' >
          <h1 className='text-[3vw] flex gap-8 group-hover:text-white' ><span className=' group-hover:text-white text-gray-400' >01</span> Ali nawaz</h1>
          <h4 className='uppercase font-bold group-hover:text-white ' >ceo</h4>
          <img  className='w-[10vw]0 h-[10vw]  teamPic rounded-full top-0 hidden group-hover:block bg-green-900  absolute' src={assets.team1} alt="" />
        </div>
      </div>
      <div onMouseMove={(e)=>{
        // console.log(e.clientX,e.clientY);
        gsap.to(".teamPic", {
          x: e.clientX - 120,
          // y: e.clientY - 250,
          duration: 0.5
        })
      }} className='border-b group w-full mt-20 relative team h-fit' >
        <div className='h-0 absolute top-0  group-hover:h-20  transition-all duration-120 w-full bg-blue-800' ></div>
        <div className='flex justify-between absolute z-10 pt-4 w-full  items-center ' >
          <h1 className='text-[3vw] flex gap-8 group-hover:text-white' ><span className=' group-hover:text-white text-gray-400' >01</span> Ali nawaz</h1>
          <h4 className='uppercase font-bold group-hover:text-white ' >ceo</h4>
          <img  className='w-[10vw]0 h-[10vw]  teamPic rounded-full top-0 hidden group-hover:block bg-green-900  absolute' src={assets.team2} alt="" />
        </div>
      </div>
      <div onMouseMove={(e)=>{
        // console.log(e.clientX,e.clientY);
        gsap.to(".teamPic", {
          x: e.clientX - 120,
          // y: e.clientY - 250,
          duration: 0.5
        })
      }} className='border-b group w-full mt-20 relative team h-fit' >
        <div className='h-0 absolute top-0  group-hover:h-20  transition-all duration-120 w-full bg-blue-800' ></div>
        <div className='flex justify-between absolute z-10 pt-4 w-full  items-center ' >
          <h1 className='text-[3vw] flex gap-8 group-hover:text-white' ><span className=' group-hover:text-white text-gray-400' >01</span> Ali nawaz</h1>
          <h4 className='uppercase font-bold group-hover:text-white ' >ceo</h4>
          <img  className='w-[10vw]0 h-[10vw]  teamPic rounded-full top-0 hidden group-hover:block bg-green-900  absolute' src={assets.team3} alt="" />
        </div>
      </div>
      <div onMouseMove={(e)=>{
        // console.log(e.clientX,e.clientY);
        gsap.to(".teamPic", {
          x: e.clientX - 120,
          // y: e.clientY - 250,
          duration: 0.5
        })
      }} className='border-b group w-full mt-20 relative team h-fit' >
        <div className='h-0 absolute top-0  group-hover:h-20  transition-all duration-120 w-full bg-blue-800' ></div>
        <div className='flex justify-between absolute z-10 pt-4 w-full  items-center ' >
          <h1 className='text-[3vw] flex gap-8 group-hover:text-white' ><span className=' group-hover:text-white text-gray-400' >01</span> Ali nawaz</h1>
          <h4 className='uppercase font-bold group-hover:text-white ' >ceo</h4>
          <img  className='w-[10vw]0 h-[10vw]  teamPic rounded-full top-0 hidden group-hover:block bg-green-900  absolute' src={assets.team4} alt="" />
        </div>
      </div>
      <div  className='mt-30 w-full flex' >
        <button className='uppercase px-5 py-2 border  mx-auto bg-amber-200' >meet the entire team</button>
      </div>
    </div>
  )
}

export default Six
