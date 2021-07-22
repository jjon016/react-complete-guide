import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = (props) => {
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
  return <Card className="expenses">{expensesHTML}</Card>;
};
export default Expenses;
