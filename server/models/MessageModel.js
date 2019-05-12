import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: String,
  text: String,
  date: Date
});

const message = mongoose.model('message', messageSchema);

export default message;

export { messageSchema };
