const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Idea for mapping out the ledger model

dateCreated
ledgerName
ledgerAmmount
ledgerEntries

*/

const ledgerSchema = new Schema({
  ledgerName: String,
  ledgerAmmount: Number,
  ledgerEntries: Array,
  date: { type: Date, default: Date.now }
});

const Ledger = mongoose.model("Ledger", ledgerSchema);

module.exports = Ledger;
