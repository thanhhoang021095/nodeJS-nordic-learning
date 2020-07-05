require('dotenv').config();
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
const app = express();
const middleware = require('./middlewares/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

middleware(app);

module.exports = app;
