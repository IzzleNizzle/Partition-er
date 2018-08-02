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
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
