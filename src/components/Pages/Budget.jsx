import React, { useState, useContext, useEffect } from 'react';
import { budgetDeling } from '../../context/Context';

const Budget = () => {
  const { setBonous, setbudget, setAmount } = useContext(budgetDeling);
  const [budget, setBudget] = useState(0);
  const [bonusLabel, setBonusLabel] = useState('');
  const [bonusAmount, setBonusAmount] = useState(0);

  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value) || 0);
  };
 
const [total, setTotal] = useState(0)

useEffect(()=>{
  const saveTotal = localStorage.getItem('total')
  if(saveTotal){
    setTotal(parseFloat(saveTotal))
  }
})
  const handleSetBudget = () => {
     
     const number = budget;
     if(!isNaN(number)){
     
      setbudget((prevTotal)=> prevTotal + number)
       
      setBudget('')
      
     }
    }
  

  const handleBonusLabelChange = (e) => {
    setBonusLabel(e.target.value);
  };

  const handleBonusAmountChange = (e) => {
    setBonusAmount(parseFloat(e.target.value) || 0);
  };

  const handleAddBonus = () => {
    setBonous(bonusLabel);
    setAmount(bonusAmount);
  };

  const handleResetBudget = () => {
    setbudget(0);
  };

  return (
    <div className=" pl-8 mt-5 lg:mt-10 md:pl-20  w-3/4">
      <h1 className="md:text-3xl text-xl font-bold">Set Your Income / Budget</h1>
      <p className="text-xs text-zinc-600">Sets your income / Budget to the entered value</p>
      <br />
      <p className="text-xl">Enter your budget*</p>
      <input 
        onChange={handleBudgetChange} 
        className="md:w-[300px] mt-2 w-60 border-2 h-9 dark:bg-zinc-800 p-1 rounded-md border-black" 
        type="text" 
        placeholder="Ex: 5000" 
      />
      <br />
      <br />
      <button onClick={handleSetBudget} className="bg-sky-500 p-2 rounded-md">Set Budget</button>
      <br />
      <br />
      <hr />
      <br />
      <h1 className="text-xl">Add an Income Source</h1>
      <p className="text-sm text-gray-600">Adds to your current income / budget amount.</p>
      <br />
      <p>Label*</p>
      <input 
        onChange={handleBonusLabelChange} 
        className="md:w-[300px] w-60 dark:bg-zinc-800 p-1 rounded-md border-2 h-9" 
        type="text" 
        placeholder="Ex: Eid bonus" 
      />
      <br />
      <br />
      <p>Amount *</p>
      <input 
        onChange={handleBonusAmountChange} 
        className="md:w-[300px] w-60 dark:bg-zinc-800 p-1 rounded-md border-2 h-9" 
        type="number" 
        placeholder="Ex: 5000" 
      />
      <br />
      <br />
      <button onClick={handleAddBonus} className="bg-sky-500 p-2 rounded-md">Add to Budget</button>
      <br />
      <br />
      <hr />
      <br />
      <h1 className="md:text-3xl text-xl">Reset your Budget</h1>
      <br />
      <button className="bg-red-600 text-white p-2 rounded-md" onClick={handleResetBudget}>Reset Budget</button>
      <br />
      <p className="text-red-600 text-xl mt-3 ml-12">0</p>
    </div>
  );
};

export default Budget;
