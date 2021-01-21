const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const db = require('./models');
// const router = require('./routes/workoutapi.js');

const PORT = process.env.PORT || 7777;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require('./routes/workoutapi.js'));

// app.use('/api', router)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});

app.use(require('./routes/workoutapi.js'));
app.use(require('./routes'));


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
