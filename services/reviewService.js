const Media = require('../models/Media');

const findOneByTmdbId = async (tmdbId) => await Media.findOne({tmdb_id: tmdbId}).exec();

module.exports = {
    findOneByTmdbId
};
