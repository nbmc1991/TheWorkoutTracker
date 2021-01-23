const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
        type: String,
        trim: true,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }
});



const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise
