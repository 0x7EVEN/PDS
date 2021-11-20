const mongoose = require('mongoose');

const storeSchema = mongoose.Schema(
     {
          name: {type: String, required: true},
          // capacity: {type: String, required: true},
          inventory: [
               {
                    name: {type: String, required: true},
                    supplied: {type: String, required: true},
                    received: {type: String, required: true},
                    remaining: {type: String, required: true},
                    used: {type: String, required: true},
                    // price: { type: String, required: true },
               },
          ],
          address: {type: String, required: true},
          city: {type: String, required: true},
          state: {type: String, required: true},
     },
     {
          versionKey: false,
          timestamps: true,
     }
);

const Store = mongoose.model('store', storeSchema);

module.exports = Store;
