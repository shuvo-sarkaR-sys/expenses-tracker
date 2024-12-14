 import React, { useContext } from 'react'
 import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { budgetDeling } from '../context/Context';

 const COLORS = ['#ed4b82', '#00C49F', '#FFBB28', '#FF8042'];

 const MyPieChart = () => {
  const { budget, expenses } = useContext(budgetDeling)
  
  const data = [
 
  { name: 'Expenses', value: expenses}, 
  { name: 'Budget', value: budget},
  
];
   return (
    <PieChart width={480} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
   )
 }
 
 export default MyPieChart
 