const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  purpose: { type: String, required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model("Expense", expenseSchema);
