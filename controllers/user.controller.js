import { UserModel } from "../models/index.js";
import { generatePassword, getCurrentUser } from "../utils/helpers.js";

export default {
  async findMe(req, res) {
    await UserModel.findById(getCurrentUser(req.headers.authorization))
      .catch((error) => res.status(500).send(error))
      .then((result) => res.status(200).send(result));
  },

  async findUserById(req, res) {
    await UserModel.findById(req.params.id)
      .catch((error) => res.status(500).send(error))
      .then((result) => {
        if (result == null) return res.status(404);
        return res.status(200).send(result);
      });
  },

  async updateUser(req, res) {
    const { username, password, discriminator, email } = req.body;
    if (password !== null) generatePassword(password);

    await User.findByIdAndUpdate(req.params.id, {
      $set: {
        username: username,
        discriminator: discriminator,
        // avatar_hash: avatar_hash,
        email: email,
        password: password,
      },
    })
      .catch((error) => res.status(500).send(error))
      .then((result) => res.status(200).send(result));
  },

  async deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .catch((error) => res.status(500).send(error))
      .then((result) =>
        res
          .status(200)
          .send({ result, message: `User ${req.params._id} has been deleted.` })
      );
  },
};

//     async updateMe(req, res) {
//         if (req.body.password != null) createPassword(req);
//         await User.findByIdAndUpdate(getMe(req), {
//             $set: {
//                 "username": req.body.username,
//                 "discriminator": req.body.discriminator,
//                 "avatar_hash": req.body.avatar_hash,
//                 "email": req.body.email,
//                 "password": req.body.password
//             }
//         }, { new: true })
//         .then(result => res.status(200).send(result))
//         .catch(error => res.status(500).send(error));
//     },
