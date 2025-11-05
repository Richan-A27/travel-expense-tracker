import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ backend URL from .env

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/expenses`);
      setExpenses(res.data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/expenses/${id}`);
      fetchExpenses();
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="expense-list">
      <h2>All Expenses</h2>
      {expenses.length === 0 ? (
        <p className="no-data">No expenses yet. Add one above!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Purpose</th>
              <th>Amount (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp._id}>
                <td>{new Date(exp.date).toLocaleDateString()}</td>
                <td>{exp.purpose}</td>
                <td>{exp.amount}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteExpense(exp._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
