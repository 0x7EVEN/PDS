const mongoose = require('mongoose');

module.exports = () => {
  const LINK =
    process.env.NODE_ENV === 'development'
      ? 'mongodb://127.0.0.1:27017/pds'
      : process.env.DATABASE_URI;
  return mongoose.connect(LINK);
};
