import React, { useEffect, useState } from 'react'
import expense from '../assets/expense (1).png'
import sun from '../assets/sun.png'
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(()=>{
       const isDarkMode = localStorage.getItem('darkMode') === 'true';
       setDarkMode(isDarkMode)
    }, [])
    useEffect(()=>{
      document.documentElement.classList.toggle('dark', darkMode)
      localStorage.setItem('darkMode', darkMode)
    }, [darkMode])
    const toggleDarkMode = ()=>{
      setDarkMode((prevMode) => !prevMode)
    }
  return (
    <>
    <div className='h-16 flex text-4xl bg-slate-50 items-center justify-between  px-8 fixed w-[100%] z-10 border-b-2'>
        <div className='flex'>
         <img className='h-10' src={expense} alt="" />
      <p>Expense Tracker</p>
      </div>
     <div>
         <img onClick={toggleDarkMode} className='w-10'  src={sun} alt="" />
     </div>
      
    </div>
    <hr />
    </>
  )
}

export default Navbar
