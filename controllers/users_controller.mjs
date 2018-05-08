import User from "../models/users_model.mjs";
import jwt from "jsonwebtoken";
import Post from "../models/post_schema.mjs";

export const create = (req, res) => {
  User.create(req.body)
    .then(newUser => {
      const token = jwt.sign({ id: newUser._id }, "secret", {
        expiresIn: 86400
      });
      res.status(200).send(token);
    })
    .catch(error => res.status(400).send(error));
};

export const get = (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  User.findOne({ _id: decoded.id })
    .then(user => {
      console.log(user);
      res.send(user);
    })
    .catch(error => console.log(error));
};

export const post = (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  User.findOneAndUpdate(
    { _id: decoded.id },
    {
      $push: {
        posts: {
          text: req.body.text
        }
      }
    },
    { new: true }
  )
    .then(user => {
      console.log(user);
      res.status(200).send(user);
    })
    .catch(error => console.log(error));
};
