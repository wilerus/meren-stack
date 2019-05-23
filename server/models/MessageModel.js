import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  author: String,
  text: String,
  creationDate: { type: Date, default: new Date() }
});

const message = mongoose.model("message", messageSchema);

export default message;

export { messageSchema };
