import express from 'express';
import ChatModel from '../models/ChatModel.js';

const router = express.Router();

router.get('/getMessages', function(req, res) {
  ChatModel.find(function(err, messages) {
    res.send(JSON.stringify(messages));
  });
});

router.post('/postMessage', function(req, res) {
  var newMessage = new ChatModel({ name: req.params.name });

  newMessage.save(function(err, fluffy) {
    if (err) return console.error(err);
    res.send(JSON.stringify(newMessage));
  });
});

export default router;
