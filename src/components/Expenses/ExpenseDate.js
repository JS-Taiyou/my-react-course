import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  if (date instanceof Date) {
    const locale = "en-US";
    const year = date.getFullYear();
    const month = date.toLocaleString(locale, { month: "long" });
    const day = date.toLocaleString(locale, { day: "2-digit" });

    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
  } else {
    return <div>wrong type</div>;
  }
}

export default ExpenseDate;
