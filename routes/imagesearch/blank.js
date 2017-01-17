module.exports = function(req, res){
    res.status(400).json({"error": "400 Add search term(s) and an optional offset to use the imagesearch"});
};