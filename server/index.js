import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

var app = express();

var url = 'mongodb://localhost/test';

mongoose.connect(url, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});
