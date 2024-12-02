import  { useEffect, useState } from "react";
import "./App.css";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DYMMY_EXPENSES = [
  {
    id: "id1",
    date: new Date(2023, 10, 12),
    title: "New book",
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2024, 10, 12),
    title: "New jeans",
    price: 99.99,
  },
  {
    id: "id3",
    date: new Date(2024, 0, 25),
    title: "New bag",
    price: 139.99,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFormLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFormLS || [];
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
