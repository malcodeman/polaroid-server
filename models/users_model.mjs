import mongoose from "mongoose";
import PostSchema from "./post_schema.mjs";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  posts: [PostSchema]
});

export default mongoose.model("User", UserSchema);
