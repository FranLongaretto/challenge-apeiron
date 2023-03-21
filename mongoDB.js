const mongoose = require('mongoose');

const { DB_URL, DB_TEST_URL, NODE_ENV } = process.env;

const connectionString = NODE_ENV === 'test'
  ? DB_TEST_URL
  : DB_URL;

// MongoDB connection
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected');
  }).catch((err) => {
    console.error(err);
  });

process.on('uncaughtException', (error) => {
  console.error(error);
  mongoose.disconnect();
});
