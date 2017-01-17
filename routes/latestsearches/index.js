var latestsearches = require('express').Router();
var all = require('./all.js');

latestsearches.get('/', all);

module.exports = latestsearches;