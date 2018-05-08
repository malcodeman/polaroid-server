import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default PostSchema;
