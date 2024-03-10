import React, { useState } from 'react';
import './App.css';
import IncomeForm from './IncomeForm'
import ExpenseForm from './ExpenseForm'
import Target from './Target'
import Transfer from './Transfer'


function App() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  }
  const getTotalIncome = (amount: number) => {
    setTotalIncome(amount);
  }
  const getTotalExpense = (amount: number) => {
    setTotalExpense(amount);
  }
  return (
    <div className="App">
      <IncomeForm onGetTotalIncome = {getTotalIncome}/>
      <ExpenseForm onGetTotalExpense = {getTotalExpense}/>
      <Target onSavingAmount = {savingAmount}/>
      <Transfer 
      onGetSavingAmount = {getSavingAmount}
      totalIncomeAmount = {totalIncome}
      totalExpenseAmount = {totalExpense}
      />
    </div>
  );
}

export default App;
