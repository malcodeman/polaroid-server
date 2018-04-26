import mongoose from "mongoose";
// Syntax for importing Schema and Model is not yet supported
const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Post", PostSchema);
