require('dotenv').config();
require('./mongoDB');

const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/', routes);

/** App listen PORT */
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
