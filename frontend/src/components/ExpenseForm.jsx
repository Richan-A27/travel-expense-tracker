import React, { useState } from "react";
import axios from "axios";

export default function ExpenseForm({ onExpenseAdded }) {
  const [form, setForm] = useState({ date: "", purpose: "", amount: "" });
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000"; // backend URL from .env

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/expenses`, form);
      alert("Expense added successfully.");
      setForm({ date: "", purpose: "", amount: "" });
      if (onExpenseAdded) {
        onExpenseAdded();
      }
    } catch (err) {
      alert("Error adding expense. Please try again.");
      console.error(err);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      <div className="form-row">
        <label>Date:</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <label>Purpose:</label>
        <input
          type="text"
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          placeholder="e.g. Client Visit"
          required
        />
      </div>

      <div className="form-row">
        <label>Amount (₹):</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="e.g. 1200"
          required
        />
      </div>

      <button type="submit" className="btn">Add Expense</button>
    </form>
  );
}
