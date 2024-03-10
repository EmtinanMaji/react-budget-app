import React, { ChangeEvent, useState } from "react";

export const Target = (props: {onSavingAmount: number}) => {
    
    
    const [target,setTarget]=useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTarget(Number(event.target.value));
    }

    const percentage = target !== 0 ? (props.onSavingAmount / target) * 100 : 0;


    return(
        <div>
            <form >
                <div className="target-field">
                    <label htmlFor="target">Set Target:</label>
                    <input type="text" name="target" id="target" value={target} onChange={handleChange} required />
                </div>
                <button>Reset</button>
                
                <div className="target-field">
                    <p>Current saving: {props.onSavingAmount}</p>
                    <p>Target: {target}</p>
                    <p> progress: {percentage}% <progress max={100} value={percentage} /></p>
                </div>
            </form>
        </div>
    )
}

export default Target;