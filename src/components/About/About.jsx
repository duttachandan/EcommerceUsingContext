import React from 'react'
import bg from "../../assets/about/1.mp4"
import { a1, a2, a3, a4, a5, a6, banner } from "../../assets/about/index"
function About() {
  return (
    <div className='bg-slate-200 w-full mt-[3rem]'>
      <video
        className='h-[fit-content] px-10 py-8 rounded-md overflow-hidden mx-auto'
        muted
        loop
        autoPlay>
        <source src={bg} />
      </video>
      <div className='w-full px-0 lg:px-10 gap-10
        h-[fit-content] py-5'>
        <div
          className='flex flex-col-reverse 
        lg:flex-row 
        w-full px-0 lg:px-10 gap-3
        h-[fit-content] py-5 justify-center items-center'>
          <div className='w-[90vw] lg:basis-1/2 
        flex justify-center items-center '>
            <img
              className='aspect-[2] w-full object-cover'
              src={a1}
              alt="" />
          </div>
          <div
            className='w-[90vw] h-[fit-content] 
        lg:basis-2/3 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl font-semibold text-[#088178]'>Our Mobile Application:</h1>
            <p className='font-semibold text-black/50 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id eligendi ullam nesciunt vel,
              tempore rem a blanditiis aliquid ut optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus omnis accusantium dignissimos commodi culpa,
              velit recusandae porro quibusdam officiis aliquam!</p>
          </div>
        </div>
        <div
          className='flex flex-col-reverse
        lg:flex-row-reverse 
        w-full px-0 lg:px-10 gap-3
        h-[fit-content] py-5 justify-center items-center'>
          <div className='w-[90vw] lg:basis-1/2 
        flex justify-center items-center '>
            <img
              className='aspect-[2] w-full object-cover'
              src={a2}
              alt="" />
          </div>
          <div
            className='w-[90vw] h-[fit-content] 
        lg:basis-2/3 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl font-semibold text-[#088178]'>Our Mobile Application:</h1>
            <p className='font-semibold text-black/50 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id eligendi ullam nesciunt vel,
              tempore rem a blanditiis aliquid ut optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus omnis accusantium dignissimos commodi culpa,
              velit recusandae porro quibusdam officiis aliquam!</p>
          </div>
        </div>
        <div
          className='flex flex-col-reverse 
        lg:flex-row 
        w-full px-0 lg:px-10 gap-3
        h-[fit-content] py-5 justify-center items-center'>
          <div className='w-[90vw] lg:basis-1/2 
        flex justify-center items-center '>
            <img
              className='aspect-[2] w-full object-cover'
              src={a3}
              alt="" />
          </div>
          <div
            className='w-[90vw] h-[fit-content] 
        lg:basis-2/3 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl font-semibold text-[#088178]'>Our Mobile Application:</h1>
            <p className='font-semibold text-black/50 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id eligendi ullam nesciunt vel,
              tempore rem a blanditiis aliquid ut optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus omnis accusantium dignissimos commodi culpa,
              velit recusandae porro quibusdam officiis aliquam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
