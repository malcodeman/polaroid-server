import argon from "argon2";

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

export async function updateName(req, res, next) {
  try {
    const { name } = req.body;
    const nameFirstLetter = name[0].toLowerCase();

    await User.update({ name, nameFirstLetter }, { where: { id: req.userId } });
    res.status(200).send({ name: name, nameFirstLetter: nameFirstLetter });
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function updateEmail(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        id: req.userId
      },
      attributes: ["password"]
    });

    if (await argon.verify(user.password, password)) {
      await User.update({ email }, { where: { id: req.userId } });

      res.status(200).send({ email: email });
    } else {
      res.status(400).send({ exception: "NotAuthorizedException" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
