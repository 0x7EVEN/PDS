const mongoose = require('mongoose');

module.exports = () => {
  const LINK =
    process.env.NODE_ENV === 'development'
      ? process.env.DATABASE_URI
      : 'mongodb://127.0.0.1:27017/pds';
  return mongoose.connect(LINK);
};
