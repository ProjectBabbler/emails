require('newrelic');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var postMark = require('./routes/postmark');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/postmark', postMark);

module.exports = app;
