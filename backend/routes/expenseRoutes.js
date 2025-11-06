const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Expense = require("../models/Expense");

// Add new expense
router.post("/", auth, async (req, res) => {
  try {
    const { date, purpose, amount } = req.body || {};

    if (!date || !purpose || amount === undefined || amount === null || purpose.trim().length === 0) {
      return res.status(400).json({ message: "date, purpose and amount are required" });
    }

    const parsedAmount = Number(amount);
    if (Number.isNaN(parsedAmount)) {
      return res.status(400).json({ message: "amount must be a number" });
    }

    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: "date must be a valid date" });
    }

    const newExpense = new Expense({ userId: req.userId, date: parsedDate, purpose: purpose.trim(), amount: parsedAmount });
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    console.error("Add expense failed:", { body: req.body, error: err });
    res.status(400).json({ message: err.message || "Failed to add expense" });
  }
});

// Get all expenses
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId }).sort({ date: -1, _id: -1 });
    res.json(expenses);
  } catch (err) {
    console.error("Fetch expenses failed:", err);
    res.status(500).json({ message: err.message || "Failed to fetch expenses" });
  }
});

// Delete expense
router.delete("/:id", auth, async (req, res) => {
  try {
    await Expense.deleteOne({ _id: req.params.id, userId: req.userId });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    console.error("Delete expense failed:", { id: req.params.id, error: err });
    res.status(500).json({ message: err.message || "Failed to delete expense" });
  }
});

module.exports = router;
