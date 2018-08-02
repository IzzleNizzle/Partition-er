const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Idea for mapping out the LedgerEntry model

dateCreated
ledgerEntryName
ledgerEntryAmmount
timeAfterPrevious

*/

const ledgerSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const LedgerEntry = mongoose.model("LedgerEntry", ledgerEntrySchema);

module.exports = LedgerEntry;
