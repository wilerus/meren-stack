import mongoose from 'mongoose';
import { messageSchema } from './MessageModel.js';

var chatSchema = new mongoose.Schema({
  name: String,
  messages: [messageSchema]
});

var ChatModel = mongoose.model('chat', chatSchema);

export default ChatModel;
