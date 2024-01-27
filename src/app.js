const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const emailRoute = require('./routes/emailRoute');
const emailResetRoute = require('./routes/emailResetRoute');
const shortUrlRoute = require('./routes/shortenedUrlRoute');

app.use('/', index);
app.use('/persons', personRoute);
app.use('/send-mail', emailRoute);
app.use('/send-mail-reset-senha', emailResetRoute);
app.use('/url-shortener', shortUrlRoute);

module.exports = app;