import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses({ expenseArray }) {
    // We need state at this level so we can use it to toggle each expense's visibility
    const [selectedYear, filterByYear] = useState('');
    const filteredExpenses = expenseArray.filter(x => x.date.getFullYear().toString() === selectedYear || selectedYear === '');


  return (

    <div>
        <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onSelectValue={filterByYear}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>
  );
}

export default Expenses;
