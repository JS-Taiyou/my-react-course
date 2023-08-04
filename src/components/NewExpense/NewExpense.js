import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setFormVisibility] = useState(false);
    const toggleFormVisibility = () => {
        setFormVisibility((prevState)=>{
            return !prevState;
        });
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.saveHandler(expenseData);
    }

    return (
        <div className="new-expense">
            {!isEditing &&
            <button onClick={toggleFormVisibility}>Add new expense</button> }
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onToggle={toggleFormVisibility}/>}
        </div>
    )
};

export default NewExpense;