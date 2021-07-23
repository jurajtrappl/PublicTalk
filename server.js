const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

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

// Mongo setup
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to the database!'))
.catch(err => {
    console.log('Problem with connection to the database:', err);
    process.exit();
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});