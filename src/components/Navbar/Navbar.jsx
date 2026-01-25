import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Navbar = () => {
    const navLinkRef = useRef(null)
    const logRef = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(logRef.current, {
            opacity: 0,
        })
        tl.from(".navLinks", {
            opacity: 0,
            stagger: .3,
            ease: "power3.in"
        })

    })
    return (
        <div className='flex justify-between items-center text-white font-md font-[satoshi] p-10' >
            <div >
                <p ref={logRef} className='text-2xl font-medium' >Significo</p>
            </div>
            <div className='flex items-center gap-10 text-sm' >
                <div onMouseEnter={() => {
                    gsap.to(".navLink", {
                        y: -20
                    })
                }}
                    onMouseLeave={() => {
                        gsap.to(".navLink", {
                            y: 0
                        })
                    }}
                    className='hidden md:block h-fit cursor-pointer relative  overflow-hidden' >
                    <p className='navLink' >Home</p>
                    <p className='navLink absolute ' >Home</p>
                </div>
                <div onMouseEnter={() => {
                    gsap.to(".navLink2", {
                        y: -20
                    })
                }}
                    onMouseLeave={() => {
                        gsap.to(".navLink2", {
                            y: 0
                        })
                    }}
                    className='hidden md:block h-fit cursor-pointer relative  overflow-hidden' >
                    <p className='navLink2' >Prices</p>
                    <p className='navLink2 absolute ' >Prices</p>
                </div>
                <div onMouseEnter={() => {
                    gsap.to(".navLink3", {
                        y: -20
                    })
                }}
                    onMouseLeave={() => {
                        gsap.to(".navLink3", {
                            y: 0
                        })
                    }}
                    className='hidden md:block h-fit cursor-pointer relative  overflow-hidden' >
                    <p className='navLink3' >Products</p>
                    <p className='navLink3 absolute ' >Products</p>
                </div>
                <div onMouseEnter={() => {
                    gsap.to(".navLink4", {
                        y: -20
                    })
                }}
                    onMouseLeave={() => {
                        gsap.to(".navLink4", {
                            y: 0
                        })
                    }}
                    className='hidden md:block h-fit cursor-pointer relative  overflow-hidden' >
                    <p className='navLink4' >About</p>
                    <p className='navLink4 absolute ' >About</p>
                </div>
                <div onMouseEnter={() => {
                    gsap.to(".navLink5", {
                        y: -20
                    })
                }}
                    onMouseLeave={() => {
                        gsap.to(".navLink5", {
                            y: 0
                        })
                    }}
                    className=' h-fit cursor-pointer text-black relative bg-amber-200 px-5 py-1 rounded-md overflow-hidden' >
                    <p className='navLink5' >Contact Us</p>
                    <p className='navLink5 absolute ' >Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar