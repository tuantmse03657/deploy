var express = require('express');
var app = express();
var path = require('path');
var bodyParse = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/users';
app.use(bodyParse());
app.use(express.static(__dirname + '/client'));
app.route('/api/register')
    .post(function(req,res){
      console.log(req.body.user);
    });
app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });
app.listen(3000, function(){
  console.log("Server started at port 3000!");
});
