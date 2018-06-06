import User from "../users/users_model.mjs";

export async function findById(req, res, next) {
  try {
    const { id } = req.params;
    const user = await User.findAll({
      where: { id }
    });
    res.status(200).send(user[0]);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findMe(req, res, next) {
  try {
    const id = req.userId;
    const me = await User.findAll({
      where: { id },
      attributes: {
        exclude: ["password"]
      }
    });
    res.status(200).send(me[0]);
  } catch (error) {
    res.status(400).send(error);
  }
}
