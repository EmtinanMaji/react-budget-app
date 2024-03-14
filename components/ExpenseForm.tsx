import React, { ChangeEvent, FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4} from 'uuid';

type ExpenseType = {
    id?: string;
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
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ExpenseType>();
    
    const totalAmount = expenses.reduce(
        (total, value) => total + value.amount,0
    );
    props.onGetTotalExpense(totalAmount);

    const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSource(event.target.value);
    }
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    }
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const onSubmit: SubmitHandler<ExpenseType> = (data) => {
        
        const expense ={
            id: uuidv4(),
            source: source,
            amount: amount,
            date: date,
        };

        setExpense((prevExpenses) => {
            return [...prevExpenses,expense];
        });

        setSuccessMessage("Expense added successfully.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);

          reset();

    }
    const handleDeleteExpenses = (id?: string) => {
        setExpense((prevExpenses) => {
          return prevExpenses.filter((Expense) => Expense.id !== id);
        });
      };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="expense-field">
                    <label htmlFor="source">Expense source:</label>
                    <input type="text" id="source" {...register('source',{
                        required: 'This field is required',
                        minLength: {value: 2, message: "expense must be more than 2 characters"}
                    })}
                    onChange={handleSourceChange}/>
                    {errors.source && <span className="error-message" style={{ color: "red" }}>{errors.source.message}</span>}
                </div>
                <div className="expense-field">
                    <label htmlFor="amount">Amount of Expense:</label>
                    <input type="number" id="amount"{...register('amount',{
                        required: 'This field is required',
                        min: {value: 1, message: "amount must be a positive number and more than 0"}
                    })}
                    onChange={handleAmountChange}/>
                    {errors.amount && <span className="error-message" style={{ color: "red" }}>{errors.amount.message}</span>}

                </div>
                <div className="expense-field">
                    <label htmlFor="date">Date of Expense:</label>
                    <input type="date"  id="date" {...register('date',{
                        required: 'This field is required',
                    })}
                    onChange={handleDateChange}/>
                    {errors.date && <span className="error-message" style={{ color: "red" }}>{errors.date.message}</span>}
                </div>
                <button>Add expense</button>
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
                {expenses.length > 0 ?
        <ul>
        {expenses.map((expense) => {
            return(
                <li key={expense.id}>{expense.source}: {expense.amount} EUR on {expense.date} <button onClick={() => handleDeleteExpenses(expense.id)}>Delete</button></li>
            );
        })}
    </ul>
            : <p className="text--center">No expense source</p>
            }

            </form>

        </div>
    )
}

export default ExpenseForm;
