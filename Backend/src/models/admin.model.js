const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
  {
    availableStock: [{ name: String, quantity: String }],
    stores: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'store', required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;
