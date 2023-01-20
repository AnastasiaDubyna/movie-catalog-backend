require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ratingRouter = require('./router/ratingRouter');
const mongoose = require('mongoose');

const app = express();
const jsonParser = bodyParser.json();

app.use(cors({origin: "http://localhost:3000"}));
app.use('/', jsonParser, ratingRouter);

app.listen(5000, () => console.log(`Listening on port 5000`));

mongoose.connect(process.env.MONGO_CONNECTION_LINK)
    .then(_ => app.listen(5000, () => console.log("Server is running")))