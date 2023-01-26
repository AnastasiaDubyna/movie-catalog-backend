const Media = require('../models/Media');
const Review = require('../models/Review');

const getAllReviewsById = async ({params: {tmdbId}}, res) => {
    const mediaItem = await Media.findOne({tmdb_id: tmdbId}).exec();

    const reviews = mediaItem ? await Promise.all(mediaItem.reviews.map(async reviewId => await Review.findById(reviewId))) : [];

    res.send(reviews);
};

module.exports = {
    getAllReviewsById
};