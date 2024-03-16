import React, { ChangeEvent, useCallback, useEffect, useState } from "react";


export const Target = (props: {onSavingAmount: number}) => {

    const [target,setTarget]=useState<number>(0);
    const [percentage,setPercentage] = useState(0);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setTarget(Number(event.target.value));
    },[]);

    useEffect(()=>{ 
        if(props.onSavingAmount > 0 && target > 0){
            const progress = (props.onSavingAmount / target) * 100;
            setPercentage(progress);
        }
    })
    const handleReset = useCallback(()=> {
        setTarget(0);
        setPercentage(0)
    },[]);
    
    return(
        <div>
            <form >
                <div className="target-field">
                    <label htmlFor="target">Set Target:</label>
                    <input type="text" name="target" id="target" value={target} onChange={handleChange} required />
                </div>
                <button onClick={handleReset}>Reset</button>

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