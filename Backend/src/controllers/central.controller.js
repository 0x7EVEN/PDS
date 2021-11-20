const express = require('express');
const router = express.Router();

const Central = require('../models/central.model');

// available data
router.get('/', async (req, res) => {
  try {
    return res.status(200).json({ message: `Success!, we don't need this!` });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Error while fetching central data' });
  }
});

module.exports = router;
