var express = require("express");
var app = express();
var request = require("request");
var PORT= process.env.PORT || 5000 ));

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("searchresults", {data: data});
        }
    });
});

// Start node server
app.listen( PORT, function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
