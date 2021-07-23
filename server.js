const express = require('express');
const cors = require('cors');
const indexRoutes = require('./routes/index.routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

// Mongoose Mongo setup
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to the database!'))
.catch(err => {
    console.log('Problem with connection to the database:', err);
    process.exit();
})
mongoose.Promise = global.Promise;

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

app.use('/', indexRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});