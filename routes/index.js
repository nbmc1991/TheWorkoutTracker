const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./workoutapi.js');
// const mongoose = require('mongoose');
// const { Workout } = require('./workoutapi.js');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// router.get('/workouts', (req, res) => {

//     Workout.find({})
//         .then(workoutData => {
//             res.json(workoutData);
//         })
//         .catch(err => res.json(err.message));
// });

module.exports = router;

