const mongoose = require('mongoose');

// central block
const warehouseSchema = mongoose.Schema(
  {
    item: { type: String, required: true },
    unused: { type: String, required: true },
    filledDate: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Warehouse = mongoose.model('warehouse', warehouseSchema);

module.exports = Warehouse;
