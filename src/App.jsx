import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Error from "./components/UI/Error";

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3005/expenses");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed fetching data");
        }
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed fetching expenses data, please try again later.",
        });
        setShowError(true);
      }
      setIsFetching(false);
    };
    getExpenses();
    console.log(expenses);
  }, []);


  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      {showError && (
        <Error
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
        />)
      }
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
