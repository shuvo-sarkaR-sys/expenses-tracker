import { useState ,useContext, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import NavSideBar from './components/NavSideBar'
import Home from './components/Pages/Home'
import Add from './components/Pages/Add'
import Budget from './components/Pages/Budget'
import View from './components/Pages/View'
import { budgetDeling } from './context/Context'

function App() {
   
  const [budget, setbudget] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [bonous , setBonous] = useState("")
  const [amount , setAmount] = useState(0)
  const [balance, setBalance] = useState(0)
  const [addExpense, setAddExpense] = useState()

  const [ amountBudget, setAmountBudget] = useState(0)

   const [darkMode, setDarkMode] = useState(false)
     const handleClick = ()=>{
      setDarkMode(!darkMode)
     }
     useEffect(()=>{
if(darkMode){
  document.documentElement.classList.add('dark')
}
else{
  document.documentElement.classList.remove('dark')
}

     }, [darkMode])
  
  return (
    <div className='dark:bg-[#030712] dark:text-white'>
    <budgetDeling.Provider value={{addExpense, setAddExpense, amountBudget, setAmountBudget, balance, setBalance, amount, setAmount, bonous, budget, setBonous, setbudget, expenses, setExpenses}}>
    <Navbar handleClick={handleClick} darkMode={darkMode}/>
   <BrowserRouter>
   <div className='flex'> <NavSideBar/>
   
    
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="add" element={<Add/>}></Route>
      <Route path="budget" element={<Budget/>}></Route>
      <Route path="view" element={<View/>}></Route>
    </Routes></div>
    </BrowserRouter>
    </budgetDeling.Provider>
    </div>
  )
}

export default App
 