import React, { useState, useContext } from 'react'
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
  setExpense(parseFloat(e.target.value)) 
  }
  const handleClick = () =>{
    setExpenses(expense)
  
     setAddExpense(expense, option)

  
  }
  const handleCategory =(e)=>{
setOption(e.target.value)
  
  }
 
  return (
    <div className=' absolute left-[450px] top-20 w-3/4 items-center m-auto'>
   <form className='m-auto'>
    <h1 className='text-3xl'>Add an Expense</h1>
    <p className='text-sm'>Adds on to your current expense amout.</p>
    <br />
    <br />
    <p>Label</p>
    <input onChange={handleChange} className='border-2  border-black w-72' type="text" aria-label='label' placeholder='Ex: Car payments' />
    <br />
    <br />
    <p>Amount*</p>
    <input onChange={handleAmount} className='border-2  border-black w-72' type="text" placeholder='Ex: 3000' />
   </form>
   <hr />
   <br />
   <h1 className='text-xl'>Add a Category to Your Expense</h1>
   <label >Set catagory:</label>

<select onChange={handleCategory } id="category">
  <option value="Select a category"></option>
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
