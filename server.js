require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ratingRouter = require('./router/ratingRouter');
const mongoose = require('mongoose');
const Media = require('./models/Media');
const Review = require('./models/Review');

const app = express();
const jsonParser = bodyParser.json();

app.use(cors({origin: "http://localhost:3000"}));
app.use('/', jsonParser, ratingRouter);

app.listen(5000, () => console.log(`Listening on port 5000`));

mongoose.connect(process.env.MONGO_CONNECTION_LINK)
    .then(_ => app.listen(8080, () => {
        console.log("Server is running");
        Media.collection.drop();
        Review.collection.drop();
        const movie = new Media({tmdb_id: "12345"});
        const comment = new Review({content: "test comment", username: "KittyKat", title: "No so bad"});
        movie.reviews.push(comment);
        comment.save()
        movie.save()
            .then((_) => console.log("saved"))
        console.log(movie.reviews)
    }));