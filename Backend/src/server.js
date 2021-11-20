require('dotenv').config();
const express = require('express');
const Pusher = require('pusher');
const app = express();

const db = require('./configs/db.config');
const authController = require('./controllers/auth.controller');
const adminController = require('./controllers/admin.controller');
const userController = require('./controllers/user.controller');
const storeController = require('./controllers/store.controller');

app.use(express.json());

app.use('/auth', authController);
app.use('/admin', adminController);
app.use('/user', userController);
app.use('/store', storeController);

var pusher = new Pusher({
  appId: 'APP_ID',
  key: 'APP_KEY',
  secret: 'APP_SECRET',
  cluster: 'APP_CLUSTER',
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    // connect to db
    await db();
    console.log('Server started!');
  } catch (e) {
    console.log('Error while connecting database');
  }
});