var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var Search = require("./models/search.js");
var routes = require('./routes');

var dbUrl = (process.env.MONGOLAB_URI || 'mongodb://localhost/imgSearch');
mongoose.connect(dbUrl);

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(process.env.PORT || 8080);


