import jwt from "jsonwebtoken";

import User from "../users/users_model.mjs";

export async function get(req, res, next) {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "secret");
    const user = await User.findById(decoded.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}
