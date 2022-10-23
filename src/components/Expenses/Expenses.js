import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import Card from "./UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expense, index) => {
        return <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={index}
        />;
      })}
    </Card>
  );
}

export default Expenses;
