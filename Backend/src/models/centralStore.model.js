const mongoose = require("mongoose");



/**
 * Date to be added in schema for each store
 * Grains
  */
const centralStoreSchema = new mongoose.Schema(
     {
          subStoreId: {type: String},
          currentStatus: {type: String},
          Weight: {type: Number},
          check: [
               {status: {type: String}}
          ],
     },
     {
          timestamps: true,
          versionKey: false
     }
);

module.exports = mongoose.model("centralStore", centralStoreSchema);