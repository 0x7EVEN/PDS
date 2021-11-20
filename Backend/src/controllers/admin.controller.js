const express = require('express');
const router = express.Router();

const Admin = require('../models/admin.model');

router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find().lean().exec();
    return res.status(200).json({ admins: admins });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Something went wrong while fetching admin data...' });
  }
});

module.exports = router;
