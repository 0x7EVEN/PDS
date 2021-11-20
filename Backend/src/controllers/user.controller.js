const express = require('express');
const protect = require('../middlewares/protect');

const User = require('../models/user.model');
const Store = require('../models/store.model');

const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findOne({ aadhaar: req.user.aadhaar })
      .lean()
      .exec();
    return res.status(200).json({ user: user });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Error while getting user details!' });
  }
});

router.post('/cart', protect, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $addToSet: { cart: req.body } },
      { new: true }
    );
    return res.status(200).json({ message: 'Success!', user: user });
  } catch (e) {
    return res.status(500).json({ message: 'Error while adding to cart...' });
  }
});

router.get('/nearby', protect, async (req, res) => {
  try {
    const user = await User.findOne({ aadhaar: req.user.aadhaar });
    if (!user) {
      return res
        .status(400)
        .json({ message: 'Check token for user validation' });
    }
    const stores = await Store.find({ city: user.city }).lean().exec();
    return res.status(200).json({ stores: stores });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Error while getting nearby shops' });
  }
});

router.post('/checkout', protect, async (req, res) => {
  try {
    let user = await User.findOne({ aadhaar: req.user.aadhaar });

    // Quota left of user
    const { quota } = user;

    // Transaction that happened
    const transaction = req.body.cart;

    // Wallet amount left
    let updatedWallet = Number(user.wallet);

    // Updating quota to reflect on database
    const updatedQuota = quota.map(({ name, remaining, used, price }) => {
      const captureRemaining = Number(remaining.split('kg')[0]);
      const captureUsed = Number(used.split('kg')[0]);
      const capturePrice = Number(price.split('/kg')[0]);

      const value = Number(transaction[name]?.split('kg')[0]);

      const updatedItem = {
        name: name,
        remaining: remaining,
        used: remaining,
        price: price,
      };

      if (value) {
        updatedWallet -= String(capturePrice * value);
        updatedItem['remaining'] = String(captureRemaining - value) + 'kg';
        updatedItem['used'] = String(captureUsed + value) + 'kg';
      }

      return updatedItem;
    });

    user = await User.findByIdAndUpdate(
      user._id,
      {
        quota: [...updatedQuota],
        wallet: updatedWallet,
      },
      { new: true }
    );

    if (!user) {
      return res
        .status(500)
        .json({ message: "Error while updating user's cart" });
    }

    // Now update store's data
    let store = await Store.findById(req.body.store);

    const updateInventory = store.inventory.map(({ name, remaining, used }) => {
      let captureRemaining = Number(remaining.split('kg')[0]);
      let captureUsed = Number(used.split('kg')[0]);
      const newItem = {
        name: name,
        remaining: remaining,
        used: used,
      };

      const value = Number(transaction[name]?.split('kg')[0]);
      if (value) {
        newItem['remaining'] = String(captureRemaining - value) + 'kg';
        newItem['used'] = String(captureUsed + value) + 'kg';
      }

      return newItem;
    });

    store = await Store.findByIdAndUpdate(
      req.body.store,
      { inventory: [...updateInventory] },
      { new: true }
    );

    // alert if stocks fells below 20% for each category

    return res.status(200).json({
      message: 'Success!',
      user: user,
      store: store,
    });
  } catch (e) {
    return res.status(500).json({ message: 'Error while checking out...' });
  }
});

module.exports = router;
