var express = require('express');
var app = express();
app.get('/', function(req, res){
res.send("Hello World!");
});
app.post('/', function(req, res){
res.send("You just called the post method at '/'!\n");
});
app.listen(3001);