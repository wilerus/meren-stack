import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import AppRouter from './AppRouter.js';
import ChatListModel from './models/ChatListModel.js';

var app = express();

app.use(express.json());

AppRouter(app);

var url = 'mongodb://localhost/test';

mongoose.connect(url, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  ChatListModel.find({ name: 'rootModel' }, function(err, model) {
    if (model.length === 0) {
      const rootModel = new ChatListModel({ name: 'rootModel', chats: [] });
      rootModel.save(() => {
        app.get('/', function(req, res) {
          res.sendFile(path.join(__dirname, '../public', 'index.html'));
        });

        app.listen(3010, function() {
          console.log('Example app listening on port 3010!');
        });
      });
    } else {
      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
      });

      app.listen(3010, function() {
        console.log('Example app listening on port 3010!');
      });
    }
  });
});
