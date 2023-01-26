const {Schema, model} = require('mongoose');

const Media = new Schema({
    tmdb_id: {type: Number, required: true},
    rating: {type: Number, default: 0},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
})

module.exports = model('Media', Media);