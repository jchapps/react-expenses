import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  function submissionExpenseDataHandler(newExpenseData) {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  };


  return (
    <div className='new-expense'>
      <ExpenseForm submissionExpenseData={submissionExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
