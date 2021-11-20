const mongoose = require('mongoose');

// central block
const centralSchema = mongoose.Schema(
  {
    // availableStock: [{ name: String, quantity: String }],
    stores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'store' }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Central = mongoose.model('central', centralSchema);

module.exports = Central;
