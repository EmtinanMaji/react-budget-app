import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeForm from './IncomeForm'
import ExpenseForm from './ExpenseForm'
import Target from './Target'
import Transfer from './Transfer'

function App() {
  return (
    <div className="App">
      <IncomeForm />
      <ExpenseForm />
      <Target />
      <Transfer />
    </div>
  );
}

export default App;
