import mongoose from 'mongoose';
import { chatSchema } from './ChatModel.js';

var chatListSchema = new mongoose.Schema({
  name: String,
  chats: [chatSchema]
});

var ChatListModel = mongoose.model('chatList', chatListSchema);

export default ChatListModel;

export { chatListSchema };
