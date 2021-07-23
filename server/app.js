const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const logger = require('morgan');

dotenv.config({
  path: path.resolve(`${__dirname}/../config/.env`)
});

// Express setup
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Apply routes
require('./routes')(app);

module.exports = app