import mongoose from 'mongoose';
import { messageSchema } from './MessageModel.js';

var chatSchema = new mongoose.Schema({
  name: String,
  messages: [messageSchema]
});

chatSchema.methods.speak = function() {
  var greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name";
  console.log(greeting);
};

var ChatModel = mongoose.model('chat', chatSchema);

export default ChatModel;
