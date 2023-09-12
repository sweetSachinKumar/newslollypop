import React from 'react'
import IMg from './errorpg.gif'
import { useLocation } from 'react-router-dom'
const NewsError = () => {
const location = useLocation()
  return (
    <>

    <p className='py-6 px-2'>  <span className='underline text-xl '>{location.pathname.slice(1)}  </span> is not found</p>



    <div className='flex flex-col justify-center items-center h-[70vh]'>
      <p className='text-4xl text-indigo-900  font-bold font-lora my-6'>Page Note Found</p>
      <div>
        <img src={IMg} className='w-full h-full object-cover object-top' alt="" />
      </div>
    </div>


    </>
  )
}

export default NewsError
