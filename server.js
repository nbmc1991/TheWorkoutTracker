const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 7777;

const db = require('./models');

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//get notified if connection was successfull of error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('We connected!');
});


// app.get('/excercise', (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/exercise.html"));
// });


