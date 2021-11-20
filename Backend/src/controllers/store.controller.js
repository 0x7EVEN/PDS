const express = require("express");
const Store = require("../models/store.model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const stores = await Store.find().lean().exec();
        return res.status(200).json({ stores: stores });
    } catch (e) {
        return res
            .status(500)
            .json({ message: "Error while getting store..." });
    }
});

router.post("/", async (req, res) => {
    try {
        const store = await Store.create(req.body);
        return res.status(201).json({ store: store });
    } catch (e) {
        return res
            .status(500)
            .json({ message: "Error while creating store..." });
    }
});

router.get("/nearby", async (req, res) => {
    try {
        const stores = await Store.find({ city: req.body.city }).lean().exec();
        return res.status(200).json({ stores: stores });
    } catch (e) {
        return res
            .status(500)
            .json({ message: "Error while getting nearby stores..." });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const store = await Store.findById(req.params.id).lean().exec();
        return res.status(200).json({ store: store });
    } catch (e) {
        return res
            .status(500)
            .json({ message: "Error while getting single store!" });
    }
});

router.get('/:id', async (req, res) => {
  try {
    const store = await Store.findById(req.params.id).lean().exec();
    return res.status(200).json({ store: store });
  } catch (e) {
    return res.status(500).json({ message: 'Error while getting single store!' });
  }
})

module.exports = router;
