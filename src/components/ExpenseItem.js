import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item  ">
      <div>March 21st 2022</div>
      <div className="expense-item__description">
        <h2>Health Insurance</h2>
        <div className="expense-item__price">£220</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
