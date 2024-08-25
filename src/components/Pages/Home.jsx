import React, { useState, useContext, useEffect } from 'react'
import MyPieChart from '../MyPieChart'
import { budgetDeling } from '../../context/Context'

const Home = () => {
  const { budget, expenses, bonous, amount, balance, setBalance, amountBudget, setAmountBudget } = useContext(budgetDeling)


  // here is a issue
  const totalAmount = () => {
    console.log(budget)
    setBalance(parseFloat((budget - expenses) + amount))




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
  }, [budget, expenses])
  return (
    <div className='font-semibold absolute right-0 top-16 w-3/4  pt-10 pl-10 bg-slate-100'>

      <h1 className='text-4xl'>YOUR BALANCE IS: ${balance}</h1>

      <br />
      <br />
      <div className='flex gap-32 text-4xl  '>
        <div className='h-60 w-[400px] bg-white flex-col text-center pt-20'>
          <p>Income / Budget</p>
          <h1 className='text-blue-800'>${amountBudget}</h1>
        </div>
        <div className='h-60 w-[400px] bg-white flex-col text-center pt-20'>
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
      <div className='flex justify-between flex-wrap mr-32'>
        <div>
          <div className='flex bg-white p-3 rounded-md justify-between w-[400px]'><p>food</p><span className='text-red-600'>-$200</span></div>
        </div>
        <MyPieChart />
      </div>

    </div>
  )
}

export default Home
