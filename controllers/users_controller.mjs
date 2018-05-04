import User from "../models/users_model.mjs";

export const create = (req, res) => {
    User.create(req.body)
    .then(user => res.send(user))
    .catch(error => res.send(error));
};
