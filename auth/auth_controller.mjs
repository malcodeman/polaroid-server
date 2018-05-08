import User from "../users/users_model.mjs";
import sequelize from "../connection.mjs";
import jwt from "jsonwebtoken";

export const create = (req, res) => {
  sequelize
    .sync()
    .then(() =>
      User.create({
        email: req.body.email,
        password: req.body.password
      })
    )
    .then(user => {
      const token = jwt.sign({ id: user.id }, "secret", {
        expiresIn: 86400
      });
      res.status(200).send(token);
    })
    .catch(error => res.status(400).send(error));
};
