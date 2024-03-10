import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4} from 'uuid';

type ExpenseType = {
    id: string;
    source: string;
    amount: number;
    date: string;
};
type ExpenseFormProps = {
    onGetTotalExpense: (amount: number) => void;
};

export const ExpenseForm = (props:ExpenseFormProps ) => {
    const [source,setSource]=useState<string>('');
    const [amount,setAmount]=useState<number>(0);
    const [date,setDate]=useState<string>('');
    const [expenses,setExpense]=useState<ExpenseType[]>([]);

    const totalAmount = expenses.reduce(
        (total, value) => total + value.amount,0
    );
    props.onGetTotalExpense(totalAmount);

    const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSource(event.target.value);
    }
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value}= event.target;
        setAmount(Number(event.target.value));
    }
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        const expense ={
            id: uuidv4(),
            source: source,
            amount: amount,
            date: date,
        };

        setExpense((prevExpenses) => {
            return [...prevExpenses,expense];
        });

        setSource('');
        setAmount(0);
        setDate('');

    }
    const handleDeleteExpenses = (id?: string) => {
        setExpense((prevExpenses) => {
          return prevExpenses.filter((Expense) => Expense.id !== id);
        });
      };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="expense-field">
                    <label htmlFor="source">Expense source:</label>
                    <input type="text" name="source" id="source" value={source} onChange={handleSourceChange} required />
                </div>
                <div className="expense-field">
                    <label htmlFor="amount">Amount of Expense:</label>
                    <input type="number" name="amount" id="amount" value={amount} onChange={handleAmountChange} required />
                </div>
                <div className="expense-field">
                    <label htmlFor="date">Date of Expense:</label>
                    <input type="date" name="date" id="date" value={date} onChange={handleDateChange} required />
                </div>
                <button>Add expense</button>
            </form>

            <ul>
                {expenses.map((expense) => {
                    return(
                        <li key={expense.id}>{expense.source}: {expense.amount} EUR on {expense.date} <button onClick={() => handleDeleteExpenses(expense.id)}>Delete</button></li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ExpenseForm;
