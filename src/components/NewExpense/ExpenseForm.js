import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [Title, setTitle] = useState('');
  const [Amount, setAmount] = useState('');
  const [aDate, setADate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setADate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = { title: Title, amount: Amount, date: new Date(aDate) };
    setTitle('');
    setAmount('');
    setADate('');
    props.onNewExpense(newExpense);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={Title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={Amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={aDate}
            min="2019-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
