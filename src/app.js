const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const emailRoute = require('./routes/emailRoute');
const emailResetRoute = require('./routes/emailResetRoute');
app.use('/', index);
app.use('/persons', personRoute);
app.use('/send-mail', emailRoute);
app.use('/send-mail-reset-senha', emailResetRoute);

module.exports = app;