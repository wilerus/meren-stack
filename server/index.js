var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});
