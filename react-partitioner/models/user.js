const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/*
Idea for mapping out the user model

email
username
ledgerCount
ledgerArray
creationDate

*/


const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  ledgerCount: Number,
  ledgerArray: Array,
  dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
