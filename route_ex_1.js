var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send("Hello World!");
    console.log("i am working")
});
app.listen(3000);