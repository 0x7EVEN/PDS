const express = require('express');
const Warehouse = require('../models/warehouse.model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const warehouses = await Warehouse.find().lean().exec();
    return res.status(200).json({warehouses: warehouses});
  } catch (e) {
    return res.status(500).json({message: 'Error while getting warehouses!'});
  }
});

router.post('/', async (req, res) => {
  try {
    const warehouse = await Warehouse.create(req.body);
    return res.status(201).json({warehouse: warehouse});
  } catch (e) {
    return res
      .status(500)
      .json({message: 'Error while creating a warehouse!'});
  }
});

module.exports = router;
