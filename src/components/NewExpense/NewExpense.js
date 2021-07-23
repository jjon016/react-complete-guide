import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const saveExpenseDataHandler = (newData) => {
    const expenseData = {
      ...newData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
