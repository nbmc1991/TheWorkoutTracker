const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercise.duration",
                },
            },
        },
    ])
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch((err) => res.json(err.message));
});

router.get('/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercise.duration",
                },
            },
        },
    ])
        .sort({ day: 1 })
        .limit(7)
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch((err) => res.json(err.message));
});

router.post("/workouts", (req, res) => {
    Workout.create({})
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch((err) => res.json(err.message));
});

router.put("/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body,
            },
        },
        { new: true }
    )
        .then((updatedWorkout) => {
            res.json(updatedWorkout);
        })
        .catch((err) => res.json(err.message));
});

router.delete("/workouts", (req, res) => {
    Workout.findByIdAndDelete(req.body.id, (err, data) => {
        res.json(data);
        if (err) {
            res.json(err.message);
        }
    });
});

module.exports = router;










module.exports = router;