import jwt from "jsonwebtoken";

import { logger } from "../main.js";
import { UserModel } from "../models/index.js";
import { generatePassword } from "../utils/index.js";

export default {
  async login(req, res) {
    const token = jwt.sign({ user: res.locals.user }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(200).send({ token });
  },

  async register(req, res) {
    const { password, email, username } = req.body;
    let passwordHash = await generatePassword(password);

    let user = await UserModel.create({
      username,
      email,
      password: passwordHash,
    }).catch((error) => {
      logger.log(
        "AuthController",
        "error",
        `Error on executing query:\n\n${error}`
      );
      return res.status(500).send(`Error on executing query:\n\n${error}`);
    });

    delete user.password;
    console.log(user);
    return res
      .status(201)
      .send({ message: "A new user has been created.", user });
  },
};
