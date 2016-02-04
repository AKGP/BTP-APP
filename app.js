var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyparser = require('body-parser');
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
var ejs = require('ejs');
var port = process.env.PORT||8080;
app.set('view engine','ejs');
module.
app.get('/',function(req,res){
	res.render('main');
});
app.listen(port);
console.log("Server is running on "+port);