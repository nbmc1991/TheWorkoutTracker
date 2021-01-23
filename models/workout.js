const mongoose = require('mongoose');
// const Exercise = require("./exercise")
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
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
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],

});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;