import React from 'react'
import dollar from '../assets/dollar-symbol.png'
import home from '../assets/home-button.png'
import add from '../assets/plus.png'
import graph from '../assets/statistics.png'
import { Link } from 'react-router-dom'

const NavSideBar = () => {
  return (
    <div role="navigation" className='w-1/4 h-[130vh] bg-slate-50 dark:bg-zinc-900 mt-[-3px] border-r border-teal-500  '>
      <ul className='mt-10 ml-2 md:ml-8 space-y-4'>
         <Link to="/" aria-label="Home">
        <li className='flex gap-2 items-center'>
         
            <img className='md:w-10 w-8' src={home} alt="Home" />Home
          
        </li></Link>
        <br />
         <Link to="/add" aria-label="Add an Expense">
        <li className='flex gap-2 items-center'>
         
            <img className='md:w-10 w-8' src={add} alt="Add an Expense" />
            <p className='md:block hidden'>Add an Expense</p>
            <p className=' md:hidden block'>Add</p>
          
        </li>
        </Link>
        <br />
        <Link to="/budget" aria-label="Add or Update Your Budget">
        <li className='flex gap-2 items-center'>
          
            <img className='md:w-10 w-8' src={dollar} alt="Add or Update Your Budget" />
            <p className='md:block hidden'>Add / Update Your Budget</p>
            <p className='md:hidden block'>Update</p>
        </li> </Link>
        <br />
         <Link to="/view" aria-label="View Spending in Categories">
        <li className='flex gap-2 items-center'>
         
            <img className='md:w-10 w-8' src={graph} alt="View Spending in Categories" />
            <p className='md:block hidden'>View Spending in Categories</p>
            <p className='md:hidden block'>View</p>
         
        </li> </Link>
        <br />
      </ul>
      <hr className='mt-6' />
    </div>
  )
}

export default NavSideBar
