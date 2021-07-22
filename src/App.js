import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const myexpenses = [
    {
      title: 'Car Insurance',
      amount: 123.23,
      date: new Date(2020, 5, 12),
    },
    {
      title: 'House Payment',
      amount: 1232.23,
      date: new Date(2020, 8, 11),
    },
    {
      title: 'Bakery',
      amount: 3.23,
      date: new Date(2020, 7, 11),
    },
    {
      title: 'Flowers',
      amount: 32.23,
      date: new Date(2020, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={myexpenses} />
    </div>
  );
};

export default App;
