require('dotenv').config();
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    aadhaar: { type: String, required: true, unique: true },
    wallet: { type: Number, required: true },
    cart: [{ type: String, quantity: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
