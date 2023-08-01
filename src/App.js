import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Car Insurance",
            amount: 200,
            date: new Date("08/12/2021"),
        },
        {
            id: "e2",
            title: "Webstorm License",
            amount: 150,
            date: new Date("01/20/2022"),
        },
        {
            id: "e3",
            title: "Guitar",
            amount: 250,
            date: new Date("03/25/2022"),
        },
        {
            id: "e4",
            title: "Coffee mug",
            amount: 15,
            date: new Date("07/01/2022"),
        },
    ];
    const [expenseCollection, setExpenses] = useState(expenses);
    const expenseHandler = (expense) => {
        setExpenses((currentCollection) => {
            const newCollection = [...currentCollection];
            newCollection.push(expense);
            return newCollection;
        });
    }
    return (
        <div>
            <NewExpense saveHandler={expenseHandler}/>
            <ExpenseList expenses={expenseCollection}></ExpenseList>
        </div>
    );
}

export default App;
