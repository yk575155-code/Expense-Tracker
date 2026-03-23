import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";

const ExpenseList = () => {
  // ✅ store all expenses
  const [expenses, setExpenses] = useState([]);

  // ✅ track which item is being edited (by ID, not index)
  const [editId, setEditId] = useState(null);

  // ✅ form data for editing
  const [formData, setFormData] = useState({
    item: "",
    company: "",
    price: "",
    date: "",
  });

  // ✅ load data from localStorage
  useEffect(() => {
    let data = [];

    try {
      data = JSON.parse(localStorage.getItem("expenses")) || [];
    } catch (error) {
      data = [];
    }

    // ✅ FIX: avoid mutation of original array
    setExpenses([...data].reverse());
  }, []);

  // ✅ DELETE (using ID)
  const handleDelete = (id) => {
    if (!window.confirm("Delete this expense?")) return;

    // remove matching ID
    const updated = expenses.filter((e) => e.id !== id);

    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));
  };

  // ✅ OPEN EDIT MODAL (using ID)
  const handleEdit = (id) => {
    const selected = expenses.find((e) => e.id === id);
    setFormData(selected); // fill form with data
    setEditId(id); // store ID
  };

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SAVE EDIT
  const handleSave = () => {
    // validation
    if (!formData.item.trim() || !formData.price || !formData.date) {
      return alert("Please fill all required fields");
    }

    if (Number(formData.price) <= 0) {
      return alert("Amount must be greater than 0");
    }

    // update correct item using ID
    const updated = expenses.map((e) =>
      e.id === editId
        ? {
            ...formData,
            id: editId, // keep same ID
            price: Number(formData.price), // ensure number
          }
        : e,
    );

    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));

    // reset modal
    setEditId(null);
    setFormData({
      item: "",
      company: "",
      price: "",
      date: "",
    });
  };

  // ✅ TOTAL CALCULATION (safe)
 

  const [input, setInput] = useState("");

  const filteredExpenses = expenses.filter((e) => {
    const search = input.toLowerCase();
    return (
      e.item.toLowerCase().includes(search) ||
      e.company.toLowerCase().includes(search)
    );
  });

   const getTotal = () => {
    return filteredExpenses.reduce((total, item) => {
      return total + (Number(item.price) || 0);
    }, 0);
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
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* ✅ EMPTY STATE */}
        {expenses.length === 0 ? (
          <p style={{ marginTop: "20px" }}>No expenses found.</p>
        ) : (
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
              {filteredExpenses.map((e) => (
                <tr key={e.id} className="expense-row">
                  <td data-label="Item">{e.item}</td>
                  <td data-label="Company">{e.company}</td>
                  <td data-label="Amount">₹{e.price}</td>
                  <td data-label="Date">{e.date}</td>

                  <td className="actions">
                    {/* ✅ EDIT BUTTON */}
                    <button onClick={() => handleEdit(e.id)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    {/* ✅ DELETE BUTTON */}
                    <button onClick={() => handleDelete(e.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* ✅ TOTAL */}
        <h2 style={{ marginTop: "20px", color: "red" }}>
          Total: ₹{getTotal()}
        </h2>

        {/* ✅ MODAL (only when editing) */}
        {editId !== null && (
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

                {/* ✅ CLOSE MODAL */}
                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ExpenseList;
