import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const myexpenses = [
    {
      title: 'Car Insurance',
      amount: 123.23,
      date: new Date(2021, 5, 12),
      id: '123',
    },
    {
      title: 'House Payment',
      amount: 1232.23,
      date: new Date(2020, 8, 11),
      id: '124',
    },
    {
      title: 'Bakery',
      amount: 3.23,
      date: new Date(2019, 7, 11),
      id: '125',
    },
    {
      title: 'Flowers',
      amount: 32.23,
      date: new Date(2020, 5, 12),
      id: '126',
    },
  ];

  const createNewExpenseHandler = (newExpense) => {
    myexpenses.push(newExpense);
    console.log(myexpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={createNewExpenseHandler} />
      <Expenses expenses={myexpenses} />
    </div>
  );
};

export default App;
