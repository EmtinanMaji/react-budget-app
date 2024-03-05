import React from "react";

const Target = () => {
    return(
        <div>
            <form>
                <div className="target-field">
                    <label htmlFor="target">Set Target:</label>
                    <input type="text" name="target" id="target" required />
                </div>
                <button>Reset</button>
                
                <div className="target-field">
                    <p>Current saving: 100</p>
                    <p>Target: 2000</p>
                    <p>{''}<progress max={4000} value={1000} /></p>
                </div>
            </form>
        </div>
    )
}

export default Target;