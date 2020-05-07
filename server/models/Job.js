const mongoose = require('mongoose');
const JobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job', JobSchema);