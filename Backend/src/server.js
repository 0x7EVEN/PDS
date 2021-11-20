require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const db = require('./configs/db.config');
const authController = require('./controllers/auth.controller');
const centralController = require('./controllers/central.controller');
const userController = require('./controllers/user.controller');
const storeController = require('./controllers/store.controller');
const warehouseController = require('./controllers/warehouse.controller');

app.use(express.json());

app.use('/auth', authController);
app.use('/central', centralController);
app.use('/user', userController);
app.use('/store', storeController);
app.use('/warehouse', warehouseController);

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
