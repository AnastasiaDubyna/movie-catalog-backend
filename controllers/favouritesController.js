const Media = require("../models/Media");
const { findOneByTmdbId } = require("../services/reviewService");

const getFavouritesIdByType = async ({query: {type}}, res) => {
    const medias = await Media
        .find({type: type, favourite: true})
        .select("tmdb_id -_id")
        .exec();

    const results = medias.map(obj => obj.tmdb_id);

    res.send({
        results
    });
};

const getIsFavourite = async ({query: {id}}, res) => {
    const media = await findOneByTmdbId(id);

    res.send({
        isFavourite: media ? media.favourite : false
    });
};

const addFavourite = async ({query: {id, type}}, res) => {
    const media = await findOneByTmdbId(id) || new Media({tmdb_id: id, type});
    media.favourite = true;
    await media.save();
    res.sendStatus(201);
};

const removeFavourite = async ({query: {id}}, res) => {
    const media = await findOneByTmdbId(id);
    media.favourite = false;
    await media.save();
    res.sendStatus(201);
}

module.exports = {
    getFavouritesIdByType,
    getIsFavourite,
    addFavourite,
    removeFavourite
};