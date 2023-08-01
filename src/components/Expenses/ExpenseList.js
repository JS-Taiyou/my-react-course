import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function ExpenseList({ expenses }) {
    // We need state at this level so we can use it to toggle each expense's visibility
    const [selectedYear, filterByYear] = useState('');

    const expenseList = expenses.map((expense, index) => {
        return (
            <ExpenseItem key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                visible={expense.date.getFullYear().toString() === selectedYear || selectedYear === ''}
            />
        );
    });
    if(expenseList.every(ex => !ex.props.visible)) {
        expenseList.push(<p style={{color: 'white', fontWeight: 'bold'}}>No expenses belong to the selected year.</p>)
    }
  return (

    <div>
        <ExpensesFilter selectedYear={selectedYear} onSelectValue={filterByYear}/>
        <Card className="expenses">
            {expenseList}
        </Card>
    </div>
  );
}

export default ExpenseList;
