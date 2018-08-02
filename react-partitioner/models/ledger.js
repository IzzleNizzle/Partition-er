const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Idea for mapping out the ledger model

dateCreated
ledgerAmmount
ledgerEntries

*/

const ledgerSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Ledger = mongoose.model("Ledger", ledgerSchema);

module.exports = Ledger;
