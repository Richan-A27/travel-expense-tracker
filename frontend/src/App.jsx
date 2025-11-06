import React, { useState, useCallback } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleExpenseAdded = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  return (
    <div className="app-container">
      <h1>Travel Expense & Reimbursement Tracker</h1>
      <div className="content-card">
        <ExpenseForm onExpenseAdded={handleExpenseAdded} />
        <ExpenseList refreshKey={refreshKey} />
      </div>
    </div>
  );
}
