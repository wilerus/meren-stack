var express = require('express');
var app = express();
const path = require('path');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {
  var cursor = db.collection('Employee').find();

  cursor.each(function(err, doc) {
    console.log(doc);
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});
