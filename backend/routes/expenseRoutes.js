const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Add new expense
router.post("/", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    console.error("Add expense failed:", { body: req.body, error: err });
    res.status(400).json({ message: err.message || "Failed to add expense" });
  }
});

// Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error("Fetch expenses failed:", err);
    res.status(500).json({ message: err.message || "Failed to fetch expenses" });
  }
});

// Delete expense
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    console.error("Delete expense failed:", { id: req.params.id, error: err });
    res.status(500).json({ message: err.message || "Failed to delete expense" });
  }
});

module.exports = router;
