const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Idea for mapping out the LedgerEntry model

dateCreated
ledgerEntryName
ledgerEntryAmmount
timeAfterPrevious
ledgerID

*/

const ledgerSchema = new Schema({
  ledgerEntryName: String,
  ledgerEntryAmmount: { type: Number, required: true },
  timeAfterPrevious: Number,
  ledgerID: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const LedgerEntry = mongoose.model("LedgerEntry", ledgerEntrySchema);

module.exports = LedgerEntry;
