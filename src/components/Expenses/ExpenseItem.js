import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    if (typeof title === "string" && typeof props.amount === "number") {
        const updateTitle = () => {
            setTitle('Clicked');
        }
        return (
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={updateTitle}>Change title</button>
            </Card>
        );
    } else {
        return <div>Either title or amount given with wrong type</div>;
    }
}

export default ExpenseItem;
