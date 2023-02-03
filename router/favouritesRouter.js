const express = require('express');
const { getFavouritesIdByType } = require('../controllers/favouritesController');
const router = express.Router();

router.get('/getAll', getFavouritesIdByType);

module.exports = router;