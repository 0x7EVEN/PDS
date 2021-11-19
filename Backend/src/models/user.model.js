require('dotenv').config();
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  aadhaar: { type: String, required: true },
  wallet: { type: Number, required: true },
  cart: [{ type: String, quantity: String }],
});

const Users = mongoose.model('user', userSchema);

module.exports = Users;
