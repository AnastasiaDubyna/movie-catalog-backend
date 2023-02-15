const express = require('express');
const { getFavouritesIdByType, getIsFavourite, addFavourite, removeFavourite } = require('../controllers/favouritesController');
const router = express.Router();

router.get('/getAll', getFavouritesIdByType);
router.get('/isFavourite', getIsFavourite);
router.post('/add', addFavourite);
router.delete('/remove', removeFavourite);

module.exports = router;