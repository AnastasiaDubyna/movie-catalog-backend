const {Schema, model} = require('mongoose');

const Review = new Schema({
    date: {type: Date, default: Date.now()},
    title: {type: String, required: true},
    username: {type: String, required: true},
    content: {type: String, required: true},
    grade: {type: Number, default: 0}
})

module.exports = model('Review', Review);