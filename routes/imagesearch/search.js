var httpsGet = require("../../httpsGet.js");
var Search = require("../../models/search.js");
var assert = require("assert");

module.exports = function(req, res){
    var search = req.params.data;
    var offset = req.query.offset;
    var searchUrl = "https://www.googleapis.com/customsearch/v1?cx=011738457539476070994%3Abespvo4vodg&safe=medium&searchType=image&key=" + process.env.API_KEY + "&fields=items(image(byteSize%2CcontextLink%2Cheight%2CthumbnailLink%2Cwidth)%2Clink%2Csnippet)&q=" + search;
    
    if(offset && Number.isInteger(+offset)){
        // start is based on individual search results, offset is pages of 10
        searchUrl += "&start=" + (parseInt(offset, 10) * 10 + 1);
    }
    
    httpsGet(searchUrl, function(err, response){
       if(err){
           return response.status(500).json({"error": "500 " + err});
       }
       
       var s = new Search({
            term: search,
            offset: offset ? +offset : 0,
            when: ""
           });
        s.save(function(err){
            assert.equal(null, err);
            console.log("search saved to db");
        });
        var items = JSON.parse(response).items;
        var output = items.map(function(searchResult){
            return {
                url: searchResult.link, 
                snippet: searchResult.snippet, 
                dimentions: searchResult.image.width + "," + searchResult.image.height,
                byteSize: searchResult.image.byteSize,
                thumbnail: searchResult.image.thumbnailLink,
                context: searchResult.image.contextLink
            };
        });

       res.status(200).json(output);
    });
    
};