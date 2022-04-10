// import mongoose from "mongoose";
// import { logger } from "../main.js";
// import { GuildModel } from "../models/index.js";
// import { getCurrentUser } from "../utils/helpers.js";

// export default {
//   async createGuild(req, res) {
//     const currentUser = getCurrentUser(req.headers.authorization);

//     let guild = await GuildModel.create({
//       _id: mongoose.Types.ObjectId(),
//       name: req.body.name,
//       ownerId: currentUser,
//       channels: [
//         { name: "general", type: 1 },
//         { name: "off-topic", type: 1 },
//       ],
//       members: [{ user: { _id: currentUser } }],
//     });

//     guild
//       .populate("ownerId", "_id username discriminator")
//       .then(() => guild.populate("channels"))
//       .then(() =>
//         guild.populate({
//           path: "members",
//           populate: {
//             path: "user",
//             select: "_id username discriminator",
//           },
//         })
//       )
//       .catch((error) => {
//         logger.log(
//           "GuildController",
//           "error",
//           `Error on executing query:\n\n${error}`
//         );
//         return res.status(500).send(`Error on executing query:\n\n${error}`);
//       })
//       .then((result) => res.status(200).send(result));
//   },

//   async findGuild(req, res) {
//     await GuildModel.findById(req.params.id)
//       .exec()
//       .catch((error) => {
//         logger.log(
//           "GuildController",
//           "error",
//           `Error on executing query:\n\n${error}`
//         );
//         return res.status(500).send(`Error on executing query:\n\n${error}`);
//       })
//       .then((result) => {
//         if (result == null) {
//           return res.status(404);
//         } else {
//           return res.status(200).send(result);
//         }
//       });
//   },

//   async updateGuild(req, res) {
//     await GuildModel.findByIdAndUpdate(req.params.id, {
//       $set: {
//         name: req.body.name,
//         icon: req.body.icon,
//         owner_id: req.body.owner_id,
//       },
//     })
//       .exec()
//       .catch((error) => {
//         logger.log(
//           "GuildController",
//           "error",
//           `Error on executing query:\n\n${error}`
//         );
//         return res.status(500).send(`Error on executing query:\n\n${error}`);
//       })
//       .then((result) =>
//         res.status(200).send({
//           result,
//           message: `Guild ${result._id} has been successfully updated.`,
//         })
//       );
//   },

//   async deleteGuild(req, res) {
//     await GuildModel.findByIdAndDelete(req.params.id)
//       .exec()
//       .catch((error) => {
//         logger.log(
//           "GuildController",
//           "error",
//           `Error on executing query:\n\n${error}`
//         );
//         return res.status(500).send(`Error on executing query:\n\n${error}`);
//       })
//       .then((result) => {
//         if (result == null) {
//           return res.status(404);
//         } else {
//           return res.status(200).send({
//             result,
//             message: `Guild ${result._id} has been successfully deleted.`,
//           });
//         }
//       });
//   },
// };
