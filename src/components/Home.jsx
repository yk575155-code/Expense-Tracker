import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";


const Home = () => {

  const [item, setItem] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      item: item,
      company: company,
      price: amount,
      date: date
    };

    const existingExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];

    existingExpenses.push(expense);

    localStorage.setItem(
      "expenses",
      JSON.stringify(existingExpenses)
    );

    setItem("");
    setCompany("");
    setAmount("");
    setDate("");

    alert("Expense Added!");
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Bakery Daily Expense</h1>
          </div>

          <Link to="/list">Show List</Link>
        </nav>
      </header>

      <main>
        <div className="text">
          <h1>Welcome to the Bakery Daily Expense Tracker</h1>

          <p>
            Keep track of your daily expenses with ease. Use the navigation
            above to view your expense list and manage your bakery's finances
            effectively.
          </p>
        </div>

        <div className="form">
          <h2>Add Expense</h2>

          <form onSubmit={handleSubmit}>
            <label>Enter Item:</label>

            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />

            <label>Company Name:</label>

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />

            <label>Amount:</label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <label>Date:</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <input type="submit" value="Add Expense" />
          </form>
        </div>
      </main>

      <footer>
        <p>
          © 2026 Bakery Daily Expense Tracker <br />
          Created for New Sagar Bakery.
        </p>
      </footer>
    </>
  );
};

export default Home;