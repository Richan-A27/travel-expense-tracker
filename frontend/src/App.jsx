import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>Travel Expense & Reimbursement Tracker</h1>
      <div className="content-card">
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}
