import jwt from "jsonwebtoken";

import User from "../users/users_model.mjs";
import sequelize from "../connection.mjs";

export const get = (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  sequelize
    .sync()
    .then(() => User.findById(decoded.id))
    .then(user => {
      res.status(200).send(user);
    })
    .catch(error => res.status(400).send(error));
};
