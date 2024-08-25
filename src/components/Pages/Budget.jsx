import React, { useState, useContext } from 'react';
import { budgetDeling } from '../../context/Context';

const Budget = () => {
  const { setBonous, setbudget, setAmount } = useContext(budgetDeling);
  const [budget, setBudget] = useState(0);
  const [bonusLabel, setBonusLabel] = useState('');
  const [bonusAmount, setBonusAmount] = useState(0);

  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value) || 0);
  };

  const handleSetBudget = () => {
    setbudget(budget);
     
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
    <div className="absolute left-[380px] pl-20 top-20 w-3/4">
      <h1 className="text-3xl">Set Your Income / Budget</h1>
      <p className="text-xs text-zinc-600">Sets your income / Budget to the entered value</p>
      <br />
      <p className="text-xl">Enter your budget*</p>
      <input 
        onChange={handleBudgetChange} 
        className="w-[300px] border-2 h-9 border-black" 
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
        className="w-[300px] border-2 h-9" 
        type="text" 
        placeholder="Ex: Eid bonus" 
      />
      <br />
      <br />
      <p>Amount *</p>
      <input 
        onChange={handleBonusAmountChange} 
        className="w-[300px] border-2 h-9" 
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
      <h1 className="text-3xl">Reset your Budget</h1>
      <br />
      <button className="bg-red-600 text-white p-2 rounded-md" onClick={handleResetBudget}>Reset Budget</button>
      <br />
      <p className="text-red-600 text-xl ml-12">0</p>
    </div>
  );
};

export default Budget;
