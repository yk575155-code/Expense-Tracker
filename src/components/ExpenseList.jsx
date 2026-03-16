import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
    if (!confirmDelete) return;

    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const handleEdit = (index) => {
    const expense = expenses[index];

    const item = prompt("Edit Item:", expense.item);
    const company = prompt("Edit Company:", expense.company);
    const price = prompt("Edit Amount:", expense.price);
    const date = prompt("Edit Date:", expense.date);

    if (!item || !company || !price || !date) return;

    const updatedExpenses = [...expenses];
    updatedExpenses[index] = { item, company, price, date };

    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <i className="bi bi-arrow-left"></i>
          </Link>

          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <h1>Bakery Daily Expense</h1>
          </div>

          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <h1>Daily List Reorder</h1>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Company Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No expenses added yet
                </td>
              </tr>
            ) : (
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.item}</td>
                  <td>{expense.company}</td>
                  <td>₹{expense.price}</td>
                  <td>{expense.date}</td>

                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default ExpenseList;
