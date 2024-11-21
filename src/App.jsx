import './App.css';
import Expenses from '../src/components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99
    }, 
  ]


  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
