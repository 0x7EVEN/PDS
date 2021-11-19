const mongoose = require("mongoose");

async function connect () {
     return mongoose.connect("mongodb+srv://shared:6MZeFfYdR94UKfN@cluster0.7iyne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

