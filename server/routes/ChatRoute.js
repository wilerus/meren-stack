import express from 'express';
import ChatModel from '../models/ChatModel.js';
import MessageModel from '../models/MessageModel.js';
import ChatListModel from '../models/ChatListModel.js';

const router = express.Router();

router.get('/getChat', function(req, res) {
  ChatListModel.findOne({ name: 'rootModel' }, function(err, chatsList) {
    res.json(chatsList.chats.id(req.query.id));
  });
});

router.get('/list', function(req, res) {
  ChatListModel.findOne({ name: 'rootModel' }, function(err, chatsList) {
    res.json(chatsList.chats);
  });
});

router.get('/getMessages', function(req, res) {
  ChatModel.find({ id: req.params.id }, function(err, chat) {
    res.json(chat.messages);
  });
});

router.post('/createChat', function(req, res) {
  var newChat = new ChatModel({ name: req.body.name });
  ChatListModel.findOne({ name: 'rootModel' }, function(err, models) {
    models.chats.push(newChat);

    models.save(function(err) {
      if (err) return console.error(err);
      res.json(newChat);
    });
  });
});

router.post('/postMessage', function(req, res) {
  ChatListModel.findOne({ name: 'rootModel' }, function(err, chatsList) {
    const chat = chatsList.chats.id(req.body.id);

    var newMessage = new MessageModel({ text: req.body.text });

    chat.messages.push(newMessage);
    chatsList.save(function(err) {
      if (err) return console.error(err);
      res.json(newMessage);
    });
  });
});

export default router;
