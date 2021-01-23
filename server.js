let express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
// const db = require('./models');
// const router = require('./routes/workoutapi.js');
const routes = require('./routes')

const PORT = process.env.PORT || 7777;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use(require('./routes/workoutapi.js'));

// app.use('/api', router)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// app.use(require('./routes/workoutapi.js'));
app.use(routes);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
