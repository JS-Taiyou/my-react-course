import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, amount, date }) {
  if (typeof title === "string" && typeof amount === "number") {
    return (
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </div>
    );
  } else {
    return <div>Either title or amount given with wrong type</div>;
  }
}

export default ExpenseItem;
