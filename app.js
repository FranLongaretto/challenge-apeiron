require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;
const PORT = 3000;

/** Connect to DB using Mongoose */
mongoose.connect(mongoString);
const database = mongoose.connection;

/** Check DB error */
database.on('error', () => {});

/** Check DB conection */
database.once('connected', () => {});

const app = express();

app.use(express.json());

/** App listen PORT */
app.listen(PORT, () => {});

app.use('/', routes);
