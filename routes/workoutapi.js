const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/workouts', (req, res) => {

    Workout.find({})
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => res.json(err.message));
});

router.post('/workouts/', (req, res) => {
    Workout.create({})
        .then(workoutInfo => {
            res.json(workoutInfo);
        }).catch(err => {
            res.status(400).json(err);
        });
});



module.exports = router;