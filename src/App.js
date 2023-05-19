import ExpenseList from "./components/Expenses/ExpenseList";

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
  return (
    <div>
      <ExpenseList expenses={expenses}></ExpenseList>
    </div>
  );
}

export default App;
