import React, { ChangeEvent, FormEvent, useState } from "react";

type TransferForSavingProps = {
    onGetSavingAmount: (amount: number) => void;
    totalIncomeAmount: number;
    totalExpenseAmount: number;
}
export const Transfer = (props:TransferForSavingProps) => {
    
    const [amount,setTransfer]=useState<number>(0);

    const handleTransferChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTransfer(Number(event.target.value));

    }
    const handleSubment = (event: FormEvent) => {
        event.preventDefault();
        props.onGetSavingAmount(amount);
    }
    return(
        <div>
            <label htmlFor="balance">Current balance: {props.totalIncomeAmount - props.totalExpenseAmount}</label>
            <form onSubmit={handleSubment}>
                <div className="Transfer-field">
                    <label htmlFor="transfer">Transfer to saving account:</label>
                    <input type="number" name="transfer" id="transfer" onChange={handleTransferChange} required />
                </div>
                <button>Transfer</button>
            </form>
        </div>
    )
}

export default Transfer;
