var https = require("https");

module.exports = function(searchUrl, callback){
    var request = https.get(searchUrl, function(response) {
      //console.log('STATUS: ' + response.statusCode);
      //console.log('HEADERS: ' + JSON.stringify(response.headers));

      // Buffer the body entirely for processing as a whole.
      var bodyChunks = [];
      response.on('data', function(chunk) {
        bodyChunks.push(chunk);
      }).on('end', function() {
        var body = Buffer.concat(bodyChunks);

        callback(null, body);
      })
    });
    
    request.on('error', function(e) {
        callback(e.message, null);
    });
}