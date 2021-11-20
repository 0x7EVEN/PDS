const mongoose = require('mongoose');

const warehouseSchema = mongoose.Schema(
  {
    city: { type: String, required: true },
    items: [
      {
        name: { type: String, required: true },
        unused: { type: String, required: true },
        fulfilled: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Warehouse = mongoose.model('warehouse', warehouseSchema);

module.exports = Warehouse;
