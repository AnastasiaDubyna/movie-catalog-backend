const Media = require('../models/Media');
const Review = require('../models/Review');
const {findOneByTmdbId} = require('../services/reviewService');

const getAllReviewsById = async ({params: {tmdbId}}, res) => {
    const mediaItem = await findOneByTmdbId(tmdbId);

    const reviews = mediaItem ? await Promise.all(mediaItem.reviews.map(async reviewId => await Review.findById(reviewId))) : [];

    res.send({reviews});
};

const postReview = async({body}, res) => {
    const {id, newReview} = body;
    const mediaItem = await findOneByTmdbId(id) || new Media({tmdb_id: id});
    const review = new Review(newReview);
    mediaItem.reviews.push(review);

    await review.save();
    await mediaItem.save();

    res.send({success: true});
};

module.exports = {
    getAllReviewsById, 
    postReview
};