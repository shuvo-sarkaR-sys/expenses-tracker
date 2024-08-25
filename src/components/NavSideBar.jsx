import React from 'react'
import dollar from '../assets/dollar-symbol.png'
import home from '../assets/home-button.png'
import add from '../assets/plus.png'
import graph from '../assets/statistics.png'
import { Link } from 'react-router-dom'

const NavSideBar = () => {
  return (
    <div role="navigation" className='w-1/4 h-[100%] bg-slate-50 border-r-2 border-teal-500 fixed top-[63px] z-10'>
      <ul className='mt-10 ml-8 space-y-4'>
         <Link to="/" aria-label="Home">
        <li className='flex gap-2 items-center'>
         
            <img className='w-10' src={home} alt="Home" />Home
          
        </li></Link>
        <br />
         <Link to="/add" aria-label="Add an Expense">
        <li className='flex gap-2 items-center'>
         
            <img className='w-10' src={add} alt="Add an Expense" />Add an Expense
          
        </li>
        </Link>
        <br />
        <Link to="/budget" aria-label="Add or Update Your Budget">
        <li className='flex gap-2 items-center'>
          
            <img className='w-10' src={dollar} alt="Add or Update Your Budget" />Add / Update Your Budget
         
        </li> </Link>
        <br />
         <Link to="/view" aria-label="View Spending in Categories">
        <li className='flex gap-2 items-center'>
         
            <img className='w-10' src={graph} alt="View Spending in Categories" />View Spending in Categories
         
        </li> </Link>
        <br />
      </ul>
      <hr className='mt-6' />
    </div>
  )
}

export default NavSideBar
