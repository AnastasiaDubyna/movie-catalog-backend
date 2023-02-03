const Media = require("../models/Media");

const getFavouritesIdByType = async ({query: {type}}, res) => {
    const medias = await Media
        .find({type: type, favourite: true})
        .select("tmdb_id -_id")
        .exec();

    const results = medias.map(obj => obj.tmdb_id);

    console.log(results);

    res.send({
        results
    });
};

module.exports = {
    getFavouritesIdByType
};