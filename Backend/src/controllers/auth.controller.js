const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

const generateToken = ({ _id, aadhaar }) => {
  const user = { id: _id, aadhaar: aadhaar };
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

router.post('/register', async (req, res) => {
  try {
    let user = await User.create(req.body);
    user = user.toJSON();
    delete user.password;

    const token = generateToken(user);

    return res.status(200).json({ token: token, user: user });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Something went wrong while creating new user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ aadhaar: req.body.aadhaar })
      .lean()
      .exec();

    if (!user) {
      return res
        .status(400)
        .json({ message: 'Your aadhaar number is not correct!' });
    }

    // create a token
    const token = generateToken(user);
    return res.status(200).json({ user: user, token: token });
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

module.exports = router;
