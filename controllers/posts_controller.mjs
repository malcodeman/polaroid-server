import Post from "../models/posts_model.mjs";
import jwt from "jsonwebtoken";

export const create = (req, res) => {
  Post.create(req.body)
    .then(post => res.send(post))
    .catch(error => console.log(error));
};

export const get = (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  console.log(decoded);
  Post.find({})
    .then(posts => {
      res.send(posts);
    })
    .catch(error => console.log(error));
};
