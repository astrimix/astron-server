import { UserModel } from "../models/index.js";
import { generatePassword, isMe } from "../utils/index.js";

export default {
  async findUserById(req, res) {
    let user = await UserModel.findById(isMe(req))
      .exec()
      .catch((error) => res.status(500).send(error));

    if (!user) return res.status(404);
    return res.status(200).send(user);
  },

  async updateUser(req, res) {
    const { username, discriminator, email, password } = req.body;
    if (password !== null) await generatePassword(password);

    let user = await UserModel.findByIdAndUpdate(isMe(req), {
      $set: {
        username: username,
        discriminator: discriminator,
        // avatar_hash: avatar_hash,
        email: email,
        password: password,
      },
    })
      .exec()
      .catch((error) => res.status(500).send(error));

    return res
      .status(200)
      .send({ user, message: "User has been sucessfully updated. " });
  },

  async deleteUser(req, res) {
    await UserModel.findByIdAndDelete(isMe(req))
      .exec()
      .catch((error) => res.status(500).send(error));

    return res
      .status(200)
      .send({ message: `User ${req.params.id} has been deleted.` });
  },

  // async listAllGuilds(req, res) {
  //   await UserModel.findById(isMe(req))
  //     .exec()
  //     .then(({ guilds }) => {
  //       res.status(200).send({ guilds });
  //     });
  // },
};
