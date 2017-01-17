var routes = require('express').Router();
var imagesearch = require("./imagesearch");
var latestsearches = require("./latestsearches");

routes.use("/imagesearch", imagesearch);
routes.use("/latestsearches", latestsearches);

routes.get('/', function(req, res){
  res.status(200);
});

module.exports = routes;