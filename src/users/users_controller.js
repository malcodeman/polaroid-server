import User from "./users_model";
import Post from "../posts/posts_model";
import Bookmark from "../bookmarks/bookmarks_model";
import helpers from "./users_helpers";

export async function findByUsername(req, res, next) {
  try {
    const { username } = req.params;
    const user = await User.findOne({
      where: {
        username
      },
      attributes: {
        exclude: ["email", "password"]
      },
      include: [
        {
          model: Post
        }
      ],
      order: [[Post, "createdAt", "DESC"]]
    });

    if (user === null) {
      res.status(404).send({ exception: "UserNotFoundException" });
      return;
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["email", "password", "updatedAt"]
      }
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findMe(req, res, next) {
  try {
    const id = req.userId;
    const me = await helpers.findMe(id);

    res.status(200).send(me);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function updateMe(req, res, next) {
  try {
    const id = req.userId;
    const fields = ["email", "name", "username", "profilePhotoURL"];
    let dataToUpdate = {};
    fields.forEach(field => {
      if (req.body.hasOwnProperty(field)) {
        dataToUpdate[field] = req.body[field];
      }
    });
    const me = await findById(id);

    me.update(dataToUpdate, { fields });
    res.status(200).send(me);
  } catch (error) {
    res.status(400).send(error);
  }
}
