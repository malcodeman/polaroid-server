import Post from "../models/posts_model.mjs";

export const create = (req, res) => {
  Post.create(req.body)
    .then(post => res.send(post))
    .catch(error => console.log(error));
};

export const get = (req, res) => {
  Post.find({})
    .then(posts => res.send(posts))
    .catch(error => console.log(error));
};
