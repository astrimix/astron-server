import jwt from "jsonwebtoken";

import { UserModel } from "../models/index.js";
import { generatePassword } from "../utils/helpers.js";

export default {
  async login(req, res) {
    const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, {
      expiresIn: 1200,
    });

    return res.status(200).send({ token });
  },

  async register(req, res) {
    const { password, email, username } = req.body;
    let passwordHash = generatePassword(password);

    let user = await UserModel.create({
      username,
      email,
      password: passwordHash,
    })
      .exec()
      .catch((error) => {
        logger.log(
          "AuthController",
          "error",
          `Error on executing query:\n\n${error}`
        );
        return res.status(500).send(`Error on executing query:\n\n${error}`);
      });

    return res.status(201).send({ user, message: "New user has been created" });
  },
};
