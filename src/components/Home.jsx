import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";

const Home = () => {
  // ✅ State for form inputs
  const [item, setItem] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ stop page reload

    // ✅ VALIDATION: check empty fields
    if (!item.trim() || !amount || !date) {
      return alert("Please fill all required fields");
    }

    // ✅ VALIDATION: amount must be > 0
    if (Number(amount) <= 0) {
      return alert("Amount must be greater than 0");
    }

    // ✅ CREATE EXPENSE OBJECT (after validation)
    const expense = {
      id: Date.now(), // ✅ unique ID (important for edit/delete)
      item: item.trim(), // ✅ remove extra spaces
      company: company.trim(), // ✅ clean input
      price: Number(amount), // ✅ convert string → number
      date: date,
    };

    // ✅ SAFE READ from localStorage
    let existingExpenses = [];
    try {
      existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    } catch (error) {
      // ✅ if data is corrupted, reset
      existingExpenses = [];
    }

    // ✅ ADD new expense
    existingExpenses.push(expense);

    // ✅ SAVE back to localStorage
    localStorage.setItem("expenses", JSON.stringify(existingExpenses));

    // ✅ RESET form fields
    setItem("");
    setCompany("");
    setAmount("");
    setDate("");
    document.querySelector("input").focus();
    // ✅ SUCCESS message
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

          {/* ✅ Navigate to list page */}
          <Link to="/expenses">Show List</Link>
          <Link to="/about">About</Link>
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

          {/* ✅ Form submit handler */}
          <form onSubmit={handleSubmit}>
            <label>Enter Item:</label>
            <input
              type="text"
              value={item}
              placeholder="Enter item name"
              onChange={(e) => setItem(e.target.value)} // ✅ update state
              required
            />

            <label>Company Name:</label>
            <input
              type="text"
              value={company}
              placeholder="Enter company name"
              onChange={(e) => setCompany(e.target.value)}
            />

            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              placeholder="Enter amount"
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

            {/* ✅ Submit button */}
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
