const express = require('express');
const Warehouse = require('../models/warehouse.model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const warehouses = await Warehouse.find().lean().exec();
    return res.status(200).json({ warehouses: warehouses });
  } catch (e) {
    return res.status(500).json({ message: 'Error while getting warehouses!' });
  }
});

router.post('/', async (req, res) => {
  try {
    const warehouse = await Warehouse.create(req.body);
    return res.status(201).json({ warehouse: warehouse });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Error while creating a warehouse!' });
  }
});

router.get('/:city', async (req, res) => {
  try {
    const warehouses = await Warehouse.find({ city: req.params.city });
    return res.status(200).json({ warehouses: warehouses });
  } catch (e) {
    console.log('error: ', e.message);
    return res
      .status(500)
      .json({ message: 'Error while fetching warehouses!' });
  }
});

module.exports = router;
