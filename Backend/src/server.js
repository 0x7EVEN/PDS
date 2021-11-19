const express = require("express");
const connect = require("../configs/db");
const app = express();











app.listen(8080, async function() {
     await connect();
     console.log("active on port 8080");
});