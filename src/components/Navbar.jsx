import React, { useEffect, useState } from 'react'
import expense from '../assets/expense (1).png'
import sun from '../assets/sun.png'
import moon from '../assets/moon (1).png'
const Navbar = ({handleClick, darkMode}) => {
    
  return (
    <>
    <div className='h-16 flex dark:bg-[#030712]   bg-slate-50 items-center justify-between  px-8  w-full border-b-2'>
        <div className='flex'>
         <img className='h-10' src={expense} alt="" />
      <p className='md:text-4xl text-2xl'>Expense Tracker</p>
      </div>
     <div>
      {!darkMode ?
         <img onClick={handleClick}  className='w-10 cursor-pointer'  src={sun} alt="" />:
         <img onClick={handleClick} className='w-10 cursor-pointer bg-white  p-2 rounded-xl' src={moon}/>
         }
     </div>
      
    </div>
    <hr />
    </>
  )
}

export default Navbar
