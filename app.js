/**
 * Created by Nomad_Mystic on 8/18/2016.
 */

// Adding styles to Application

// Express objects
var express = require('express');

// Node objects
var https = require('https');
var http = require('http');
var path = require('path');

var app = express();


// gives the express application the static HTMl page for root path
// all static files in html are relative to this folder
app.use(express.static(path.join(__dirname + '/build')));

// root grab HTML which loads CSS, Javascript, and 10 components
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});

// get ten people from the wikiMedia API randomly selected
app.get('/initialPages', function(req, res) {

    https.get('https://en.wikipedia.org/w/api.php?' +
        'action=query' +
        '&format=json' +
        '&list=categorymembers' +
        '&cmlimit=10' +
        '&cmtitle=Category:History' +
        '&cmprop=ids|title|type' +
        '&cmtype=page' +
        '&cmstarthexsortkey=423455',
        function(response) {

        var responseString = '';

        response.on('data', function(data) {
            responseString += data;
        });

        response.on('end', function() {
            res.send(responseString);
        });
    }).on('error', function(err) {
        console.log(err);
    });

});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Server running on: ' + port);
});
