require('dotenv').config();
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    aadhaar: { type: String, required: true, unique: true },
    quota: [
      {
        name: {
          type: String,
          required: true,
        },
        remaining: {
          type: String,
          required: true,
        },
        used: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
      },
    ],
    wallet: { type: String, required: true, default: '0' },
    cart: [
      {
        name: { type: String, required: true },
        quantity: { type: String, required: true },
        store: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'store',
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
