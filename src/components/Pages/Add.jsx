import React, { useState, useContext, useEffect } from 'react'
import { budgetDeling } from '../../context/Context'
const Add = () => {
  const [expense, setExpense] = useState("")
  const [text, setText] = useState("")
  const [option, setOption] = useState("")
  const {setExpenses, setAddExpense} = useContext(budgetDeling)

  const handleChange = (e)=>{
    setText(e.target.value)
  }
  const handleAmount =  (e) =>{
  setExpense(parseFloat(e.target.value) || 0) 
  }
 
  const handleClick = () =>{
    const number = expense;
    if(!isNaN(number)){
      setExpenses((prevTotal)=> prevTotal + number)
      setExpense('')
    }
     
    }
    //  setAddExpense(expense, option, text)

  
  
   
  const handleCategory =(e)=>{
setOption(e.target.value)
  
  }
 
 
 
  return (
    <div className='  ml-5 lg:mx-24 lg:mt-20 mt-10 w-3/4 items-center m-auto'>
   <form className='m-auto'>
    <h1 className='text-3xl'>Add an Expense</h1>
    <p className='text-sm'>Adds on to your current expense amout.</p>
    <br />
    <br />
    <p>Label</p>
    <input onChange={handleChange} className='dark:bg-zinc-800 border rounded-md  border-gray-400 p-1  w-72' type="text" aria-label='label' placeholder='Ex: Car payments' />
    <br />
    <br />
    <p>Amount*</p>
    <input onChange={handleAmount} className='dark:bg-zinc-800 border-2 rounded-md  border-gray-400 p-1  w-72' type="number" placeholder='Ex: 3000' />
   </form>
   <br />
   <hr />
   <br />
   <h1 className='text-xl'>Add a Category to Your Expense</h1>
   <label >Set catagory:</label>

<select className='border rounded-md ml-2 mt-1 dark:bg-zinc-800' onChange={handleCategory } id="category">
  <option value="Select a category">select one</option>
  <option value="entatainment">Entatainment</option>
  <option value="groceries">Groceries</option>
  <option value="uncatagorized">Uncatagorized</option>
  <option value="audi">Audi</option>
  <option value='mercedes'>Mercedes</option>
  <option value="bmw">BMW</option>
</select>
<br />
<br />
<div className='flex gap-12'>
  <button onClick={handleClick} className='bg-blue-400 p-2 rounded' type='submit'>Add Expense</button>
  <button className='bg-red-500 p-2 rounded'>Remove Category</button>
  </div>
  
   </div>
  )
}

export default Add
