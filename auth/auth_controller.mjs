import User from "../users/users_model.mjs";
import sequelize from "../connection.mjs";
import jwt from "jsonwebtoken";

export const signup = (req, res) => {
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
      res.status(200).send({ token, user });
    })
    .catch(error => res.status(400).send(error));
};

export const login = (req, res) => {
  sequelize
    .sync()
    .then(() =>
      User.findOne({
        where: { email: req.body.email }
      })
    )
    .then(user => {
      const password = req.body.password;
      if (password === user.password) {
        const token = jwt.sign({ id: user.id }, "secret", {
          expiresIn: 86400
        });
        res.status(200).send({ token, user });
      }
    })
    .catch(error => res.status(400).send(error));
};

export const logout = (req, res) => {
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
