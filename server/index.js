import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import ChatModel from './models/ChatModel.js';

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

app.get('/createAKitten', function(req, res) {
  var fluffy = new ChatModel({ name: 'fluffy' });
  fluffy.save(function(err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
});

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});
