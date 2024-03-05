import React from "react";

const Transfer = () => {
    return(
        <div>
            <form>
                <div className="Transfer-field">
                    <label htmlFor="balance">Current balance: 0</label>
                </div>
                <div className="Transfer-field">
                    <label htmlFor="transfer">Transfer to saving account:</label>
                    <input type="number" name="transfer" id="transfer" required />
                </div>
                <button>Transfer</button>
            </form>
        </div>
    )
}

export default Transfer;