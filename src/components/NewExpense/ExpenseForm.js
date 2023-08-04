import React, {useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const userInputHandler = (event) => {
        setUserInput((prevState)=>{
            const newValues = {...prevState};
            newValues[event.target.id] = event.target.value;
            return newValues;
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(userInput).find((key)=> !userInput[key].length)){
            const expenseData = {
                title: userInput.enteredTitle,
                amount: parseInt(userInput.enteredAmount),
                date: new Date(userInput.enteredDate)
            }
            props.onSaveExpenseData(expenseData);
            return {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            };
        } else {
            alert("Please fill all the fields");
            return userInput;
        }
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" id="enteredTitle" onChange={userInputHandler} value={userInput.enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" id="enteredAmount" min="0.01" step="0.01" onChange={userInputHandler} value={userInput.enteredAmount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" id="enteredDate" min="2023-01-01" max="2023-11-25" onChange={userInputHandler} value={userInput.enteredDate} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onToggle}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;