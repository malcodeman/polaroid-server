import Post from "./posts_model.mjs";
import sequelize from "../connection.mjs";
import jwt from "jsonwebtoken";

export const create = (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  sequelize
    .sync()
    .then(() =>
      Post.create({
        text: req.body.text,
        userId: decoded.id
      })
    )
    .then(post => {
      res.status(200).send(post);
    })
    .catch(error => res.status(400).send(error));
};

export const get = (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  sequelize
    .sync()
    .then(() => Post.findAll({ where: { userId: decoded.id } }))
    .then(posts => {
      res.status(200).send(posts);
    })
    .catch(error => res.status(400).send(error));
};
