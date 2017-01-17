var Search = require("../../models/search.js");
var assert = require("assert");

module.exports = function(req, res){
    
    // Remove old data if 100 or more documents in db
    // We only display last 10 searches so no point storing more
    Search.count({}, function(err, count){
       assert.equal(null, err);
       if(count >= 100){
           Search.find({}, {_id: 1}).sort({_id:1}).limit(90).exec(function(err, data){
                assert.equal(null, err);
                var idsToRemove = data.map(elem => elem._id);
    
                //The operation is only executed when a callback is passed
                Search.remove({_id: {$in: idsToRemove}}, function(err, data){
                    assert.equal(null, err);
                    console.log("Data removed");
                });
            });
       }
    });
    
    Search.find().sort({_id:-1}).limit(10).select({_id: 0, term: 1, offset: 1, when: 1}).exec(function(err, data){
        if(err){
            return res.status(500).json({"error": err});
        }
       res.status(200).json(data);
    });
    
};