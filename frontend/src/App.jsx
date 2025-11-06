import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [authed, setAuthed] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setAuthed(Boolean(token));
  }, []);

  const handleExpenseAdded = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setAuthed(false);
  };

  return (
    <div className="app-container">
      <h1>Travel Expense & Reimbursement Tracker</h1>
      <nav className="nav">
        {!authed ? (
          <>
            <button className="btn" onClick={() => setShowRegister(false)}>Login</button>
            <button className="btn" onClick={() => setShowRegister(true)}>Register</button>
          </>
        ) : (
          <button className="btn" onClick={handleLogout}>Logout</button>
        )}
      </nav>
      <div className="content-card">
        {!authed ? (
          showRegister ? (
            <Register onRegistered={() => setShowRegister(false)} />
          ) : (
            <Login onLoggedIn={() => setAuthed(true)} />
          )
        ) : (
          <>
            <ExpenseForm onExpenseAdded={handleExpenseAdded} />
            <ExpenseList refreshKey={refreshKey} />
          </>
        )}
      </div>
    </div>
  );
}
