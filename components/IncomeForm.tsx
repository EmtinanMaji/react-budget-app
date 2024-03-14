import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4} from 'uuid';

type IncomeType = {
    id?: string;
    source: string;
    amount: number;
    date: string;

};
type IncomeFormProps = {
    onGetTotalIncome: (amount: number) => void;
};
export const IncomeForm = (props:IncomeFormProps) => {
    const [source,setSource]=useState<string>('');
    const [amount,setAmount]=useState<number>(0);
    const [date,setDate]=useState<string>('');
    const [incomes,setIncomes]=useState<IncomeType[]>([]);
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IncomeType>();

    const totalAmount = incomes.reduce(
        (total, value) => total + value.amount,0
    );

    props.onGetTotalIncome(totalAmount);
    
    const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSource(event.target.value);
    }
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    }
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }
    
    const onSubmit: SubmitHandler<IncomeType> = (data) =>{
        const income ={
            id: uuidv4(),
            source: source,
            amount: amount,
            date: date,
        };

        setIncomes((prevIncomes) => {
            return [ ...prevIncomes, income];
        });

        
        setSuccessMessage("Income added successfully.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);

        reset();

    };
    
    const handleDeleteIncome = (id?: string) => {
        setIncomes((prevIncomes) => {
          return prevIncomes.filter((income) => income.id !== id);
        });
      }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="income-field">
                    <label htmlFor="source">Income source:</label>
                    <input type="text"  id="source" {...register('source',{
                        required: 'This field is required',
                        minLength: {value: 2, message: "income must be more than 2 characters"}
                    })}
                    onChange={handleSourceChange}
                    />
                    {errors.source && <span className="error-message" style={{ color: "red" }}>{errors.source.message}</span>}
                </div>
                <div className="income-field">
                    <label htmlFor="amount">Amount of Income:</label>
                    <input type="number"  id="amount"{...register('amount',{
                        required: 'This field is required',
                        min: {value: 1, message: "amount must be a positive number and more than 0"}
                    })}
                    onChange={handleAmountChange}
                    />
                    {errors.amount && <span className="error-message" style={{ color: "red" }}>{errors.amount.message}</span>}

                </div>
                <div className="income-field">
                    <label htmlFor="date">Date of Income:</label>
                    <input type="date"  id="date" {...register('date',{
                        required: 'This field is required',
                    })}
                    onChange={handleDateChange}
                    />
                    {errors.date && <span className="error-message" style={{ color: "red" }}>{errors.date.message}</span>}
                </div>
                <button>Add income</button>
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

        {incomes.length > 0 ?
        <ul>
                {incomes.map((income) => {
                    return(
                        <li key={income.id} > {income.source}: {income.amount} EUR on {income.date} <button onClick={() => handleDeleteIncome(income.id)}>Delete</button></li>
                    );
                })}
            </ul>
            : <p className="text--center">No income source</p>
        }
            </form>
            
        </div>
    )
}

export default IncomeForm;
