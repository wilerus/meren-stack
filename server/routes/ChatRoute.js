import express from 'express';
import ChatModel from '../models/ChatModel.js';
import MessageModel from '../models/MessageModel.js';
import ChatListModel from '../models/ChatListModel.js';

const router = express.Router();

router.get('/getChat', function(req, res) {
  ChatModel.find({ id: req.params.id }, function(err, chat) {
    res.send(JSON.stringify(chat));
  });
});

router.get('/list', function(req, res) {
  ChatListModel.find(function(err, chatsList) {
    res.send(JSON.stringify(chatsList));
  });
});

router.get('/getMessages', function(req, res) {
  ChatModel.find({ id: req.params.id }, function(err, chat) {
    res.send(JSON.stringify(chat.messages));
  });
});

router.post('/createChat', function(req, res) {
  console.log(req.params);
  var newChat = new ChatModel({ name: req.params.name });

  newChat.save(function(err) {
    if (err) return console.error(err);
    res.send(JSON.stringify(newChat));
  });
});

router.post('/postMessage', function(req, res) {
  ChatModel.find(req.params.id, function(err, chat) {
    if (err) return console.error(err);
    var newMessage = new MessageModel({ text: req.params.text });

    chat.messages.push(newMessage);

    chat.save(function(err, fluffy) {
      if (err) return console.error(err);
      res.send(JSON.stringify(newMessage));
    });
  });
});

export default router;
