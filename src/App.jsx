import { useState ,useContext } from 'react'
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
  const [ amountBudget, setAmountBudget] = useState(0)
  return (
    <>
    <budgetDeling.Provider value={{amountBudget, setAmountBudget, balance, setBalance, amount, setAmount, bonous, budget, setBonous, setbudget, expenses, setExpenses}}>
    <Navbar/>
   <BrowserRouter>
    <NavSideBar/>
   
    
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="add" element={<Add/>}></Route>
      <Route path="budget" element={<Budget/>}></Route>
      <Route path="view" element={<View/>}></Route>
    </Routes>
    </BrowserRouter>
    </budgetDeling.Provider>
    </>
  )
}

export default App
