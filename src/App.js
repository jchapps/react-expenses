import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Health Insurnace", amount: 400, date: new Date(2022, 10, 20) },
    { title: "Groceries", amount: 210.5, date: new Date(2022, 9, 10) },
    { title: "Car Maintenance", amount: 180.13, date: new Date(2022, 8, 12) },
    { title: "School Supplies", amount: 38.99, date: new Date(2022, 9, 26) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
