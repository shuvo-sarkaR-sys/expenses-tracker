import React, { useState, useContext, useEffect, useRef } from 'react'
import MyPieChart from '../MyPieChart'
import { budgetDeling } from '../../context/Context'

const Home = () => {
  const { addExpense, budget, expenses, bonous, amount, balance, setBalance, amountBudget, setAmountBudget } = useContext(budgetDeling)


  // store the value in localStroge



  // here is a issue

  useEffect(() => {
    const savedBalance = localStorage.getItem('Balance');
    if (savedBalance) {
      setBalance(parseFloat(savedBalance)); // Set balance from localStorage if it exists
    }
  }, [setBalance])

  const totalAmount = () => {

    // setBalance(parseFloat((budget - expenses) + amount))
    const newBalance = parseFloat((budget - expenses) + amount)
    setBalance(newBalance)
    localStorage.setItem('Balance', newBalance)
    console.log(newBalance)


  }
  const averageBudget = () => {
    if (budget < 0) {
      return setAmountBudget(parseFloat((budget - expenses) + amount))
    }
  }
  useEffect(() => {
    averageBudget()
  }, [budget])
  const addBudget = () => {
    setAmountBudget(parseFloat(budget + amount))
  }
  useEffect(() => {
    addBudget()
  }, [amount])
  useEffect(() => {
    totalAmount()
  }, [budget, expenses, amount])
  return (
    <div className='font-semibold  dark:bg-[#030712] mt-[-3px]   md:w-3/4 w-[75%]  pt-10 pl-5 lg:pl-10 bg-slate-100'>

      <h1 className='md:text-4xl text-xl'>YOUR BALANCE IS: ${balance}</h1>

      <br />
      <br />
      <div className='flex flex-wrap gap-10 md:gap-32    lg:mx-10 text-xl md:text-4xl  '>
        <div className='py-12 px-14 mr-10 lg:mr-0 lg:px-16 lg:w-[40%] w-full rounded-md dark:bg-zinc-800 bg-white flex-col text-center '>
          <p>Income / Budget</p>
          <h1 className='text-blue-800'>${amountBudget}</h1>
        </div>
        <div className=' py-12 px-20 lg:w-[40%] w-full lg:mr-0 mr-10 items-center dark:bg-zinc-800  rounded-md bg-white flex-col text-center '>
          <p>Expenses</p>
          <h1 className='text-red-700'>${expenses}</h1>
        </div>
      </div>
      <br />
      <br />
      <h1 className='text-xl'>Transaction History</h1>
      <hr />
      <br />
      <br />
      <div className='flex justify-between flex-wrap md:mr-32'>
        <div>
          <div className='flex dark:bg-zinc-800 md:w-1/2 gap-10  bg-white p-3 rounded-md justify-between '>
              <p>Food</p>
              <h1>$100</h1>
          </div>
        </div>
        <MyPieChart />
      </div>

    </div>
  )
}

export default Home
