import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    item: "",
    company: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(data.reverse());
  }, []);

  const handleDelete = (index) => {
    if (!window.confirm("Delete this expense?")) return;

    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));
  };

  // OPEN MODAL
  const handleEdit = (index) => {
    const e = expenses[index];
    setFormData(e);
    setEditIndex(index);
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SAVE EDIT
  const handleSave = () => {
    const updated = [...expenses];
    updated[editIndex] = formData;

    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));

    setEditIndex(null);
  };

  return (
    <>
      <header>
        <nav>
          <Link to="/">←</Link>

          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Expense Tracker</h1>
          </div>

          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <h1>Daily List</h1>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Company</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {expenses &&
              expenses.map((e, index) => (
                <tr key={index} className="expense-row">
                  <td data-label="Item">{e.item}</td>
                  <td data-label="Company">{e.company}</td>
                  <td data-label="Amount">₹{e.price}</td>
                  <td data-label="Date">{e.date}</td>

                  <td className="actions">
                    <button onClick={() => handleEdit(index)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    <button onClick={() => handleDelete(index)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* MODAL */}
        {editIndex !== null && (
          <div className="modal">
            <div className="modal-box">
              <h2>Edit Expense</h2>

              <input
                name="item"
                value={formData.item}
                onChange={handleChange}
                placeholder="Item"
              />

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
              />

              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Amount"
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <div className="modal-actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ExpenseList;
