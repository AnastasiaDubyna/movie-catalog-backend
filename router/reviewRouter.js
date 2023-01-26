const express = require('express');
const router = express.Router();
const controller = require("../controllers/reviewController");

router.get("/all/:tmdbId", controller.getAllReviewsById);

module.exports = router;