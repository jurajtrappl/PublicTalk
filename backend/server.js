const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

dotenv.config({
  path: path.resolve(`${__dirname}/../config/.env`)
});

// DB setup
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected.'))
  .catch(err => {
    if (err) throw err;
    process.exit();
  })

// Express setup
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(passport.initialize());

// Passport config
require('./utils/passport')(passport);

// Apply routes
require('./routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is running on port ${PORT}`));
