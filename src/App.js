import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Health Insurnace", amount: 400, date: new Date(2022, 10, 20) },
    { title: "Groceries", amount: 210.5, date: new Date(2022, 9, 10) },
    { title: "Car Maintenance", amount: 180.13, date: new Date(2022, 8, 12) },
    { title: "School Supplies", amount: 38.99, date: new Date(2022, 9, 26) },
  ];

  const addExpenseHandler = expense => {
    console.log('App js hello');
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
