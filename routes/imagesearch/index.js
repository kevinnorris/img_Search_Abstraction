var imagesearch = require('express').Router();
var blank = require('./blank.js');
var search = require("./search.js");

imagesearch.get('/', blank);
imagesearch.get('/:data', search);

module.exports = imagesearch;