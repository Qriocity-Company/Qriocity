import React from 'react'
import checked from '../assets/checked.png'
import '../styles/popup.css'

const Popup = () => {
  return (
    <div className='w-[100vw] h-[100vh] fixed left-0 top-0  flex justify-center items-center z-50 bg-[rgba(0,0,0,0.55)]'>
        <div className='popup flex flex-col items-center z-[100]'>
            <img src={checked} alt="" className='tick h-[65px] w-[65px]  md:h-[100px] md:w-[100px]'/>
            <h2 className='font-bold text-white text-3xl mt-4'>Message Sent</h2>
        </div>
    </div>
  )
}

export default Popup