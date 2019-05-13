import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import AppRouter from './AppRouter.js';

var app = express();
AppRouter(app);

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
