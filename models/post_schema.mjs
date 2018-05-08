import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true
  }
});

export default PostSchema;
