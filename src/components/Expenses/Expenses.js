import React, { useState } from "react";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import Card from "./UI/Card";
import "./Expenses.css";
import ExpensesList from "./NewExpense/ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
