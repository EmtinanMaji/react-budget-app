import React, { useState } from 'react';
import '../style/App.css';
import IncomeForm from '../components/IncomeForm'
import ExpenseForm from '../components/ExpenseForm'
import Target from '../components/Target'
import Transfer from '../components/Transfer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer />
      <IncomeForm onGetTotalIncome = {getTotalIncome} />
      <ExpenseForm onGetTotalExpense = {getTotalExpense} />
      <Target onSavingAmount = {savingAmount} />
              <Transfer 
                onGetSavingAmount = {getSavingAmount}
                totalIncomeAmount = {totalIncome}
                totalExpenseAmount = {totalExpense} />
            
    </div>
  );
}

export default App;
