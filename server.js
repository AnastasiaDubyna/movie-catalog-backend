require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reviewRouter = require('./router/reviewRouter');
const favouritesRouter = require('./router/favouritesRouter');
const mongoose = require('mongoose');
const initDatabase = require('./forDevPurposes');

const app = express();
const jsonParser = bodyParser.json();

app.use(cors({origin: "http://localhost:3000"}));
app.use('/review', jsonParser, reviewRouter);
app.use('/favourite', jsonParser, favouritesRouter);

mongoose.connect(process.env.MONGO_CONNECTION_LINK)
    .then(_ => app.listen(5000, () => {
        console.log("Server is running");
        initDatabase();
    }));