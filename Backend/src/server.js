require('dotenv').config();
const express = require('express');
// const Pusher = require('pusher');
const app = express();
app.use(express.json());

const db = require('./configs/db.config');
const authController = require('./controllers/auth.controller');
const locationController = require("./controllers/location.controller");
const storeController = require("./controllers/store.controller");
const userController = require("./controllers/user.controller");

app.use('/auth', authController);

// var pusher = new Pusher({
//      appId: 'APP_ID',
//      key: 'APP_KEY',
//      secret: 'APP_SECRET',
//      cluster: 'APP_CLUSTER',
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
     try {
          // connect to db
          await db();
          console.log(`Server started! port : ${PORT}`);
     } catch (e) {
          console.log('Error while connecting database');
     }
});
