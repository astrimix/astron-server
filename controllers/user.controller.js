import { UserModel } from "../models/index.js";
import { generatePassword, isMe } from "../utils/index.js";

export default {
  async findUserById(req, res) {
    await UserModel.findById(isMe(req))
      .catch((error) => res.status(500).send(error))
      .then((result) => {
        if (result == null) return res.status(404);
        return res.status(200).send(result);
      });
  },

  async updateUser(req, res) {
    const { username, password, discriminator, email } = req.body;
    if (password !== null) generatePassword(password);

    await UserModel.findByIdAndUpdate(isMe(req), {
      $set: {
        username: username,
        discriminator: discriminator,
        // avatar_hash: avatar_hash,
        email: email,
        password: password,
      },
    })
      .exec()
      .catch((error) => res.status(500).send(error))
      .then((result) => res.status(200).send(result));
  },

  async deleteUser(req, res) {
    await UserModel.findByIdAndDelete(isMe(req))
      .exec()
      .catch((error) => res.status(500).send(error))
      .then((result) =>
        res
          .status(200)
          .send({ result, message: `User ${req.params._id} has been deleted.` })
      );
  },

  async listAllGuilds(req, res) {
    await UserModel.findById(isMe(req))
      .exec()
      .then(({ guilds }) => {
        res.status(200).send({ guilds });
      });
  },
};
