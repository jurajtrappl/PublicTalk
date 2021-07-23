const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const logger = require('morgan');
require('dotenv').config();

// DB setup
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to the database!'))
  .catch(err => {
    console.log('Problem with connection to the database:', err);
    process.exit();
  });
mongoose.Promise = global.Promise;

// Express setup
const app = express();
app.use(helmet());
app.use(logger('dev'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

// Apply routes
require('./routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app