import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';
const Expenses = (props) => {
  const [filter, setFilter] = useState('2019');
  const expensesHTML = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.title}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });
  const onFilterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultFilter={filter}
          onFilterChange={onFilterChangeHandler}
        />
        {expensesHTML}
      </Card>
    </div>
  );
};
export default Expenses;
