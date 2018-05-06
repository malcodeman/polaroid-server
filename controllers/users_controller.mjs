import User from "../models/users_model.mjs";
import jwt from "jsonwebtoken";

export const create = (req, res) => {
  User.create(req.body)
    .then(user => {
      const token = jwt.sign({ id: user._id }, "secret", {
        expiresIn: 86400
      });
      res.status(200).send(token);
    })
    .catch(error => res.status(400).send(error));
};
