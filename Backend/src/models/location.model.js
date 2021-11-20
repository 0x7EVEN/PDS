const mongoose = require("mongoose");


//  things that can be added [location-coordinates, ?]


const locationSchema = new mongoose.Schema({
     location: {type: String, required: true},
     stores: [{
          type: mongoose.Schema.ObjectId,
          ref: "store"
     }]
}, {
     timestamps: true,
     versionKey: false
});


/**
 * virtual property for collecting distance from user ... can be added
 *
*/