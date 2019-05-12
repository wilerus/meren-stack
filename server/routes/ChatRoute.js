import express from 'express';
import ChatModel from '../models/ChatModel.js';

const router = express.Router();

router.get('/', function(req, res) {
  var fluffy = new ChatModel({ name: 'fluffy' });

  fluffy.save(function(err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
});

router.post('/postMessage', function(req, res) {
  var fluffy = new ChatModel({ name: 'fluffy' });

  fluffy.save(function(err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
});

export default router;
