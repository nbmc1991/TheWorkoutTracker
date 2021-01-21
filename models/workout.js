const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Please which type of exercise you would like to track',
        },
        name: {
            type: String,
            trim: true,
            required: 'name is require',
        },
        weight: {
            type: String,
            trim: true,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
    },
    ],
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;