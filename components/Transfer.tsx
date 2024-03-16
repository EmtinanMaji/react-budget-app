import React, { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TransferForSavingProps = {
    onGetSavingAmount: (amount: number) => void;
    totalIncomeAmount: number;
    totalExpenseAmount: number;
}
export const Transfer = (props:TransferForSavingProps) => {
    const { register, handleSubmit, formState: { errors },reset } = useForm<{ amount: number }>();
    const [amount,setTransfer]=useState<number>(0);
    const [successMessage, setSuccessMessage] = useState("");

    const handleTransferChange =useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setTransfer(Number(event.target.value));

    }, []);
    const onSubmit: SubmitHandler<{ amount: number }> = useCallback((data) => {
        props.onGetSavingAmount(amount);

        setSuccessMessage("Transfer added successfully.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);

          reset();
    }, [amount, props.onGetSavingAmount, reset]);
    const currentBalance = useMemo(() => {
        return props.totalIncomeAmount - props.totalExpenseAmount;
    }, [props.totalIncomeAmount, props.totalExpenseAmount]);

    return(
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="balance">Current balance: {currentBalance} <br/></label>
                <div className="Transfer-field">
                
                    <label htmlFor="transfer">Transfer to saving account:</label>
                    <input type="number" id="transfer" {...register("amount", {
                            required: "Transfer amount is required",
                            min: { value: 0, message: "Transfer amount must be a positive number or zero" }
                        })} onChange={handleTransferChange}  />
                        {errors.amount && <span className="error-message" style={{ color: "red" }}>{errors.amount.message}</span>}
                </div>
                <button>Transfer</button>
                {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
            </form>
        </div>
    )
}

export default Transfer;
