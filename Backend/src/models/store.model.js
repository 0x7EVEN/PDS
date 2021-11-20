const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
     name: {type: String, required: true},
     address: {type: String},
     avaliable_: [{
          product_name: {type: String},
     }],
     status: {type: String}
}, {
     timestamps: true,
     versionKey: false
});

module.exports = mongoose.model("store", storeSchema);