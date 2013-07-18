var express = require('express');
var fs = require('fs');
var filename='index.html';
var message='';
var app = express.createServer(express.logger());


fs.readFile(filename,'utf8',function(err,data){
    message=data;
});

app.get('/', function(request, response) {
 //response.send('Hellow World 2!');
    response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
